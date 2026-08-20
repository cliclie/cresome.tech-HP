const STEPS = [
  {
    num: '01',
    title: 'ヒアリング',
    text: '現在の課題とゴールを丁寧に伺い、一緒にプロジェクトの方向性を考えます。',
  },
  {
    num: '02',
    title: '提案・設計',
    text: '最適なソリューションの提案と、UI/UX設計・技術設計を行います。',
  },
  {
    num: '03',
    title: '開発',
    text: '段階的に開発を積み上げながら、進捗を共有し続けていきます。',
  },
  {
    num: '04',
    title: 'リリース・運用',
    text: '無事にリリースした後、運用フェーズでも安心して任せられる体制でサポートします。',
  },
];

export default function Flow() {
  return (
    <>
      <h2 className="section-title">開発フロー</h2>
      <p className="lead reveal">
        透明感のあるプロセスで、一緒に最適な形を育てていきます。
      </p>

      <div style={{ marginTop: '50px', maxWidth: '680px' }}>
        {STEPS.map((s) => (
          <div className="flow-step reveal" key={s.num}>
            <div className="flow-num">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}