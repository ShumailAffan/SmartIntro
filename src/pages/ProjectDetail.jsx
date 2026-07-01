import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Star, GitFork, AlertCircle } from 'lucide-react';
import { GitHubIcon } from '../components/ui/SocialIcons';
import { getProjectBySlug, getRelatedExperience, portfolioData } from '../data';
import AnimatedSection from '../components/ui/AnimatedSection';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import SEO from '../components/common/SEO';

function PlaceholderBlock({ text }) {
  if (!text || !text.startsWith('[Placeholder')) return null;
  return (
    <div className="flex items-start gap-2 rounded-xl border border-dashed border-amber-500/30 bg-amber-500/5 p-4 text-sm text-amber-700 dark:text-amber-300">
      <AlertCircle size={16} className="shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}

function ContentBlock({ title, content }) {
  if (!content) return null;
  if (typeof content === 'string' && content.startsWith('[Placeholder')) {
    return (
      <Card>
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        <PlaceholderBlock text={content} />
      </Card>
    );
  }

  if (Array.isArray(content)) {
    return (
      <Card>
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        <ul className="space-y-2">
          {content.map((item, i) => (
            <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex gap-2">
              <span className="text-indigo-500">▸</span> {item}
            </li>
          ))}
        </ul>
      </Card>
    );
  }

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{content}</p>
    </Card>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="section-container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <Button to="/projects">Back to Projects</Button>
      </div>
    );
  }

  const relatedExperience = getRelatedExperience(project.id);
  const { github } = project;

  return (
    <>
      <SEO title={project.name} description={project.overview} />

      <div className="section-container py-12">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-500 mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        <AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {project.type && <Badge variant="accent">{project.type}</Badge>}
                {project.accuracy && <Badge variant="success">{project.accuracy} accuracy</Badge>}
                {project.categories?.map((c) => (
                  <Badge key={c} variant="muted">{c}</Badge>
                ))}
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold mb-4">{project.name}</h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">{project.overview}</p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">{project.description}</p>

              <div className="aspect-video rounded-2xl bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-purple-500/20 flex items-center justify-center mb-8 overflow-hidden">
                {project.cover_image ? (
                  <img src={project.cover_image} alt={project.name} className="h-full w-full object-cover" />
                ) : (
                  <span className="text-6xl font-bold gradient-text opacity-40">{project.name.charAt(0)}</span>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <Card>
                <h3 className="font-semibold mb-4">Links</h3>
                <div className="flex flex-col gap-2">
                  {github?.repository ? (
                    <Button href={github.repository} variant="secondary" external className="w-full justify-center">
                      <GitHubIcon size={16} /> GitHub Repository
                    </Button>
                  ) : (
                    <p className="text-sm text-slate-500">[Placeholder: GitHub repository not linked]</p>
                  )}
                  {github?.readme_url && (
                    <Button href={github.readme_url} variant="ghost" external className="w-full justify-center text-sm">
                      View README
                    </Button>
                  )}
                  {project.live_demo ? (
                    <Button href={project.live_demo} variant="primary" external className="w-full justify-center">
                      <ExternalLink size={16} /> Live Demo
                    </Button>
                  ) : (
                    <p className="text-sm text-slate-500">[Placeholder: Live demo URL not available]</p>
                  )}
                </div>
              </Card>

              {github?.repository && (
                <Card>
                  <h3 className="font-semibold mb-3">Repository Stats</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {github.language && (
                      <div>
                        <p className="text-slate-500 text-xs">Language</p>
                        <p className="font-medium">{github.language}</p>
                      </div>
                    )}
                    {github.stars != null && (
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-amber-500" />
                        <span>{github.stars} stars</span>
                      </div>
                    )}
                    {github.forks != null && (
                      <div className="flex items-center gap-1">
                        <GitFork size={14} />
                        <span>{github.forks} forks</span>
                      </div>
                    )}
                  </div>
                </Card>
              )}

              <Card>
                <h3 className="font-semibold mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies?.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <AnimatedSection delay={0.1}>
            <ContentBlock title="Features" content={project.features} />
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <ContentBlock title="Architecture" content={project.architecture} />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <ContentBlock title="Challenges" content={project.challenges} />
          </AnimatedSection>
          <AnimatedSection delay={0.25}>
            <ContentBlock title="Solutions" content={project.solutions} />
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <ContentBlock title="My Contributions" content={project.my_contributions} />
          </AnimatedSection>
          <AnimatedSection delay={0.35}>
            <ContentBlock title="Future Improvements" content={project.future_improvements} />
          </AnimatedSection>
        </div>

        {project.screenshots?.length > 0 && (
          <AnimatedSection className="mt-8" delay={0.4}>
            <Card>
              <h3 className="text-lg font-semibold mb-4">Screenshots</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.screenshots.map((src, i) => (
                  <img key={i} src={src} alt={`${project.name} screenshot ${i + 1}`} className="rounded-xl" loading="lazy" />
                ))}
              </div>
            </Card>
          </AnimatedSection>
        )}

        {relatedExperience.length > 0 && (
          <AnimatedSection className="mt-8" delay={0.45}>
            <Card>
              <h3 className="text-lg font-semibold mb-4">Related Experience</h3>
              {relatedExperience.map((exp) => (
                <div key={exp.id} className="text-sm">
                  <p className="font-medium">{exp.position} @ {exp.company}</p>
                  <p className="text-slate-500">{exp.start_date} — {exp.end_date}</p>
                </div>
              ))}
            </Card>
          </AnimatedSection>
        )}
      </div>
    </>
  );
}
