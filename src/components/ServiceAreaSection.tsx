import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Navigation } from 'lucide-react';

const ServiceAreaSection = () => {
  const primaryAreas = [
    { name: "Roanoke", href: "/roanoke-valley-security" },
    { name: "New River Valley", href: "/new-river-valley-security" },
    { name: "Lynchburg", href: "/lynchburg-security" },
    { name: "Martinsville Area", href: "/martinsville-henry-county-security" }
  ];

  const additionalAreas = [
    { name: "Franklin County", href: "/franklin-county-security" },
    { name: "Bedford County", href: "/bedford-county-security" },
    { name: "Botetourt County", href: "/botetourt-county-security" },
    { name: "Alleghany County", href: "/alleghany-county-security" },
    { name: "Rockbridge County", href: "/rockbridge-county-security" },
    { name: "Giles County", href: "/giles-county-security" }
  ];

  return (
    <section id="service-area" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-header">
              Our Service Area
            </h2>
            <p className="text-xl text-muted-foreground">
              Proudly serving Southwest Virginia and surrounding communities for over 35 years.
            </p>
            <p className="text-lg text-body leading-relaxed">
              From Roanoke to the New River Valley, we provide professional security solutions throughout the region. Our local team knows the area and can respond quickly when you need us most.
            </p>
            <div className="space-y-4">
              <p className="text-base text-muted-foreground font-medium">
                We serve approximately a one-hour radius from Roanoke
              </p>
              <div className="space-y-3">
                <p className="text-lg text-body font-semibold">
                  Not sure if we serve your area? Call us!
                </p>
                <Button 
                  variant="cta-prominent"
                  size="xl" 
                  onClick={() => window.open('tel:540-989-9393', '_self')}
                >
                  Call 540-989-9393
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Service Area Cards */}
          <div className="space-y-8">
            {/* Primary Service Areas */}
            <Card className="border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-header">
                    Primary Service Areas
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {primaryAreas.map((area, index) => (
                    <a 
                      key={index} 
                      href={area.href}
                      className="flex items-center gap-2 hover:bg-primary/10 p-2 rounded-lg transition-colors duration-200 group"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-body font-medium group-hover:text-primary">{area.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Coverage Areas */}
            <Card className="border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Navigation className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-header">
                    Additional Coverage Areas
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {additionalAreas.map((area, index) => (
                    <a 
                      key={index} 
                      href={area.href}
                      className="flex items-center gap-2 hover:bg-primary/10 p-2 rounded-lg transition-colors duration-200 group"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-body font-medium group-hover:text-primary">{area.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;