import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface InternalLinkCardProps {
  title: string;
  description: string;
  href: string;
  isExternal?: boolean;
  badge?: string;
  className?: string;
}

const InternalLinkCard = ({ 
  title, 
  description, 
  href, 
  isExternal = false, 
  badge,
  className = ""
}: InternalLinkCardProps) => {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group ${className}`}>
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-header group-hover:text-primary transition-colors">
          {title}
        </h3>
        {badge && (
          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
            {badge}
          </span>
        )}
      </div>
      
      <p className="text-body text-sm mb-4 leading-relaxed">
        {description}
      </p>
      
      <Button
        variant="ghost"
        size="sm"
        className="p-0 h-auto text-primary hover:text-primary-hover font-medium group"
        asChild
      >
        <a href={href} className="flex items-center gap-2">
          Learn More
          {isExternal ? (
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          ) : (
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          )}
        </a>
      </Button>
    </div>
  );
};

export default InternalLinkCard;