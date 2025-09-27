import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you. Contact us for admissions inquiries, 
            general information, or to schedule a school visit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">School Address</h4>
                        <p className="text-muted-foreground">
                          136 Josiah Gumede Rd,<br />
                          Pinetown, New Germany<br />
                          3610
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-accent/20 rounded-lg">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Phone Numbers</h4>
                        <div className="space-y-1 text-muted-foreground">
                          <p>Main Office: <a href="tel:+27317013251" className="hover:text-primary">+27 31 701 3251</a></p>
                          <p>Admissions: <a href="tel:+27317013252" className="hover:text-primary">+27 31 701 3252</a></p>
                          <p>Fax: +27 31 702 8501</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Mail className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Email Addresses</h4>
                        <div className="space-y-1 text-muted-foreground">
                          <p>General: <a href="mailto:pghsadmin@pghs.co.za" className="hover:text-primary">pghsadmin@pghs.co.za</a></p>
                          <p>Admissions: <a href="mailto:admissions@pghs.co.za" className="hover:text-primary">admissions@pghs.co.za</a></p>
                          <p>Principal: <a href="mailto:principal@pghs.co.za" className="hover:text-primary">principal@pghs.co.za</a></p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <Clock className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Office Hours</h4>
                        <div className="space-y-1 text-muted-foreground">
                          <p>Monday - Friday: 7:30 AM - 4:00 PM</p>
                          <p>Saturday: 8:00 AM - 12:00 PM</p>
                          <p>Sunday & Public Holidays: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <h4 className="font-semibold text-primary">Find Us</h4>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Pinetown Girls' High School</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <h3 className="text-2xl font-bold text-primary">Send us a Message</h3>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide details about your inquiry..."
                      className="min-h-32"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      * Required fields
                    </div>
                    <Button size="lg" className="w-full">
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Additional Contact Options */}
            <div className="mt-8 space-y-4">
              <h4 className="font-semibold text-primary">Other Ways to Reach Us</h4>
              <div className="grid gap-4">
                <Button variant="outline" className="justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Schedule a Phone Call
                </Button>
                <Button variant="outline" className="justify-start">
                  <MapPin className="h-4 w-4 mr-2" />
                  Book a School Tour
                </Button>
                <Button variant="outline" className="justify-start">
                  <Mail className="h-4 w-4 mr-2" />
                  Request Information Package
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-red-100 rounded-lg">
              <Phone className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Emergency Contact</h4>
              <p className="text-red-700">
                For school emergencies during school hours, please contact our main office 
                immediately at <a href="tel:+27317013251" className="underline font-medium">+27 31 701 3251</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}