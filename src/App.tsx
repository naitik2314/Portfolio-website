import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
export function App() {
  return <div className="bg-gray-900 text-gray-100 min-h-screen w-full">
      <Navbar />
      <main className="w-full">
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>;
}