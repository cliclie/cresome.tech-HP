# cresome.tech-HP

クリサム株式会社（Cresome Technical Works）のコーポレートサイト。
GitHub Pages（[https://www.cresome.tech](https://www.cresome.tech)、CNAME: `www.cresome.tech`）で公開しています。

## 技術スタック

- Vite + React（SPA）
- Tailwind CSS
- フォント: ZEN丸ゴシック（Google Fonts）

## 使い方

```bash
npm install        # 依存関係をインストール
npm run dev        # 開発サーバーを起動
npm run build      # 本番ビルド（dist/ に出力）
npm run preview    # ビルド結果をプレビュー
```

## デプロイ（GitHub Pages）

リポジトリの **main ブランチ直下** に公開ファイルを展開して公開しています
（リポジトリ設定: Pages → Source: Deploy from branch → main / /）。

```bash
npm run deploy     # restore → build → 公開ファイルをリポジトリ直下へ展開
```

展開内容:
- `dist/assets/` → `./assets/`（直前の古い `assets/` は削除されます）
- `dist/index.html` → `./index.html`（上書き）
- 上書き前のソース用 `index.html` は `.backup/index.src.html` に退避されます
  （`index.html` が既に公開版に置き換わっている場合は退避をスキップします）

公開後に開発を再開する場合は:

```bash
npm run restore    # ソース用の index.html を .backup から復元
```

## 留意事項: アセットファイル名のビルド再現性

- `package.json` の `vite` はキャレット指定（`^5.4.11`）のため、`npm install` のタイミングによって解決される 5.4.x パッチ版が変わり得ます。
- Vite（および同梱の esbuild）のバージョンが異なると、**ソースコードを変更していてもいないなくても**、ビルド成果物の内容ハッシュが変わることがあります。例:
  - `assets/index-CsZMAxLG.js` → `assets/index-DAFwLBMo.js`
  - `assets/cresome_logo-CqxN7NRr.svg` → `assets/cresome_logo-CqxN7NRr-CqxN7NRr.svg`（アセット名に二重ハッシュ）
- 動作自体には影響しません。`npm run deploy` は古い `assets/` を削除してから新しいビルド成果物をコピーするため、そのままコミットして公開すれば問題ありません。
- ただし、デプロイ後にリポジトリにコミットされる `assets/*` のファイル名が前回のものと異なる場合がありますので、差分がファイル名の変化中心である場合は上記の理由によるものとご判断ください。
- 前回デプロイ時と同一の Vite バージョンでビルドしたい場合は、該当コミットの `package.json` / `package-lock.json` を復元して `npm ci` を実行してください。

## サイト構成

- トップ / 事業内容 / 開発フロー / 会社概要
- 右サイドバー（モバイルは右スライドメニュー）
- ページ切り替えはフェード、要素はスクロールフェードイン

## 配色

- メイン: `#FFFFFF`
- サブ（テキスト）: `#404080`
- アクセント: `#EF5B00`
- 詳細は [design.md](./design.md) を参照

## 作業記録

### 2026-08-22: README.md の実装との整合性確認・修正

実装（`package.json` / `vite.config.js` / `tailwind.config.js` / `scripts/` / `src/` / `CNAME`）を正として README.md を照合し、以下の不一致を修正しました。

1. **フォント**: 「ZEN角ゴシック Antique」→「ZEN丸ゴシック」
   - 実装は `index.html` が Google Fonts の `Zen+Maru+Gothic` を読み込み、`src/index.css` の body も `'Zen Maru Gothic'` を使用している
   - `tailwind.config.js` には角ゴシックの定義が残存しているが、`font-sans` クラスは未使用
2. **公開URL**: `https://cresome.tech` → `https://www.cresome.tech`（CNAME: `www.cresome.tech`）
   - `CNAME` ファイルおよび `index.html` の canonical / OG タグは `www.cresome.tech` だった
3. **`npm run deploy` の実行順序**: 「ビルド後に…展開」→「restore → build → 展開」
   - package.json の定義は `npm run restore && npm run build && node scripts/deploy.mjs`
4. **展開内容の補足**: 古い `assets/` は削除されること、`index.html` が既に公開版の場合は退避をスキップされることを記載（`scripts/deploy.mjs` の挙動に合わせる）

あわせて `vite.config.js` のコメントに `scripts/deploy-root.mjs` と誤記があったため `scripts/deploy.mjs` に修正しました。

- 本変更はドキュメント・コメントのみでソースコードを変更していないため、再ビルド（`npm run deploy`）は行いませんでした

