import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import pghsLogo from 'figma:asset/0b1c89d92df9b1f4c0d9017f0e6fe1d8dde4f400.png';

const quickLinks = [
  { title: 'About Us', href: '#about' },
  { title: 'Academics', href: '#academics' },
  { title: 'Admissions', href: '#admissions' },
  { title: 'Contact Us', href: '#contact' }
];

const resources = [
  { title: 'School Calendar', href: '#calendar' },
  { title: 'Newsletters', href: '#newsletters' },
  { title: 'Documents', href: '#documents' },
  { title: 'Stationery Lists', href: '#stationery' }
];

const policies = [
  { title: 'Code of Conduct', href: '#conduct' },
  { title: 'Privacy Policy', href: '#privacy' },
  { title: 'Terms of Use', href: '#terms' },
  { title: 'Admissions Policy', href: '#admissions-policy' }
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* School Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={pghsLogo} 
                  alt="PGHS Logo" 
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h3 className="font-bold">PGHS</h3>
                  <p className="text-sm text-blue-100">School of Excellence</p>
                </div>
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Empowering young women through academic excellence, character development, 
                and leadership opportunities since 1918.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.title}>
                    <a 
                      href={link.href}
                      className="text-blue-100 hover:text-white transition-colors duration-200"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.title}>
                    <a 
                      href={resource.href}
                      className="text-blue-100 hover:text-white transition-colors duration-200"
                    >
                      {resource.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                  <div className="text-blue-100">
                    <p>136 Josiah Gumede Rd</p>
                    <p>Pinetown, New Germany</p>
                    <p>3610</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-200 flex-shrink-0" />
                  <a 
                    href="tel:+27317013251" 
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    +27 31 701 3251
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-200 flex-shrink-0" />
                  <a 
                    href="mailto:info@pghs.co.za" 
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    info@pghs.co.za
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <h5 className="font-semibold mb-2">Office Hours</h5>
                <div className="text-sm text-blue-100 space-y-1">
                  <p>Monday - Friday: 7:30 AM - 4:00 PM</p>
                  <p>Saturday: 8:00 AM - 12:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-blue-100">
                © 2024 Pinetown Girls' High School. All rights reserved.
              </p>
              <p className="text-sm text-blue-200 mt-1">
                Fortiter In Omne - Bravely in All Things
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              {policies.map((policy, index) => (
                <React.Fragment key={policy.title}>
                  <a 
                    href={policy.href}
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    {policy.title}
                  </a>
                  {index < policies.length - 1 && (
                    <span className="text-blue-200">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* School Motto */}
          <div className="text-center mt-8 pt-8 border-t border-white/20">
            <p className="text-accent text-lg italic">
              "Empowering tomorrow's leaders through excellence in education"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}