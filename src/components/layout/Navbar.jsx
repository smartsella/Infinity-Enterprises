
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Meta Ads', path: '/meta-ads' },
    { name: 'Google Ads', path: '/google-ads' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/70 backdrop-blur-xl border-b border-white/5 shadow-2xl py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <span className="text-gradient">STRATEGIX</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                location.pathname === link.path ? 'text-blue-400' : 'text-gray-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="primary" to="/contact" className="!py-2 !px-4 text-sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-blue-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-medium ${
                location.pathname === link.path ? 'text-blue-400' : 'text-gray-300'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="primary" to="/contact" onClick={() => setIsOpen(false)}>
            Get Started <ChevronRight size={16} className="ml-1" />
          </Button>
        </div>
      )}
    </nav>
  );
}
