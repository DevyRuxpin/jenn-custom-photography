import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  Camera, 
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Globe,
  Shield,
  Zap
} from 'lucide-react';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
  const stats = [
    { number: "10K+", label: "Photos Restored", icon: <Camera className="h-6 w-6" /> },
    { number: "98%", label: "Customer Satisfaction", icon: <Heart className="h-6 w-6" /> },
    { number: "5+", label: "Years Experience", icon: <Award className="h-6 w-6" /> },
    { number: "500+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> }
  ];

  const team = [
    {
      name: "Jenn Custom",
      role: "Lead Photographer & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face",
      bio: "With over 8 years of experience, Jenn is a professional photographer who captures stunning portraits and events, while also specializing in photo restoration and digital art. Her artistic vision brings both new memories and old ones to life."
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Michael's artistic vision and technical expertise create stunning visual transformations that exceed expectations."
    },
    {
      name: "Emily Rodriguez",
      role: "Digital Artist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Emily combines traditional art techniques with modern digital tools to create unique and beautiful compositions."
    }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We never compromise on quality. Every project receives our full attention and expertise.",
      icon: <Award className="h-8 w-8" />
    },
    {
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We work closely with you to achieve your vision.",
      icon: <Heart className="h-8 w-8" />
    },
    {
      title: "Innovation",
      description: "We stay at the forefront of technology to deliver cutting-edge results.",
      icon: <Camera className="h-8 w-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About Jenn Custom Photography - Professional Photo Restoration Team"
        description="Learn about Jenn Custom Photography's passionate team of digital artists and photographers dedicated to preserving your precious memories."
        keywords="about jenn custom photography, photo restoration team, professional photographers, digital artists, photo editing experts"
        url="/about"
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
                About <span className="text-primary-dark">Jenn Custom Photography</span>
              </h1>
              <p className="text-xl text-navy max-w-3xl mx-auto leading-relaxed">
                We are passionate photographers and digital artists dedicated to capturing new memories 
                and preserving existing ones through professional photography sessions and photo services.
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
                  Our Impact & Excellence
                </h2>
                <p className="text-xl text-navy max-w-3xl mx-auto">
                  Proudly serving clients worldwide with passion and precision.
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
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white shadow-lg">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-4xl font-bold mb-2 text-navy">{stat.number}</div>
                    <p className="text-navy">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
                  Meet Our Team
                </h2>
                <p className="text-xl text-navy max-w-3xl mx-auto">
                  Passionate professionals dedicated to bringing your vision to life.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-container-solid text-center shadow-lg"
                  >
                    <div className="mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-primary-200 shadow-lg"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-navy">{member.name}</h3>
                    <p className="text-primary-600 font-semibold mb-4">{member.role}</p>
                    <p className="text-navy text-sm leading-relaxed">{member.bio}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
                  Our Core Values
                </h2>
                <p className="text-xl text-navy max-w-3xl mx-auto">
                  The principles that guide everything we do.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value, index) => (
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
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-navy">{value.title}</h3>
                    <p className="text-navy leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-accent-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="content-solid-bg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-display text-navy">
                Our Story
              </h2>
              <div className="max-w-4xl mx-auto space-y-6 text-navy text-lg leading-relaxed">
                <p>
                  Founded in 2020, Jenn Custom Photography began with a simple mission: to help people 
                  preserve and celebrate their most precious memories. What started as a passion project 
                  has grown into a trusted service for clients worldwide.
                </p>
                <p>
                  We specialize in professional photography sessions, photo restoration, creative editing, and custom design services. 
                  Our team combines traditional photography techniques with cutting-edge digital tools 
                  to capture new memories and deliver results that exceed expectations.
                </p>
                <p>
                  Every project is handled with care, attention to detail, and a commitment to quality 
                  that has earned us the trust of thousands of satisfied customers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-navy max-w-2xl mx-auto">
                Let us help you transform your memories into stunning works of art.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="/custom-order"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;