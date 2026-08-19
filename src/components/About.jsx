import { useState } from 'react';
import {
  Mail,
  MapPin,
  Clock,
  Building2,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { company, aboutItems } from '../data/site.js';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';

const contactInfo = [
  {
    icon: Mail,
    label: 'メールアドレス',
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: MapPin,
    label: '所在地',
    value: company.address,
  },
  {
    icon: Clock,
    label: '営業時間',
    value: '平日 10:00 - 19:00（土日祝休み）',
  },
  {
    icon: Building2,
    label: '受付対応',
    value: 'Webアプリ開発・AI/LLM連携・UI/UX・コンサル',
  },
];

export default function About() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'Webアプリ開発のご相談',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'お名前を入力してください。';
    if (!form.email.trim()) next.email = 'メールアドレスを入力してください。';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'メールアドレスの形式が正しくありません。';
    if (!form.message.trim()) next.message = '内容を入力してください。';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // バックエンド未接続のため、メールボックスで受信する方式（mailto）にフォールバック
    const subject = `【お問い合わせ】${form.subject}｜${form.name}`;
    const body = [
      `お名前: ${form.name}`,
      `メールアドレス: ${form.email}`,
      `会社名: ${form.company || '-'}`,
      `お問い合わせ種別: ${form.subject}`,
      '',
      form.message,
    ].join('\n');
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const inputClass = (hasError) =>
    `w-full rounded-xl border bg-navy-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors duration-200 focus:border-accent-500/70 focus:ring-2 focus:ring-accent-500/20 ${
      hasError ? 'border-accent-500/70' : 'border-white/10'
    }`;

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-site">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* 左：会社概要 */}
          <Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="About Us"
                title="会社概要"
                description="テクノロジーで、お客様の「次の一歩」を共に歩む会社です。"
              />

              <dl className="mt-10 divide-y divide-white/5 overflow-hidden rounded-2xl border border-white/10 bg-navy-900/50">
                {aboutItems.map((item) => (
                  <div key={item.label} className="flex gap-4 px-6 py-4 transition-colors hover:bg-white/[0.03]">
                    <dt className="w-24 shrink-0 text-xs font-semibold tracking-wide text-slate-500 sm:text-sm">
                      {item.label}
                    </dt>
                    <dd className="text-sm text-slate-200">{item.value}</dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-8 space-y-4">
                {contactInfo.map((info) => {
                  const IconCmp = info.icon;
                  const content = (
                    <span className="flex items-start gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-500/10 text-accent-400">
                        <IconCmp className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold tracking-wide text-slate-500">
                          {info.label}
                        </span>
                        <span className="mt-0.5 block text-sm font-medium text-slate-200">{info.value}</span>
                      </span>
                    </span>
                  );
                  return (
                    <li key={info.label}>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="block rounded-xl p-2 transition-colors duration-200 hover:bg-white/[0.04]"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          {/* 右：お問い合わせフォーム */}
          <Reveal delay={0.12}>
            <div id="contact" className="scroll-mt-24">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-navy-900/70 p-8 shadow-2xl shadow-black/30 sm:p-10">
                <div
                  aria-hidden="true"
                  className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent-500/15 blur-3xl"
                />
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white">お問い合わせ</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    開発のご相談・お見積もりなど、お気軽にお問い合わせください。
                    <br />
                    2営業日以内にご返信いたします。
                  </p>

                  {sent ? (
                    <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">
                      <p className="flex items-center gap-2 font-semibold text-emerald-300">
                        <CheckCircle2 className="h-5 w-5" aria-hidden="true" /> メールアプリが開きました
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">
                        内容を確認して送信してください。
                        <br />
                        または直接 <a className="text-accent-400 underline" href={`mailto:${company.email}`}>{company.email}</a> までご連絡ください。
                      </p>
                      <button
                        type="button"
                        onClick={() => setSent(false)}
                        className="mt-4 text-xs font-semibold text-slate-400 underline underline-offset-4 hover:text-white"
                      >
                        別の内容を送る
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="mb-2 block text-xs font-semibold text-slate-300">
                            お名前 <span className="text-accent-400">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            value={form.name}
                            onChange={update('name')}
                            placeholder="山田 太郎"
                            className={inputClass(errors.name)}
                          />
                          {errors.name && (
                            <p className="mt-1.5 flex items-center gap-1 text-xs text-accent-400">
                              <AlertCircle className="h-3 w-3" aria-hidden="true" /> {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="email" className="mb-2 block text-xs font-semibold text-slate-300">
                            メールアドレス <span className="text-accent-400">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={form.email}
                            onChange={update('email')}
                            placeholder="taro@example.com"
                            className={inputClass(errors.email)}
                          />
                          {errors.email && (
                            <p className="mt-1.5 flex items-center gap-1 text-xs text-accent-400">
                              <AlertCircle className="h-3 w-3" aria-hidden="true" /> {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="company" className="mb-2 block text-xs font-semibold text-slate-300">
                            会社名
                          </label>
                          <input
                            id="company"
                            type="text"
                            value={form.company}
                            onChange={update('company')}
                            placeholder="（任意）"
                            className={inputClass(false)}
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="mb-2 block text-xs font-semibold text-slate-300">
                            お問い合わせ種別
                          </label>
                          <select
                            id="subject"
                            value={form.subject}
                            onChange={update('subject')}
                            className={inputClass(false)}
                          >
                            <option>Webアプリ開発のご相談</option>
                            <option>AI / LLM連携のご相談</option>
                            <option>UI / UXデザインのご相談</option>
                            <option>技術コンサルティング</option>
                            <option>その他</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="mb-2 block text-xs font-semibold text-slate-300">
                            お問い合わせ内容 <span className="text-accent-400">*</span>
                          </label>
                        <textarea
                          id="message"
                          rows={5}
                          value={form.message}
                          onChange={update('message')}
                          placeholder="ご要望・ご予算・スケジュールなど"
                          className={`${inputClass(errors.message)} resize-none`}
                        />
                        {errors.message && (
                          <p className="mt-1.5 flex items-center gap-1 text-xs text-accent-400">
                            <AlertCircle className="h-3 w-3" aria-hidden="true" /> {errors.message}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-sm font-bold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-400"
                      >
                        送信する
                        <Send
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </button>

                      <p className="text-center text-[11px] leading-relaxed text-slate-500">
                        ご入力いただいた情報は、お問い合わせ内容の確認のみに使用します。
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}