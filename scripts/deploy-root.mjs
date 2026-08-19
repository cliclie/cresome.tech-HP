/**
 * GitHub Pages 用の「リポジトリ直下公開」スクリプト
 *
 * 前提: vite.config.js は base: './'、outDir: 'dist' を使用。
 *
 * 処理内容:
 *  1. dist/ がない場合はエラー終了（先に npm run build を実行すること）
 *  2. リポジトリ直下の古い assets/ を削除
 *  3. dist/assets/ → ./assets/ をコピー
 *  4. dist/index.html → ./index.html を上書き
 *     （注意: リポジトリ直下の index.html はソーステンプレートでも
 *      あるため、上書き前に .backup/ に退避しておく）
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

async function main() {
  // 1. dist の存在確認
  let distExists = false;
  try {
    await fs.access(DIST);
    distExists = true;
  } catch {
    distExists = false;
  }
  if (!distExists) {
    console.error('[deploy] dist/ が見つかりません。先に `npm run build` を実行してください。');
    process.exit(1);
  }

  // 2. ソース index.html の退避（.backup/index.src.html）
  const sourceIndex = path.join(ROOT, 'index.html');
  await fs.mkdir(BACKUP_DIR, { recursive: true });
  await fs.copyFile(sourceIndex, path.join(BACKUP_DIR, 'index.src.html'));
  console.log('[deploy] ソース index.html を .backup/index.src.html に退避しました');

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
    console.log('[deploy] assets/ をコピーしました');
  }

  // 5. 成果物 index.html の配置
  await fs.copyFile(path.join(DIST, 'index.html'), sourceIndex);
  console.log('[deploy] index.html を公開版に差し替えました');

  console.log('[deploy] 完了。リポジトリ直下をそのまま GitHub Pages として公開できます。');
  console.log('[deploy] ※ ソーステンプレートは .backup/index.src.html に退避済みです。');
}

main().catch((err) => {
  console.error('[deploy] failed:', err);
  process.exit(1);
});