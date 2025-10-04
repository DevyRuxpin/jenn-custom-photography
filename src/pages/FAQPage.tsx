import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';
import SEO from '../components/SEO';

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What services does Jenn Custom Photography offer?",
          answer: "We offer photo restoration, creative editing, custom design services, and premium printing. Our services include bringing old photos back to life, enhancing modern images, creating custom albums and wall art, and delivering high-quality prints."
        },
        {
          question: "How long has Jenn Custom Photography been in business?",
          answer: "Jenn Custom Photography has been serving customers since 2020, with over 5 years of experience in photo restoration and digital artistry."
        },
        {
          question: "Do you work with customers worldwide?",
          answer: "Yes! We serve customers globally. We accept digital files from anywhere in the world and can ship physical prints internationally."
        }
      ]
    },
    {
      category: "Photo Restoration",
      questions: [
        {
          question: "What types of photo damage can you restore?",
          answer: "We can restore various types of damage including scratches, tears, fading, water damage, stains, cracks, missing pieces, and color correction. We work with photos from any era."
        },
        {
          question: "How long does photo restoration take?",
          answer: "Most photo restoration projects are completed within 2-5 business days, depending on the complexity and extent of damage. Rush services are available for urgent projects."
        },
        {
          question: "What file formats do you accept for restoration?",
          answer: "We accept all common image formats including JPG, PNG, TIFF, and RAW files. We can also work with physical photos that you can mail to us for scanning and restoration."
        },
        {
          question: "Will you maintain the original photo's authenticity?",
          answer: "Absolutely. We preserve the original character and authenticity of your photos while repairing damage. We don't alter the subject matter, only restore what was lost to damage."
        }
      ]
    },
    {
      category: "Photo Editing",
      questions: [
        {
          question: "What photo editing services do you provide?",
          answer: "Our editing services include color correction, background removal/addition, object removal, skin retouching, exposure adjustments, and artistic enhancements."
        },
        {
          question: "Do you offer batch editing for multiple photos?",
          answer: "Yes, we offer volume discounts for batch editing projects. Contact us directly to discuss your specific needs and pricing."
        },
        {
          question: "Can you edit photos for commercial use?",
          answer: "Yes, we provide commercial-grade editing services for businesses, real estate, product photography, and marketing materials."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          question: "How much do your services cost?",
          answer: "Photo restoration starts at $49, photo editing starts at $39, and creative design starts at $79. Final pricing depends on the complexity and requirements of each project."
        },
        {
          question: "Do you offer any guarantees?",
          answer: "Yes, we offer unlimited revisions until you're completely satisfied with the final result. Your happiness is our guarantee."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, and bank transfers. Payment is typically required before we begin work on your project."
        },
        {
          question: "Do you offer rush services?",
          answer: "Yes, we offer expedited services for urgent projects. Rush fees vary based on the turnaround time required."
        }
      ]
    },
    {
      category: "Delivery & Shipping",
      questions: [
        {
          question: "How do you deliver the finished photos?",
          answer: "We deliver digital files via secure download links. For physical prints, we ship worldwide using reliable courier services."
        },
        {
          question: "What resolution do you provide for digital files?",
          answer: "We provide high-resolution files suitable for printing up to large formats. Standard delivery is 300 DPI, but we can provide higher resolutions upon request."
        },
        {
          question: "How long does shipping take for physical prints?",
          answer: "Shipping typically takes 3-7 business days domestically and 7-14 business days internationally, depending on your location."
        }
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          question: "What software and tools do you use?",
          answer: "We use industry-standard software including Adobe Photoshop, Lightroom, and specialized restoration tools to ensure the highest quality results."
        },
        {
          question: "Can you work with very old or damaged photos?",
          answer: "Yes, we specialize in restoring photos from any era, even those that appear beyond repair. We've successfully restored photos from the early 1900s."
        },
        {
          question: "Do you provide before and after comparisons?",
          answer: "Yes, we provide side-by-side before and after comparisons so you can see the transformation and approve the final result."
        }
      ]
    }
  ];

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Frequently Asked Questions - Jenn Custom Photography"
        description="Find answers to common questions about photo restoration, editing services, pricing, delivery, and more at Jenn Custom Photography."
        keywords="FAQ, frequently asked questions, photo restoration FAQ, photo editing questions, jenn custom photography help"
        url="/faq"
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
                <HelpCircle className="h-16 w-16 text-primary-dark" />
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold font-display text-navy">
                Frequently Asked <span className="text-primary-dark">Questions</span>
              </h1>
              <p className="text-xl text-navy max-w-3xl mx-auto leading-relaxed">
                Find answers to common questions about our photo restoration, editing, and design services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="content-solid-bg">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-navy" />
              <input
                type="text"
                placeholder="Search FAQ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-navy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
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
              {filteredFAQs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-6">
                  <h2 className="text-3xl font-bold font-display text-navy border-b-2 border-primary-200 pb-2">
                    {category.category}
                  </h2>
                  
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex;
                      const isOpen = openItems.includes(globalIndex);
                      
                      return (
                        <motion.div
                          key={faqIndex}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: faqIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="text-container-solid shadow-lg"
                        >
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg"
                          >
                            <div className="flex justify-between items-center">
                              <h3 className="text-lg font-semibold text-navy pr-4">
                                {faq.question}
                              </h3>
                              {isOpen ? (
                                <ChevronUp className="h-5 w-5 text-primary-dark flex-shrink-0" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-primary-dark flex-shrink-0" />
                              )}
                            </div>
                          </button>
                          
                          <motion.div
                            initial={false}
                            animate={{ height: isOpen ? 'auto' : 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6">
                              <p className="text-navy leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
              
              {filteredFAQs.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-xl text-navy">No FAQ items found matching your search.</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="content-solid-bg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-display text-navy">
                Still Have Questions?
              </h2>
              <p className="text-xl text-navy max-w-2xl mx-auto">
                Can't find what you're looking for? Our team is here to help with any questions you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center space-x-2"
                >
                  <span>Contact Us</span>
                </a>
                <a
                  href="/custom-order"
                  className="btn-secondary inline-flex items-center justify-center space-x-2"
                >
                  <span>Start a Project</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
