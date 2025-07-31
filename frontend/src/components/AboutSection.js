import React from 'react';
import { Shield, Users, Code, Building2 } from 'lucide-react';

const AboutSection = () => {
  const targetUsers = [
    {
      title: 'IT Professionals',
      description: 'Securely share screenshots during troubleshooting or documentation without compromising sensitive data.',
      icon: Shield,
      color: 'text-blue-600'
    },
    {
      title: 'Developers & Testers',
      description: 'Document bugs and share annotated screenshots with your team while maintaining security standards.',
      icon: Code,
      color: 'text-green-600'
    },
    {
      title: 'Companies',
      description: 'Protect sensitive data and comply with strict privacy standards across your entire organization.',
      icon: Building2,
      color: 'text-purple-600'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
            What is SnapSafe?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 px-2">
              SnapSafe is a cross-platform screenshot tool designed for IT professionals, 
              developers, and companies that prioritize data privacy. It works entirely offline, 
              ensuring your sensitive information stays protected while providing powerful 
              editing tools for your screenshots.
            </p>
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-blue-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
              <div className="icon-container">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              </div>
              <span className="font-semibold text-blue-900 text-sm sm:text-base">
                100% Offline • Zero External Connections • Complete Privacy
              </span>
            </div>
          </div>
        </div>

        {/* Who is SnapSafe for? */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Who is SnapSafe for?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {targetUsers.map((user, index) => {
              const IconComponent = user.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group text-center sm:text-left"
                >
                  <div className={`feature-icon-container w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-md mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 ${user.color}`} />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {user.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {user.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Security Promise */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="feature-icon-container w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full mb-4 sm:mb-6">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Your Data Never Leaves Your Device
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Unlike cloud-based screenshot tools, SnapSafe operates entirely on your local machine. 
              No uploads, no external servers, no data breaches. Your screenshots and sensitive 
              information remain under your complete control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;