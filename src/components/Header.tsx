import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  Menu, 
  X, 
  ShoppingBag, 
  User,
  Search,
  Heart
} from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import Cart from './Cart';
import AuthModal from './AuthModal';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();
  const { state: authState } = useAuth();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Photography', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Custom Order', href: '/custom-order' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 glass-elite border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="p-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl"
            >
              <Camera className="h-6 w-6 text-white" />
            </motion.div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-navy font-display">
                Jenn Custom Photography
              </h1>
              <p className="text-xs text-luxury hidden sm:block">
                Professional Photography Services
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary-dark font-bold'
                    : 'text-navy hover:text-primary-dark'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary-100 rounded-lg -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-slate-600 hover:text-primary-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-slate-600 hover:text-primary-600 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-slate-600 hover:text-primary-600 transition-colors relative"
            >
              <ShoppingBag className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
            {authState.isAuthenticated ? (
              <Link
                to="/account"
                className="p-2 text-slate-600 hover:text-primary-600 transition-colors relative"
              >
                <User className="h-5 w-5" />
                {authState.user && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </Link>
            ) : (
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="p-2 text-slate-600 hover:text-primary-600 transition-colors"
              >
                <User className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-primary-600 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-white/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-slate-700 hover:text-primary-600 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Actions */}
              <div className="pt-4 border-t border-white/20 flex items-center justify-around">
                <button className="flex flex-col items-center space-y-1 p-2 text-slate-600 hover:text-primary-600 transition-colors">
                  <Search className="h-5 w-5" />
                  <span className="text-xs">Search</span>
                </button>
                <button className="flex flex-col items-center space-y-1 p-2 text-slate-600 hover:text-primary-600 transition-colors">
                  <Heart className="h-5 w-5" />
                  <span className="text-xs">Wishlist</span>
                </button>
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="flex flex-col items-center space-y-1 p-2 text-slate-600 hover:text-primary-600 transition-colors relative"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span className="text-xs">Cart</span>
                  {getTotalItems() > 0 && (
                    <span className="absolute top-0 right-0 bg-primary-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </button>
                {authState.isAuthenticated ? (
                  <Link
                    to="/account"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex flex-col items-center space-y-1 p-2 text-slate-600 hover:text-primary-600 transition-colors"
                  >
                    <User className="h-5 w-5" />
                    <span className="text-xs">Account</span>
                  </Link>
                ) : (
                  <button 
                    onClick={() => {
                      setIsAuthModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="flex flex-col items-center space-y-1 p-2 text-slate-600 hover:text-primary-600 transition-colors"
                  >
                    <User className="h-5 w-5" />
                    <span className="text-xs">Sign In</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

          {/* Cart Component */}
          <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          
          {/* Auth Modal */}
          <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </motion.header>
  );
};

export default Header;
