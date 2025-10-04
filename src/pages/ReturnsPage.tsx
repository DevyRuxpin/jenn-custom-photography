import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';

const ReturnsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Returns & Refunds - Jenn Custom Photography"
        description="Learn about our return and refund policy for photo services and products."
        keywords="returns policy, refunds, photo service returns, jenn custom photography returns"
        url="/returns"
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
                <RotateCcw className="h-16 w-16 text-primary-dark" />
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold font-display text-navy">
                Returns & <span className="text-primary-dark">Refunds</span>
              </h1>
              <p className="text-xl text-navy max-w-3xl mx-auto leading-relaxed">
                We stand behind our work with a satisfaction guarantee.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Policy Overview */}
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
              <h2 className="text-3xl font-bold font-display text-navy text-center">
                Our Satisfaction Guarantee
              </h2>
              <div className="space-y-6 text-navy">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Unlimited Revisions</h3>
                    <p>We provide unlimited revisions until you're completely satisfied with your photos.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary-dark mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">30-Day Money-Back Guarantee</h3>
                    <p>If you're not satisfied with our services, we offer a full refund within 30 days.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <AlertCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Quality Assurance</h3>
                    <p>We maintain the highest quality standards and will redo any work that doesn't meet expectations.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="content-solid-bg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold font-display text-navy text-center">
                How to Request a Return or Refund
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-dark text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-2 text-navy">Contact Us</h3>
                    <p className="text-navy">Email us at support@jenncustomphotography.com with your order details.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-dark text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-2 text-navy">Explain the Issue</h3>
                    <p className="text-navy">Let us know what didn't meet your expectations and how we can fix it.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-dark text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-2 text-navy">Resolution</h3>
                    <p className="text-navy">We'll work with you to resolve the issue through revisions or provide a refund.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReturnsPage;
