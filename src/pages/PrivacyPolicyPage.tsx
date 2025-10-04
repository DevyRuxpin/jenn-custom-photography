import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, FileText } from 'lucide-react';
import SEO from '../components/SEO';

const PrivacyPolicyPage: React.FC = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: <FileText className="h-6 w-6" />,
      content: [
        "Personal Information: Name, email address, phone number, and billing information",
        "Photos and Images: Photos you upload for restoration, editing, or design services",
        "Communication Data: Messages, emails, and other communications with our team",
        "Usage Data: Information about how you use our website and services",
        "Technical Data: IP address, browser type, device information, and cookies"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <Eye className="h-6 w-6" />,
      content: [
        "Provide and deliver our photo restoration and editing services",
        "Process payments and manage your account",
        "Communicate with you about your projects and our services",
        "Improve our website, services, and customer experience",
        "Comply with legal obligations and protect our rights",
        "Send you updates about our services (with your consent)"
      ]
    },
    {
      title: "Information Sharing",
      icon: <Shield className="h-6 w-6" />,
      content: [
        "We do not sell, trade, or rent your personal information to third parties",
        "We may share information with trusted service providers who assist us in operating our business",
        "We may disclose information when required by law or to protect our rights",
        "Your photos are kept strictly confidential and are never shared without your explicit consent"
      ]
    },
    {
      title: "Data Security",
      icon: <Lock className="h-6 w-6" />,
      content: [
        "We implement industry-standard security measures to protect your information",
        "All data is encrypted during transmission and storage",
        "Access to your personal information is restricted to authorized personnel only",
        "We regularly review and update our security practices"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Privacy Policy - Jenn Custom Photography"
        description="Learn how Jenn Custom Photography protects your privacy and handles your personal information and photos with the highest security standards."
        keywords="privacy policy, data protection, photo privacy, jenn custom photography privacy"
        url="/privacy"
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
                Privacy <span className="text-primary-dark">Policy</span>
              </h1>
              <p className="text-xl text-navy max-w-3xl mx-auto leading-relaxed">
                Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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
                Our Commitment to Your Privacy
              </h2>
              <div className="space-y-4 text-navy leading-relaxed">
                <p>
                  At Jenn Custom Photography, we are committed to protecting your privacy and ensuring the security 
                  of your personal information and photos. This Privacy Policy explains how we collect, use, disclose, 
                  and safeguard your information when you use our services.
                </p>
                <p>
                  We understand that your photos are precious memories, and we treat them with the utmost care and 
                  confidentiality. This policy applies to all information collected through our website and services.
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
                  Your Rights and Choices
                </h2>
                <div className="space-y-4 text-navy">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Request a copy of your data</li>
                    <li>Withdraw consent for data processing</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold font-display text-navy mb-6">
                  Cookies and Tracking
                </h2>
                <div className="space-y-4 text-navy">
                  <p>
                    We use cookies and similar tracking technologies to improve your experience on our website. 
                    You can control cookie settings through your browser preferences.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold font-display text-navy mb-6">
                  Changes to This Policy
                </h2>
                <div className="space-y-4 text-navy">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes 
                    by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold font-display text-navy mb-6">
                  Contact Us
                </h2>
                <div className="space-y-4 text-navy">
                  <p>
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p><strong>Email:</strong> privacy@jenncustomphotography.com</p>
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

export default PrivacyPolicyPage;
