import React from 'react';
import { Calendar, FileText, Users, CheckCircle, Download, Clock, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const admissionSteps = [
  {
    step: 1,
    title: "Application Submission",
    description: "Complete and submit the online application form with all required documents.",
    deadline: "31 March 2025",
    status: "open"
  },
  {
    step: 2,
    title: "Document Review",
    description: "Our admissions committee reviews all applications and supporting documents.",
    timeline: "April - May 2025",
    status: "upcoming"
  },
  {
    step: 3,
    title: "Assessment & Interview",
    description: "Selected candidates will be invited for academic assessment and interview.",
    timeline: "June 2025",
    status: "upcoming"
  },
  {
    step: 4,
    title: "Final Decision",
    description: "Successful applicants will receive their acceptance letters.",
    timeline: "July 2025",
    status: "upcoming"
  }
];

const requirements = [
  "Completed application form",
  "Copy of birth certificate",
  "Most recent school report",
  "Academic transcripts from previous schools",
  "Medical certificate",
  "Two passport-size photographs",
  "Proof of residence",
  "Application fee payment confirmation"
];

const documents = [
  {
    title: "Application Form 2025",
    description: "Complete application form for Grade 8 admission",
    type: "PDF",
    size: "2.3 MB"
  },
  {
    title: "Fee Structure 2025",
    description: "Detailed breakdown of school fees and additional costs",
    type: "PDF",
    size: "1.8 MB"
  },
  {
    title: "Admission Policy",
    description: "Official school admission policy and criteria",
    type: "PDF",
    size: "950 KB"
  },
  {
    title: "Code of Conduct",
    description: "School rules and expectations for students",
    type: "PDF",
    size: "1.2 MB"
  }
];

export function AdmissionsSection() {
  return (
    <section id="admissions" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Admissions 2025
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our community of excellence. We welcome applications from motivated 
            students who are ready to embrace our values and academic standards.
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-accent/20 border border-accent/30 rounded-lg p-6 mb-12">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-accent/30 rounded-lg">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Application Deadline</h3>
              <p className="text-muted-foreground">
                Applications for Grade 8 admission in 2025 close on <strong>31 March 2025</strong>. 
                Late applications will only be considered if space is available.
              </p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="process" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="process">Application Process</TabsTrigger>
            <TabsTrigger value="requirements">Requirements</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="process" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Application Process</h3>
              <p className="text-muted-foreground">
                Follow these steps to complete your application to PGHS
              </p>
            </div>

            <div className="grid gap-6">
              {admissionSteps.map((step) => (
                <Card key={step.step} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-6">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                        step.status === 'open' ? 'bg-green-500' : 
                        step.status === 'upcoming' ? 'bg-primary' : 'bg-gray-400'
                      }`}>
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xl font-semibold text-primary">{step.title}</h4>
                          <Badge variant={step.status === 'open' ? 'default' : 'secondary'}>
                            {step.status === 'open' ? 'Open Now' : 'Upcoming'}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">{step.description}</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {step.deadline || step.timeline}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" className="mr-4">
                Start Application
              </Button>
              <Button variant="outline" size="lg">
                Schedule School Visit
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="requirements" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Admission Requirements</h3>
              <p className="text-muted-foreground">
                Please ensure you have all the following documents ready before starting your application
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <h4 className="text-xl font-semibold text-primary">Required Documents</h4>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h4 className="text-xl font-semibold text-primary">Academic Criteria</h4>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Grade 7 Performance</h5>
                    <p className="text-sm text-muted-foreground">
                      Average of 70% or higher in core subjects (English, Mathematics, Natural Sciences)
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Language Requirements</h5>
                    <p className="text-sm text-muted-foreground">
                      Proficiency in English as it is the medium of instruction
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Conduct</h5>
                    <p className="text-sm text-muted-foreground">
                      Satisfactory conduct record from previous school
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Assessment</h5>
                    <p className="text-sm text-muted-foreground">
                      Entrance assessment in Mathematics and English
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Special Considerations</h4>
                    <p className="text-blue-700">
                      We welcome applications from students with diverse backgrounds and may consider 
                      special circumstances. Please contact our admissions office to discuss individual cases.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Download Forms & Documents</h3>
              <p className="text-muted-foreground">
                All forms are available in PDF format. Please print, complete, and submit with your application.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {documents.map((doc, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-red-100 rounded-lg">
                          <FileText className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary">{doc.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{doc.description}</p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                            <span>{doc.type}</span>
                            <span>•</span>
                            <span>{doc.size}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <FileText className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">Document Submission</h4>
                    <p className="text-amber-700">
                      All documents can be submitted online through our application portal or delivered 
                      in person to the school office. Please ensure all documents are clear and legible.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Fee Information */}
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-primary">School Fees 2025</h3>
              <p className="text-muted-foreground">Annual fees payable in advance</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b">
                <span>Tuition Fee</span>
                <span className="font-semibold">R45,000</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span>Development Levy</span>
                <span className="font-semibold">R5,000</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span>Books & Stationery</span>
                <span className="font-semibold">R3,500</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span>Activities & Sports</span>
                <span className="font-semibold">R2,500</span>
              </div>
              <div className="flex justify-between items-center py-3 border-t-2 font-semibold text-lg">
                <span>Total Annual Fee</span>
                <span className="text-primary">R56,000</span>
              </div>
              <p className="text-sm text-muted-foreground">
                * Additional costs may apply for optional activities, trips, and uniform items.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-primary">Financial Assistance</h3>
              <p className="text-muted-foreground">Support available for qualifying families</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Bursary Program</h4>
                <p className="text-sm text-muted-foreground">
                  Merit-based and need-based bursaries available for deserving students.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Payment Plans</h4>
                <p className="text-sm text-muted-foreground">
                  Flexible payment arrangements available. Contact our finance office for details.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Application Process</h4>
                <p className="text-sm text-muted-foreground">
                  Financial assistance applications must be submitted with admission applications.
                </p>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Apply for Financial Assistance
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-primary mb-4">Need Help with Your Application?</h3>
          <p className="text-muted-foreground mb-6">
            Our admissions team is here to assist you throughout the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Phone className="h-4 w-4 mr-2" />
              Call Admissions Office
            </Button>
            <Button variant="outline" size="lg">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}