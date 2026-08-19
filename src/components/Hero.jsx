import { motion, useReducedMotion } from 'motion/react';
import { ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { stats, company } from '../data/site.js';

/** 動的背景：グリッド+グラデーション+漂う光 */
function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* グリッド */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 90% 70% at 50% 30%, black 40%, transparent 100%)',
        }}
      />
      {/* 光の奥行き（上から下への淡いグラデーション） */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/0 via-navy-950/30 to-navy-950" />
      {/* 漂う光 */}
      <div className="absolute -top-32 -left-24 h-[480px] w-[480px] animate-float-slow rounded-full bg-accent-500/15 blur-[140px]" />
      <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] animate-float-slower rounded-full bg-navy-500/25 blur-[160px]" />
      <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] animate-pulse-soft rounded-full bg-sky-500/10 blur-[120px]" />
    </div>
  );
}

/** 右側に飾る、コードエディタ風のモックUI */
function CodeMock() {
  return (
    <div className="relative">
      {/* 外側の光 */}
      <div className="absolute -inset-6 rounded-3xl bg-accent-500/10 blur-2xl" aria-hidden="true" />
      <div className="relative animate-float-slow rounded-2xl border border-white/10 bg-navy-900/90 shadow-2xl shadow-black/40 backdrop-blur">
        {/* ウィンドウバー */}
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-accent-500/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/70" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
          <span className="ml-3 font-mono text-xs text-slate-500">app.tsx — cresome</span>
        </div>
        {/* コード本体（特殊文字はすべて文字列で保持しJSX解析を安全にする） */}
        <pre className="overflow-hidden p-5 font-mono text-[13px] leading-7 text-slate-300">
          <code>
            <span className="text-slate-500">{'// アイデアを、コードに変える'}</span>
            {'\n'}
            <span className="text-accent-400">{'const'}</span>{' '}
            <span className="text-sky-300">{'idea'}</span>{' = '}
            <span className="text-amber-300">{'"あなたの挑戦"'}</span>{';'}
            {'\n'}
            <span className="text-accent-400">{'const'}</span>{' '}
            <span className="text-sky-300">{'product'}</span>{' = '}
            <span className="text-sky-300">{'cresome'}</span>{'.'}
            <span className="text-emerald-300">{'build'}</span>{'(idea);'}
            {'\n\n'}
            <span className="text-slate-500">{'// 確かな形にしてリリース'}</span>
            {'\n'}
            <span className="text-sky-300">{'product'}</span>{'.'}
            <span className="text-emerald-300">{'deploy'}</span>{'({ release: '}
            <span className="text-amber-300">{'"production"'}</span>
            {'} );'}
            {'\n'}
            <span className="text-emerald-300">{'✓'}</span>{' '}
            <span className="text-slate-400">{'shipped with confidence'}</span>
          </code>
        </pre>
      </div>

      {/* 浮くバッジ：品質 */}
      <div className="absolute -left-8 bottom-10 hidden animate-float-slower rounded-xl border border-white/10 bg-navy-800/95 px-4 py-3 shadow-xl shadow-black/30 backdrop-blur sm:block">
        <p className="text-xs text-slate-400">品質指標</p>
        <p className="mt-1 font-mono text-lg font-bold text-white">
          99.9<span className="text-accent-400">%</span>
        </p>
        <p className="text-[11px] text-slate-500">安定稼働率</p>
      </div>

      {/* 浮くバッジ：納期 */}
      <div className="absolute -right-6 top-8 hidden animate-float-slow rounded-xl border border-white/10 bg-navy-800/95 px-4 py-3 shadow-xl shadow-black/30 backdrop-blur md:block">
        <p className="flex items-center gap-1.5 text-xs font-semibold text-emerald-300">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> 高速開発
        </p>
        <p className="mt-1 font-mono text-lg font-bold text-white">
          2<span className="text-accent-400">週</span>
        </p>
        <p className="text-[11px] text-slate-500">スプリントサイクル</p>
      </div>
    </div>
  );
}

export default function Hero() {
  const prefersReduced = useReducedMotion();

  const item = (delay) => ({
    initial: prefersReduced ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <HeroBackground />

      <div className="container-site relative pt-40 pb-24 sm:pt-48 lg:pt-52 lg:pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* 左：コピー */}
          <div>
            <motion.div {...item(0.1)}>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
                </span>
                NEXT-GEN WEB DEVELOPMENT
              </span>
            </motion.div>

            <motion.h1
              {...item(0.2)}
              className="mt-6 text-4xl font-black leading-[1.25] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
            >
              アイデアを、
              <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-accent-400 bg-clip-text text-transparent">
                確かな形にする技術力
              </span>
            </motion.h1>

            <motion.p
              {...item(0.35)}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              {company.nameJa}は、Webアプリ開発・AI/LLM連携・UI/UXデザイン・技術コンサルティングを
              一気通貫で支援する開発パートナーです。
            </motion.p>

            <motion.div {...item(0.5)} className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-sm font-bold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-400 hover:shadow-glow"
              >
                お問い合わせ
                <ChevronRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#cases"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-500/50 hover:bg-white/10"
              >
                実績を見る
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </motion.div>

            {/* 数値 */}
            <motion.dl {...item(0.65)} className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dd className="font-mono text-2xl font-bold text-white sm:text-3xl">
                    {s.value}
                    <span className="ml-1 text-sm font-semibold text-accent-400">{s.suffix}</span>
                  </dd>
                  <dt className="mt-1.5 text-xs tracking-wide text-slate-500">{s.label}</dt>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* 右：モックUI */}
          <motion.div
            {...(prefersReduced
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.96, x: 40 },
                  animate: { opacity: 1, scale: 1, x: 0 },
                  transition: { duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
                })}
            className="hidden lg:block"
          >
            <CodeMock />
          </motion.div>
        </div>
      </div>

      {/* 下部のカーブ（次のセクションへの繋ぎ） */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-navy-950"
      />
    </section>
  );
}