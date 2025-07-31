import React from 'react';
import { Mail, Phone, Twitter, Linkedin, Shield, FileText } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">SnapSafe</h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              The ultimate offline screenshot tool for IT professionals. Capture, edit, 
              and share securely without external connections, keeping your sensitive 
              information private.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com/snapsafe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/snapsafe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="mailto:support@snapsafe.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>support@snapsafe.com</span>
              </a>
              <a
                href="tel:+18001234567"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+1 (800) 123-4567</span>
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <div className="space-y-3">
              <a
                href="/privacy"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Shield className="w-4 h-4 flex-shrink-0" />
                <span>Privacy Policy</span>
              </a>
              <a
                href="/terms"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FileText className="w-4 h-4 flex-shrink-0" />
                <span>Terms of Use</span>
              </a>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h5 className="font-semibold text-white mb-2">Security First</h5>
                <p className="text-gray-400 text-sm leading-relaxed">
                  SnapSafe operates entirely offline with zero external connections. 
                  Your screenshots and sensitive data never leave your device, ensuring 
                  complete privacy and security compliance.
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {currentYear} SnapSafe. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              <span>Built with security and privacy in mind</span>
              <Shield className="w-4 h-4 text-green-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;