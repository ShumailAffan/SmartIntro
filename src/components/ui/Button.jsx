import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-gradient-to-r from-indigo-500 to-violet-600 text-white hover:from-indigo-600 hover:to-violet-700 shadow-lg shadow-indigo-500/25',
  secondary: 'glass text-slate-700 dark:text-slate-200 hover:bg-white/90 dark:hover:bg-slate-800/90',
  ghost: 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800',
  outline: 'border-2 border-indigo-500/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/10',
};

/** Reusable button supporting internal links and external anchors */
export default function Button({
  children,
  variant = 'primary',
  href,
  to,
  className = '',
  external = false,
  ...props
}) {
  const base = `inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={base} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={base}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={base} {...props}>
      {children}
    </button>
  );
}
