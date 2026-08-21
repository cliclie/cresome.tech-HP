/**
 * GitHub Pages 用デプロイスクリプト（publish ブランチ方式）
 *
 * 構成:
 *   - main    = ソース専用（web 公開されない）
 *   - publish = 公開ファイルのみ（index.html + assets/ + CNAME）
 *   - GitHub Pages 設定: Source → Deploy from branch → publish / /
 *
 * 前提:
 *   - vite.config.js は base: './'、outDir: 'dist' を使用
 *   - リモートに origin/publish が存在する
 *
 * 処理内容:
 *   1. dist/index.html が存在することを確認（先に npm run build を実行すること）
 *   2. publish ブランチの git worktree を用意
 *      （リポジトリの隣: <repo>-publish-wt、既存があれば再利用）
 *   3. worktree をリセットし、中身（.git 除く）を全削除
 *   4. dist/* と CNAME を worktree へコピー
 *   5. 変更があれば commit → git push origin publish
 *
 * 使い方:
 *   npm run deploy
 *     = npm run build && node scripts/deploy.mjs
 */
import { execFileSync } from 'node:child_process';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const CNAME_SRC = path.join(ROOT, 'CNAME');
const WT = path.resolve(ROOT, '..', path.basename(ROOT) + '-publish-wt');
const BRANCH = 'publish';

function git(args, cwd = ROOT) {
  execFileSync('git', args, { cwd, stdio: 'inherit' });
}

function gitOut(args, cwd = ROOT) {
  return execFileSync('git', args, { cwd, encoding: 'utf8' });
}

async function copyRecursive(src, dest) {
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await fs.mkdir(to, { recursive: true });
      await copyRecursive(from, to);
    } else {
      await fs.copyFile(from, to);
    }
  }
}

async function main() {
  // 1. dist の存在確認
  let distExists = false;
  try {
    await fs.access(path.join(DIST, 'index.html'));
    distExists = true;
  } catch {
    distExists = false;
  }
  if (!distExists) {
    console.error('[deploy] dist/index.html が見つかりません。先に `npm run build` を実行してください。');
    process.exit(1);
  }

  // CNAME の存在確認（publish ブランチに必ず同梱する）
  let hasCname = false;
  try {
    await fs.access(CNAME_SRC);
    hasCname = true;
  } catch {
    hasCname = false;
  }
  if (!hasCname) {
    console.error('[deploy] リポジトリ直下に CNAME が見つかりません。publish ブランチには CNAME を同梱する必要があります。');
    process.exit(1);
  }

  // 2. publish worktree の用意（未作成なら新規作成）
  let wtExists = false;
  try {
    await fs.access(WT);
    wtExists = true;
  } catch {
    wtExists = false;
  }
  if (!wtExists) {
    try {
      git(['worktree', 'add', WT, BRANCH]);
    } catch {
      // ローカルに publish が無い場合は origin/publish から作成
      git(['worktree', 'add', '-b', BRANCH, WT, 'origin/' + BRANCH]);
    }
    console.log('[deploy] publish worktree を作成しました: ' + WT);
  }

  // 3. worktree をリセットし、.git 以外の全ファイルを削除
  git(['reset', '--hard'], WT);
  git(['clean', '-fd'], WT);
  const entries = await fs.readdir(WT, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === '.git') continue;
    await fs.rm(path.join(WT, entry.name), { recursive: true, force: true });
  }

  // 4. 公開ファイルの投入
  await copyRecursive(DIST, WT);
  await fs.copyFile(CNAME_SRC, path.join(WT, 'CNAME'));

  // 5. commit + push（変更がある場合のみ）
  git(['add', '-A'], WT);
  const status = gitOut(['status', '--porcelain'], WT);
  if (status.trim() === '') {
    console.log('[deploy] 公開ファイルに変更はありません。commit/push はスキップしました。');
    return;
  }
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const stamp =
    d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) +
    ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
  git(['commit', '-m', 'deploy: publish (' + stamp + ')'], WT);
  git(['push', 'origin', BRANCH], WT);
  console.log('[deploy] publish ブランチへデプロイしました。数分で https://www.cresome.tech/ に反映されます。');
}

main().catch((err) => {
  console.error('[deploy] 失敗しました:', err);
  process.exit(1);
});