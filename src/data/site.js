// サイト全体のコンテンツ（コピー）を一元管理

export const company = {
  nameJa: 'クリサム株式会社',
  nameEn: 'Cresome Technical Works',
  domain: 'cresome.tech',
  email: 'contact@cresome.tech',
  address: '〒000-0000 東京都千代田区丸の内 1-1-1',
  founded: '2020年4月',
  ceo: '代表取締役',
  employees: '開発メンバー20名',
};

export const navLinks = [
  { label: 'サービス', href: '#services' },
  { label: '実績', href: '#cases' },
  { label: '選ばれる理由', href: '#strengths' },
  { label: '開発フロー', href: '#flow' },
  { label: '会社概要', href: '#about' },
];

export const stats = [
  { value: '80+', label: 'リリース実績', suffix: 'プロジェクト' },
  { value: '98', label: '顧客満足度', suffix: '%' },
  { value: '20', label: '開発メンバー', suffix: '名' },
  { value: '99.9', label: '運用安定稼働率', suffix: '%' },
];

export const services = [
  {
    id: 'web',
    title: 'Webアプリ受託開発',
    en: 'Web App Development',
    description:
      'MVP構築から大規模システムまで、要件定義・開発・テストまで一気通貫で担当します。最新フレームワークを駆使し、拡張性のある堅牢な基盤を設計します。',
    items: ['Next.js / React / TypeScript', 'API設計・バックエンド開発', 'クラウドインフラ設計（AWS / GCP）', 'CI/CD・自動デプロイ'],
  },
  {
    id: 'ai',
    title: 'AI / LLM連携開発',
    en: 'AI / LLM Integration',
    description:
      '生成AIを業務に組み込み、属人の知識や反復作業を自動化します。社内ナレッジ活用からカスタマー対応まで、実業務で効果が出るAIを設計します。',
    items: ['LLM連携（RAG / Agent）', '社内ナレッジ基盤構築', '要約・分類・チャットボット', 'データ分析・可視化'],
  },
  {
    id: 'design',
    title: 'UI / UXデザイン',
    en: 'UI/UX Design',
    description:
      'ユーザーの課題解決に立ち返り、調査・プロトタイプ・実装まで一貫したデザイン提供を行います。見て楽しいだけでなく、使われ続けるインターフェースを設計します。',
    items: ['ユーザビリティ調査・設計', 'デザインシステム構築', 'プロトタイピング（Figma）', 'アクセシビリティ対応'],
  },
  {
    id: 'consulting',
    title: '技術コンサルティング',
    en: 'Technical Consulting',
    description:
      '技術選定からアーキテクチャ設計、チーム開発手法の改善まで。経験豊富なエンジニアが伴走し、組織の生産性・競争力を高めるアドバイスを行います。',
    items: ['技術選定・アーキテクチャ策定', 'スケーラビリティ設計', '開発体制・プロセス改善', '技術研修・メンタリング'],
  },
];

export const caseCategories = ['すべて', 'Webアプリ', 'AI/LLM', 'UI/UX', 'コンサル'];

export const cases = [
  {
    title: 'EC向け注文管理システム',
    category: 'Webアプリ',
    tags: ['Next.js', 'PostgreSQL', 'AWS'],
    summary:
      '大手EC事業者向けの注文管理システムを再構築。APIリファクタリングと画面高速化により、作業時間が約40%短縮されました。',
    color: 'from-navy-700 to-navy-900',
    icon: 'ShoppingCart',
  },
  {
    title: '医療法人向けオンライン予約サービス',
    category: 'Webアプリ',
    tags: ['React', 'Node.js', 'Firebase'],
    summary:
      '予約・会計・リマインド機能を統合したSaaSを構築。モバイル最適化により、予約の離脱率が25%低下しました。',
    color: 'from-sky-800 to-navy-900',
    icon: 'CalendarCheck',
  },
  {
    title: '社内ナレッジAI検索（RAG）',
    category: 'AI/LLM',
    tags: ['LangChain', 'OpenAI', 'Pinecone'],
    summary:
      '社内のマニュアル・議事録を学習したAI検索基盤。質問の80%以上がAI検索で解決され、情報共有の効率が劇的に改善しました。',
    color: 'from-accent-700 to-navy-900',
    icon: 'Bot',
  },
  {
    title: 'カスタマーサポートAIチャットボット',
    category: 'AI/LLM',
    tags: ['LLM', 'Dify', 'Slack'],
    summary:
      'FAQ・履歴データを学習したAIチャットボットを構築。一次対応の約60%を自動化し、対応時間を大幅に削減。',
    color: 'from-indigo-800 to-navy-900',
    icon: 'MessageSquareText',
  },
  {
    title: '製造業向け在庫管理アプリのリニューアル',
    category: 'UI/UX',
    tags: ['Figma', 'Design System', 'React'],
    summary:
      '長年使われた画面をユーザー調査に基づき再設計。誤操作が30%減少し、現場からの評価も高く定着しました。',
    color: 'from-teal-800 to-navy-900',
    icon: 'Boxes',
  },
  {
    title: '金融系サービスのUXコンサルティング',
    category: 'コンサル',
    tags: ['UX Audit', 'A/Bテスト', 'KPI設計'],
    summary:
      '画面遷移とファネルを分析し改善案を実装。登録完了率が1.4倍に向上し、継続的なKPI改善体制を定着させました。',
    color: 'from-amber-700 to-navy-900',
    icon: 'TrendingUp',
  },
];

export const strengths = [
  {
    icon: 'Zap',
    title: '高速アジャイル開発',
    description:
      '1週間単位のスプリントと双方向のコミュニケーションで、変化に強く、速度のある開発を実現します。進捗はダッシュボードで透明に共有。',
    points: ['2週間のスプリント体制', '毎日の進捗共有', 'MVP→改善の高速サイクル'],
  },
  {
    icon: 'Cpu',
    title: 'モダン技術の採用',
    description:
      'Next.js、TypeScript、AWS、生成AIといった最新技術を継続的に研鑽。トレンドを追うのではなく、お客様の課題に最適な技術を厳選します。',
    points: ['Next.js / React / TypeScript', 'クラウドネイティブ設計', '生成AI・LLMへの対応力'],
  },
  {
    icon: 'ShieldCheck',
    title: '保守・運用体制',
    description:
      'リリース後も伴走します。モニタリング、定期保守、セキュリティ更新までワンストップ対応し、99.9%の安定稼働を維持します。',
    points: ['24/365 モニタリング', '月次レポート・改善提案', 'セキュリティ監査対応'],
  },
];

export const flowSteps = [
  {
    step: '01',
    title: 'ヒアリング・要件定義',
    description:
      '課題整理から目的・KPIの設定まで、プロジェクトの土台を丁寧に設計します。',
    deliverables: ['課題整理シート', '要件定義書', 'KPI設計'],
  },
  {
    step: '02',
    title: '設計・開発',
    description:
      'UIデザインと並行して技術設計を進め、アジャイル開発で段階的に形にします。',
    deliverables: ['UI/UXデザイン', 'アーキテクチャ設計', '機能開発'],
  },
  {
    step: '03',
    title: 'テスト・リリース',
    description:
      '機能・非機能テストを実施し、CI/CDによる安全なリリース体制を構築します。',
    deliverables: ['テスト計画・実施', 'CI/CD構築', '本番リリース'],
  },
  {
    step: '04',
    title: '運用・改善',
    description:
      'リリース後のデータ分析と改善サイクルで、価値を継続的に高めていきます。',
    deliverables: ['運用監視', '月次レポート', '改善提案'],
  },
];

export const aboutItems = [
  { label: '会社名', value: company.nameJa },
  { label: '英文名', value: company.nameEn },
  { label: '所在地', value: company.address },
  { label: '設立', value: company.founded },
  { label: '代表者', value: `${company.ceo} クリサム` },
  { label: '従業員数', value: company.employees },
];