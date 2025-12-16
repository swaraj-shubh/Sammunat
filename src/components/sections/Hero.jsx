import React from 'react';
import { ArrowRight, Sparkles, Zap, Rocket, TrendingUp, Shield } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const stats = [
    { value: "99.9%", label: "Uptime", icon: Shield, color: "text-emerald-500" },
    { value: "50+", label: "Projects Delivered", icon: Rocket, color: "text-orange-500" },
    { value: "24/7", label: "Support", icon: Zap, color: "text-amber-500" },
    { value: "2M+", label: "Users Served", icon: TrendingUp, color: "text-orange-600" },
  ];

  return (
    <section 
      id="home" 
      className="pt-20 pb-16 md:pt-28 md:pb-24 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50/30"></div>
      
      {/* Animated Background Orbs */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-amber-300/10 rounded-full blur-3xl"
        animate={floatAnimation}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-orange-300/10 rounded-full blur-3xl"
        animate={{
          ...floatAnimation,
          transition: { ...floatAnimation.transition, delay: 1 }
        }}
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 px-4 py-3 rounded-full text-sm font-semibold mb-10 border border-orange-200 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(249, 115, 22, 0.3)" }}
          >
            <Sparkles className="h-4 w-4" />
            Trusted by 100+ businesses worldwide
            <motion.div 
              className="ml-2 w-2 h-2 bg-orange-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Headline */}
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Build{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent animate-gradient bg-300%">
                  Scalable Digital
                </span>
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-r from-orange-200/30 to-amber-200/30 blur-xl rounded-2xl"
                  animate={pulseAnimation}
                />
              </span>
              <br />
              <span className="text-gray-900">Solutions That </span>
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                  Grow With You
                </span>
                <motion.span 
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                />
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={fadeInUp}>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into{' '}
              <span className="font-semibold text-orange-600">robust, production-ready platforms</span>{' '}
              with modern architecture, best practices, and scalable solutions that evolve with your business.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            variants={fadeInUp}
          >
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-orange-200 hover:shadow-orange-300 transition-all duration-300 border-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative flex items-center">
                Start Building Today
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-6 text-lg font-semibold rounded-xl border-2 border-orange-200 text-orange-700 hover:bg-orange-50 hover:border-orange-300 transition-all duration-300"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              View Case Studies
              <Sparkles className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-10 border-t border-orange-100"
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group relative"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-orange-100 shadow-sm hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    <motion.div 
                      className="text-4xl font-bold text-gray-900"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {stat.value}
                    </motion.div>
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                  
                  {/* Progress Bar Animation */}
                  <motion.div 
                    className="h-1 bg-gradient-to-r from-orange-200 to-amber-200 rounded-full mt-4 overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: index * 0.1 + 0.8, duration: 1 }}
                  >
                    <motion.div 
                      className="h-full bg-gradient-to-r from-orange-500 to-amber-500"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ 
                        delay: index * 0.1 + 1, 
                        duration: 1.5, 
                        repeat: Infinity,
                        repeatType: "reverse" 
                      }}
                    />
                  </motion.div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-10 right-10 hidden lg:block"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl rotate-12 shadow-lg border border-orange-200 flex items-center justify-center">
              <Rocket className="h-10 w-10 text-orange-600" />
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-10 hidden lg:block"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl -rotate-12 shadow-lg border border-amber-200 flex items-center justify-center">
              <Zap className="h-8 w-8 text-amber-600" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-orange-300 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-orange-500 rounded-full mt-2"
            animate={{
              y: [0, 12, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* CSS for gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% 200%;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(249, 115, 22, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(249, 115, 22, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default Hero;