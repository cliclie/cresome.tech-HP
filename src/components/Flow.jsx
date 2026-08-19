import { FileCheck2 } from 'lucide-react';
import { flowSteps } from '../data/site.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

export default function Flow() {
  return (
    <section id="flow" className="relative bg-navy-900/40 py-24 sm:py-32">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Our Process"
            title="開発フロー"
description="ヒアリングからリリース・運用まで、透明性の高い4ステップでプロジェクトを推進します。"
          />
        </Reveal>

        <div className="relative mt-16">
          {/* デスクトップ用の水平ライン */}
          <div
            aria-hidden="true"
            className="absolute top-6 left-0 hidden h-px w-full bg-gradient-to-r from-white/10 via-accent-500/60 to-white/10 md:block"
          />

          <ol className="grid gap-2 md:grid-cols-4 md:gap-6">
            {flowSteps.map((step, i) => (
              <li key={step.step} className="relative">
                <Reveal delay={i * 0.12}>
                  <div className="relative flex gap-5 md:block">
                    {/* 番号ノード */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-accent-500/60 bg-navy-900 font-mono text-sm font-bold text-accent-400 shadow-glow-sm">
                        {step.step}
                      </div>
                      {/* モバイル用の縦接続線 */}
                      {i < flowSteps.length - 1 && (
                        <div aria-hidden="true" className="mt-2 w-px flex-1 bg-white/10 md:hidden" />
                      )}
                    </div>

                    {/* 内容 */}
                    <div className="pb-12 md:mt-6 md:pb-0">
                      <h3 className="text-lg font-bold text-white">{step.title}</h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{step.description}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {step.deliverables.map((d) => (
                          <li
                            key={d}
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-slate-300"
                          >
                            <FileCheck2 className="h-3 w-3 text-accent-400" aria-hidden="true" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 rounded-2xl border border-white/10 bg-navy-900/60 px-8 py-8 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
            <p className="text-sm leading-relaxed text-slate-300 sm:max-w-xl">
              どのステップからでもご参加いただけます。
              <br className="hidden sm:block" />
              まずは現状のお悩みを、お気軽にご相談ください。
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-bold text-white shadow-glow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-400 sm:mt-0"
            >
              相談してみる
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}