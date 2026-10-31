import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
}) => {
  return (
    <div className={`mb-6 sm:mb-16 ${align === 'center' ? 'text-center mx-auto' : 'text-left'} max-w-3xl`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-1.5 sm:mb-3 ${
            dark
              ? 'bg-brand-red/20 text-brand-red-light border border-brand-red/40'
              : 'bg-brand-red/10 text-brand-red border border-brand-red/20'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-lg sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
          dark ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-1.5 sm:mt-4 text-xs sm:text-base lg:text-lg leading-relaxed line-clamp-2 sm:line-clamp-none ${
            dark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
