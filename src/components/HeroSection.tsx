import { Button } from '@/components/ui/button';
import { Phone, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[70vh] sm:h-[75vh] lg:h-[80vh] flex items-start justify-center pt-20 sm:pt-24 lg:pt-32 pb-20 sm:pb-16 lg:pb-8 overflow-hidden bg-hero-bg">
      {/* Professional hero image */}
      <div className="absolute inset-0 bg-gradient-to-r from-hero-bg/90 to-hero-bg/70 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/optimized/8b8da98e-6301-4608-afaf-4c1b2a613156.webp')`
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-2 sm:px-4 lg:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-header mb-6 animate-fade-in-up">
            <span className="text-primary">
              Southwest Virginia's
            </span>{' '}
            <span className="text-primary">Trusted</span> Security Partner
          </h1>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-body mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:0.2s]">
            Professional access control, security cameras, and locksmith services for businesses, schools, municipalities, and retail establishments.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10 animate-fade-in-up [animation-delay:0.4s]">
            <div className="flex items-center text-body">
              <CheckCircle className="w-5 h-5 mr-2 text-primary" />
              <span className="text-sm sm:text-base">Licensed & Insured (DCJS# 11-3283)</span>
            </div>
            <div className="flex items-center text-body">
              <CheckCircle className="w-5 h-5 mr-2 text-primary" />
              <span className="text-sm sm:text-base">24/7 Monitoring</span>
            </div>
            <div className="flex items-center text-body">
              <CheckCircle className="w-5 h-5 mr-2 text-primary" />
              <span className="text-sm sm:text-base">Local Experts</span>
            </div>
          </div>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-right [animation-delay:0.6s]">
            <Button 
              variant="cta-prominent"
              size="2xl" 
              className="w-full sm:w-auto min-w-64"
              onClick={scrollToContact}
            >
              Request Free Site Evaluation
            </Button>
            
            <Button 
              variant="cta-prominent" 
              size="2xl" 
              className="w-full sm:w-auto min-w-52"
              asChild
            >
              <a href="tel:540-989-9393" className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
          
          {/* Additional Info */}
          <p className="text-body text-sm mt-8 px-2 animate-fade-in-up [animation-delay:0.8s] leading-relaxed py-1">
            Serving Southwest Virginia • Free consultations available
          </p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-section-bg to-transparent z-10" />
    </section>
  );
};

export default HeroSection;