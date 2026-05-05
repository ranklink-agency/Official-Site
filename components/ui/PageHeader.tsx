import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <div className="relative bg-[#4FC3F7] min-h-[320px] flex flex-col items-center justify-center overflow-hidden text-center px-4 pt-20 pb-24">
      <div className="relative z-10 max-w-4xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white text-lg md:text-xl font-medium max-w-2xl mx-auto opacity-95 leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform rotate-180 z-0" style={{ marginBottom: '-2px' }}>
        <svg
          className="relative block w-full h-16 md:h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#FAFEFA]"
          ></path>
        </svg>
      </div>
    </div>
  );
}
