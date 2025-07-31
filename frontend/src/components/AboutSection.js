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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            What is SnapSafe?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              SnapSafe is a cross-platform screenshot tool designed for IT professionals, 
              developers, and companies that prioritize data privacy. It works entirely offline, 
              ensuring your sensitive information stays protected while providing powerful 
              editing tools for your screenshots.
            </p>
            <div className="inline-flex items-center gap-3 bg-blue-50 px-6 py-3 rounded-full">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-blue-900">
                100% Offline • Zero External Connections • Complete Privacy
              </span>
            </div>
          </div>
        </div>

        {/* Who is SnapSafe for? */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Who is SnapSafe for?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {targetUsers.map((user, index) => {
              const IconComponent = user.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-7 h-7 ${user.color}`} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {user.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {user.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Security Promise */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Your Data Never Leaves Your Device
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
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