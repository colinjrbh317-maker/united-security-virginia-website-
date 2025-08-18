import { Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SmallBusinessSecuritySection = () => {
  const features = [
    "Custom security packages designed for your specific needs and budget",
    "Professional access control and alarm systems",
    "Security camera systems with remote monitoring capabilities", 
    "Flexible service agreements with no long-term contracts required"
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Residential & Small Business Security
          </h2>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed animate-fade-in-up [animation-delay:0.2s]">
            Custom security solutions for homes and small businesses with flexible, affordable options.
          </p>
          
          {/* Features List */}
          <div className="space-y-6 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-muted/30 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <p className="text-left text-foreground font-medium leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>
          
          {/* View Details Button */}
          <div className="mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="/business-security-systems-virginia">View Details</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallBusinessSecuritySection;