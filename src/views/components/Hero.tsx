import type { Profile } from '../../models/cv_data';
import { Terminal, Download, ArrowRight } from 'lucide-react';

interface HeroProps {
  profile: Profile;
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section id="sobre" className="min-h-[70vh] flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-20">
      
      {/* Text Content */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-900/30 border border-sky-800/50 text-sky-400 text-sm font-medium mb-6 animate-pulse">
          <Terminal size={14} />
          Disponível para recolocação
        </div>
        
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 leading-tight">
          Olá, eu sou <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
            {profile.name}
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-400 font-medium mb-8 max-w-2xl">
          {profile.summary}
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="#experiencia"
            className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors group"
          >
            Minha Trajetória
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="/cv.pdf" 
            target="_blank"
            className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-[var(--color-surface)] hover:bg-[var(--color-surface-alt)] border border-gray-700 text-white font-medium rounded-lg transition-colors"
          >
            <Download size={18} />
            Baixar Currículo
          </a>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="shrink-0 flex justify-center mb-8 md:mb-0">
        <div className="relative group">
          {/* Animated Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          
          {/* Image Container */}
          <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full p-1 bg-[var(--color-surface)]">
            <img 
              src={`${profile.github}.png`} 
              alt={`Foto de perfil de ${profile.name}`} 
              className="w-full h-full object-cover rounded-full border-4 border-[var(--color-base)] shadow-2xl"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
