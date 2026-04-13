import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaPinterestP, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-8 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col">
            <Link to="/" className="flex flex-col items-start group mb-6">
              <span className="font-serif text-3xl font-bold tracking-wider text-white">
                Lumière
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-gold-400">
                Salon & Spa
              </span>
            </Link>
            <p className="text-beige-300 text-sm leading-relaxed mb-6 max-w-sm">
              An exclusive sanctuary where luxury aesthetic meets artful beauty. Experience the gold standard of care.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center text-beige-300 hover:bg-gold-400 hover:text-charcoal hover:border-gold-400 transition-all">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center text-beige-300 hover:bg-gold-400 hover:text-charcoal hover:border-gold-400 transition-all">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center text-beige-300 hover:bg-gold-400 hover:text-charcoal hover:border-gold-400 transition-all">
                <FaPinterestP />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gold-400/30 flex items-center justify-center text-beige-300 hover:bg-gold-400 hover:text-charcoal hover:border-gold-400 transition-all">
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-medium mb-6 text-gold-300 tracking-wide">Explore</h4>
            <ul className="flex flex-col gap-3 font-sans text-sm text-beige-300">
              <li><Link to="/about" className="hover:text-gold-400 transition-colors">Our Story</Link></li>
              <li><Link to="/services" className="hover:text-gold-400 transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="hover:text-gold-400 transition-colors">Client Gallery</Link></li>
              <li><Link to="/pricing" className="hover:text-gold-400 transition-colors">Pricing Options</Link></li>
              <li><Link to="/contact" className="hover:text-gold-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-xl font-medium mb-6 text-gold-300 tracking-wide">Services</h4>
            <ul className="flex flex-col gap-3 font-sans text-sm text-beige-300">
              <li><Link to="/services" className="hover:text-gold-400 transition-colors">Hair Styling & Color</Link></li>
              <li><Link to="/services" className="hover:text-gold-400 transition-colors">Bridal Makeup</Link></li>
              <li><Link to="/services" className="hover:text-gold-400 transition-colors">Skincare & Facials</Link></li>
              <li><Link to="/services" className="hover:text-gold-400 transition-colors">Nail Enhancements</Link></li>
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="font-serif text-xl font-medium mb-6 text-gold-300 tracking-wide">Visit Us</h4>
            <div className="font-sans text-sm text-beige-300 flex flex-col gap-4">
              <p>
                123 Luxury Avenue, Suite 100<br/>
                Beverly Hills, CA 90210
              </p>
              <p>
                <span className="text-gold-400 font-medium tracking-widest uppercase text-xs">Tue - Sat:</span><br/>
                10:00 AM - 7:00 PM
              </p>
              <p>
                <a href="mailto:hello@lumieresalon.com" className="hover:text-gold-400 transition-colors block">hello@lumieresalon.com</a>
                <a href="tel:+13105550198" className="hover:text-gold-400 transition-colors block">+1 (310) 555-0198</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between font-sans text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Lumière Salon. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
