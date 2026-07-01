import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/ui/SocialIcons';
import { portfolioData } from '../data';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import SEO from '../components/common/SEO';

const { personal, siteConfig, employmentPreferences } = portfolioData;

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <SEO title="Contact" description="Get in touch for software engineering opportunities in Lahore, Pakistan." />

      <div className="section-container py-12">
        <AnimatedSection>
          <SectionTitle
            title="Contact"
            subtitle="Open to full-time, internship, and graduate program opportunities."
            align="center"
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatedSection delay={0.1}>
            <Card>
              <h3 className="text-lg font-semibold mb-6">Let's Connect</h3>
              <ul className="space-y-5">
                <li>
                  <a href={`mailto:${personal.email}`} className="flex items-center gap-3 text-sm hover:text-indigo-500 transition-colors group">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors">
                      <Mail size={18} className="text-indigo-500" />
                    </span>
                    <div>
                      <p className="text-xs text-slate-500">Email</p>
                      <p className="font-medium">{personal.email}</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10">
                    <Phone size={18} className="text-indigo-500" />
                  </span>
                  <div>
                    <p className="text-xs text-slate-500">Phone</p>
                    <p className="font-medium">{personal.phone}</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10">
                    <MapPin size={18} className="text-indigo-500" />
                  </span>
                  <div>
                    <p className="text-xs text-slate-500">Location</p>
                    <p className="font-medium">{personal.address}, {personal.location.city}</p>
                  </div>
                </li>
              </ul>

              <div className="flex gap-3 mt-8">
                {siteConfig.social_links.map((link) => {
                  const icons = { github: GitHubIcon, linkedin: LinkedInIcon, mail: Mail };
                  const Icon = icons[link.icon];
                  return Icon ? (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-xl glass hover:bg-indigo-500/10 hover:text-indigo-500 transition-colors"
                      aria-label={link.platform}
                    >
                      <Icon size={20} />
                    </a>
                  ) : null;
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
                <p className="text-xs text-slate-500 mb-2">Preferred Location</p>
                <p className="text-sm font-medium">{employmentPreferences.preferred_location}</p>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Card>
              <h3 className="text-lg font-semibold mb-6">Send a Message</h3>
              {submitted ? (
                <p className="text-sm text-emerald-600 dark:text-emerald-400">
                  Your email client should open shortly. Thank you for reaching out!
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full rounded-xl glass px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full rounded-xl glass px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full rounded-xl glass px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send size={16} /> Send Message
                  </Button>
                </form>
              )}
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}
