import type { SkillCategory } from '../../models/cv_data';
import { Code2, Server, Workflow } from 'lucide-react';

interface SkillsProps {
  skills: SkillCategory[];
}

export const getIconForCategory = (categoryName: string) => {
  if (categoryName.includes('Mobile & Web')) return <Code2 className="text-sky-400 mb-4" size={32} />;
  if (categoryName.includes('Infra')) return <Server className="text-emerald-400 mb-4" size={32} />;
  return <Workflow className="text-purple-400 mb-4" size={32} />;
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="habilidades" className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2 bg-emerald-500/10 rounded-lg">
          <Code2 className="text-emerald-500" size={24} />
        </div>
        <h2 className="text-3xl font-heading font-bold text-white">Habilidades & Tecnologias</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skillGroup, index) => (
          <div key={index} className="p-6 bg-[var(--color-surface)] rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            {getIconForCategory(skillGroup.category)}
            <h3 className="text-xl font-bold text-white mb-4 font-heading">{skillGroup.category}</h3>
            
            <div className="flex flex-wrap gap-2">
              {skillGroup.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 bg-[var(--color-base)] border border-gray-800 text-gray-300 text-sm rounded-md font-medium hover:text-white hover:border-sky-500/50 hover:bg-sky-500/10 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
