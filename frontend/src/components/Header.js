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
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">SnapSafe</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {mockData.navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-sm xl:text-base"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop Download Buttons */}
          <div className="hidden lg:flex space-x-2 xl:space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-200 text-xs xl:text-sm"
              onClick={() => window.open('/download/windows', '_blank')}
            >
              <Download className="w-3 h-3 mr-1 xl:w-4 xl:h-4 xl:mr-2" />
              Windows
            </Button>
            <Button 
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 shadow-lg hover:shadow-xl text-xs xl:text-sm"
              onClick={() => window.open('/download/macos', '_blank')}
            >
              <Download className="w-3 h-3 mr-1 xl:w-4 xl:h-4 xl:mr-2" />
              macOS
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 p-2"
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-3 space-y-2 bg-white/95 backdrop-blur-sm">
            {mockData.navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors duration-200 rounded-lg mx-2"
              >
                {item.name}
              </button>
            ))}
            <div className="flex flex-col space-y-3 px-3 pt-3 border-t border-gray-200 mt-3">
              <Button 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full"
                onClick={() => {
                  window.open('/download/windows', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download for Windows
              </Button>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                onClick={() => {
                  window.open('/download/macos', '_blank');
                  setIsMenuOpen(false);
                }}
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