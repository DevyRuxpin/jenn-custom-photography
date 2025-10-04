import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Eye } from 'lucide-react';
import SEO from '../components/SEO';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Cookie Policy - Jenn Custom Photography"
        description="Learn about how Jenn Custom Photography uses cookies to improve your experience on our website."
        keywords="cookie policy, cookies, website tracking, jenn custom photography cookies"
        url="/cookies"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="content-solid-bg text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex justify-center mb-6">
                <Cookie className="h-16 w-16 text-primary-dark" />
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold font-display text-navy">
                Cookie <span className="text-primary-dark">Policy</span>
              </h1>
              <p className="text-xl text-navy max-w-3xl mx-auto leading-relaxed">
                Learn about how we use cookies to enhance your experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="content-solid-bg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6 text-navy">
                <h2 className="text-3xl font-bold font-display text-navy">
                  What Are Cookies?
                </h2>
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
                </p>

                <h2 className="text-3xl font-bold font-display text-navy">
                  How We Use Cookies
                </h2>
                <p>
                  We use cookies to improve your browsing experience, analyze site traffic, and personalize content. 
                  We do not use cookies to collect personal information without your consent.
                </p>

                <h2 className="text-3xl font-bold font-display text-navy">
                  Managing Cookies
                </h2>
                <p>
                  You can control and manage cookies through your browser settings. However, disabling cookies may affect 
                  the functionality of our website and your user experience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;
