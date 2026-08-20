export default function Sidebar({ items, onSelect }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <img src="./images/cresome_logo.svg" alt="cresome" />
      </div>

      <nav className="nav">
        {items.map((it) => (
          <div
            key={it.id}
            className={'nav-item' + (it.active ? ' active' : '')}
            data-nav={it.id}
            onClick={() => onSelect(it.id)}
          >
            {it.label}
          </div>
        ))}
      </nav>

      <div className="sidebar-foot">
        © cresome.tech<br />
        Cresome Technical Works
      </div>
    </aside>
  );
}