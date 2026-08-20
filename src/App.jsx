import { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Business from './pages/Business';
import Flow from './pages/Flow';
import Company from './pages/Company';

const PAGES = [
  { id: 'home', label: 'トップ', Component: Home },
  { id: 'business', label: '事業内容', Component: Business },
  { id: 'flow', label: '開発フロー', Component: Flow },
  { id: 'company', label: '会社概要', Component: Company },
];

export default function App() {
  const [current, setCurrent] = useState('home');
  const [leaving, setLeaving] = useState(false);
  const [entering, setEntering] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const transitioningRef = useRef(false);

  // reveal（フェードイン）: 表示された要素を IntersectionObserver で検出
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el, i) => {
      el.style.transitionDelay = (i % 5) * 70 + 'ms';
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const showPage = (id) => {
    if (id === current || transitioningRef.current) return;
    transitioningRef.current = true;
    setDrawerOpen(false);
    setLeaving(true);
    setTimeout(() => {
      setCurrent(id);
      setLeaving(false);
      setEntering(true);
      setTimeout(() => {
        setEntering(false);
        transitioningRef.current = false;
      }, 560);
    }, 340);
  };

  const navItems = PAGES.map((p) => ({
    id: p.id,
    label: p.label,
    active: p.id === current,
  }));

  return (
    <>
      <Sidebar items={navItems} onSelect={showPage} />
      <Topbar onMenu={() => setDrawerOpen(true)} />
      <Drawer
        items={navItems}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onSelect={showPage}
      />

      <main className="main">
        <div className="page-wrap">
          {PAGES.map(({ id, Component }) => (
            <section
              key={id}
              id={'page-' + id}
              className={
                'page' +
                (id === current ? ' active' : '') +
                (id === current && leaving ? ' leave' : '') +
                (id === current && entering ? ' enter' : '')
              }
            >
              <Component />
            </section>
          ))}
        </div>
      </main>
    </>
  );
}