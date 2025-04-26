import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-2xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            <span className="cursor-pointer" onClick={() => scrollToSection('home')}>
              DataML.dev
            </span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['home', 'experience', 'projects', 'education', 'certifications', 'contact'].map(item => <button key={item} onClick={() => scrollToSection(item)} className="text-gray-300 hover:text-white capitalize px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {item}
                </button>)}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none">
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-900/95 backdrop-blur-md shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {['home', 'experience', 'projects', 'education', 'certifications', 'contact'].map(item => <button key={item} onClick={() => scrollToSection(item)} className="text-gray-300 hover:text-white block px-3 py-4 rounded-md text-base font-medium w-full text-left capitalize">
              {item}
            </button>)}
        </div>
      </div>
    </nav>;
};
export default Navbar;