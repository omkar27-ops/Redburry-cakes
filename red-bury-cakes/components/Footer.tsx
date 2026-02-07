import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-primary font-serif">Red</span>
              <span className="text-2xl font-normal text-text font-serif">Bury Cakes</span>
            </Link>
            <p className="text-text-secondary leading-relaxed max-w-sm">
              Crafting premium artisan cakes for life's most beautiful moments. 
              Designed with elegance, baked with love, and delivered with care.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-text-secondary hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-text-secondary hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="text-text-secondary hover:text-primary transition-colors">Custom Orders</Link></li>
              <li><Link to="/login" className="text-text-secondary hover:text-primary transition-colors">Client Login</Link></li>
              <li><a href="#" className="text-text-secondary hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-text-secondary">
                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                <span>123 Baker Street, Luxury Lane<br />Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3 text-text-secondary">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-text-secondary">
                <Mail className="text-primary shrink-0" size={18} />
                <span>hello@redburycakes.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 text-center text-text-tertiary text-sm">
          <p>© 2025 Red Bury Cakes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;