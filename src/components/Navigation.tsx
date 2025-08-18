import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center md:justify-between h-24 lg:h-32 relative">
          {/* Logo and Company Name - Centered on mobile */}
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
          >
            {/* Logo - Bigger and centered on mobile */}
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
                alt="United Security & Control Systems"
                className="h-28 sm:h-32 md:h-32 lg:h-40 xl:h-48 w-auto object-contain hover:scale-105 transition-transform duration-200"
                width="200"
                height="160"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-body hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('service-area')} 
              className="text-body hover:text-primary transition-colors font-medium"
            >
              Service Area
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-body hover:text-primary transition-colors font-medium"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-body hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-body hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <Button variant="outline" size="sm" asChild>
              <a href="tel:540-989-9393" className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                540-989-9393
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button - Positioned absolutely on right */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 pb-6 border-t border-border bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-body hover:text-primary transition-colors font-medium px-2 py-1 text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('service-area')}
                className="text-body hover:text-primary transition-colors font-medium px-2 py-1 text-left"
              >
                Service Area
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-body hover:text-primary transition-colors font-medium px-2 py-1 text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-body hover:text-primary transition-colors font-medium px-2 py-1 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-body hover:text-primary transition-colors font-medium px-2 py-1 text-left"
              >
                Contact
              </button>
              <div className="pt-2 pb-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="tel:540-989-9393" className="flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Call 540-989-9393
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

export default Navigation;