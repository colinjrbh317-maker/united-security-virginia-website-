import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

type NavigationLink = {
  href: string;
  label: string;
  priority: 'high' | 'medium' | 'low';
  onClick?: (e: React.MouseEvent) => void;
};

const MainNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAboutClick = (e: React.MouseEvent) => {
    // If we're on the homepage, scroll to about section
    if (window.location.pathname === '/') {
      e.preventDefault();
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }
    // Otherwise, let the link navigate to /#about normally
  };

  const navigationLinks: NavigationLink[] = [
    { href: '/services', label: 'Services', priority: 'high' },
    { href: '/locations', label: 'Locations', priority: 'high' },
    { href: '/#about', label: 'About', priority: 'medium', onClick: handleAboutClick },
    { href: '/contact', label: 'Contact', priority: 'high' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center md:justify-between h-24 lg:h-32 relative">
          
          {/* Logo */}
          <a 
            href="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
            aria-label="United Security & Control Systems - Home"
          >
            <picture>
              <source 
                srcSet="/optimized/f279366a-7136-4229-b19a-ad0fee523641.avif" 
                type="image/avif" 
              />
              <source 
                srcSet="/optimized/f279366a-7136-4229-b19a-ad0fee523641.webp" 
                type="image/webp" 
              />
              <img 
                src="/optimized/f279366a-7136-4229-b19a-ad0fee523641.webp" 
                alt="United Security & Control Systems Logo"
                className="h-28 sm:h-32 md:h-32 lg:h-40 xl:h-48 w-auto object-contain hover:scale-105 transition-transform duration-200"
                width="200"
                height="160"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6" role="navigation">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-body hover:text-primary transition-colors font-medium"
                {...(link.priority === 'high' && { 'data-priority': 'high' })}
                {...(link.onClick && { onClick: link.onClick })}
              >
                {link.label}
              </a>
            ))}
            <Button variant="outline" size="sm" asChild>
              <a 
                href="tel:540-989-9393" 
                className="flex items-center"
                aria-label="Call United Security at 540-989-9393"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 pb-6 border-t border-border bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4" role="navigation">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-body hover:text-primary transition-colors font-medium px-2 py-1 text-left"
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (link.onClick) link.onClick(e);
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 pb-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a 
                    href="tel:540-989-9393" 
                    className="flex items-center justify-center"
                    aria-label="Call United Security at 540-989-9393"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default MainNavigation;