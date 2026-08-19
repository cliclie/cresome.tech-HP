# cresome.tech-HP

クリサム株式会社（Cresome Technical Works）のコーポレートサイト。
GitHub Pages（[https://cresome.tech](https://cresome.tech)）で公開しています。

## スタック

- React 18 + Vite 5
- Tailwind CSS 3
- Motion（Framer Motion）／lucide-react

## 開発

```bash
npm install
npm run dev        # ローカル開発サーバー（http://localhost:5173）
```

## 公開（GitHub Pages 用）

リポジトリ直下をそのまま公開するため、以下の手順でビルド成果物を
リポジトリ直下（`index.html` + `assets/`）に配置します。

```bash
npm run deploy     # ビルド + 直下への配置（index.html は公開版に差し替え）
npm run restore    # 開発に戻す（ソーステンプレートの復元 + assets/ 削除）
```

- ビルド中間成果物は `dist/`（git 管理外）
- ソーステンプレート `index.html` は deploy 時に `.backup/index.src.html` へ退避
- `index.html`（直下）と `assets/` は**公開対象**のため git 管理内

## 構成

```
index.html        ソーステンプレート（deploy 後は公開版）
assets/           ビルド成果物（ハッシュ付き JS/CSS/アセット）
images/           社用ロゴ・favicon など
src/
  App.jsx         セクション構成（ヒーロー〜フッター）
  data/site.js    サイト共通データ（会社情報・メニュー・サービス・実績等）
  components/     各セクション・UI部品
  index.css       Tailwind + グローバルスタイル
scripts/          deploy / restore スクリプト
design.md         デザイン定義（配色・セクション構成の基準）
```

## 連絡先

- メール: [info@cresome.tech](mailto:info@cresome.tech)