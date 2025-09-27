import React from 'react';
import { Calendar, Clock, ArrowRight, Pin } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const newsItems = [
  {
    id: 1,
    title: "Matric Class of 2024 Achieves Outstanding Results",
    excerpt: "We are proud to announce that our Matric Class of 2024 has achieved a 100% pass rate with 85% Bachelor passes, reflecting our commitment to academic excellence.",
    date: "2024-12-20",
    category: "Academic News",
    image: "https://images.unsplash.com/photo-1747836130964-a4e5e69ad619?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzdHVkZW50cyUyMGVkdWNhdGlvbiUyMGdyYWR1YXRpb24lMjBzdWNjZXNzfGVufDF8fHx8MTc1ODkxNDA2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isPinned: true
  },
  {
    id: 2,
    title: "Grade 11 Life Sciences Photosynthesis Experiment Success",
    excerpt: "Our Grade 11 Life Sciences students conducted innovative photosynthesis experiments, demonstrating exceptional scientific inquiry and practical skills.",
    date: "2024-12-15",
    category: "Academics",
    image: "https://images.unsplash.com/photo-1573894997713-de07a124df43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzdHVkZW50cyUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc1ODgyMjEzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "Annual Sports Day 2024 - A Day of Excellence",
    excerpt: "Our annual sports day showcased incredible talent and sportsmanship across various disciplines, with record-breaking performances in athletics.",
    date: "2024-12-10",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1573894997713-de07a124df43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzdHVkZW50cyUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc1ODgyMjEzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    title: "Eco Club Environmental Initiative Launch",
    excerpt: "Our Eco Club has launched a comprehensive recycling program and indigenous garden project to promote environmental sustainability on campus.",
    date: "2024-12-05",
    category: "Other",
    image: "https://images.unsplash.com/photo-1573894997713-de07a124df43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzdHVkZW50cyUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc1ODgyMjEzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Grade 8 Open Day 2025",
    date: "2025-01-15",
    time: "09:00 - 12:00",
    location: "School Hall & Grounds",
    description: "Join us for an informative morning showcasing our facilities and academic programs."
  },
  {
    id: 2,
    title: "Parent-Teacher Conferences",
    date: "2025-01-20",
    time: "14:00 - 17:00",
    location: "Various Classrooms",
    description: "Individual meetings to discuss student progress and development."
  },
  {
    id: 3,
    title: "Inter-House Swimming Gala",
    date: "2025-01-25",
    time: "08:00 - 15:00",
    location: "School Pool",
    description: "Annual swimming competition between school houses."
  }
];

export function NewsEventsSection() {
  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Latest News & Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and upcoming events at PGHS.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold text-primary">Recent News</h3>
              <Button variant="outline">
                View All News
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-6">
              {newsItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="grid md:grid-cols-3 gap-0">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                      {item.isPinned && (
                        <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                          <Pin className="h-3 w-3 mr-1" />
                          Pinned
                        </Badge>
                      )}
                    </div>
                    <CardContent className="md:col-span-2 p-6 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">{item.category}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(item.date).toLocaleDateString('en-ZA', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                        </div>
                        <h4 className="text-xl font-semibold text-primary line-clamp-2">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground line-clamp-3">
                          {item.excerpt}
                        </p>
                      </div>
                      <Button variant="ghost" className="self-start mt-4 p-0 h-auto">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold text-primary">Upcoming Events</h3>
              <Button variant="outline" size="sm">
                View Calendar
              </Button>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-md transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h4 className="font-semibold text-primary">{event.title}</h4>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(event.date).toLocaleDateString('en-ZA', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          {new Date(event.date).getDate()}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase">
                          {new Date(event.date).toLocaleDateString('en-ZA', {
                            month: 'short'
                          })}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-start text-muted-foreground">
                        <Pin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                        {event.location}
                      </div>
                      <p className="text-muted-foreground mt-3">
                        {event.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Links */}
            <Card className="mt-8 bg-primary text-primary-foreground">
              <CardHeader>
                <h4 className="font-semibold">Quick Links</h4>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="ghost" className="w-full justify-start text-primary-foreground hover:bg-white/10">
                  Newsletters & Documents
                </Button>
                <Button variant="ghost" className="w-full justify-start text-primary-foreground hover:bg-white/10">
                  Stationery Lists 2025
                </Button>
                <Button variant="ghost" className="w-full justify-start text-primary-foreground hover:bg-white/10">
                  School Calendar
                </Button>
                <Button variant="ghost" className="w-full justify-start text-primary-foreground hover:bg-white/10">
                  Current Vacancies
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}