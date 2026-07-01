import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/ui/SocialIcons';
import { portfolioData } from '../data';
import Button from '../components/ui/Button';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import ProjectCard from '../components/projects/ProjectCard';
import SEO from '../components/common/SEO';

const { personal, professionalSummary, projects, skills, achievements, github, employmentPreferences } = portfolioData;

const stats = [
  { label: 'Projects', value: projects.length + '+' },
  { label: 'GitHub Repos', value: github.public_repos },
  { label: 'Certifications', value: portfolioData.certifications.length + '+' },
  { label: 'Leadership', value: '3+ yrs' },
];

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const topSkills = [
    ...skills.programming_languages.slice(0, 2),
    ...skills.frameworks.slice(0, 2),
    ...skills.frontend.slice(0, 2),
  ];

  return (
    <>
      <SEO description={professionalSummary.resume_summary} />

      {/* Hero */}
      <section className="section-container min-h-[85vh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-semibold text-indigo-500 mb-4 tracking-wide uppercase">
              Software Engineer · {personal.location.city}, {personal.location.country}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Hi, I'm{' '}
              <span className="gradient-text">{personal.full_name.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed">
              {professionalSummary.resume_summary}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button to="/projects">
                View Projects <ArrowRight size={16} />
              </Button>
              <Button to="/contact" variant="outline">
                Get in Touch
              </Button>
              <Button href={personal.github} variant="secondary" external>
                <GitHubIcon size={16} /> GitHub
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1.5"><MapPin size={14} /> {personal.address}</span>
              <a href={`mailto:${personal.email}`} className="flex items-center gap-1.5 hover:text-indigo-500 transition-colors">
                <Mail size={14} /> {personal.email}
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-indigo-500 transition-colors">
                <LinkedInIcon size={14} /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-purple-500/30 rounded-3xl blur-3xl" />
            <div className="relative glass rounded-3xl p-8 gradient-border">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="rounded-2xl bg-white/50 dark:bg-slate-800/50 p-5 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {topSkills.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <AnimatedSection className="section-container py-20">
        <SectionTitle
          title="Featured Projects"
          subtitle="Production-quality applications spanning AI, mobile, and full-stack development."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button to="/projects" variant="outline">
            View All Projects <ArrowRight size={16} />
          </Button>
        </div>
      </AnimatedSection>

      {/* Quick About */}
      <AnimatedSection className="section-container py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <SectionTitle
            title="About Me"
            subtitle={professionalSummary.linkedin_summary}
          />
          <Card>
            <h3 className="font-semibold mb-3">Career Objective</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{personal.career_objective}</p>
            <h3 className="font-semibold mb-3">Open To</h3>
            <div className="flex flex-wrap gap-2">
              {employmentPreferences.preferred_roles.slice(0, 4).map((role) => (
                <Badge key={role} variant="accent">{role}</Badge>
              ))}
            </div>
            <Button to="/about" variant="ghost" className="mt-4 px-0">
              Learn more <ArrowRight size={14} />
            </Button>
          </Card>
        </div>
      </AnimatedSection>

      {/* Achievements highlight */}
      <AnimatedSection className="section-container py-20">
        <SectionTitle title="Key Achievements" subtitle="Milestones from academics, leadership, and engineering." align="center" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.slice(0, 6).map((item, i) => (
            <Card key={i} hover className="text-center">
              <p className="text-sm font-medium">{item}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button to="/achievements" variant="outline">View All Achievements</Button>
        </div>
      </AnimatedSection>
    </>
  );
}
