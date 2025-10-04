import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter,
  ArrowUp
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'Photo Restoration', href: '/services#restoration' },
      { name: 'Photo Editing', href: '/services#editing' },
      { name: 'Creative Design', href: '/services#creative' },
      { name: 'Print Services', href: '/services#printing' },
      { name: 'Portfolio', href: '/portfolio' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Testimonials', href: '/testimonials' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Shipping Info', href: '/shipping' },
      { name: 'Returns', href: '/returns' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' },
    ],
  };

  return (
    <footer className="bg-white border-t-4 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <Link to="/" className="flex items-center space-x-2 group">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl"
                  >
                    <Camera className="h-6 w-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold font-display text-navy">Jenn Custom Photography</h3>
                    <p className="text-navy">Custom Photography</p>
                  </div>
                </Link>
                
                <p className="text-navy text-sm leading-relaxed max-w-md">
                  Transform your memories into stunning works of art. We specialize in photo restoration, 
                  editing, and creative design services that bring your vision to life.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 text-navy">
                    <Mail className="h-4 w-4 text-primary-dark" />
                    <span className="text-sm">hello@photostudio.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-navy">
                    <Phone className="h-4 w-4 text-primary-dark" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-navy">
                    <MapPin className="h-4 w-4 text-primary-dark" />
                    <span className="text-sm">123 Photography St, Creative City, CC 12345</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-navy">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-navy hover:text-primary-dark transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-navy">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-navy hover:text-primary-dark transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-navy">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-navy hover:text-primary-dark transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
            <div className="border-t border-gray-300 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <span className="text-navy text-sm">Follow us:</span>
              <div className="flex items-center space-x-3">
                <a
                  href="#"
                  className="p-2 bg-slate-700 hover:bg-primary-600 rounded-lg transition-colors group"
                >
                  <Instagram className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-slate-700 hover:bg-primary-600 rounded-lg transition-colors group"
                >
                  <Facebook className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-slate-700 hover:bg-primary-600 rounded-lg transition-colors group"
                >
                  <Twitter className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6"
            >
              <p className="text-navy text-sm">
                © 2025 Jenn Custom Photography. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-navy hover:text-primary-dark transition-colors text-xs"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
            >
              <ArrowUp className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
