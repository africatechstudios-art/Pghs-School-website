import React from 'react';
import { Trophy, Users, Target, Medal, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import sportsDay1 from 'figma:asset/44909a3a9d732a711b431f38eee697b2c10bde00.png';
import sportsDay2 from 'figma:asset/25d4fa1f8c1b6c8cd3fe1ba3cb7f464a342c7e3e.png';
import sportsDay3 from 'figma:asset/eb9d27d87c1d7b55979362a4ffaa7fe8366b972b.png';

const sports = [
  { name: 'Netball', season: 'Year-round', level: 'Competitive' },
  { name: 'Hockey', season: 'Winter', level: 'Competitive' },
  { name: 'Tennis', season: 'Summer', level: 'Recreational' },
  { name: 'Swimming', season: 'Summer', level: 'Competitive' },
  { name: 'Athletics', season: 'Summer', level: 'Competitive' },
  { name: 'Cross Country', season: 'Winter', level: 'Recreational' },
  { name: 'Basketball', season: 'Year-round', level: 'Recreational' },
  { name: 'Volleyball', season: 'Winter', level: 'Recreational' }
];

const achievements = [
  {
    icon: Trophy,
    title: 'Regional Champions',
    description: 'Netball First Team - KZN Schools Championships 2024',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    icon: Medal,
    title: 'Swimming Excellence',
    description: '15 Provincial medals at Inter-Schools Swimming Gala',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Target,
    title: 'Athletics Success',
    description: 'Record-breaking performance at District Athletics Meet',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Users,
    title: 'Team Spirit',
    description: 'Outstanding sportsmanship award for house competitions',
    color: 'bg-purple-100 text-purple-600'
  }
];

const houses = [
  { name: 'Apollo', color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { name: 'Diana', color: 'text-green-600', bgColor: 'bg-green-50' },
  { name: 'Jupiter', color: 'text-red-600', bgColor: 'bg-red-50' },
  { name: 'Venus', color: 'text-yellow-600', bgColor: 'bg-yellow-50' }
];

export function SportsSection() {
  return (
    <section id="sports" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Sports & Recreation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fostering excellence, teamwork, and healthy competition through our 
            comprehensive sports programs and house system.
          </p>
        </div>

        {/* Sports Day 2025 Gallery */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-primary mb-4">Sports Day 2025</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Celebrating athletic excellence, house spirit, and community pride at our annual sports day.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={sportsDay1} 
                  alt="Sports Day 2025 - Awards and Trophies"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-2">Victory Celebration</h4>
                <p className="text-muted-foreground text-sm">
                  Celebrating outstanding achievements with trophies, medals, and recognition 
                  for our exceptional athletes across all sporting codes.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={sportsDay2} 
                  alt="Sports Day 2025 - Students Participating"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-2">Active Participation</h4>
                <p className="text-muted-foreground text-sm">
                  Students from all grades coming together in the spirit of healthy competition 
                  and school pride during our annual sports day festivities.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={sportsDay3} 
                  alt="Sports Day 2025 - Apollo House Team"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-2">House Spirit - Apollo</h4>
                <p className="text-muted-foreground text-sm">
                  Apollo House demonstrating incredible team spirit and unity, 
                  showcasing the pride and camaraderie that defines our house system.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              View Full Sports Day Gallery
            </Button>
          </div>
        </div>

        {/* Sports Offered */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-primary mb-12">
            Sports Programs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sports.map((sport, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-3">{sport.name}</h4>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="text-xs">
                      {sport.season}
                    </Badge>
                    <Badge 
                      variant={sport.level === 'Competitive' ? 'default' : 'outline'} 
                      className="text-xs block"
                    >
                      {sport.level}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* House System */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-primary mb-12">
            House System
          </h3>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {houses.map((house, index) => (
              <Card key={index} className={`text-center ${house.bgColor} border-2 hover:shadow-lg transition-shadow duration-300`}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full ${house.bgColor} flex items-center justify-center mx-auto mb-4 border-2 border-current ${house.color}`}>
                    <Users className={`h-8 w-8 ${house.color}`} />
                  </div>
                  <h4 className={`text-xl font-bold ${house.color}`}>{house.name}</h4>
                  <p className="text-sm text-muted-foreground mt-2">House</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our house system promotes healthy competition, leadership development, and school spirit 
              through inter-house competitions, community service projects, and collaborative activities 
              throughout the academic year.
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-primary mb-12">
            Recent Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full ${achievement.color} flex items-center justify-center mx-auto mb-6`}>
                    <achievement.icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-4">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sports Facilities & Contact */}
        <div className="bg-secondary rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                World-Class Sports Facilities
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Multi-purpose sports hall and gymnasium</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>25-meter swimming pool with competitive lanes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Multiple netball and tennis courts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Athletics track and field facilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Hockey fields and practice areas</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="space-y-4">
                <Button size="lg">
                  Join Our Sports Programs
                </Button>
                <Button variant="outline" size="lg" className="block">
                  Contact Sports Department
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  For sports inquiries and tryouts, contact our Sports Department
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}