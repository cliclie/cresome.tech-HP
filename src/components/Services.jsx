import { Check, ArrowRight } from 'lucide-react';
import { services } from '../data/site.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      {/* 背景の薄いやわらかい光 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-navy-700/20 blur-[160px]"
      />

      <div className="container-site relative">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="サービス・事業内容"
            description="企画・開発・デザイン・運用まで、Webビジネスの成長に必要なすべてをワンストップで提供します。"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-navy-900/60 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-500/40 hover:shadow-glow-sm">
                {/* ホバー時のグラデーション */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-accent-500/[0.07] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-500/15 font-mono text-sm font-bold text-accent-400 transition-transform duration-300 group-hover:scale-110">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                      {service.en}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{service.description}</p>

                  <ul className="mt-6 space-y-2.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                        <Check className="h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400 transition-colors hover:text-accent-500"
                  >
                    相談してみる
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}