import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-8 xl:px-16 flex items-center justify-between">
          <Link to="/" className="flex flex-col items-center group">
            <span className={`font-serif text-3xl font-bold tracking-wider transition-colors duration-300 ${scrolled || mobileMenuOpen ? 'text-charcoal' : 'text-white'}`}>
              Lumière
            </span>
            <span className={`text-[10px] uppercase tracking-[0.3em] font-sans transition-colors duration-300 ${scrolled || mobileMenuOpen ? 'text-gold-400' : 'text-gold-100'}`}>
              Salon
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link text-sm uppercase tracking-widest font-medium ${
                  scrolled ? 'text-charcoal' : 'text-white/90 hover:text-white'
                } ${location.pathname === link.path ? 'opacity-100 font-semibold text-gold-400' : 'opacity-80'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/booking" className={`btn-gold ml-4 text-xs tracking-widest ${!scrolled && 'shadow-none'}`}>
              Book Appointment
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-2xl focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <HiX className="text-charcoal" />
            ) : (
              <HiMenuAlt4 className={scrolled ? 'text-charcoal' : 'text-white'} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center pt-24"
          >
            <nav className="flex flex-col items-center gap-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-serif text-charcoal hover:text-gold-400 transition-colors ${
                    location.pathname === link.path ? 'text-gold-500 italic' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8">
                <Link
                  to="/booking"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-gold text-lg px-12"
                >
                  Book Now
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
