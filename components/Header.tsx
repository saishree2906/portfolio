
import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled || isMobileMenuOpen ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
        {/* Logo */}
        <a href="#about" className="text-2xl font-bold text-indigo-900 tracking-tighter hover:scale-105 transition-transform">
          SAISHREE<span className="text-indigo-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-indigo-700 text-white rounded-full font-bold text-sm hover:bg-indigo-800 transition-all shadow-md shadow-indigo-100 hover:shadow-indigo-200 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-indigo-600 transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 top-[60px] bg-white/95 backdrop-blur-xl z-40 transition-all duration-500 md:hidden ${
        isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6 pb-20">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={closeMobileMenu}
              className="text-2xl font-bold text-slate-800 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={closeMobileMenu}
            className="w-full max-w-xs text-center px-8 py-4 bg-indigo-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-indigo-100"
          >
            Get In Touch
          </a>
          
          <div className="mt-8 flex items-center gap-2 text-indigo-600/50 font-bold uppercase tracking-widest text-xs">
            <Terminal size={14} /> Full Stack Engineer
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
