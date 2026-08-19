import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { cases, caseCategories } from '../data/site.js';
import Icon from './Icon.jsx';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

export default function Cases() {
  const [active, setActive] = useState(caseCategories[0]);

  const filtered = useMemo(
    () => (active === caseCategories[0] ? cases : cases.filter((c) => c.category === active)),
    [active]
  );

  return (
    <section id="cases" className="relative bg-navy-900/40 py-24 sm:py-32">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Our Works"
            title="開発実績・事例"
            description="業界を問わず、リリース後の数字で結果を出し続ける開発実績です。カテゴリから絞り込んでご覧いただけます。"
          />
        </Reveal>

        {/* フィルター */}
        <Reveal delay={0.1}>
          <div
            className="mt-10 flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="実績フィルタ"
          >
            {caseCategories.map((cat) => {
              const isActive = cat === active;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(cat)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-accent-500 text-white shadow-glow-sm'
                      : 'border border-white/10 bg-white/5 text-slate-300 hover:border-accent-500/40 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* カードグリッド */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.article
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-900/70 transition-colors duration-300 hover:border-accent-500/40"
              >
                {/* バナー（グラデーション+アイコン） */}
                <div className={`relative flex h-36 items-center justify-center bg-gradient-to-br ${item.color}`}>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
                      backgroundSize: '28px 28px',
                    }}
                  />
                  <Icon
                    name={item.icon}
                    className="relative h-14 w-14 text-white/90 transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute top-4 right-4 rounded-full bg-black/30 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
                    {item.category}
                  </span>
                </div>

                {/* 本文 */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-white transition-colors group-hover:text-accent-400">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{item.summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-400"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-accent-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    詳細を見る
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <Reveal delay={0.15}>
          <p className="mt-10 text-center text-xs text-slate-500">
            ※ 上記はモックデータによる開発実績の例です。
          </p>
        </Reveal>
      </div>
    </section>
  );
}