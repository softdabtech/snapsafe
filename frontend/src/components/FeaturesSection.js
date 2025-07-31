import React from 'react';
import { Shield, Edit, Keyboard, FileImage, Monitor, HardDrive } from 'lucide-react';
import { mockData } from '../mock';

const FeaturesSection = () => {
  const iconMap = {
    Shield,
    Edit,
    Keyboard,
    FileImage,
    Monitor,
    HardDrive
  };

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Key Features
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Powerful tools designed with security and productivity in mind. 
            Everything you need for professional screenshot management.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {mockData.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div 
                key={feature.id}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
              >
                <div className="mobile-feature-icon w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center sm:text-left">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-center sm:text-left">
                  {feature.description}
                </p>

                {/* Hover effect indicator */}
                <div className="mt-4 sm:mt-6 h-1 w-0 bg-blue-600 rounded-full group-hover:w-full transition-all duration-300 mx-auto sm:mx-0"></div>
              </div>
            );
          })}
        </div>

        {/* Additional Feature Highlights */}
        <div className="mt-12 sm:mt-16 grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center sm:text-left">
              Professional Editing Suite
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
              <li className="mobile-icon-text">
                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                <span>Blur sensitive information with precision</span>
              </li>
              <li className="mobile-icon-text">
                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                <span>Add arrows, text, and callouts</span>
              </li>
              <li className="mobile-icon-text">
                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                <span>Crop and resize with pixel precision</span>
              </li>
              <li className="mobile-icon-text">
                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                <span>Multiple export formats and quality settings</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center sm:text-left">
              Enterprise-Ready Security
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
              <li className="mobile-icon-text">
                <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                <span>No network connections required</span>
              </li>
              <li className="mobile-icon-text">
                <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                <span>Local storage with encryption options</span>
              </li>
              <li className="mobile-icon-text">
                <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                <span>Compliance with data protection regulations</span>
              </li>
              <li className="mobile-icon-text">
                <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                <span>Audit trail and logging capabilities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;