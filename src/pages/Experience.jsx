import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import SEO from '../components/common/SEO';

const { experience } = portfolioData;

const typeColors = {
  Leadership: 'accent',
  Internship: 'default',
  Training: 'muted',
  'Academic Project': 'success',
};

export default function ExperiencePage() {
  return (
    <>
      <SEO title="Experience" description="Professional experience including internships, leadership, and academic projects." />

      <div className="section-container py-12">
        <AnimatedSection>
          <SectionTitle
            title="Experience"
            subtitle="Internships, leadership roles, training, and academic project leadership."
          />
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent" aria-hidden="true" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <AnimatedSection key={exp.id} delay={i * 0.08}>
                <div className="relative pl-12 md:pl-16">
                  <div className="absolute left-2.5 md:left-4 top-6 h-3 w-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />

                  <Card>
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={18} className="text-indigo-500" />
                          <h3 className="text-lg font-semibold">{exp.position}</h3>
                        </div>
                        <p className="text-indigo-500 font-medium">{exp.company}</p>
                      </div>
                      <Badge variant={typeColors[exp.employment_type] || 'default'}>
                        {exp.employment_type}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} /> {exp.start_date} — {exp.end_date}
                      </span>
                      {exp.location && (
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} /> {exp.location}
                        </span>
                      )}
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((r, j) => (
                        <li key={j} className="text-sm text-slate-600 dark:text-slate-400 flex gap-2">
                          <span className="text-indigo-500 shrink-0">▸</span> {r}
                        </li>
                      ))}
                    </ul>

                    {exp.technologies?.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {exp.technologies.map((t) => (
                          <Badge key={t}>{t}</Badge>
                        ))}
                      </div>
                    )}

                    {exp.achievements && (
                      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                        {Object.entries(exp.achievements).map(([key, val]) => (
                          <div key={key} className="text-center">
                            <p className="text-lg font-bold gradient-text">{val}</p>
                            <p className="text-xs text-slate-500 capitalize">{key.replace(/_/g, ' ')}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {exp.related_project_id && (
                      <Link
                        to={`/projects/${exp.related_project_id}`}
                        className="inline-flex items-center gap-1 mt-4 text-sm text-indigo-500 hover:underline"
                      >
                        View related project →
                      </Link>
                    )}
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
