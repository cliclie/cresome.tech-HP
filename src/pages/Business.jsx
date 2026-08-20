const SERVICES = [
  {
    title: 'UI/UXデザイン',
    text: '直感的で美しい、ユーザーに愛される体験をデザインします。使いやすさと見た目の両立を大切にしています。',
  },
  {
    title: '技術コンサルティング',
    text: '目的に合った最適な技術選定とアーキテクチャを、分かりやすくご提案します。',
  },
  {
    title: 'Webアプリ受託開発',
    text: '要件定義からリリースまで、高品質なWebアプリを丁寧なプロセスで開発します。',
  },
  {
    title: 'AI/LLM連携開発',
    text: 'LLMなどのAIを業務に組み込み、生産性を高める体験を実現します。',
  },
];

export default function Business() {
  return (
    <>
      <h2 className="section-title">できること</h2>
      <p className="lead reveal">
        デザイン・開発・AI、さまざまな領域で、製品づくりを最初から最後まで一貫して支えます。
      </p>

      <div
        className="cards-grid"
        style={{
          marginTop: '46px',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
        }}
      >
        {SERVICES.map((s) => (
          <div className="card reveal" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}