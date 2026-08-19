/**
 * 開発用テンプレート index.html の復元スクリプト
 *
 * npm run deploy はリポジトリ直下の index.html を「公開版（ビルド成果物）」に
 * 差し替えます。開発を再開する前に本スクリプトでソーステンプレート
 * （.backup/index.src.html）を復元し、直下の assets/ を削除します。
 *
 * 使い方:
 *   npm run restore
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BACKUP_INDEX = path.join(ROOT, '.backup', 'index.src.html');
const SOURCE_INDEX = path.join(ROOT, 'index.html');
const ROOT_ASSETS = path.join(ROOT, 'assets');

async function main() {
  let backupExists = false;
  try {
    await fs.access(BACKUP_INDEX);
    backupExists = true;
  } catch {
    backupExists = false;
  }

  if (!backupExists) {
    console.log('[restore] .backup/index.src.html が見つかりません（deploy 未実行の可能性があります）。');
    console.log('[restore] 何もしません。');
  } else {
    await fs.copyFile(BACKUP_INDEX, SOURCE_INDEX);
    console.log('[restore] index.html をソーステンプレートに復元しました');
  }

  // 公開用に配置された assets/ を削除
  try {
    await fs.rm(ROOT_ASSETS, { recursive: true, force: true });
    console.log('[restore] assets/ を削除しました');
  } catch {
    // 存在しない場合は何もしない
  }

  console.log('[restore] 完了。npm run dev で開発を再開できます。');
}

main().catch((err) => {
  console.error('[restore] failed:', err);
  process.exit(1);
});