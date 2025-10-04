import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Clock, Globe, Shield } from 'lucide-react';
import SEO from '../components/SEO';

const ShippingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Shipping Information - Jenn Custom Photography"
        description="Learn about our shipping options, delivery times, and international shipping for photo prints and products."
        keywords="shipping info, delivery times, international shipping, photo prints shipping"
        url="/shipping"
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
                <Truck className="h-16 w-16 text-primary-dark" />
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold font-display text-navy">
                Shipping <span className="text-primary-dark">Information</span>
              </h1>
              <p className="text-xl text-navy max-w-3xl mx-auto leading-relaxed">
                Fast, secure shipping for all your photo prints and products.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="content-solid-bg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center space-y-16"
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold font-display text-navy">
                  Shipping Options
                </h2>
                <p className="text-xl text-navy max-w-3xl mx-auto">
                  Choose the shipping method that works best for you.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Standard Shipping",
                    icon: <Truck className="h-8 w-8" />,
                    time: "3-7 business days",
                    cost: "$9.99",
                    description: "Reliable ground shipping for most locations"
                  },
                  {
                    title: "Express Shipping",
                    icon: <Clock className="h-8 w-8" />,
                    time: "1-3 business days",
                    cost: "$19.99",
                    description: "Fast delivery for urgent orders"
                  },
                  {
                    title: "International",
                    icon: <Globe className="h-8 w-8" />,
                    time: "7-14 business days",
                    cost: "Varies",
                    description: "Worldwide shipping available"
                  }
                ].map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-container-solid text-center shadow-lg"
                  >
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white shadow-lg">
                        {option.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-navy">{option.title}</h3>
                    <p className="text-2xl font-bold text-primary-dark mb-2">{option.cost}</p>
                    <p className="text-navy mb-4">{option.time}</p>
                    <p className="text-navy text-sm">{option.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
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
                Important Shipping Information
              </h2>
              <div className="space-y-6 text-navy">
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary-dark mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Secure Packaging</h3>
                    <p>All prints are carefully packaged to prevent damage during shipping.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary-dark mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Processing Time</h3>
                    <p>Allow 2-3 business days for order processing before shipping.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="h-6 w-6 text-primary-dark mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">International Orders</h3>
                    <p>Customs duties and taxes may apply to international shipments.</p>
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

export default ShippingPage;
