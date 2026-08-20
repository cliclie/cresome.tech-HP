export default function Home() {
  return (
    <>
      <h1 className="hero-title">
        <span className="accent">こうしてほしい</span>をいっしょにカタチに。
      </h1>

      <div className="lead-group reveal">
        <p className="lead">
          UI/UXデザインからAI/LLM連携開発まで、アイデアを製品へとつなげることをお手伝いします。
        </p>
        <p className="lead">お持ちの想いを、一緒にカタチにしていきましょう。</p>
      </div>

      <div className="reveal" style={{ marginTop: '60px' }}>
        <div className="feature-grid">
          <div className="feature">UI/UXデザイン</div>
          <div className="feature">技術コンサルティング</div>
          <div className="feature">Webアプリ受託開発</div>
          <div className="feature">AI/LLM連携開発</div>
        </div>
      </div>
    </>
  );
}