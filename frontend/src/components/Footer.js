import React from 'react';
import { Mail, Phone, Twitter, Linkedin, Shield, FileText } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">SnapSafe</h3>
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed max-w-md text-sm sm:text-base">
              The ultimate offline screenshot tool for IT professionals. Capture, edit, 
              and share securely without external connections, keeping your sensitive 
              information private.
            </p>
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://linkedin.com/company/snapsafe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Us</h4>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="mailto:support@snapsafe.com"
                className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="break-all">info@softdab.tech</span>
              </a>
              <a
                href="tel:+18001234567"
                className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>+1 (800) snap-safe</span>
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Legal</h4>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="/privacy"
                className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
              >
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>Privacy Policy</span>
              </a>
              <a
                href="/terms"
                className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
              >
                <FileText className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>Terms of Use</span>
              </a>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="bg-gray-800 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5 sm:mt-1" />
              <div>
                <h5 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">Security First</h5>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  SnapSafe operates entirely offline with zero external connections. 
                  Your screenshots and sensitive data never leave your device, ensuring 
                  complete privacy and security compliance.
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
            <p>
              © {currentYear} SnapSafe(c). All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              <span>Built with security and privacy in mind</span>
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;