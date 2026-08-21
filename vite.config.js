import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { realpathSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * GitHub Pages (https://www.cresome.tech) 用のビルド構成
 *
 * - ソーステンプレートはリポジトリ直下の index.html（dev server でもそのまま利用）
 * - npm run build は dist/ へ出力（emptyOutDir: true は専用ディレクトリなので安全）
 * - npm run deploy が dist/ の成果物を publish ブランチへコピーして
 *   GitHub Pages として公開する（scripts/deploy.mjs）。
 */

// ワークスペースのパスがジョクション（シンボリックリンク）を介している場合、
// Vite の root（未解決パス）とモジュールID（realpath）が食い違って
// 「fileName must be neither absolute nor relative paths」エラーで
// ビルドが失敗するため、root を realpath に固定する。
const root = realpathSync(resolve(process.cwd()));

export default defineConfig({
  root,
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 900,
  },
});