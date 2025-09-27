import React from 'react';
import { BookOpen, Microscope, Calculator, Globe, Palette, Music, Languages, Computer } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const departments = [
  {
    id: 'sciences',
    name: 'Sciences',
    icon: Microscope,
    color: 'bg-blue-100 text-blue-600',
    subjects: ['Life Sciences', 'Physical Sciences', 'Mathematics', 'Mathematical Literacy'],
    description: 'Our Science department offers comprehensive programs that foster scientific thinking and practical skills.',
    highlights: ['Modern laboratories', 'Research projects', 'Science Olympiad participation', 'University partnerships']
  },
  {
    id: 'languages',
    name: 'Languages',
    icon: Languages,
    color: 'bg-green-100 text-green-600',
    subjects: ['English Home Language', 'Afrikaans', 'isiZulu', 'French'],
    description: 'Develop strong communication skills and cultural awareness through our diverse language offerings.',
    highlights: ['Multilingual competency', 'Cultural exchange programs', 'Public speaking competitions', 'Creative writing workshops']
  },
  {
    id: 'commerce',
    name: 'Commerce',
    icon: Calculator,
    color: 'bg-purple-100 text-purple-600',
    subjects: ['Accounting', 'Business Studies', 'Economics', 'Consumer Studies'],
    description: 'Prepare for careers in business and finance with our comprehensive commerce curriculum.',
    highlights: ['Entrepreneurship programs', 'Mock business simulations', 'Industry partnerships', 'Financial literacy workshops']
  },
  {
    id: 'humanities',
    name: 'Humanities',
    icon: Globe,
    color: 'bg-orange-100 text-orange-600',
    subjects: ['History', 'Geography', 'Life Orientation', 'Tourism'],
    description: 'Explore human society, culture, and our relationship with the world around us.',
    highlights: ['Field trips and excursions', 'Model UN participation', 'Heritage projects', 'Global awareness programs']
  },
  {
    id: 'arts',
    name: 'Creative Arts',
    icon: Palette,
    color: 'bg-pink-100 text-pink-600',
    subjects: ['Visual Arts', 'Dramatic Arts', 'Music', 'Design'],
    description: 'Express creativity and develop artistic skills through our comprehensive arts programs.',
    highlights: ['Annual art exhibitions', 'Theatre productions', 'Music concerts', 'Digital media projects']
  },
  {
    id: 'technology',
    name: 'Technology',
    icon: Computer,
    color: 'bg-indigo-100 text-indigo-600',
    subjects: ['Computer Applications Technology', 'Information Technology', 'Engineering Graphics & Design'],
    description: 'Develop digital literacy and technical skills for the modern world.',
    highlights: ['Coding workshops', 'Robotics club', '3D design projects', 'Digital citizenship programs']
  }
];

const academicPrograms = [
  {
    title: 'Advanced Programme (AP)',
    description: 'For high-achieving students seeking additional challenges and university-level preparation.',
    features: ['Accelerated learning', 'Research projects', 'University partnerships', 'Scholarship opportunities']
  },
  {
    title: 'Support Programme',
    description: 'Additional academic support to ensure every student reaches their full potential.',
    features: ['Small group tutoring', 'Study skills workshops', 'Peer mentoring', 'Individual assessments']
  },
  {
    title: 'Leadership Development',
    description: 'Cultivating the next generation of leaders through structured programs and opportunities.',
    features: ['Student council', 'Prefect system', 'Community service', 'Leadership camps']
  }
];

export function AcademicsSection() {
  return (
    <section id="academics" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Academic Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive curriculum and innovative teaching methods prepare students 
            for success in higher education and their chosen careers.
          </p>
        </div>

        {/* Department Tabs */}
        <Tabs defaultValue="sciences" className="mb-16">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
            {departments.map((dept) => (
              <TabsTrigger key={dept.id} value={dept.id} className="text-xs lg:text-sm">
                {dept.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {departments.map((dept) => (
            <TabsContent key={dept.id} value={dept.id}>
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${dept.color}`}>
                      <dept.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{dept.name} Department</h3>
                      <p className="text-muted-foreground mt-2">{dept.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-4">Subjects Offered</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {dept.subjects.map((subject) => (
                          <Badge key={subject} variant="secondary" className="text-sm">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                      <h4 className="text-lg font-semibold text-primary mb-4">Department Highlights</h4>
                      <ul className="space-y-2">
                        {dept.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center text-muted-foreground">
                            <BookOpen className="h-4 w-4 mr-3 text-primary flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1573894997713-de07a124df43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzdHVkZW50cyUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc1ODgyMjEzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt={`${dept.name} Department`}
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Academic Programs */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-primary mb-12">
            Specialized Academic Programs
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {academicPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <h4 className="text-xl font-semibold text-primary">{program.title}</h4>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic Statistics */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-center text-primary mb-12">
            Academic Achievements
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Matric Pass Rate</div>
              <div className="text-xs text-muted-foreground mt-1">2024 Results</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Bachelor Passes</div>
              <div className="text-xs text-muted-foreground mt-1">University Entrance</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Tertiary Acceptance</div>
              <div className="text-xs text-muted-foreground mt-1">Post-Matric Success</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Subject Choices</div>
              <div className="text-xs text-muted-foreground mt-1">Comprehensive Curriculum</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}