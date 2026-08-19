/**
 * セクション共通の見出しコンポーネント。
 * - eyebrow: 英字のラベル（例: OUR SERVICES）
 * - title: 日本語見出し
 * - description: 見出し下の説明文
 * - align: 中央揃え or 左揃え
 */
export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center items-center flex-col' : 'text-left items-start flex-col';
  return (
    <header className={`flex flex-col gap-3 ${alignClass}`}>
      <span className="eyebrow">
        <span className="h-[3px] w-8 rounded-full bg-accent-500" />
        {eyebrow}
      </span>
      <h2 className="title-underline text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
          {description}
        </p>
      )}
    </header>
  );
}