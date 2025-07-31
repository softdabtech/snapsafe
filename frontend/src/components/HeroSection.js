import React from 'react';
import { Button } from './ui/button';
import { Download, Shield, Building } from 'lucide-react';

const HeroSection = ({ onCorporateClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 border border-blue-600 rounded-full"></div>
        <div className="absolute top-40 sm:top-60 right-16 sm:right-32 w-12 h-12 sm:w-24 sm:h-24 border border-gray-400 rounded-full"></div>
        <div className="absolute bottom-20 sm:bottom-40 left-1/4 sm:left-1/3 w-8 h-8 sm:w-16 sm:h-16 border border-blue-600 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            SnapSafe
            <span className="block text-2xl sm:text-3xl md:text-4xl font-medium text-blue-600 mt-2">
              Secure Screenshot Tool
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-2">
            Capture your screen, edit with ease, and share securely. 
            <span className="block mt-2 font-semibold text-gray-900">
              No external connections, no risks — just local storage and complete privacy.
            </span>
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
            <Button 
              size="lg" 
              className="download-button download-button-primary text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto relative overflow-hidden"
              onClick={() => window.open('/download/windows', '_blank')}
            >
              <div className="download-indicator mobile-icon-center">
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                <span>Download for Windows</span>
              </div>
              <div className="absolute top-1 right-2 text-xs opacity-75">
                <span className="bg-white/20 px-2 py-1 rounded-full">Official</span>
              </div>
            </Button>
            
            <Button 
              size="lg" 
              className="download-button download-button-secondary text-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto relative overflow-hidden"
              onClick={() => window.open('/download/macos', '_blank')}
            >
              <div className="download-indicator mobile-icon-center">
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                <span>Download for macOS</span>
              </div>
              <div className="absolute top-1 right-2 text-xs opacity-75">
                <span className="bg-blue-600/20 text-blue-800 px-2 py-1 rounded-full">Official</span>
              </div>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              onClick={onCorporateClick}
            >
              <div className="mobile-icon-center">
                <Building className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                <span>Corporate License</span>
              </div>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm text-gray-500 px-4">
            <div className="mobile-icon-text">
              <Shield className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>100% Offline</span>
            </div>
            <div className="mobile-icon-text">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span>Zero Data Collection</span>
            </div>
            <div className="mobile-icon-text">
              <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <span>Cross-Platform</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;