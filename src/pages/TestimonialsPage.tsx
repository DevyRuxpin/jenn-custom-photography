import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import { getFeaturedPhotos } from '../lib/photoLoader';

const TestimonialsPage: React.FC = () => {
  const featuredPhotos = getFeaturedPhotos();

  const testimonials = [
    {
      name: "Kalev David",
      role: "Family Historian",
      content: "Jenn Custom Photography transformed my grandmother's faded wedding photo into a stunning masterpiece. The attention to detail is incredible and the quality exceeded all my expectations!",
      rating: 5,
      image: featuredPhotos[0]?.src || "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
      location: "New York, USA",
      service: "Photo Restoration"
    },
    {
      name: "Michael Chen",
      role: "Photographer",
      content: "As a professional photographer, I trust Jenn Custom Photography for all my post-processing needs. The quality is consistently outstanding and they always deliver on time.",
      rating: 5,
      image: featuredPhotos[1]?.src || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      location: "Los Angeles, USA",
      service: "Photo Editing"
    },
    {
      name: "Emily Rodriguez",
      role: "Art Director",
      content: "Jenn's creative team brought my vision to life. Their artistic approach and technical expertise are unmatched. I've recommended them to all my colleagues.",
      rating: 5,
      image: featuredPhotos[2]?.src || "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      location: "London, UK",
      service: "Creative Design"
    },
    {
      name: "Sarah Johnson",
      role: "Museum Curator",
      content: "We entrusted Jenn Custom Photography with restoring historical family photos for our museum exhibit. The results were absolutely breathtaking and historically accurate.",
      rating: 5,
      image: featuredPhotos[3]?.src || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      location: "Boston, USA",
      service: "Photo Restoration"
    },
    {
      name: "David Kim",
      role: "Wedding Planner",
      content: "Jenn Custom Photography has been our go-to partner for wedding photo editing and album design. Every couple has been thrilled with the final results.",
      rating: 5,
      image: featuredPhotos[4]?.src || "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      location: "Chicago, USA",
      service: "Creative Design"
    },
    {
      name: "Lisa Wang",
      role: "Real Estate Agent",
      content: "Professional, fast, and incredibly talented. Jenn Custom Photography transformed my property photos and helped me close more deals than ever before.",
      rating: 5,
      image: featuredPhotos[5]?.src || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      location: "Seattle, USA",
      service: "Photo Editing"
    }
  ];

  const stats = [
    { number: "98%", label: "Customer Satisfaction", description: "Based on 500+ reviews" },
    { number: "4.9/5", label: "Average Rating", description: "Across all platforms" },
    { number: "500+", label: "Happy Clients", description: "Worldwide" },
    { number: "1000+", label: "Projects Completed", description: "Successfully delivered" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Customer Testimonials - Jenn Custom Photography Reviews"
        description="Read what our satisfied customers say about Jenn Custom Photography's photo restoration, editing, and creative design services."
        keywords="testimonials, customer reviews, photo restoration reviews, photo editing testimonials, jenn custom photography reviews"
        url="/testimonials"
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
                <Quote className="h-16 w-16 text-primary-dark" />
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold font-display text-navy">
                What Our <span className="text-primary-dark">Clients Say</span>
              </h1>
              <p className="text-xl text-navy max-w-3xl mx-auto leading-relaxed">
                Don't just take our word for it. Here's what our satisfied customers have to say 
                about their experience with Jenn Custom Photography.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
                  Our Track Record
                </h2>
                <p className="text-xl text-navy max-w-3xl mx-auto">
                  Numbers that speak for themselves.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-container-solid text-center shadow-lg"
                  >
                    <div className="text-5xl font-bold mb-2 text-primary-dark">{stat.number}</div>
                    <p className="text-lg font-semibold text-navy mb-1">{stat.label}</p>
                    <p className="text-sm text-navy">{stat.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
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
                  Customer Reviews
                </h2>
                <p className="text-xl text-navy max-w-3xl mx-auto">
                  Real stories from real customers who trusted us with their precious memories.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-container-solid shadow-lg"
                  >
                    <div className="flex flex-col h-full">
                      {/* Quote */}
                      <div className="flex justify-center mb-4">
                        <Quote className="h-8 w-8 text-primary-dark" />
                      </div>
                      
                      {/* Rating */}
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-navy italic mb-6 flex-grow leading-relaxed">
                        "{testimonial.content}"
                      </p>

                      {/* Service Badge */}
                      <div className="mb-4">
                        <span className="inline-block bg-primary-100 text-primary-dark text-xs font-semibold px-3 py-1 rounded-full">
                          {testimonial.service}
                        </span>
                      </div>

                      {/* Author */}
                      <div className="flex items-center space-x-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-primary-200"
                        />
                        <div>
                          <h4 className="font-semibold text-navy">{testimonial.name}</h4>
                          <p className="text-sm text-primary-dark">{testimonial.role}</p>
                          <div className="flex items-center space-x-1 mt-1">
                            <MapPin className="h-3 w-3 text-navy" />
                            <span className="text-xs text-navy">{testimonial.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
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
                Ready to Join Our Happy Customers?
              </h2>
              <p className="text-xl text-navy max-w-2xl mx-auto">
                Experience the same quality and service that our customers rave about.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/custom-order"
                  className="btn-primary inline-flex items-center justify-center space-x-2"
                >
                  <span>Start Your Project</span>
                </a>
                <a
                  href="/contact"
                  className="btn-secondary inline-flex items-center justify-center space-x-2"
                >
                  <span>Contact Us</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
