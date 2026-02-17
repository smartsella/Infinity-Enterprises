
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface/50 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold tracking-tighter mb-4 block">
              <span className="text-gradient">STRATEGIX</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Empowering businesses with AI-driven digital marketing strategies that deliver real results.
            </p>
            <div className="flex gap-4">
              <SocialIcon Icon={Facebook} />
              <SocialIcon Icon={Twitter} />
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Linkedin} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink to="/" text="Home" />
              <FooterLink to="/meta-ads" text="Meta Ads" />
              <FooterLink to="/google-ads" text="Google Ads" />
              <FooterLink to="/contact" text="Contact Us" />
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">AI Meta Ads</li>
              <li className="text-gray-400 text-sm">Google Ads PPC</li>
              <li className="text-gray-400 text-sm">Performance Marketing</li>
              <li className="text-gray-400 text-sm">Analytics & Reporting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={16} className="text-blue-400" />
                <span>hello@strategix.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={16} className="text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-blue-400" />
                <span>123 Innovation Dr, Tech City, TC 90210</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Strategix Digital Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ Icon }) {
  return (
    <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all duration-300">
      <Icon size={16} />
    </a>
  );
}

function FooterLink({ to, text }) {
  return (
    <li>
      <Link to={to} className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
        {text}
      </Link>
    </li>
  );
}
