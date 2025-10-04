import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import { OrderProvider } from './contexts/OrderContext';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import PortfolioPage from './pages/PortfolioPage';
import CustomOrderPage from './pages/CustomOrderPage';
import AccountPage from './pages/AccountPage';
import OrderTrackingPage from './pages/OrderTrackingPage';
import AdminDashboard from './pages/AdminDashboard';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TestimonialsPage from './pages/TestimonialsPage';
import FAQPage from './pages/FAQPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ShippingPage from './pages/ShippingPage';
import ReturnsPage from './pages/ReturnsPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import GDPRPage from './pages/GDPRPage';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <AuthProvider>
        <OrderProvider>
          <CartProvider>
            <BrowserRouter 
              future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true
              }}
            >
              <div className="min-h-screen flex flex-col">
                <Header />
                
                <main className="flex-1">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                        <Routes>
                          <Route path="/" element={<HomePage />} />
                          <Route path="/products" element={<ProductsPage />} />
                          <Route path="/products/:handle" element={<ProductDetailPage />} />
                          <Route path="/portfolio" element={<PortfolioPage />} />
                          <Route path="/custom-order" element={<CustomOrderPage />} />
                          <Route path="/account" element={<AccountPage />} />
                          <Route path="/orders/:orderId" element={<OrderTrackingPage />} />
                          <Route path="/admin" element={<AdminDashboard />} />
                          <Route path="/services" element={<ServicesPage />} />
                          <Route path="/about" element={<AboutPage />} />
                          <Route path="/contact" element={<ContactPage />} />
                          <Route path="/testimonials" element={<TestimonialsPage />} />
                          <Route path="/faq" element={<FAQPage />} />
                          <Route path="/privacy" element={<PrivacyPolicyPage />} />
                          <Route path="/terms" element={<TermsOfServicePage />} />
                          <Route path="/shipping" element={<ShippingPage />} />
                          <Route path="/returns" element={<ReturnsPage />} />
                          <Route path="/cookies" element={<CookiePolicyPage />} />
                          <Route path="/gdpr" element={<GDPRPage />} />
                        </Routes>
                  </motion.div>
                </main>
                
                <Footer />
              </div>
            </BrowserRouter>
          </CartProvider>
        </OrderProvider>
      </AuthProvider>
    </HelmetProvider>
  );
};

export default App;
