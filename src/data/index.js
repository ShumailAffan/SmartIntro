/**
 * Central data loader — single source of truth for all portfolio content.
 * Update JSON files in src/data/ to refresh the entire site.
 */
import personal from './personal.json';
import professionalSummary from './professional-summary.json';
import education from './education.json';
import experience from './experience.json';
import skills from './skills.json';
import projects from './projects.json';
import certifications from './certifications.json';
import leadership from './leadership.json';
import achievements from './achievements.json';
import languages from './languages.json';
import softSkills from './soft-skills.json';
import employmentPreferences from './employment-preferences.json';
import github from './github.json';
import portfolioAssets from './portfolio-assets.json';
import siteConfig from './site-config.json';

/** Flatten skills into categorized array for UI rendering */
export function getSkillCategories() {
  const categoryLabels = {
    programming_languages: 'Programming Languages',
    frameworks: 'Frameworks & Libraries',
    frontend: 'Frontend',
    backend: 'Backend',
    databases: 'Databases',
    devops: 'DevOps & Tools',
    mobile: 'Mobile',
    computer_vision: 'Computer Vision & AI',
    networking: 'Networking',
    project_management: 'Project Management',
  };

  return Object.entries(skills).map(([key, items]) => ({
    id: key,
    label: categoryLabels[key] || key,
    skills: items,
  }));
}

/** Get all unique project filter categories */
export function getProjectCategories() {
  const categories = new Set();
  projects.forEach((p) => p.categories?.forEach((c) => categories.add(c)));
  return ['All', ...Array.from(categories).sort()];
}

/** Find experience entries related to a project */
export function getRelatedExperience(projectId) {
  return experience.filter((e) => e.related_project_id === projectId);
}

/** Find project by slug */
export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

/** Leadership roles from experience + dedicated leadership data */
export function getLeadershipRoles() {
  return leadership;
}

/** Search across all content */
export function searchContent(query) {
  if (!query?.trim()) return [];
  const q = query.toLowerCase().trim();
  const results = [];

  projects.forEach((p) => {
    const searchable = [p.name, p.overview, p.description, ...(p.technologies || []), ...(p.categories || [])].join(' ').toLowerCase();
    if (searchable.includes(q)) results.push({ type: 'project', title: p.name, path: `/projects/${p.slug}`, description: p.overview });
  });

  experience.forEach((e) => {
    const searchable = [e.company, e.position, ...(e.responsibilities || []), ...(e.technologies || [])].join(' ').toLowerCase();
    if (searchable.includes(q)) results.push({ type: 'experience', title: `${e.position} @ ${e.company}`, path: '/experience', description: e.responsibilities?.[0] });
  });

  getSkillCategories().forEach((cat) => {
    cat.skills.forEach((skill) => {
      if (skill.toLowerCase().includes(q)) results.push({ type: 'skill', title: skill, path: '/skills', description: cat.label });
    });
  });

  certifications.forEach((cert) => {
    if (cert.toLowerCase().includes(q)) results.push({ type: 'certification', title: cert, path: '/certifications', description: 'Certification' });
  });

  achievements.forEach((a) => {
    if (a.toLowerCase().includes(q)) results.push({ type: 'achievement', title: a, path: '/achievements', description: 'Achievement' });
  });

  return results;
}

export const portfolioData = {
  personal,
  professionalSummary,
  education,
  experience,
  skills,
  projects,
  certifications,
  leadership,
  achievements,
  languages,
  softSkills,
  employmentPreferences,
  github,
  portfolioAssets,
  siteConfig,
};

export default portfolioData;
