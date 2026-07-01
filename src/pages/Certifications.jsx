import { Award } from 'lucide-react';
import { portfolioData } from '../data';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import SEO from '../components/common/SEO';

const { certifications } = portfolioData;

const certProviders = {
  'CCNA': 'Cisco',
  'React': 'Meta',
  'HTML/CSS': 'Meta',
  'JavaScript': 'Coursera',
  'Prompt Engineering': 'Vanderbilt University',
  'Microsoft 365': 'Microsoft',
  'Generative AI': null,
  'Python': null,
  'Excel': 'Microsoft',
};

function parseCert(cert) {
  if (cert.includes(' - ')) {
    const [name, provider] = cert.split(' - ');
    return { name, provider };
  }
  for (const [key, provider] of Object.entries(certProviders)) {
    if (cert.includes(key)) return { name: cert, provider };
  }
  return { name: cert, provider: null };
}

export default function Certifications() {
  return (
    <>
      <SEO title="Certifications" description="Professional certifications in networking, web development, AI, and more." />

      <div className="section-container py-12">
        <AnimatedSection>
          <SectionTitle
            title="Certifications"
            subtitle="Industry-recognized credentials validating technical expertise."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => {
            const { name, provider } = parseCert(cert);
            return (
              <AnimatedSection key={cert} delay={i * 0.04}>
                <Card className="flex items-start gap-4 h-full">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20">
                    <Award className="text-indigo-500" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm leading-snug">{name}</h3>
                    {provider && (
                      <p className="text-xs text-indigo-500 mt-1">{provider}</p>
                    )}
                  </div>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </>
  );
}
