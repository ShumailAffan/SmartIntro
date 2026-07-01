import { Trophy } from 'lucide-react';
import { portfolioData } from '../data';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import SEO from '../components/common/SEO';

const { achievements } = portfolioData;

export default function Achievements() {
  return (
    <>
      <SEO title="Achievements" description="Key achievements in engineering, leadership, and academics." />

      <div className="section-container py-12">
        <AnimatedSection>
          <SectionTitle
            title="Achievements"
            subtitle="Milestones that reflect engineering excellence, leadership, and dedication."
            align="center"
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <Card className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20">
                  <Trophy className="text-amber-500" size={22} />
                </div>
                <p className="text-sm font-medium leading-relaxed pt-2">{item}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  );
}
