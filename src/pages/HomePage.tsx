import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { 
  Camera, 
  Sparkles, 
  Palette, 
  Download, 
  Star,
  ArrowRight,
  CheckCircle,
  Award,
  Clock,
  Users,
  Zap,
  Heart,
  Globe,
  Shield,
  MessageCircle,
  ArrowDown
} from 'lucide-react';
import { getFeaturedPhotos } from '../lib/photoLoader';

const HomePage: React.FC = () => {
  const featuredPhotos = getFeaturedPhotos();

  const features = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Professional Photography",
      description: "Jenn captures stunning portraits, events, and special moments with professional equipment",
      highlight: "Live Sessions"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Photo Restoration",
      description: "Expert restoration of old, damaged photos using cutting-edge AI technology",
      highlight: "4K Quality"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Creative Editing",
      description: "Artistic post-processing and transformations that exceed expectations",
      highlight: "Award-Winning"
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Digital & Print",
      description: "Multiple formats delivered worldwide - from digital files to premium prints",
      highlight: "24hr Delivery"
    }
  ];

  const services = [
    {
      title: "Professional Photography Sessions",
      description: "Jenn personally captures your special moments with professional equipment and artistic vision. From portraits to events, every session is tailored to your unique story.",
      price: "Starting at $150",
      features: ["Portrait Sessions", "Event Photography", "Commercial Work", "Custom Packages"],
      icon: <Camera className="h-6 w-6" />
    },
    {
      title: "Photo Restoration",
      description: "Bring old, damaged photos back to life with our expert restoration services using advanced AI technology.",
      price: "Starting at $49",
      features: ["Damage Repair", "Color Correction", "Detail Enhancement", "High-Resolution Output"],
      icon: <Sparkles className="h-6 w-6" />
    },
    {
      title: "Creative Photo Editing",
      description: "Transform your images with artistic flair and professional techniques that create stunning results.",
      price: "Starting at $39",
      features: ["Color Grading", "Background Removal", "Object Manipulation", "Artistic Effects"],
      icon: <Palette className="h-6 w-6" />
    }
  ];

  const testimonials = [
    {
      name: "Kalev David",
      role: "Family Historian",
      content: "Jenn Custom Photography transformed my grandmother's faded wedding photo into a stunning masterpiece. The attention to detail is incredible!",
      rating: 5,
      image: featuredPhotos[0]?.src || "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
      location: "New York, USA"
    },
    {
      name: "Michael Chen",
      role: "Photographer",
      content: "As a professional photographer, I trust Jenn Custom Photography for all my post-processing needs. The quality is consistently outstanding.",
      rating: 5,
      image: featuredPhotos[1]?.src || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      location: "Los Angeles, USA"
    },
    {
      name: "Emily Rodriguez",
      role: "Art Director",
      content: "Jenn's creative team brought my vision to life. Her artistic approach and technical expertise are unmatched.",
      rating: 5,
      image: featuredPhotos[2]?.src || "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      location: "London, UK"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Jenn Custom Photography - Professional Photo Restoration & Editing Services"
        description="Transform your memories with expert photo restoration, custom editing, and creative design services. Professional photography services with stunning UI/UX."
        keywords="photo restoration, photo editing, custom photography, digital art, photo repair, color correction, photo enhancement, creative design, professional photography"
        url="/"
      />

      {/* Hero Section - 2025 Elite Design */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="content-solid-bg text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Professional Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-6 py-3 border border-primary-200"
              >
                <Award className="h-5 w-5" />
                <span className="font-semibold">Award-Winning Photography Studio</span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-heading-primary leading-tight"
                >
                  Jenn Custom Photography
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-heading-secondary"
                >
                  Professional Photography & Photo Services
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-body-primary max-w-3xl mx-auto"
                >
                  Professional photography sessions, photo restoration, creative editing, and personalized design services
                  that capture and enhance your most precious moments.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link
                  to="/custom-order"
                  className="btn-primary group flex items-center space-x-2 px-8 py-4 text-lg"
                >
                  <span>Start Custom Order</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/portfolio"
                  className="btn-secondary group flex items-center space-x-2 px-8 py-4 text-lg"
                >
                  <span>View Portfolio</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-col items-center space-y-2"
              >
                <ArrowDown className="h-6 w-6 text-navy animate-bounce" />
                <span className="text-navy text-sm">Explore Our Services</span>
              </motion.div>
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
                <h2 className="text-heading-secondary">
                  Why Choose Jenn Custom Photography?
                </h2>
                <p className="text-body-primary max-w-3xl mx-auto">
                  Experience the difference with our unparalleled expertise and dedication to perfection.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-container-solid text-center group hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white group-hover:scale-110 transition-transform shadow-lg">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-navy">
                      {feature.title}
                    </h3>
                    <p className="text-navy text-sm mb-2">
                      {feature.description}
                    </p>
                    <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {feature.highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
                <h2 className="text-heading-secondary">
                  Our Premium Services
                </h2>
                <p className="text-xl text-navy max-w-3xl mx-auto">
                  Discover our range of specialized photography services designed to meet your every need.
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
                    className="text-container-solid text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="p-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white mb-6 shadow-lg inline-flex">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-navy">
                      {service.title}
                    </h3>
                    <p className="text-navy mb-4 flex-grow">
                      {service.description}
                    </p>
                    <div className="text-3xl font-bold text-primary-600 mb-6">
                      {service.price}
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

      {/* Featured Portfolio Section */}
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
                  Featured Portfolio
                </h2>
                <p className="text-xl text-navy max-w-3xl mx-auto">
                  A glimpse into Jenn's recent work showcasing the quality and artistry
                  that sets Jenn Custom Photography apart.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {featuredPhotos.slice(0, 8).map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="aspect-square relative">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="text-left">
                          <p className="text-white text-lg font-semibold truncate">{photo.title}</p>
                          <p className="text-white/80 text-sm">{photo.category}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/portfolio"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>View Full Portfolio</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/custom-order"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>Start Custom Order</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-accent-500">
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
                  Our Impact & Excellence
                </h2>
                <p className="text-xl text-navy max-w-3xl mx-auto">
                  Proudly serving a global community with passion and precision.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { number: "500+", label: "Happy Clients", icon: <Users className="h-12 w-12 text-primary-500" /> },
                  { number: "1000+", label: "Projects Completed", icon: <CheckCircle className="h-12 w-12 text-green-500" /> },
                  { number: "5-Star", label: "Average Rating", icon: <Star className="h-12 w-12 text-yellow-500" /> },
                  { number: "Global", label: "Client Reach", icon: <Globe className="h-12 w-12 text-blue-500" /> }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-container-solid text-center shadow-lg"
                  >
                    <div className="flex justify-center mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-5xl font-bold mb-2 text-navy">{stat.number}</div>
                    <p className="text-navy">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
                  What Our Clients Say
                </h2>
                <p className="text-xl text-navy max-w-3xl mx-auto">
                  Don't just take our word for it. Here's what our satisfied customers
                  have to say about their experience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-container-solid shadow-lg"
                  >
                    <div className="flex flex-col items-center text-center p-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary-200 shadow-lg"
                      />
                      <div className="flex text-yellow-400 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                      <p className="text-navy italic mb-4">"{testimonial.content}"</p>
                      <h4 className="font-semibold text-lg text-navy">{testimonial.name}</h4>
                      <p className="text-sm text-primary-600">{testimonial.role}</p>
                      <p className="text-xs text-navy flex items-center space-x-1 mt-1">
                        <Globe className="h-3 w-3" />
                        <span>{testimonial.location}</span>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
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
                Ready to Transform Your Photos?
              </h2>
              <p className="text-xl text-navy max-w-2xl mx-auto">
                Join hundreds of satisfied customers who trust Jenn Custom Photography
                to bring their memories back to life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/custom-order"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>Start Your Project</span>
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

export default HomePage;