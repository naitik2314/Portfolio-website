import React from 'react';
import { HeartIcon } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Naitik Shah
            </div>
            <p className="text-gray-400 mt-1 text-sm">
              Data Science & Machine Learning Portfolio
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">
              Home
            </a>
            <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#education" className="text-gray-400 hover:text-white transition-colors">
              Education
            </a>
            <a href="#certifications" className="text-gray-400 hover:text-white transition-colors">
              Certifications
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Naitik Shah. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Built with <HeartIcon size={14} className="text-red-500 mx-1" /> and
            React
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;