import { ArrowUp } from 'lucide-react';
import { company, navLinks } from '../data/site.js';
import logoUrl from '../../images/cresome_logo.svg';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-navy-950">
      <div className="container-site py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* 会社情報 */}
          <div>
            <a href="#hero" className="flex items-center gap-3" aria-label="トップへ戻る">
              <img
                src={logoUrl}
                alt={`${company.nameEn}｜${company.nameJa}`}
                className="h-10 w-auto"
                width="250"
                height="62"
              />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              アイデアを、確かな形にする技術力。
              <br />
              Webアプリ開発・AI/LLM連携・UI/UXデザイン・技術コンサルティングで、お客様の成長を支えます。
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-5 inline-block font-mono text-sm text-slate-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-accent-400"
            >
              {company.email}
            </a>
          </div>

          {/* サイトマップ */}
          <nav aria-label="フッターナビゲーション">
            <h4 className="text-sm font-bold text-white">サイトマップ</h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-accent-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-sm text-slate-400 transition-colors duration-200 hover:text-accent-400"
                >
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>

          {/* 会社概要（簡易） */}
          <div>
            <h4 className="text-sm font-bold text-white">会社概要</h4>
            <dl className="mt-4 space-y-3 text-sm text-slate-400">
              <div>
                <dt className="text-xs text-slate-500">所在地</dt>
                <dd className="mt-0.5">{company.address}</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-500">設立</dt>
                <dd className="mt-0.5">{company.founded}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* 下部バー */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {company.nameEn}. All rights reserved.
          </p>
          <a
            href="#hero"
            className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/40 hover:text-white"
          >
            トップへ戻る
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}