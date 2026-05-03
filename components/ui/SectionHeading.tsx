import type { ReactNode } from 'react';

interface SectionHeadingProps {
  tagline: string;
  title: ReactNode;
  description?: string;
  alignment?: 'center' | 'left';
  className?: string;
}

export default function SectionHeading({
  tagline,
  title,
  description,
  alignment = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'} ${className} animate-fade-in-up`}
    >
      <span className="text-[#00BCD4] font-bold uppercase tracking-widest text-xs md:text-sm mb-3 block">
        {tagline}
      </span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
        {title}
      </h2>
      {description && (
        <p
          className={`text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl ${
            alignment === 'center' ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
      {alignment === 'center' && (
        <div className="w-20 h-1 bg-[#FFC107] mx-auto rounded-full mt-6 opacity-80"></div>
      )}
    </div>
  );
}
