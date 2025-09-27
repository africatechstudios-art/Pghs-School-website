import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AcademicsSection } from './components/AcademicsSection';
import { SportsSection } from './components/SportsSection';
import { NewsEventsSection } from './components/NewsEventsSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AcademicsSection />
        <SportsSection />
        <NewsEventsSection />
        <AdmissionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}