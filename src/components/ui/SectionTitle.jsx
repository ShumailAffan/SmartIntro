/** Consistent section heading with optional subtitle and gradient accent */
export default function SectionTitle({ title, subtitle, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`mb-10 flex flex-col gap-2 ${alignClass}`}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
          {subtitle}
        </p>
      )}
      <div className={`mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}
