import { useScrollProgress } from '../../hooks/useScrollProgress';

/** Fixed top scroll progress indicator */
export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 z-[60] h-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 transition-[width] duration-150"
      style={{ width: `${progress * 100}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  );
}
