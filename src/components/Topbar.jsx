export default function Topbar({ onMenu }) {
  return (
    <div className="topbar">
      <div className="brand">
        <img src="./images/cresome_logo.svg" alt="cresome" />
      </div>
      <button className="menu-btn" aria-label="メニュー" onClick={onMenu}>
        <span className="menu-bars">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </div>
  );
}