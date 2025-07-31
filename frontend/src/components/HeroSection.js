import React from 'react';
import { Download, Shield, Building, Monitor, Apple } from 'lucide-react';

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
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
            {/* Windows Download Button */}
            <button
              className="download-button download-button-windows relative px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 w-full sm:w-auto shadow-lg"
              onClick={() => window.open('/download/windows', '_blank')}
            >
              <div className="download-button-content">
                <Monitor className="download-icon w-5 h-5" />
                <span className="button-text">
                  Download for Windows
                </span>
              </div>
            </button>
            
            {/* macOS Download Button */}
            <button
              className="download-button download-button-macos relative px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 w-full sm:w-auto shadow-lg"
              onClick={() => window.open('/download/macos', '_blank')}
            >
              <div className="download-button-content">
                <Apple className="download-icon w-5 h-5" />
                <span className="button-text">
                  Download for macOS
                </span>
              </div>
            </button>
            
            {/* Corporate License Button */}
            <button
              className="download-button download-button-corporate relative px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 w-full sm:w-auto shadow-lg"
              onClick={onCorporateClick}
            >
              <div className="download-button-content">
                <Building className="download-icon w-5 h-5" />
                <span className="button-text">
                  Corporate License
                </span>
              </div>
            </button>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-8 text-sm text-gray-500 px-4">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Shield className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span className="font-medium">100% Offline</span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="font-medium">Zero Data Collection</span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <span className="font-medium">Cross-Platform</span>
            </div>
          </div>

          {/* Download Stats */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-2">
              Trusted by over <span className="font-bold text-blue-600">50,000+</span> professionals worldwide
            </p>
            <div className="flex justify-center items-center gap-4 text-xs text-gray-400">
              <span>★★★★★ 4.9/5 Rating</span>
              <span>•</span>
              <span>Free Download</span>
              <span>•</span>
              <span>No Registration Required</span>
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