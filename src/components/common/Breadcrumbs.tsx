import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 rounded-xl bg-white/60 backdrop-blur-md border border-slate-200/80 inline-flex items-center text-xs text-slate-600 mb-6 shadow-sm">
      <Link to="/" className="flex items-center gap-1 hover:text-medical transition-colors">
        <Home className="w-3.5 h-3.5 text-medical" />
        <span>Home</span>
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3 h-3 text-slate-400 mx-1.5 shrink-0" />
            {isLast || !item.path ? (
              <span className="font-semibold text-navy-900 truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            ) : (
              <Link to={item.path} className="hover:text-medical transition-colors">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
