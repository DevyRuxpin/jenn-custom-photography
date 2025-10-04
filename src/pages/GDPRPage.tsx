import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import SEO from '../components/SEO';

const GDPRPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="GDPR Compliance - Jenn Custom Photography"
        description="Learn about our GDPR compliance and your data protection rights under European law."
        keywords="GDPR, data protection, EU privacy law, jenn custom photography GDPR"
        url="/gdpr"
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
                <Shield className="h-16 w-16 text-primary-dark" />
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold font-display text-navy">
                GDPR <span className="text-primary-dark">Compliance</span>
              </h1>
              <p className="text-xl text-navy max-w-3xl mx-auto leading-relaxed">
                Your data protection rights under European law.
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
                  Your Rights Under GDPR
                </h2>
                <p>
                  As a European Union resident, you have specific rights regarding your personal data under the 
                  General Data Protection Regulation (GDPR).
                </p>

                <h2 className="text-3xl font-bold font-display text-navy">
                  Data Protection Rights
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Right to access your personal data</li>
                  <li>Right to rectification of inaccurate data</li>
                  <li>Right to erasure ("right to be forgotten")</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                </ul>

                <h2 className="text-3xl font-bold font-display text-navy">
                  Contact Us
                </h2>
                <p>
                  To exercise any of these rights, please contact us at gdpr@jenncustomphotography.com. 
                  We will respond to your request within 30 days.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GDPRPage;
