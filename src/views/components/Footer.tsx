import type { Profile } from '../../models/cv_data';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  profile: Profile;
}

const Footer: React.FC<FooterProps> = ({ profile }) => {
  return (
    <footer className="border-t border-gray-800 bg-[var(--color-surface)] py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center">
        <div className="flex gap-6 mb-8">
          <a href={profile.github} target="_blank" rel="noreferrer" className="p-3 bg-gray-800/50 hover:bg-sky-500/20 text-gray-400 hover:text-white rounded-full transition-all">
            <Github size={24} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-gray-800/50 hover:bg-sky-500/20 text-gray-400 hover:text-sky-400 rounded-full transition-all">
            <Linkedin size={24} />
          </a>
          <a href={`mailto:${profile.email}`} className="p-3 bg-gray-800/50 hover:bg-emerald-500/20 text-gray-400 hover:text-emerald-400 rounded-full transition-all">
            <Mail size={24} />
          </a>
        </div>
        
        <p className="text-gray-500 flex items-center gap-2 text-sm">
          Desenvolvido com <Heart size={16} className="text-emerald-500" /> por {profile.name}
        </p>
        <p className="text-gray-600 text-xs mt-2">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
