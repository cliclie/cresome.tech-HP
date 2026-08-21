import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * GitHub Pages (https://www.cresome.tech) 用のビルド構成
 *
 * - ソーステンプレートはリポジトリ直下の index.html（dev server でもそのまま利用）
 * - npm run build は dist/ へ出力（emptyOutDir: true は専用ディレクトリなので安全）
 * - 直後の scripts/deploy.mjs が dist/ の成果物を
 *   リポジトリ直下へコピー（index.html + assets/、古い assets/ は削除）。
 *   これによりリポジトリ直下をそのまま GitHub Pages として公開できる。
 */
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 900,
  },
});