import { Key } from 'lucide-react';

const LocksmithSection = () => {
  const services = [
    "Commercial Door Hardware and Fire Egress Hardware",
    "Masterkey Systems", 
    "High Security and Restricted Key Systems",
    "Interchangeable Core Systems",
    "Door Closers",
    "Automatic Swing Door Operators", 
    "Keypad and Card Reader Standalone Locks",
    "Most Brands of Mechanical Door Hardware Sold, Installed, and Repaired"
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content Left Column */}
          <div className="lg:pr-8">
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
              Professional Locksmith Services
            </h2>
            
            {/* Subheading */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up [animation-delay:0.2s]">
              Comprehensive commercial locksmith solutions for businesses throughout Southwest Virginia.
            </p>

            {/* Description */}
            <p className="text-base text-foreground mb-10 leading-relaxed animate-fade-in-up [animation-delay:0.3s]">
              From basic lock repairs to complex masterkey systems, our certified locksmiths provide professional installation, service, and repair for all types of commercial door hardware.
            </p>
          </div>

          {/* Services List Right Column */}
          <div className="lg:pl-8">
            <div className="space-y-4">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 animate-fade-in-up" 
                  style={{
                    animationDelay: `${0.4 + index * 0.1}s`
                  }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Key className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">
                    {service}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocksmithSection;