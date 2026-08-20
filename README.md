# cresome.tech-HP

クリサム株式会社（Cresome Technical Works）のコーポレートサイト。
GitHub Pages（[https://cresome.tech](https://cresome.tech)）で公開しています。

## 技術スタック

- Vite + React（SPA）
- Tailwind CSS
- フォント: ZEN角ゴシック Antique（Google Fonts）

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
npm run deploy     # ビルド後に公開ファイルをリポジトリ直下へ展開
```

展開内容:
- `dist/assets/` → `./assets/`
- `dist/index.html` → `./index.html`（上書き）
- 上書き前のソース用 `index.html` は `.backup/index.src.html` に退避されます

公開後に開発を再開する場合は:

```bash
npm run restore    # ソース用の index.html を .backup から復元
```

## サイト構成

- トップ / 事業内容 / 開発フロー / 会社概要
- 右サイドバー（モバイルは右スライドメニュー）
- ページ切り替えはフェード、要素はスクロールフェードイン

## 配色

- メイン: `#FFFFFF`
- サブ（テキスト）: `#404080`
- アクセント: `#EF5B00`
- 詳細は [design.md](./design.md) を参照

