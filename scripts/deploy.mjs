/**
 * GitHub Pages 用の「リポジトリ直下公開」スクリプト
 *
 * 前提: vite.config.js は base: './'、outDir: 'dist' を使用。
 *
 * 処理内容:
 *  1. dist/index.html がない場合はエラー終了（先に npm run build を実行すること）
 *  2. ソーステンプレート index.html を .backup/ に退避
 *     （※ 既に公開版が index.html に展開済みの場合は退避しない。
 *       公開版は dist/index.html と同一内容のため）
 *  3. リポジトリ直下の古い assets/ を削除
 *  4. dist/assets/ → ./assets/ をコピー
 *  5. dist/index.html → ./index.html を上書き
 *
 * 使い方:
 *   npm run deploy
 *     = npm run build 実行後に本スクリプトを自動実行する
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const BACKUP_DIR = path.join(ROOT, '.backup');

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

async function isSourceIndex(file) {
  // ソーステンプレート（開発用 index.html）は src="/src/main.jsx" を含む
  const content = await fs.readFile(file, 'utf-8');
  return content.includes('/src/main.jsx');
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

  // 2. ソース index.html の退避（公開版が既に展開済みの場合はスキップ）
  const sourceIndex = path.join(ROOT, 'index.html');
  await fs.mkdir(BACKUP_DIR, { recursive: true });
  if (await isSourceIndex(sourceIndex)) {
    await fs.copyFile(sourceIndex, path.join(BACKUP_DIR, 'index.src.html'));
    console.log('[deploy] ソース index.html を .backup/index.src.html に退避しました');
  } else {
    console.log('[deploy] index.html は既に公開版のため退避をスキップしました');
  }

  // 3. 古い assets/ の削除 + 再作成
  const rootAssets = path.join(ROOT, 'assets');
  await fs.rm(rootAssets, { recursive: true, force: true });
  await fs.mkdir(rootAssets, { recursive: true });

  // 4. dist/assets/ のコピー
  const distAssets = path.join(DIST, 'assets');
  let hasDistAssets = true;
  try {
    await fs.access(distAssets);
  } catch {
    hasDistAssets = false;
  }
  if (hasDistAssets) {
    await copyRecursive(distAssets, rootAssets);
  } else {
    console.warn('[deploy] dist/assets/ が見つからないため assets/ はコピーされませんでした');
  }

  // 5. dist/index.html → ./index.html 上書き
  await fs.copyFile(path.join(DIST, 'index.html'), sourceIndex);
  console.log('[deploy] 公開ファイルをリポジトリ直下に展開しました');
  console.log('[deploy] 次: git add -A && git commit -m "deploy: publish" && git push');
}

main().catch((err) => {
  console.error('[deploy] 失敗しました:', err);
  process.exit(1);
});