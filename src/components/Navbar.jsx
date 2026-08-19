import { useEffect, useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { navLinks, company } from '../data/site.js';
import logoUrl from '../../images/cresome_logo.svg';

function Logo() {
  return (
    <a href="#hero" className="flex items-center gap-3" aria-label="トップへ戻る">
      <img
        src={logoUrl}
        alt={`${company.nameEn}｜${company.nameJa}`}
        className="h-9 w-auto"
        width="225"
        height="56"
      />
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // モバイルメニューを開いている間のスクロールを固定
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/5 bg-navy-950/85 shadow-lg shadow-black/20 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container-site flex h-[72px] items-center justify-between">
        <Logo />

        {/* デスクトップ用メニュー */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
              >
                {link.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-accent-500 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group hidden items-center gap-1.5 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-glow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-400 hover:shadow-glow sm:inline-flex"
          >
            お問い合わせ
            <ChevronRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>

          {/* モバイルメニュートグル */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-slate-200 transition-colors hover:bg-white/5 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out lg:hidden ${
          open ? 'max-h-[480px]' : 'max-h-0'
        }`}
      >
        <div className="border-t border-white/5 bg-navy-950/95 backdrop-blur-xl">
          <ul className="container-site flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-white/5 py-4 text-sm font-medium text-slate-200 transition-colors hover:text-accent-400"
                >
                  {link.label}
                  <ChevronRight className="h-4 w-4 text-slate-500" aria-hidden="true" />
                </a>
              </li>
            ))}
            <li className="py-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-white shadow-glow-sm transition-colors hover:bg-accent-400"
              >
                お問い合わせ
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}