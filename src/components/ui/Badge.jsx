/** Technology or category badge pill */
export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20',
    accent: 'bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20',
    muted: 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20',
    success: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20',
  };

  return (
    <span className={`inline-flex items-center rounded-lg border px-2.5 py-1 text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
