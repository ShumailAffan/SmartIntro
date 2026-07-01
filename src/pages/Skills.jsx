import { getSkillCategories, portfolioData } from '../data';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import SEO from '../components/common/SEO';

const skillCategories = getSkillCategories();
const { certifications } = portfolioData;

const categoryIcons = {
  programming_languages: '💻',
  frameworks: '⚛️',
  frontend: '🎨',
  backend: '🔧',
  databases: '🗄️',
  devops: '🚀',
  mobile: '📱',
  computer_vision: '👁️',
  networking: '🌐',
  project_management: '📋',
};

/** Maps certifications to related skill keywords for visual connection */
function getRelatedCerts(skillName) {
  return certifications.filter((cert) =>
    cert.toLowerCase().includes(skillName.toLowerCase()) ||
    skillName.toLowerCase().split(' ').some((word) => cert.toLowerCase().includes(word))
  );
}

export default function Skills() {
  return (
    <>
      <SEO title="Skills" description="Technical skills spanning programming, frameworks, DevOps, AI, and networking." />

      <div className="section-container py-12">
        <AnimatedSection>
          <SectionTitle
            title="Technical Skills"
            subtitle="A comprehensive toolkit built through projects, internships, and certifications."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <AnimatedSection key={category.id} delay={i * 0.05}>
              <Card className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl" role="img" aria-hidden="true">
                    {categoryIcons[category.id] || '🔹'}
                  </span>
                  <h3 className="text-lg font-semibold">{category.label}</h3>
                  <Badge variant="muted">{category.skills.length}</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const related = getRelatedCerts(skill);
                    return (
                      <div key={skill} className="group relative">
                        <Badge className="cursor-default">{skill}</Badge>
                        {related.length > 0 && (
                          <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block z-10 w-48 rounded-lg glass p-2 text-xs shadow-lg">
                            <p className="font-medium mb-1">Related Certifications:</p>
                            {related.map((c) => (
                              <p key={c} className="text-slate-500">{c}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  );
}
