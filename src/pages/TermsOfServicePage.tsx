import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';

const TermsOfServicePage: React.FC = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: <FileText className="h-6 w-6" />,
      content: [
        "By accessing and using Jenn Custom Photography services, you accept and agree to be bound by these Terms of Service",
        "If you do not agree to these terms, please do not use our services",
        "We reserve the right to update these terms at any time, and continued use constitutes acceptance of changes"
      ]
    },
    {
      title: "Services Description",
      icon: <Scale className="h-6 w-6" />,
      content: [
        "We provide photo restoration, editing, creative design, and printing services",
        "All services are provided on a project basis with specific timelines and deliverables",
        "We reserve the right to refuse service for any reason, including inappropriate or illegal content",
        "Service quality is guaranteed, and we provide unlimited revisions until satisfaction"
      ]
    },
    {
      title: "User Responsibilities",
      icon: <Shield className="h-6 w-6" />,
      content: [
        "You must own or have permission to use all photos you submit for our services",
        "You are responsible for providing accurate information and timely responses",
        "You agree not to submit illegal, offensive, or copyrighted material without permission",
        "You must provide clear instructions and requirements for your projects"
      ]
    },
    {
      title: "Payment and Billing",
      icon: <AlertCircle className="h-6 w-6" />,
      content: [
        "Payment is required before work begins on your project",
        "We accept major credit cards, PayPal, and bank transfers",
        "All prices are in USD unless otherwise specified",
        "Rush services may incur additional fees",
        "Refunds are provided only if we cannot deliver the agreed-upon service"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Terms of Service - Jenn Custom Photography"
        description="Read the terms and conditions for using Jenn Custom Photography's photo restoration and editing services."
        keywords="terms of service, terms and conditions, jenn custom photography terms, service agreement"
        url="/terms"
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
                <FileText className="h-16 w-16 text-primary-dark" />
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold font-display text-navy">
                Terms of <span className="text-primary-dark">Service</span>
              </h1>
              <p className="text-xl text-navy max-w-3xl mx-auto leading-relaxed">
                Please read these terms carefully before using our services.
              </p>
              <p className="text-sm text-navy">
                Last updated: January 2025
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="content-solid-bg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold font-display text-navy">
                Agreement to Terms
              </h2>
              <div className="space-y-4 text-navy leading-relaxed">
                <p>
                  These Terms of Service ("Terms") govern your use of Jenn Custom Photography's website and services. 
                  By accessing our website or using our services, you agree to be bound by these Terms.
                </p>
                <p>
                  If you disagree with any part of these terms, then you may not access our services. 
                  These Terms apply to all visitors, users, and others who access or use our services.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="content-solid-bg"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold font-display text-navy">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3 text-navy">
                      <span className="flex-shrink-0 w-2 h-2 bg-primary-dark rounded-full mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="content-solid-bg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold font-display text-navy mb-6">
                  Intellectual Property Rights
                </h2>
                <div className="space-y-4 text-navy">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>You retain ownership of your original photos</li>
                    <li>We retain the right to use your photos only for the purpose of providing our services</li>
                    <li>You grant us a limited license to process and edit your photos as requested</li>
                    <li>We will not use your photos for marketing purposes without your explicit consent</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold font-display text-navy mb-6">
                  Limitation of Liability
                </h2>
                <div className="space-y-4 text-navy">
                  <p>
                    Jenn Custom Photography shall not be liable for any indirect, incidental, special, consequential, 
                    or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other 
                    intangible losses.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold font-display text-navy mb-6">
                  Dispute Resolution
                </h2>
                <div className="space-y-4 text-navy">
                  <p>
                    Any disputes arising from these Terms or our services shall be resolved through binding arbitration 
                    in accordance with the rules of the American Arbitration Association.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold font-display text-navy mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4 text-navy">
                  <p>
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p><strong>Email:</strong> legal@jenncustomphotography.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Address:</strong> 123 Photography Street, Creative City, CC 12345</p>
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

export default TermsOfServicePage;
