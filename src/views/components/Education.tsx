import type { Education as EducationType } from '../../models/cv_data';
import { GraduationCap } from 'lucide-react';

interface EducationProps {
  education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="formacao" className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2 bg-sky-500/10 rounded-lg">
          <GraduationCap className="text-sky-500" size={24} />
        </div>
        <h2 className="text-3xl font-heading font-bold text-white">Formação Acadêmica</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {education.map((edu) => (
          <div key={edu.id} className="p-6 bg-[var(--color-surface)] border border-gray-800 rounded-xl hover:border-sky-500/50 transition-colors group">
            <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-sky-400 transition-colors">{edu.course}</h3>
            <p className="text-gray-300 font-medium mb-4">{edu.institution}</p>
            <div className="inline-flex items-center px-3 py-1 bg-[var(--color-base)] text-gray-400 text-sm font-semibold rounded-full border border-gray-800">
              {edu.period}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
