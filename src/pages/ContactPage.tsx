import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Clock,
  MessageCircle,
  Upload,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    files: null as FileList | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, files: e.target.files }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      details: 'hello@jenncustomphotography.com',
      subtitle: 'We respond within 24 hours'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Visit Us',
      details: '123 Photography Street',
      subtitle: 'Creative City, CC 12345'
    }
  ];

  const services = [
    'Photo Restoration',
    'Photo Editing',
    'Creative Design',
    'Custom Prints',
    'Digital Albums',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Contact Jenn Custom Photography - Get Your Free Quote Today"
        description="Get in touch with Jenn Custom Photography for professional photo restoration and editing services. Free consultation and quote available."
        keywords="contact jenn custom photography, photo restoration quote, photo editing services, professional photography consultation"
        url="/contact"
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
              <h1 className="text-5xl md:text-6xl font-extrabold font-display text-navy">
                Get In <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-xl text-navy max-w-3xl mx-auto leading-relaxed">
                Ready to transform your photos? Contact us for a free consultation and quote.
                We're here to help bring your vision to life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  Contact Information
                </h2>
                <p className="text-xl text-navy max-w-3xl mx-auto">
                  Multiple ways to reach us - choose what works best for you.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {contactInfo.map((info, index) => (
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
                        {info.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-navy">{info.title}</h3>
                    <p className="text-primary-600 font-semibold mb-2">{info.details}</p>
                    <p className="text-navy text-sm">{info.subtitle}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="content-solid-bg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center space-y-12"
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold font-display text-navy">
                  Send Us a Message
                </h2>
                <p className="text-xl text-navy max-w-2xl mx-auto">
                  Tell us about your project and we'll get back to you with a personalized quote.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-container-solid text-center shadow-lg"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-green-500 rounded-full text-white shadow-lg">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-navy">Thank You!</h3>
                  <p className="text-navy mb-6">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-left">
                      <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-navy"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="text-left">
                      <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-navy"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-left">
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-navy"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="text-left">
                      <label htmlFor="service" className="block text-sm font-semibold text-navy mb-2">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-navy"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="text-left">
                    <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-navy"
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    />
                  </div>

                  <div className="text-left">
                    <label htmlFor="files" className="block text-sm font-semibold text-navy mb-2">
                      Upload Photos (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-500 transition-colors">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-navy text-sm mb-2">Click to upload or drag and drop</p>
                      <p className="text-gray-500 text-xs">PNG, JPG, GIF up to 10MB each</p>
                      <input
                        type="file"
                        id="files"
                        name="files"
                        onChange={handleFileChange}
                        multiple
                        accept="image/*"
                        className="hidden"
                      />
                      <label htmlFor="files" className="cursor-pointer">
                        <span className="sr-only">Upload files</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full md:w-auto px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <span>Send Message</span>
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="content-solid-bg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center space-y-12"
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold font-display text-navy">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-navy max-w-2xl mx-auto">
                  Quick answers to common questions about our services.
                </p>
              </div>

              <div className="space-y-6 text-left">
                {[
                  {
                    question: "How long does photo restoration take?",
                    answer: "Most photo restoration projects are completed within 2-5 business days, depending on the complexity and damage level."
                  },
                  {
                    question: "What file formats do you accept?",
                    answer: "We accept all common image formats including JPG, PNG, TIFF, and RAW files. We can also work with physical photos that you can mail to us."
                  },
                  {
                    question: "Do you offer rush services?",
                    answer: "Yes, we offer expedited services for urgent projects. Contact us directly to discuss your timeline and pricing options."
                  },
                  {
                    question: "What if I'm not satisfied with the results?",
                    answer: "We offer unlimited revisions until you're completely satisfied with the final result. Your happiness is our guarantee."
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-container-solid shadow-lg"
                  >
                    <h3 className="text-lg font-bold mb-3 text-navy">{faq.question}</h3>
                    <p className="text-navy">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;