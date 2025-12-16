import React from 'react';
import { Target, Eye, Users, ArrowRight, Sparkles, Star, TrendingUp, Award, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const cards = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To democratize access to enterprise-grade technology solutions, enabling businesses of all sizes to build and scale digital platforms efficiently.',
      stats: '500+ Projects',
      highlight: 'Delivered across 30+ industries',
      bgColor: 'bg-gradient-to-br from-orange-50/80 to-white',
      borderColor: 'border-orange-100',
      iconBg: 'bg-gradient-to-br from-orange-500 to-amber-500',
      iconColor: 'text-white',
      delay: 0.1
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To become the trusted partner for organizations seeking to transform their digital presence through innovative, scalable, and maintainable solutions.',
      stats: '10 Years',
      highlight: 'Of innovation excellence',
      bgColor: 'bg-gradient-to-br from-white to-orange-50/80',
      borderColor: 'border-orange-100',
      iconBg: 'bg-gradient-to-br from-amber-500 to-orange-500',
      iconColor: 'text-white',
      delay: 0.2
    },
    {
      icon: Users,
      title: 'Our Values',
      description: 'Integrity, innovation, and impact guide everything we do. We believe in building solutions that are not only effective but also sustainable and ethical.',
      stats: '100+ Team',
      highlight: 'Experts across disciplines',
      bgColor: 'bg-gradient-to-br from-orange-50/80 to-amber-50/80',
      borderColor: 'border-orange-100',
      iconBg: 'bg-gradient-to-br from-orange-500 via-amber-500 to-orange-500',
      iconColor: 'text-white',
      delay: 0.3
    },
  ];

  const stats = [
    { value: "99.9%", label: "Client Satisfaction", sublabel: "Across all projects", icon: Star },
    { value: "24/7", label: "Support", sublabel: "Round-the-clock assistance", icon: CheckCircle },
    { value: "50+", label: "Experts", sublabel: "Tech specialists", icon: Users },
    { value: "10M+", label: "Users Impacted", sublabel: "Through our solutions", icon: TrendingUp },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "backOut" }
    }
  };

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const rotateAnimation = {
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section 
      id="about" 
      className="py-16 md:py-32 relative overflow-hidden"
      ref={ref}
      // style={{
      //   background: 'linear-gradient(135deg, #fff7ed 0%, #fffbeb 50%, #fef3c7 100%)'
      // }}
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-orange-300/20 to-amber-300/10 rounded-full blur-3xl"
        animate={floatAnimation}
        style={{ filter: 'blur(64px)' }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-amber-300/20 to-orange-300/10 rounded-full blur-3xl"
        animate={{
          ...floatAnimation,
          transition: { ...floatAnimation.transition, delay: 1 }
        }}
        style={{ filter: 'blur(64px)' }}
      />
      
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 right-10 hidden lg:block"
        animate={rotateAnimation}
      >
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-full"></div>
          <div className="absolute inset-0 border-2 border-dashed border-orange-300/30 rounded-full animate-spin-slow"></div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-8 hidden lg:block"
        animate={{
          ...floatAnimation,
          transition: { ...floatAnimation.transition, delay: 0.5 }
        }}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full"></div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-orange-200 shadow-lg shadow-orange-100/50"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 20px 40px -15px rgba(249, 115, 22, 0.3)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            <Sparkles className="h-4 w-4 text-orange-600" />
            <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              Trusted by Industry Leaders Worldwide
            </span>
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="block">Building Tomorrow's</span>
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-orange-700 via-amber-600 to-orange-700 bg-clip-text text-transparent bg-300%">
                Digital Foundation
              </span>
              <motion.span 
                className="absolute -inset-4 bg-gradient-to-r from-orange-200/30 to-amber-200/30 blur-xl rounded-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-800 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Sammunat is revolutionizing how businesses{' '}
            <span className="font-bold text-orange-600 relative">
              build
              <motion.span 
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              />
            </span>
            ,{' '}
            <span className="font-bold text-amber-600 relative">
              scale
              <motion.span 
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 1 }}
              />
            </span>
            , and{' '}
            <span className="font-bold text-orange-500 relative">
              innovate
              <motion.span 
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
              />
            </span>{' '}
            in the digital age. We combine deep technical expertise with business insight.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              className="group relative overflow-hidden bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 border-0 shadow-xl shadow-orange-200/50 hover:shadow-orange-300/70 px-8 py-6 text-lg font-semibold rounded-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative flex items-center">
                Meet Our Team
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button 
              variant="outline"
              className="group px-8 py-6 text-lg font-semibold rounded-2xl border-2 border-orange-200 text-orange-700 hover:bg-orange-50/50 hover:border-orange-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              View Case Studies
              <Sparkles className="ml-3 h-5 w-5 text-orange-600 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={scaleIn}
              custom={index}
              transition={{ delay: card.delay }}
              whileHover={{ 
                y: -8,
                boxShadow: '0 25px 50px -12px rgba(249, 115, 22, 0.25)'
              }}
              className="group relative"
            >
              <div 
                className={`${card.bgColor} p-8 rounded-3xl border ${card.borderColor} backdrop-blur-sm transition-all duration-500`}
                style={{
                  boxShadow: '0 10px 40px -10px rgba(249, 115, 22, 0.15)'
                }}
              >
                {/* Icon */}
                <motion.div 
                  className={`${card.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-8 relative overflow-hidden`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <card.icon className={`h-10 w-10 ${card.iconColor} relative z-10`} />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                    animate={{ x: ["0%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{card.title}</h3>
                
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  {card.description}
                </p>
                
                <div className="pt-8 border-t border-orange-100/50">
                  <motion.div 
                    className="text-4xl font-bold bg-gradient-to-r from-orange-700 to-amber-600 bg-clip-text text-transparent mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    {card.stats}
                  </motion.div>
                  <p className="text-gray-600">{card.highlight}</p>
                </div>
                
                {/* Animated corner element */}
                <motion.div 
                  className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-200/20 to-transparent rounded-tl-3xl"
                  whileHover={{ width: "6rem", height: "6rem" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                initial={false}
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 0.5 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="relative overflow-hidden rounded-4xl p-8 md:p-12 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          style={{
            background: 'linear-gradient(135deg, rgba(254, 215, 170, 0.6) 0%, rgba(253, 230, 138, 0.6) 100%)',
            border: '1px solid rgba(251, 191, 36, 0.3)',
            boxShadow: '0 20px 60px -15px rgba(249, 115, 22, 0.2)'
          }}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-orange-300/20 to-amber-300/10 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10"
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/80 rounded-2xl mb-6 shadow-lg">
                  <stat.icon className="h-8 w-8 text-orange-600" />
                </div>
                
                <motion.div 
                  className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-b from-orange-700 to-amber-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                
                <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.sublabel}</div>
                
                {/* Animated underline */}
                <motion.div 
                  className="h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mt-4 opacity-0 group-hover:opacity-100"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Quote */}
          <motion.div 
            className="mt-16 pt-12 border-t border-orange-200/50 relative z-10"
            variants={fadeInUp}
          >
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl">SA</span>
                  </div>
                  <motion.div 
                    className="absolute -inset-2 border-2 border-dashed border-orange-400/30 rounded-2xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>
              
              <div className="flex-1">
                <motion.p 
                  className="text-2xl md:text-3xl italic text-gray-900 mb-8 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  "Sammunat's approach to digital transformation has been instrumental in scaling our platform to serve millions of users seamlessly with unprecedented reliability."
                </motion.p>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="font-bold text-xl text-gray-900">Sarah Johnson</div>
                    <div className="text-gray-700">CTO, TechScale Inc.</div>
                  </div>
                  
                  <motion.div 
                    className="flex items-center gap-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.svg 
                        key={i}
                        className="w-6 h-6 text-amber-400 fill-current"
                        viewBox="0 0 20 20"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                    <span className="ml-2 text-gray-700 font-semibold">5.0 Rating</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-2xl md:text-3xl text-gray-800 mb-10 max-w-2xl mx-auto font-medium"
            animate={{ 
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Ready to transform your digital journey? 🚀
          </motion.p>
          
          <Button 
            className="group relative overflow-hidden bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 px-10 py-8 text-xl font-bold rounded-3xl shadow-2xl shadow-orange-300/50 hover:shadow-orange-400/70"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 30px 60px -15px rgba(249, 115, 22, 0.4)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/40"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
            <span className="relative flex items-center">
              Start Your Transformation Today
              <motion.div
                className="ml-4"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-6 w-6" />
              </motion.div>
            </span>
          </Button>
          
          <motion.p 
            className="mt-6 text-gray-600 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Join 100+ businesses already transforming with Sammunat
          </motion.p>
        </motion.div>
      </div>

      {/* Inline CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .bg-300% {
          background-size: 300% 300%;
          animation: gradient 3s ease infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .rounded-4xl {
          border-radius: 2.5rem;
        }
      `}</style>
    </section>
  );
};

export default About;