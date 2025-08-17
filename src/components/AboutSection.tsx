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
        <div className="max-w-5xl mx-auto mb-16">
          <div className="space-y-6 text-left">
            <p className="text-lg text-body leading-relaxed mb-6">
              Most security companies offer cookie-cutter solutions and complicated contracts. We take a different approach. Every property is unique, every business has different challenges, and every security system should be designed specifically for how you actually use your space. That's why we start every project with a thorough consultation to understand your real-world needs.
            </p>
            
            <p className="text-lg text-body leading-relaxed mb-6">
              As a factory-authorized dealer specializing in access control systems, security cameras, and locksmith services, we provide enterprise-grade solutions with straightforward, one-time purchase options. No monthly software fees, no surprise costs, no long-term contracts. Our team handles everything from initial design through installation, training, and ongoing support—ensuring your investment delivers reliable protection for years to come.
            </p>
            
            <p className="text-lg text-body leading-relaxed">
              Being locally owned and operated means we're here when you need us. Our Southwest Virginia-based team knows the area, understands local business challenges, and can respond quickly for service calls or emergencies. We're fully licensed, insured, and factory-certified because your peace of mind depends on working with professionals you can trust.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-xl text-body mb-8">
            Ready to see how we can secure your property?
          </p>
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
        </div>
      </div>
    </section>;
};
export default AboutSection;