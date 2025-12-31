
import React from 'react';

interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ title, icon, children, className = "", id }) => {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center gap-3 mb-10">
          {icon && <div className="text-indigo-700">{icon}</div>}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 relative inline-block">
            {title}
            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-indigo-600"></span>
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
