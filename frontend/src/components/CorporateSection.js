import React from 'react';
import { Button } from './ui/button';
import { Building, Users, Shield, Headphones, Palette, Lock } from 'lucide-react';
import { mockData } from '../mock';

const CorporateSection = ({ onContactClick }) => {
  const corporateIcons = [
    { icon: Building, text: 'Mass deployment support' },
    { icon: Users, text: 'Centralized management' },
    { icon: Shield, text: 'Volume licensing discounts' },
    { icon: Headphones, text: 'Priority technical support' },
    { icon: Palette, text: 'Custom branding options' },
    { icon: Lock, text: 'Advanced security compliance' }
  ];

  return (
    <section id="corporate" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            SnapSafe for Teams and Companies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            SnapSafe offers corporate licenses tailored for teams and organizations. 
            With support for mass deployment and centralized management, SnapSafe ensures 
            your company's sensitive data remains secure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {corporateIcons.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-200">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center lg:text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Secure Your Organization?
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Get a custom quote for your team size and requirements. 
                Our enterprise solutions scale from small teams to large corporations.
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  onClick={onContactClick}
                >
                  <Building className="w-5 h-5 mr-3" />
                  Contact Us for Corporate Licensing
                </Button>
                
                <div className="text-sm text-gray-400 space-y-1">
                  <p>✓ Volume discounts available</p>
                  <p>✓ Custom deployment support</p>
                  <p>✓ Priority technical assistance</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>GDPR Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>ISO 27001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid sm:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-gray-400">Companies Trust SnapSafe</div>
          </div>
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-gray-400">Uptime Guarantee</div>
          </div>
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-400">Enterprise Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;