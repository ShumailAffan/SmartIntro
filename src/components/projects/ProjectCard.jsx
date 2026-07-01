import { ExternalLink, Star, GitFork } from 'lucide-react';
import { GitHubIcon } from '../ui/SocialIcons';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

/** Project card for grid listings with GitHub stats */
export default function ProjectCard({ project }) {
  const { github } = project;
  const hasGithub = github?.repository;

  return (
    <Card className="flex flex-col h-full group">
      <div className="mb-4 aspect-video rounded-xl bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-purple-500/20 flex items-center justify-center overflow-hidden">
        {project.cover_image ? (
          <img src={project.cover_image} alt={project.name} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <span className="text-4xl font-bold gradient-text opacity-50">
            {project.name.charAt(0)}
          </span>
        )}
      </div>

      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-lg font-semibold group-hover:text-indigo-500 transition-colors">{project.name}</h3>
        {project.type && <Badge variant="accent">{project.type}</Badge>}
      </div>

      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-1 line-clamp-2">
        {project.overview}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies?.slice(0, 4).map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
        {project.technologies?.length > 4 && (
          <Badge variant="muted">+{project.technologies.length - 4}</Badge>
        )}
      </div>

      {hasGithub && (
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
          {github.language && <span>{github.language}</span>}
          {github.stars != null && (
            <span className="flex items-center gap-1"><Star size={12} /> {github.stars}</span>
          )}
          {github.forks != null && (
            <span className="flex items-center gap-1"><GitFork size={12} /> {github.forks}</span>
          )}
        </div>
      )}

      <div className="flex gap-2 mt-auto">
        <Button to={`/projects/${project.slug}`} variant="primary" className="flex-1 text-xs py-2">
          View Details
        </Button>
        {hasGithub && (
          <Button href={github.repository} variant="secondary" external className="px-3 py-2">
            <GitHubIcon size={16} />
          </Button>
        )}
        {project.live_demo && (
          <Button href={project.live_demo} variant="secondary" external className="px-3 py-2">
            <ExternalLink size={16} />
          </Button>
        )}
      </div>
    </Card>
  );
}
