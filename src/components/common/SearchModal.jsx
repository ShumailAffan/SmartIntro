import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { searchContent } from '../../data';

/** Global search modal with keyboard shortcut (Ctrl/Cmd + K) */
export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    setResults(searchContent(query));
  }, [query]);

  const handleSelect = (path) => {
    navigate(path);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center pt-[15vh] px-4" role="dialog" aria-modal="true" aria-label="Search">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg glass rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 border-b border-slate-200/50 dark:border-slate-700/50 px-4 py-3">
          <Search size={18} className="text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, skills, experience..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
            aria-label="Search portfolio"
          />
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" aria-label="Close search">
            <X size={18} />
          </button>
        </div>
        <ul className="max-h-72 overflow-y-auto py-2">
          {query && results.length === 0 && (
            <li className="px-4 py-6 text-center text-sm text-slate-500">No results found</li>
          )}
          {results.map((r, i) => (
            <li key={`${r.type}-${r.title}-${i}`}>
              <button
                onClick={() => handleSelect(r.path)}
                className="flex w-full flex-col gap-0.5 px-4 py-3 text-left hover:bg-indigo-500/10 transition-colors"
              >
                <span className="text-sm font-medium">{r.title}</span>
                <span className="text-xs text-slate-500 capitalize">{r.type} · {r.description}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
