import { Lock } from 'lucide-react';
const AccessControlSection = () => {
  const features = ["Reliable offline operation ensures continuous access control", "One-time purchase with lifetime ownership—no recurring fees", "Scalable solutions from single doors to multi-location enterprises", "Instant facility-wide lockdown capabilities for enhanced security", "Complete access tracking and reporting for compliance needs", "Comprehensive training and 24/7 ongoing support included"];
  return <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Left Column */}
          <div className="lg:pr-8">
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
              Professional Access Control Solutions
            </h2>
            
            {/* Subheading */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed animate-fade-in-up [animation-delay:0.2s]">
              Enterprise-grade systems designed for reliability and long-term value.
            </p>
            
            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => <div key={index} className="flex items-start space-x-4 animate-fade-in-up" style={{
              animationDelay: `${0.4 + index * 0.1}s`
            }}>
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Lock className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">
                    {feature}
                  </p>
                </div>)}
            </div>
          </div>

          {/* Image Right Column */}
          <div className="lg:pl-8 animate-fade-in-up [animation-delay:0.8s]">
            <div className="relative">
              <img src="/lovable-uploads/8b8da98e-6301-4608-afaf-4c1b2a613156.png" alt="Professional office entrance with access control card reader" className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/20 to-transparent rounded-2xl" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AccessControlSection;