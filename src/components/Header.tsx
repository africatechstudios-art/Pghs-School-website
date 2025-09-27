import React, { useState } from 'react';
import { Menu, X, Search, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import pghsLogo from 'figma:asset/0b1c89d92df9b1f4c0d9017f0e6fe1d8dde4f400.png';

const navigationItems = [
  {
    title: 'Home',
    href: '#home'
  },
  {
    title: 'About Us',
    href: '#about',
    submenu: [
      { title: 'Mission & Vision', href: '#mission' },
      { title: 'History', href: '#history' },
      { title: 'Staff & Leadership', href: '#staff' },
      { title: 'Governance (SGB)', href: '#governance' },
      { title: 'Code of Conduct', href: '#conduct' }
    ]
  },
  {
    title: 'Academics',
    href: '#academics',
    submenu: [
      { title: 'Departments', href: '#departments' },
      { title: 'Curriculum', href: '#curriculum' },
      { title: 'Academic News', href: '#academic-news' },
      { title: 'Subject Resources', href: '#resources' }
    ]
  },
  {
    title: 'Sports',
    href: '#sports'
  },
  {
    title: 'Events & News',
    href: '#events'
  },
  {
    title: 'Admissions',
    href: '#admissions'
  },
  {
    title: 'Contact',
    href: '#contact'
  }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+27 31 701 3251</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span className="text-sm">info@pghs.co.za</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/10">
              <Search className="h-4 w-4 mr-2" />
              
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <img 
                src={pghsLogo} 
                alt="Pinetown Girls' High School Logo" 
                className="h-16 w-16 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-primary">
                  Pinetown Girl's High School
                </h1>
                <p className="text-sm text-muted-foreground">
                  School of Excellence • Fortiter In Omne
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.title} className="relative group">
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 flex items-center"
                  >
                    {item.title}
                  </a>
                  {item.submenu && (
                    <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2 z-50">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-secondary hover:text-primary transition-colors"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex items-center space-x-2 mb-8">
                  <img 
                    src={pghsLogo} 
                    alt="Pinetown Girls' High School Logo" 
                    className="h-12 w-12 object-contain"
                  />
                  <div>
                    <h2 className="font-bold text-primary">PGHS</h2>
                    <p className="text-xs text-muted-foreground">School of Excellence</p>
                  </div>
                </div>
                <nav className="space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.title}>
                      <a
                        href={item.href}
                        className="block py-2 text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </a>
                      {item.submenu && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.title}
                              href={subItem.href}
                              className="block py-1 text-sm text-gray-600 hover:text-primary transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}