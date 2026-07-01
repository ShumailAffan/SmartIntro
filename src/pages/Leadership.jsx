import { Crown, Calendar, MapPin } from 'lucide-react';
import { getLeadershipRoles } from '../data';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import SEO from '../components/common/SEO';

const leadership = getLeadershipRoles();

export default function Leadership() {
  return (
    <>
      <SEO title="Leadership" description="Leadership roles including Student Voice Leader and Final Year Project Team Lead." />

      <div className="section-container py-12">
        <AnimatedSection>
          <SectionTitle
            title="Leadership"
            subtitle="Leading teams, representing students, and driving cross-functional initiatives."
          />
        </AnimatedSection>

        <div className="space-y-8">
          {leadership.map((role, i) => (
            <AnimatedSection key={role.id} delay={i * 0.1}>
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-bl-full" />

                <div className="flex items-start gap-4 mb-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
                    <Crown size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{role.title}</h3>
                    <p className="text-indigo-500 font-medium">{role.organization}</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} /> {role.start_date} — {role.end_date}
                      </span>
                      {role.location && (
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} /> {role.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-6">{role.description}</p>

                <h4 className="font-semibold mb-3">Highlights</h4>
                <ul className="space-y-2 mb-6">
                  {role.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-slate-600 dark:text-slate-400 flex gap-2">
                      <span className="text-indigo-500">▸</span> {h}
                    </li>
                  ))}
                </ul>

                {role.metrics && (
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                    {Object.entries(role.metrics).map(([key, val]) => (
                      <div key={key} className="text-center">
                        <p className="text-2xl font-bold gradient-text">{val}</p>
                        <p className="text-xs text-slate-500 capitalize">{key.replace(/_/g, ' ')}</p>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  );
}
