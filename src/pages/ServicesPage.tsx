import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Palette, 
  Download, 
  Sparkles, 
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Award,
  Shield,
  Zap
} from 'lucide-react';
import SEO from '../components/SEO';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 'photography',
      icon: <Camera className="h-8 w-8" />,
      title: 'Professional Photography Sessions',
      description: 'Jenn personally captures your special moments with professional equipment and artistic vision. From portraits to events, every session is tailored to your unique story.',
      price: 'Starting at $150',
      time: '1-3 hours',
      features: [
        'Portrait photography',
        'Event photography',
        'Commercial photography',
        'Custom session packages'
      ]
    },
    {
      id: 'restoration',
      icon: <Sparkles className="h-8 w-8" />,
      title: 'Photo Restoration',
      description: 'Bring old, damaged photos back to life with our expert restoration services using advanced AI technology.',
      price: 'Starting at $49',
      time: '2-5 days',
      features: [
        'Remove scratches and tears',
        'Color correction and enhancement',
        'Digital noise reduction',
        'High-resolution output'
      ]
    },
    {
      id: 'editing',
      icon: <Palette className="h-8 w-8" />,
      title: 'Photo Editing',
      description: 'Professional editing services to enhance and perfect your images with artistic flair.',
      price: 'Starting at $39',
      time: '1-3 days',
      features: [
        'Color grading and correction',
        'Background removal',
        'Object removal/addition',
        'Skin retouching'
      ]
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Book Your Session',
      description: 'Schedule your photography session or upload existing photos for restoration/editing services.',
      icon: <Camera className="h-6 w-6" />
    },
    {
      step: 2,
      title: 'Consultation',
      description: 'We discuss your vision and requirements to ensure we deliver exactly what you need.',
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      step: 3,
      title: 'Professional Work',
      description: 'Jenn captures your moments or our experts work their magic using cutting-edge tools and techniques.',
      icon: <Sparkles className="h-6 w-6" />
    },
    {
      step: 4,
      title: 'Delivery',
      description: 'Receive your finished photos in high resolution, ready for printing or digital use.',
      icon: <Star className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Professional Photography Services - Photo Restoration, Editing & Design"
        description="Comprehensive photography services including photo restoration, creative editing, and custom design. Professional quality with fast turnaround times."
        keywords="photo restoration services, photo editing, creative design, digital photo repair, professional photography services, photo enhancement"
        url="/services"
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
                Our <span className="text-primary-dark">Professional Services</span>
              </h1>
              <p className="text-xl text-navy max-w-3xl mx-auto leading-relaxed">
                Comprehensive photography services designed to bring your vision to life with 
                professional quality and exceptional attention to detail.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
                  What We Offer
                </h2>
                <p className="text-xl text-navy max-w-3xl mx-auto">
                  Professional photography services tailored to meet your specific needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-container-solid text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white shadow-lg">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-navy">{service.title}</h3>
                    <p className="text-navy mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-center items-center space-x-2">
                        <Clock className="h-4 w-4 text-primary-500" />
                        <span className="text-navy text-sm">{service.time} turnaround</span>
                      </div>
                      <div className="text-2xl font-bold text-primary-600">{service.price}</div>
                    </div>

                    <ul className="text-navy text-sm space-y-2 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center justify-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/custom-order" className="btn-primary w-full">
                      Get Started
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
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
                  How It Works
                </h2>
                <p className="text-xl text-navy max-w-3xl mx-auto">
                  Our simple 4-step process ensures your project is handled with care and precision.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-container-solid text-center shadow-lg"
                  >
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white shadow-lg">
                          {step.icon}
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {step.step}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-navy">{step.title}</h3>
                    <p className="text-navy text-sm leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
                  Why Choose Our Services?
                </h2>
                <p className="text-xl text-navy max-w-3xl mx-auto">
                  We combine expertise, technology, and passion to deliver exceptional results.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Expert Quality",
                    description: "Professional-grade results using industry-leading tools and techniques.",
                    icon: <Award className="h-8 w-8" />
                  },
                  {
                    title: "Fast Turnaround",
                    description: "Quick delivery without compromising on quality or attention to detail.",
                    icon: <Zap className="h-8 w-8" />
                  },
                  {
                    title: "Secure & Private",
                    description: "Your photos are handled with complete confidentiality and security.",
                    icon: <Shield className="h-8 w-8" />
                  }
                ].map((feature, index) => (
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
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-navy">{feature.title}</h3>
                    <p className="text-navy text-sm leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-accent-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="content-solid-bg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-display text-navy">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-navy max-w-2xl mx-auto">
                Let us help you transform your photos into stunning works of art.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/custom-order"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;