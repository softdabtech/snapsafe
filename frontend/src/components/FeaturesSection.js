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
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful tools designed with security and productivity in mind. 
            Everything you need for professional screenshot management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div 
                key={feature.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect indicator */}
                <div className="mt-6 h-1 w-0 bg-blue-600 rounded-full group-hover:w-full transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Additional Feature Highlights */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Professional Editing Suite
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Blur sensitive information with precision</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Add arrows, text, and callouts</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Crop and resize with pixel precision</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Multiple export formats and quality settings</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Enterprise-Ready Security
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>No network connections required</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Local storage with encryption options</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Compliance with data protection regulations</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
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