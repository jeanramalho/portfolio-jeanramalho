import type { Experience as ExperienceType } from '../../models/cv_data';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experiencia" className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2 bg-sky-500/10 rounded-lg">
          <Briefcase className="text-sky-500" size={24} />
        </div>
        <h2 className="text-3xl font-heading font-bold text-white">Trajetória Profissional</h2>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-800 before:to-transparent">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--color-base)] bg-sky-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
              <span className="w-2 h-2 bg-white rounded-full"></span>
            </div>

            {/* Content card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-[var(--color-surface)] rounded-xl border border-gray-800 hover:border-sky-500/50 transition-colors shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                <h3 className="font-bold text-xl text-white font-heading">{exp.role}</h3>
                <span className="inline-block px-3 py-1 bg-[var(--color-surface-alt)] text-emerald-400 text-xs font-semibold rounded-full shrink-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-sky-400 font-medium mb-4">{exp.company}</p>
              
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-400 text-sm flex gap-2">
                    <span className="text-sky-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
