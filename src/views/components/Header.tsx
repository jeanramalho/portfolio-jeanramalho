import type { Profile } from '../../models/cv_data';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  profile: Profile;
}

const Header: React.FC<HeaderProps> = ({ profile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Experiência', href: '#experiencia' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Formação', href: '#formacao' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-[var(--color-surface)]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="text-xl font-heading font-bold text-white tracking-wider flex items-center gap-2">
            <span className="text-sky-500">&lt;</span>
            {profile.name.split(' ')[0]}
            <span className="text-emerald-500">/&gt;</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-sky-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${profile.email}`} className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--color-surface)] border-b border-gray-800 p-4 absolute w-full flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-sky-400 font-medium px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-4 px-2 py-2 mt-2 border-t border-gray-700">
             <a href={profile.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
              <Github size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-sky-400">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${profile.email}`} className="text-gray-400 hover:text-emerald-400">
              <Mail size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
