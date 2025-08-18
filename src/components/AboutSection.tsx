import { Button } from '@/components/ui/button';
const AboutSection = () => {
  return <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-header mb-6">
            Why Choose United Security?
          </h2>
          
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 text-left">
            <p className="text-lg text-body leading-relaxed">
              Since 1988, United Security has been Southwest Virginia's trusted security partner, specializing in access control systems, security cameras, and commercial locksmith services. Unlike companies that offer cookie-cutter solutions, we design every security system specifically for your property and operational needs. Our family-owned business provides enterprise-grade solutions with no long-term contracts—you own your system outright with flexible monitoring options.
            </p>
            
            <p className="text-lg text-body leading-relaxed">
              As a fully licensed (DCJS# 11-3283), insured, and locally operated company, we handle everything from initial consultation through installation, training, and ongoing support. Our Southwest Virginia-based team knows the area, understands local business challenges, and provides 24/7 emergency service when you need us most.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-xl text-body mb-8">
            Ready to see how we can secure your property?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-white font-semibold" onClick={() => {
            const element = document.getElementById('contact');
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }}>
              Schedule Your Free Security Consultation
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/about">Learn More About Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;