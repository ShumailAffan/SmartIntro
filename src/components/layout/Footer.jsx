import { Link } from 'react-router-dom';
import { Mail, Heart } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../ui/SocialIcons';
import { portfolioData } from '../../data';

const { personal, siteConfig } = portfolioData;

const iconMap = { github: GitHubIcon, linkedin: LinkedInIcon, mail: Mail };

/** Site footer with social links and navigation */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/50 dark:border-slate-800/50 mt-20">
      <div className="section-container py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold gradient-text mb-2">{personal.full_name}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{personal.headline}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {siteConfig.navigation.slice(0, 5).map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-500 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Connect</h4>
            <div className="flex gap-3">
              {siteConfig.social_links.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl glass hover:bg-indigo-500/10 hover:text-indigo-500 transition-colors"
                    aria-label={link.platform}
                  >
                    {Icon && <Icon size={18} />}
                  </a>
                );
              })}
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              {personal.location.city}, {personal.location.country}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/50 dark:border-slate-800/50 pt-8 text-sm text-slate-500">
          <p>© {year} {personal.full_name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500" /> React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
