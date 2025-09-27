import React from 'react';
import { Award, Users, BookOpen, Target } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';

const achievements = [
  {
    icon: Award,
    title: "100% Matric Pass Rate",
    description: "Consistent academic excellence with outstanding matriculation results year after year."
  },
  {
    icon: Users,
    title: "1200+ Students",
    description: "A thriving community of learners from Grade 8 to Grade 12, fostering collaboration and growth."
  },
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Diverse subject offerings including Sciences, Commerce, Languages, and Creative Arts."
  },
  {
    icon: Target,
    title: "Future Ready",
    description: "95% of our graduates gain acceptance to universities and tertiary institutions."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-8">
            About Pinetown Girls' High School
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-2 border-primary/10">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-primary">Our Mission</h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  To provide a nurturing environment where young women can achieve their full 
                  potential through academic excellence, character development, and leadership 
                  opportunities that prepare them for success in higher education and beyond.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-primary">Our Vision</h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as a leading educational institution that empowers confident, 
                  capable, and compassionate young women who are prepared to make meaningful 
                  contributions to their communities and the world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* School Motto */}
        <div className="text-center mb-16 py-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl">
          <h3 className="text-3xl font-bold text-primary mb-4">Fortiter In Omne</h3>
          <p className="text-xl text-muted-foreground italic">"Bravely in All Things"</p>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our school motto encapsulates our commitment to fostering courage, determination, 
            and excellence in every aspect of our students' educational journey.
          </p>
        </div>

        {/* Key Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-primary mb-12">
            Why Choose PGHS?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-4">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* History Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">
              A Legacy of Excellence Since 1978
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                For over a century, Pinetown Girls' High School has been at the forefront of 
                quality education in KwaZulu-Natal. Established in 1978, our school has evolved 
                to meet the changing needs of society while maintaining our core values of 
                excellence, integrity, and empowerment.
              </p>
              <p>
                Throughout our rich history, we have graduated thousands of confident young women 
                who have gone on to become leaders in their chosen fields - from medicine and 
                law to business and the arts. Our alumnae continue to make their mark both 
                locally and internationally.
              </p>
              <p>
                Today, we proudly continue this tradition of excellence with modern facilities, 
                innovative teaching methods, and a comprehensive curriculum that prepares our 
                students for the challenges and opportunities of the 21st century.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg">
                Learn More About Our History
              </Button>
              <Button variant="outline" size="lg">
                Meet Our Leadership Team
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1700671562333-f71286a7c748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMGNhbXB1cyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTg5MTQwNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="School Building"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">40+</div>
              <div className="text-sm font-medium">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Leadership Message */}
        <div className="mt-20 bg-secondary rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Message from Our Principal
              </h3>
              <blockquote className="text-lg text-muted-foreground italic mb-4">
                "At PGHS, we believe that every young woman has the potential to achieve 
                greatness. Our role is to provide the guidance, support, and opportunities 
                needed to unlock that potential and prepare our students for a lifetime of 
                success and meaningful contribution to society."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div>
                  <p className="font-semibold text-primary">Mrs. Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Principal</p>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block p-4 bg-primary/10 rounded-full">
                <Users className="h-12 w-12 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}