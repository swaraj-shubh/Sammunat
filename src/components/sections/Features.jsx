import React from 'react';
import { Cloud, Shield, Zap, Code, Server, Database, Globe, Cpu, Rocket, Layers, Lock, Bolt } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
{/* ArrowRight Icon Component */}
      const ArrowRight = (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      );
  const features = [
    {
      icon: Cloud,
      title: 'Cloud-Native Architecture',
      description: 'Build applications designed for the cloud with auto-scaling, high availability, and global distribution.',
      stats: '99.9% Uptime',
      color: 'from-orange-500 to-amber-400',
      delay: 0.1,
      subIcon: Globe,
      gradient: 'bg-gradient-to-br from-orange-50/80 to-amber-50/60'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with encryption at rest and in transit, RBAC, and compliance certifications.',
      stats: '256-bit Encryption',
      color: 'from-amber-500 to-orange-500',
      delay: 0.2,
      subIcon: Lock,
      gradient: 'bg-gradient-to-br from-amber-50/80 to-orange-50/60'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed and scalability with minimal latency and maximum throughput.',
      stats: '<100ms Response',
      color: 'from-orange-600 to-amber-500',
      delay: 0.3,
      subIcon: Bolt,
      gradient: 'bg-gradient-to-br from-orange-50/80 to-white'
    },
    {
      icon: Code,
      title: 'Modern Stack',
      description: 'Built with cutting-edge technologies and best practices for maintainable, future-proof solutions.',
      stats: 'Latest Frameworks',
      color: 'from-amber-600 to-orange-400',
      delay: 0.4,
      subIcon: Layers,
      gradient: 'bg-gradient-to-br from-white to-orange-50/80'
    },
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
        staggerChildren: 0.1,
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

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const rotateAnimation = {
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section 
      id="features" 
      className="py-16 md:py-32 relative overflow-hidden"
      ref={ref}
      // style={{
      // background: 'linear-gradient(135deg, #fff7ed 0%, #fffbeb 50%, #fef3c7 100%)'
      // }}
      
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/30 to-amber-50/20"></div>
      
      <motion.div 
        className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-br from-orange-200/10 to-amber-200/5 rounded-full blur-3xl"
        animate={floatAnimation}
        style={{ filter: 'blur(64px)' }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-br from-amber-200/10 to-orange-200/5 rounded-full blur-3xl"
        animate={{
          ...floatAnimation,
          transition: { ...floatAnimation.transition, delay: 1 }
        }}
        style={{ filter: 'blur(64px)' }}
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(249, 115, 22, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(251, 191, 36, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

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
            <div className="flex items-center gap-2">
              <Rocket className="h-4 w-4 text-orange-600" />
              <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                Enterprise-Grade Platform
              </span>
            </div>
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="block text-gray-900">Engineered for</span>
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-orange-700 via-amber-600 to-orange-700 bg-clip-text text-transparent bg-300%">
                Unmatched Performance
              </span>
              <motion.span 
                className="absolute -inset-4 bg-gradient-to-r from-orange-200/30 to-amber-200/30 blur-xl rounded-2xl"
                animate={pulseAnimation}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Our platform delivers everything you need to build, deploy, and scale digital solutions 
            with <span className="font-semibold text-orange-600">enterprise-grade reliability</span> and 
            <span className="font-semibold text-amber-600"> cutting-edge technology</span>.
          </motion.p>

          {/* Stats Overview */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            variants={staggerContainer}
          >
            {[
              { value: "10M+", label: "Requests/Day", icon: Server },
              { value: "99.99%", label: "Reliability", icon: Shield },
              { value: "<50ms", label: "Latency", icon: Zap },
              { value: "100%", label: "Uptime SLA", icon: Database },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-orange-100 shadow-lg hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="h-8 w-8 text-orange-600" />
                  <motion.div 
                    className="text-3xl font-bold bg-gradient-to-r from-orange-700 to-amber-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {stat.value}
                  </motion.div>
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
                
                {/* Animated progress bar */}
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
                      duration: 2, 
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Main Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={scaleIn}
              custom={index}
              transition={{ delay: feature.delay }}
              whileHover={{ 
                y: -8,
                boxShadow: '0 25px 50px -12px rgba(249, 115, 22, 0.25)'
              }}
              className="group relative"
            >
              <div 
                className={`${feature.gradient} p-8 rounded-3xl border border-orange-100 backdrop-blur-sm transition-all duration-500 h-full`}
                style={{
                  boxShadow: '0 10px 40px -10px rgba(249, 115, 22, 0.15)'
                }}
              >
                {/* Main Icon */}
                <motion.div 
                  className="relative mb-8"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-xl`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  {/* Floating sub-icon */}
                  <motion.div 
                    className={`absolute -top-2 -right-2 w-10 h-10 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-80 backdrop-blur-sm flex items-center justify-center shadow-lg`}
                    animate={floatAnimation}
                  >
                    <feature.subIcon className="h-5 w-5 text-white" />
                  </motion.div>
                  
                  {/* Rotating ring */}
                  <motion.div 
                    className="absolute -inset-4 border-2 border-dashed border-orange-300/30 rounded-3xl"
                    animate={rotateAnimation}
                  />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  {feature.description}
                </p>
                
                {/* Stats badge */}
                <motion.div 
                  className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-orange-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400"></div>
                  <span className="font-semibold text-orange-700">{feature.stats}</span>
                </motion.div>
                
                {/* Hover effect line */}
                <motion.div 
                  className="h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mt-6 opacity-0 group-hover:opacity-100"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
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

        {/* Technology Stack */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-orange-50/80 to-amber-50/80 rounded-3xl p-8 md:p-12 border border-orange-100 shadow-xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Powered by <span className="text-orange-600">Modern Technology</span>
              </h3>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                We leverage industry-leading technologies to deliver robust and scalable solutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "React", color: "bg-blue-100 text-blue-700", icon: Code },
                { name: "Node.js", color: "bg-green-100 text-green-700", icon: Server },
                { name: "AWS", color: "bg-orange-100 text-orange-700", icon: Cloud },
                { name: "Docker", color: "bg-blue-100 text-blue-700", icon: Cpu },
                { name: "Kubernetes", color: "bg-blue-100 text-blue-700", icon: Layers },
                { name: "PostgreSQL", color: "bg-blue-100 text-blue-700", icon: Database },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className={`w-16 h-16 rounded-xl ${tech.color} bg-opacity-20 flex items-center justify-center mb-4`}>
                    <tech.icon className="h-8 w-8" />
                  </div>
                  <div className="text-lg font-bold text-gray-900">{tech.name}</div>
                </motion.div>
              ))}
            </div>
            
            {/* Animated divider */}
            <motion.div 
              className="h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full mt-12"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            />
            
            {/* Call to Action */}
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-gray-700 mb-6">
                Ready to build with the best technology stack?
              </p>
              <motion.button
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-orange-200/50 hover:shadow-orange-300/70 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Tech Stack
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-1/3 left-4 hidden lg:block"
          animate={floatAnimation}
        >
          <div className="w-12 h-12 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-full"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-4 hidden lg:block"
          animate={{
            ...floatAnimation,
            transition: { ...floatAnimation.transition, delay: 0.5 }
          }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full"></div>
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
      `}</style>
    </section>
  );
};

export default Features;