import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Globe className="w-6 h-6 text-yellow-400" />
            <h2 className="text-lg font-semibold">EcoConnect</h2>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Empowering communities to achieve the UN's Sustainable Development Goals through collective action.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-yellow-300">About Us</Link></li>
            <li><Link to="/goals" className="hover:text-yellow-300">SDG Goals</Link></li>
            <li><Link to="/events" className="hover:text-yellow-300">Events</Link></li>
            <li><Link to="/volunteer" className="hover:text-yellow-300">Volunteer</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/resources" className="hover:text-yellow-300">Learning Materials</Link></li>
            <li><Link to="/stories" className="hover:text-yellow-300">Success Stories</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:text-yellow-300">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
          <p className="text-sm text-gray-300 mb-4">
            Join our mission to create a sustainable future.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 hover:text-yellow-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 hover:text-yellow-300" />
            </a>
            <a href="https://www.instagram.com/bhavya_soni21?igsh=MW40OHcwZzFsZzdtbA==" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-yellow-300" />
            </a>
            <a href="mailto:bhavya.soni24@gmail.com">
              <Mail className="w-5 h-5 hover:text-yellow-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-green-700 pt-4 text-center text-sm text-gray-300">
        &copy; 2025 EcoConnect. All rights reserved.  
        <br />
        Built with <span className="text-red-400">❤️</span> for a sustainable future.
      </div>
    </footer>
  );
};

export default Footer;
