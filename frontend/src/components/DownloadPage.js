import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Download, ArrowLeft, Calendar, Shield, Monitor } from 'lucide-react';

const DownloadPage = () => {
  const { platform } = useParams();
  const navigate = useNavigate();
  const [downloadStarted, setDownloadStarted] = useState(false);

  const platformInfo = {
    windows: {
      title: 'SnapSafe for Windows',
      version: '2.1.0',
      size: '45.2 MB',
      requirements: 'Windows 10 or later',
      icon: Monitor
    },
    macos: {
      title: 'SnapSafe for macOS',
      version: '2.1.0',
      size: '38.7 MB',
      requirements: 'macOS 11.0 or later',
      icon: Monitor
    }
  };

  const currentPlatform = platformInfo[platform] || platformInfo.windows;
  const IconComponent = currentPlatform.icon;

  const handleDownload = () => {
    setDownloadStarted(true);
    // In a real app, this would trigger the actual download
    setTimeout(() => {
      setDownloadStarted(false);
    }, 3000);
  };

  const features = [
    'Complete offline functionality',
    'Advanced editing tools',
    'Customizable hotkeys',
    'Multiple export formats',
    'Zero data collection',
    'Enterprise security features'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 hover:bg-gray-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to SnapSafe
        </Button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-2xl mb-6">
            <IconComponent className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {currentPlatform.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Secure screenshot tool designed for professionals who prioritize data privacy.
          </p>
        </div>

        {/* Download Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Download
              </h2>
              <div className="space-y-3 text-gray-600 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Version: {currentPlatform.version}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Size: {currentPlatform.size}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Requirements: {currentPlatform.requirements}</span>
                </div>
              </div>

              {downloadStarted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                    <div>
                      <p className="font-semibold text-green-800">Download Started!</p>
                      <p className="text-sm text-green-600">Check your downloads folder</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-yellow-800 mb-2">Coming Soon</h3>
                      <p className="text-yellow-700 text-sm mb-4">
                        SnapSafe is currently in final development. Download will be available after release.
                      </p>
                      <Button
                        onClick={handleDownload}
                        className="bg-yellow-600 hover:bg-yellow-700 text-white"
                        disabled={downloadStarted}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Notify Me When Available
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                What's Included
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-3">Installation Guide</h3>
            <ol className="text-sm text-blue-800 space-y-2">
              <li>1. Download the installer</li>
              <li>2. Run as administrator (Windows) or open the DMG (macOS)</li>
              <li>3. Follow the installation wizard</li>
              <li>4. Launch SnapSafe and configure your preferences</li>
            </ol>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="font-semibold text-green-900 mb-3">Need Help?</h3>
            <div className="text-sm text-green-800 space-y-2">
              <p>📧 Email: support@snapsafe.com</p>
              <p>📞 Phone: +1 (800) 123-4567</p>
              <p>📖 Documentation: docs.snapsafe.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;