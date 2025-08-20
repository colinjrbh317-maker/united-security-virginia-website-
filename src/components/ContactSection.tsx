import { useState, useCallback, useMemo } from 'react';
import { Phone, Mail, Shield, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    selectedServices: [] as string[],
    otherServiceDescription: ''
  });

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleServiceChange = useCallback((service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: checked 
        ? [...prev.selectedServices, service]
        : prev.selectedServices.filter(s => s !== service),
      // Clear "Other" description if "Other" is unchecked
      otherServiceDescription: service === 'Other' && !checked ? '' : prev.otherServiceDescription
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const webhookUrl = 'https://colinryan17.app.n8n.cloud/webhook/2de75264-ff01-40b4-9f3c-f63fc23614ed';
    
    // Build query parameters for GET requests
    const selectedServicesText = formData.selectedServices.length > 0 
      ? formData.selectedServices.join(', ') + (formData.selectedServices.includes('Other') && formData.otherServiceDescription ? ` (${formData.otherServiceDescription})` : '')
      : 'Not specified';

    const params = new URLSearchParams({
      name: formData.name,
      businessName: formData.businessName || 'Not provided',
      phone: formData.phone,
      email: formData.email,
      selectedServices: selectedServicesText,
      timestamp: new Date().toISOString(),
      source: "United Security Contact Form"
    });
    
    try {
      // Send GET request to webhook with no-cors mode
      await fetch(`${webhookUrl}?${params.toString()}`, {
        method: "GET",
        mode: "no-cors",
      });

      toast({
        title: "Request Submitted",
        description: "Thank you! We'll contact you soon to schedule your free security evaluation.",
      });

      // Reset form
      setFormData({
        name: '',
        businessName: '',
        phone: '',
        email: '',
        selectedServices: [],
        otherServiceDescription: ''
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">Secure What Matters Most</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
              We'll assess your commercial property, school, municipal building, or retail location and recommend the perfect security solution for your specific needs.
            </p>
            
            {/* Large CTA Button */}
            
            
            <Button variant="outline" size="lg" className="mb-6 animate-fade-in-up [animation-delay:0.3s]" asChild>
              
            </Button>
            
            
            
            
          </div>

          {/* Contact Form and Info Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form - Left Side */}
            <div className="animate-fade-in-up [animation-delay:0.6s]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    className="w-full" 
                    placeholder="Your full name" 
                  />
                </div>

                <div>
                  <Label htmlFor="businessName" className="block text-sm font-medium text-foreground mb-2">
                    Business Name
                  </Label>
                  <Input 
                    type="text" 
                    id="businessName" 
                    name="businessName" 
                    value={formData.businessName} 
                    onChange={handleInputChange} 
                    className="w-full" 
                    placeholder="Your business name (optional)" 
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone *
                  </Label>
                  <Input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    className="w-full" 
                    placeholder="(540) 123-4567" 
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    className="w-full" 
                    placeholder="your@email.com" 
                  />
                </div>

                <div>
                  <Label className="block text-sm font-medium text-foreground mb-4">
                    Services Needed (select all that apply)
                  </Label>
                  <div className="space-y-3">
                    {useMemo(() => [
                      'Access Control',
                      'Cameras (Video Surveillance)',
                      'Commercial Locksmith services',
                      'Security Systems',
                      'Other'
                    ], []).map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={formData.selectedServices.includes(service)}
                          onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                        />
                        <Label htmlFor={service} className="text-sm font-normal cursor-pointer">
                          {service}
                        </Label>
                      </div>
                    ))}
                    
                    {formData.selectedServices.includes('Other') && (
                      <div className="ml-6 mt-2">
                        <Input
                          type="text"
                          name="otherServiceDescription"
                          value={formData.otherServiceDescription}
                          onChange={handleInputChange}
                          placeholder="Please describe other services needed..."
                          className="w-full"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <Button type="submit" variant="default" size="lg" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Submitting...' : 'Request Free Evaluation'}
                </Button>
              </form>
            </div>

            {/* Contact Info - Right Side */}
            <div className="animate-fade-in-up [animation-delay:0.8s]">
              <div className="bg-muted/30 rounded-2xl p-8 h-full">
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Get In Touch
                </h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <a href="tel:540-989-9393" className="text-primary hover:text-primary-hover transition-colors">
                        540-989-9393
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a href="mailto:info@unitedsecurityva.com" className="text-primary hover:text-primary-hover transition-colors">
                        info@unitedsecurityva.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-muted-foreground">6405 Merriman Rd # 204<br />Roanoke, VA 24018</p>
                    </div>
                  </div>

                  {/* Service Area */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Service Area</p>
                      <p className="text-muted-foreground">Serving Southwest Virginia since 1988</p>
                    </div>
                  </div>

                  {/* Trust Badge */}
                  <div className="mt-8 p-4 bg-primary-light rounded-lg">
                    <p className="text-sm text-primary font-semibold text-center">
                      Licensed (DCJS# 11-3283) • Insured • Factory Certified • Virginia Owned & Operated
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;