const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Services */}
          <div>
            <h3 className="font-bold text-header mb-4">Security Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/access-control-systems-virginia" className="text-muted-foreground hover:text-primary transition-colors">Access Control Systems</a></li>
              <li><a href="/security-cameras-virginia" className="text-muted-foreground hover:text-primary transition-colors">Security Cameras</a></li>
              <li><a href="/commercial-locksmith-virginia" className="text-muted-foreground hover:text-primary transition-colors">Commercial Locksmith</a></li>
              <li><a href="/business-security-systems-virginia" className="text-muted-foreground hover:text-primary transition-colors">Business Security Systems</a></li>
              <li><a href="/office-building-security" className="text-muted-foreground hover:text-primary transition-colors">Office Building Security</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-header mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/roanoke-valley-security" className="text-muted-foreground hover:text-primary transition-colors">Roanoke</a></li>
              <li><a href="/new-river-valley-security" className="text-muted-foreground hover:text-primary transition-colors">New River Valley</a></li>
              <li><a href="/lynchburg-area-security" className="text-muted-foreground hover:text-primary transition-colors">Lynchburg Area</a></li>
              <li><a href="/martinsville-henry-county-security" className="text-muted-foreground hover:text-primary transition-colors">Martinsville Area</a></li>
              <li><a href="/locations" className="text-muted-foreground hover:text-primary transition-colors">All Service Areas</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-header mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-header mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <a href="tel:540-989-9393" className="hover:text-primary transition-colors">
                  (540) 989-9393
                </a>
              </p>
              <p>24/7 Emergency Service</p>
              <p>Southwest Virginia</p>
              <p className="text-xs mt-3">
                Licensed (DCJS# 11-3283)<br/>
                Insured • Factory Certified<br/>
                Virginia Owned & Operated Since 1988
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © 2025 United Security & Control Systems. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Professional security services for Southwest Virginia businesses and residents
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;