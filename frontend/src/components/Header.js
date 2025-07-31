import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Download } from 'lucide-react';
import { mockData } from '../mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">SnapSafe</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {mockData.navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop Download Buttons */}
          <div className="hidden md:flex space-x-3">
            <Button 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-200"
              onClick={() => window.open('/download/windows', '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Windows
            </Button>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={() => window.open('/download/macos', '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              macOS
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-4">
            {mockData.navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <div className="flex flex-col space-y-2 px-3 pt-4 border-t border-gray-200">
              <Button 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
                onClick={() => window.open('/download/windows', '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download for Windows
              </Button>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.open('/download/macos', '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download for macOS
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;