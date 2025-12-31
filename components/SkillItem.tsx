
import React from 'react';
import { SoftwareSkill } from '../types';

interface SkillItemProps {
  skill: SoftwareSkill;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-indigo-100 group">
      <div className="w-12 h-12 flex-shrink-0 bg-slate-50 rounded-lg p-2 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
        <img src={skill.icon} alt={skill.fullName} className="w-full h-full object-contain" />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-sm font-semibold text-slate-700">{skill.fullName}</span>
          <span className="text-xs text-slate-400 font-medium">{skill.level}/5</span>
        </div>
        <div className="flex gap-1.5">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`h-1.5 flex-grow rounded-full transition-all duration-500 ${
                step <= skill.level ? 'bg-indigo-600 w-full' : 'bg-slate-200 w-full opacity-30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
