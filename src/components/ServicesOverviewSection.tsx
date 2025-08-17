import { Building, Home, Users, CheckCircle } from 'lucide-react';

const ServicesOverviewSection = () => {
  const services = [
    {
      icon: Building,
      title: "Commercial & Industrial Security",
      description: "Professional access control and camera systems designed for businesses, manufacturing facilities, and industrial complexes.",
      items: [
        "Access Control Systems",
        "Security Camera Installation", 
        "Professional Locksmith Services",
        "Free Security Consultations"
      ]
    },
    {
      icon: Users,
      title: "Educational & Municipal Security", 
      description: "Specialized security solutions for K-12 schools, government buildings, and municipal facilities with enhanced safety protocols.",
      items: [
        "School Security Systems",
        "Municipal Access Control",
        "Professional Installation & Training",
        "24/7 Technical Support"
      ]
    },
    {
      icon: Home,
      title: "Retail Security Solutions",
      description: "Tailored security systems for retail businesses, shopping centers, and commercial properties to protect customers and assets.",
      items: [
        "Retail Camera Systems",
        "Store Access Management",
        "Professional Locksmith Services", 
        "Emergency Service Available"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-16 text-center animate-fade-in-up">
            Comprehensive Security Services for Southwest Virginia
          </h2>
          
          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  {/* Service Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Service Items */}
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;