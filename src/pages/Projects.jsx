import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { portfolioData, getProjectCategories } from '../data';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/projects/ProjectCard';
import SEO from '../components/common/SEO';

const { projects } = portfolioData;
const categories = getProjectCategories();

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = activeCategory === 'All' || p.categories?.includes(activeCategory);
      const q = searchQuery.toLowerCase();
      const matchesSearch = !q || [
        p.name, p.overview, p.description,
        ...(p.technologies || []),
        ...(p.categories || []),
      ].join(' ').toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      <SEO title="Projects" description="Portfolio projects including AI surveillance, subscription tracker, and image processing apps." />

      <div className="section-container py-12">
        <AnimatedSection>
          <SectionTitle
            title="Projects"
            subtitle="Engineering projects spanning AI, mobile, backend APIs, and web development."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full rounded-xl glass pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500/50"
                aria-label="Filter projects"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/25'
                      : 'glass hover:bg-white/90 dark:hover:bg-slate-800/90'
                  }`}
                  aria-pressed={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {filtered.length === 0 ? (
          <p className="text-center text-slate-500 py-12">No projects match your filters.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.05}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        )}

        <AnimatedSection className="mt-12" delay={0.2}>
          <div className="glass rounded-2xl p-6 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
              {portfolioData.github.public_repos} public repositories on GitHub
            </p>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline text-sm font-medium"
            >
              View all on GitHub →
            </a>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
