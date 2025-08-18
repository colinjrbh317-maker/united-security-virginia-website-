import { Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoSurveillanceSection = () => {
  const features = [
    "HD upgrades using your existing infrastructure",
    "Remote monitoring with intelligent mobile alerts", 
    "Professional monitoring with mobile alerts and notifications",
    "Professional-grade systems that may qualify for insurance discounts"
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Advanced Video Surveillance Solutions
          </h2>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed animate-fade-in-up [animation-delay:0.2s]">
            Crystal-clear video quality with intelligent monitoring and instant alert capabilities.
          </p>
          
          {/* Features List */}
          <div className="space-y-6 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Eye className="w-4 h-4 text-primary" />
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
              <a href="/security-cameras-virginia">View Details</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSurveillanceSection;