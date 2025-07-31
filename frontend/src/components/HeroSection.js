import React from 'react';
import { Button } from './ui/button';
import { Download, Shield, Building } from 'lucide-react';

const HeroSection = ({ onCorporateClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-600 rounded-full"></div>
        <div className="absolute top-60 right-32 w-24 h-24 border border-gray-400 rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-16 h-16 border border-blue-600 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            SnapSafe
            <span className="block text-3xl md:text-4xl font-medium text-blue-600 mt-2">
              Secure Screenshot Tool
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Capture your screen, edit with ease, and share securely. 
            <span className="block mt-2 font-semibold text-gray-900">
              No external connections, no risks — just local storage and complete privacy.
            </span>
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => window.open('/download/windows', '_blank')}
            >
              <Download className="w-5 h-5 mr-3" />
              Download for Windows
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('/download/macos', '_blank')}
            >
              <Download className="w-5 h-5 mr-3" />
              Download for macOS
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={onCorporateClick}
            >
              <Building className="w-5 h-5 mr-3" />
              Corporate License
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-600" />
              <span>100% Offline</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span>Zero Data Collection</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <span>Cross-Platform</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;