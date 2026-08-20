/**
 * 公開版 index.html が展開されているリポジトリを、
 * ソーステンプレート（開発用）に戻すスクリプト
 *
 * 使い方:
 *   npm run restore
 *
 * その後:
 *   npm run dev   で開発を再開
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BACKUP = path.join(ROOT, '.backup', 'index.src.html');
const INDEX = path.join(ROOT, 'index.html');

async function main() {
  try {
    await fs.access(BACKUP);
  } catch {
    console.error('[restore] .backup/index.src.html が見つかりません。');
    console.error('[restore] index.html がソーステンプレート（src/main.jsx を参照）のままなら復元は不要です。');
    process.exit(1);
  }
  await fs.copyFile(BACKUP, INDEX);
  console.log('[restore] ソーステンプレート index.html を復元しました。');
  console.log('[restore] npm run dev で開発を再開してください。');
}

main().catch((err) => {
  console.error('[restore] 失敗しました:', err);
  process.exit(1);
});