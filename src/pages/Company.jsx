const INFO = [
  { label: '会社名', value: 'クリサム株式会社（Cresome Technical Works）' },
  { label: '所在地', value: '〒112-0012 東京都文京区大塚6丁目22番2号' },
  { label: '代表取締役', value: '栗原 智明' },
  { label: '電話番号', value: '03-6336-8542' },
  { label: 'メール', value: 'tomoaki.kurihara@cresome.tech', mail: true },
  { label: '設立', value: '2023年4月' },
];

export default function Company() {
  return (
    <>
      <h2 className="section-title">会社概要</h2>
      <div className="lead-group reveal">
        <p className="lead">お気軽にご連絡ください。</p>
        <p className="lead">小さなご相談でも、お気軽にどうぞ。</p>
      </div>

      <div className="reveal" style={{ marginTop: '46px', maxWidth: '560px' }}>
        <div className="card" style={{ padding: '14px 30px' }}>
          {INFO.map((row) => (
            <div className="info-row" key={row.label}>
              <div className="info-label">{row.label}</div>
              <div className="info-value">
                {row.mail ? (
                  <a href={'mailto:' + row.value}>{row.value}</a>
                ) : (
                  row.value
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}