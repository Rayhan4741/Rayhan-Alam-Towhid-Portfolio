'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ResumeModal from '../components/ResumeModal';

export default function HomePage() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 flex flex-col justify-between">
      {/* Top Responsive Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Portfolio Sections */}
      <main className="flex-1">
        {/* Section 1 & 2 & 3 & 4: Hero with Intro, Designation, Photo, Resume Download & Socials */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Section 5: About Me (Programming journey, work enjoyed, hobbies, personality) */}
        <About />

        {/* Section 6: Skills (Graphical format, categorized) */}
        <Skills />

        {/* Section 7: Educational Qualification (Above HSC & HSC details) */}
        <Education />

        {/* Section 8: Work Experience (Professional career timeline) */}
        <Experience />

        {/* Section 9: Featured Projects (Card format with View More / Details buttons) */}
        <Projects />

        {/* Section 10: Contact Information (Email, Phone, WhatsApp, Form) */}
        <Contact />
      </main>

      {/* Section 11: Elegant Footer */}
      <Footer />

      {/* Interactive Resume Modal for viewing / single-click download */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

