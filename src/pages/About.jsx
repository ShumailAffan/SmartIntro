import { GraduationCap, Target, Globe, Users } from 'lucide-react';
import { portfolioData } from '../data';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import SEO from '../components/common/SEO';

const { personal, professionalSummary, education, languages, softSkills, employmentPreferences } = portfolioData;

export default function About() {
  return (
    <>
      <SEO title="About" description={professionalSummary.linkedin_summary} />

      <div className="section-container py-12">
        <AnimatedSection>
          <SectionTitle
            title="About Me"
            subtitle="Get to know my background, goals, and what drives my work."
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          <AnimatedSection className="lg:col-span-2" delay={0.1}>
            <Card className="mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users size={20} className="text-indigo-500" /> Professional Summary
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {professionalSummary.linkedin_summary}
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {professionalSummary.resume_summary}
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Target size={20} className="text-indigo-500" /> Career Objective
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {personal.career_objective}
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card className="mb-6">
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-3 text-sm">
                <li><span className="text-slate-500">Email:</span> <a href={`mailto:${personal.email}`} className="text-indigo-500 hover:underline">{personal.email}</a></li>
                <li><span className="text-slate-500">Phone:</span> {personal.phone}</li>
                <li><span className="text-slate-500">Location:</span> {personal.address}, {personal.location.city}</li>
              </ul>
            </Card>

            <Card className="mb-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Globe size={18} className="text-indigo-500" /> Languages
              </h3>
              <ul className="space-y-2">
                {languages.map((l) => (
                  <li key={l.language} className="flex justify-between text-sm">
                    <span>{l.language}</span>
                    <Badge variant="muted">{l.proficiency}</Badge>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="font-semibold mb-4">Employment Preferences</h3>
              <p className="text-xs text-slate-500 mb-2">Preferred Location</p>
              <p className="text-sm mb-3">{employmentPreferences.preferred_location}</p>
              <p className="text-xs text-slate-500 mb-2">Employment Type</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {employmentPreferences.employment_type.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <p className="text-xs text-slate-500 mb-2">Preferred Roles</p>
              <div className="flex flex-wrap gap-1.5">
                {employmentPreferences.preferred_roles.map((r) => (
                  <Badge key={r} variant="accent">{r}</Badge>
                ))}
              </div>
            </Card>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-12" delay={0.15}>
          <SectionTitle title="Education" subtitle="Academic background and qualifications." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, i) => (
              <Card key={i}>
                <div className="flex items-start gap-3 mb-3">
                  <GraduationCap className="text-indigo-500 shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <p className="text-sm text-indigo-500">{edu.institution}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mb-2">{edu.field}</p>
                <p className="text-xs text-slate-400">
                  {edu.start_date} — {edu.end_date || edu.expected_graduation || 'Present'}
                </p>
                {edu.status && <Badge variant="success" className="mt-3">{edu.status}</Badge>}
              </Card>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-12" delay={0.2}>
          <SectionTitle title="Soft Skills" subtitle="Interpersonal and professional competencies." />
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <Badge key={skill} variant="muted" className="text-sm px-3 py-1.5">{skill}</Badge>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
