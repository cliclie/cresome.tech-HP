import { CheckCircle2 } from 'lucide-react';
import { strengths } from '../data/site.js';
import Icon from './Icon.jsx';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

export default function Strengths() {
  return (
    <section id="strengths" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-accent-500/10 blur-[140px]"
      />

      <div className="container-site relative">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="選ばれる理由"
            description="スピードと品質を両立させるための、私たちの開発哲学と体制です。"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {strengths.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-navy-800/80 to-navy-900/80 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-500/40">
                {/* 上部アクセントライン */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-500 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-500/15 text-accent-400 transition-transform duration-300 group-hover:scale-110">
                  <Icon name={item.icon} className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>

                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}