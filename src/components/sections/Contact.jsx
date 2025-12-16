import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, Clock, MessageSquare, CheckCircle, Zap, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
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

      {/* Shield Icon Component */}
      const Shield = (props) => (
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
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would connect to a backend
    setIsSubmitted(true);
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you within 24 hours.');
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

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
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@sammunat.com',
      subtitle: 'Typically replies within 4 hours',
      delay: 0.1,
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri, 9am-6pm EST',
      delay: 0.2,
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      subtitle: 'Serving clients globally',
      delay: 0.3,
      color: 'from-orange-600 to-amber-400'
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Discovery Call',
      description: 'We schedule a call to deeply understand your requirements and challenges',
      icon: MessageSquare
    },
    {
      number: 2,
      title: 'Custom Proposal',
      description: 'Prepare a tailored solution with timeline, scope, and investment',
      icon: Calendar
    },
    {
      number: 3,
      title: 'Development Kickoff',
      description: 'Begin development with agile sprints and regular progress updates',
      icon: Zap
    },
  ];

  return (
    <section 
      id="contact" 
      className="py-16 md:py-32 relative overflow-hidden"
      ref={ref}
      // style={{
      //   background: 'linear-gradient(135deg, #fffbeb 0%, #fff7ed 50%, #fef3c7 100%)'
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-orange-200 shadow-lg shadow-orange-100/50"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 20px 40px -15px rgba(249, 115, 22, 0.3)',
                backgroundColor: 'rgba(255, 255, 255, 0.9)'
              }}
            >
              <Sparkles className="h-4 w-4 text-orange-600" />
              <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                Let's Build Something Amazing Together
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-gray-900">Ready to</span>
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-orange-700 via-amber-600 to-orange-700 bg-clip-text text-transparent bg-300%">
                  Transform Your Vision?
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
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Share your project ideas with us. We'll help you build scalable solutions that drive real business impact.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl font-bold mb-10 text-gray-900">
                Get in <span className="text-orange-600">Touch</span>
              </h3>
              
              <div className="space-y-8 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="group relative"
                    variants={scaleIn}
                    custom={index}
                    transition={{ delay: info.delay }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex items-start gap-6 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-orange-100 shadow-lg shadow-orange-100/30 hover:shadow-orange-200/50 transition-all duration-300">
                      <motion.div 
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <info.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h4>
                        <p className="text-lg text-gray-800 font-medium mb-1">{info.value}</p>
                        <p className="text-gray-600">{info.subtitle}</p>
                      </div>
                      
                      <motion.div 
                        className="absolute -right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="h-5 w-5 text-orange-500" />
                      </motion.div>
                    </div>
                    
                    {/* Connection line */}
                    {index < contactInfo.length - 1 && (
                      <motion.div 
                        className="h-6 w-0.5 bg-gradient-to-b from-orange-300 to-amber-300 mx-auto opacity-50"
                        initial={{ height: 0 }}
                        animate={{ height: "1.5rem" }}
                        transition={{ delay: info.delay + 0.3, duration: 0.5 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Process Steps */}
              <motion.div 
                className="p-8 rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50/50 to-amber-50/50 shadow-xl"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <h4 className="text-2xl font-bold mb-8 text-gray-900">
                  Our <span className="text-orange-600">Process</span>
                </h4>
                
                <div className="space-y-8">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={step.number}
                      className="flex items-start gap-6 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      <motion.div 
                        className="relative flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-xl">{step.number}</span>
                        </div>
                        <motion.div 
                          className="absolute -inset-2 border-2 border-dashed border-orange-400/30 rounded-xl"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <step.icon className="h-5 w-5 text-orange-600" />
                          <h5 className="text-lg font-bold text-gray-900">{step.title}</h5>
                        </div>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Timeline connector */}
                <div className="relative mt-8 pt-8 border-t border-orange-200/50">
                  <motion.div 
                    className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400/30 via-amber-400/50 to-orange-400/30"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                  />
                  <p className="text-center text-gray-600 font-medium">
                    Average project kickoff: <span className="text-orange-600 font-bold">2-3 weeks</span>
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="relative"
              variants={scaleIn}
              transition={{ delay: 0.4 }}
            >
              {/* Decorative floating element */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-2xl rotate-12 hidden lg:block"
                animate={floatAnimation}
              />
              
              <div className="bg-white rounded-3xl border border-orange-100 shadow-2xl shadow-orange-200/30 overflow-hidden">
                {/* Form header */}
                <div className="p-8 bg-gradient-to-r from-orange-50 to-amber-50 border-b border-orange-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Start Your Project</h3>
                      <p className="text-gray-600">Fill out the form below and we'll get back to you ASAP</p>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="h-1 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 rounded-full"
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{ backgroundSize: '200% 100%' }}
                  />
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8">
                  <motion.div 
                    className="space-y-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {/* Name Field */}
                    <motion.div variants={fadeInUp}>
                      <Label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                        Full Name <span className="text-orange-500">*</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="pl-12 py-6 rounded-xl border-orange-200 focus:border-orange-400 focus:ring-orange-400/20"
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                            <div className="w-2 h-4 bg-gradient-to-b from-orange-500 to-amber-400 rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Email Field */}
                    <motion.div variants={fadeInUp}>
                      <Label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                        Email Address <span className="text-orange-500">*</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="pl-12 py-6 rounded-xl border-orange-200 focus:border-orange-400 focus:ring-orange-400/20"
                        />
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-500" />
                      </div>
                    </motion.div>

                    {/* Company Field */}
                    <motion.div variants={fadeInUp}>
                      <Label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-3">
                        Company
                      </Label>
                      <div className="relative">
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="pl-12 py-6 rounded-xl border-orange-200 focus:border-orange-400 focus:ring-orange-400/20"
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                            <div className="w-3 h-3 border-2 border-orange-500 rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Message Field */}
                    <motion.div variants={fadeInUp}>
                      <Label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                        Project Details <span className="text-orange-500">*</span>
                      </Label>
                      <div className="relative">
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project requirements, timeline, budget, and goals..."
                          rows={6}
                          required
                          className="pl-12 py-4 rounded-xl border-orange-200 focus:border-orange-400 focus:ring-orange-400/20 min-h-[180px]"
                        />
                        <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-orange-500" />
                        
                        {/* Character counter */}
                        <div className="absolute bottom-3 right-3 text-sm text-gray-500">
                          {formData.message.length}/500
                        </div>
                      </div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div 
                      className="pt-6"
                      variants={fadeInUp}
                    >
                      <Button 
                        type="submit" 
                        disabled={isSubmitted}
                        className="group relative w-full py-7 text-lg font-bold rounded-xl overflow-hidden bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 border-0 shadow-lg shadow-orange-200/50 hover:shadow-orange-300/70"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitted ? (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex items-center justify-center gap-3"
                          >
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"></div>
                            </motion.div>
                            Sending Your Message...
                          </motion.div>
                        ) : (
                          <>
                            <motion.span
                              className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/40"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.8 }}
                            />
                            <span className="relative flex items-center justify-center gap-3">
                              Send Message
                              <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </>
                        )}
                      </Button>
                      
                      <motion.div 
                        className="mt-6 flex items-center gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Button 
                          type="button" 
                          variant="outline"
                          className="flex-1 py-6 rounded-xl border-orange-200 text-orange-700 hover:bg-orange-50 hover:border-orange-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          Schedule a Call
                        </Button>
                        
                        <div className="text-center">
                          <div className="text-sm text-gray-500 mb-1">Response Time</div>
                          <div className="flex items-center text-orange-600 font-bold">
                            <Clock className="mr-1 h-4 w-4" />
                            <span>24 Hours</span>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Privacy Note */}
                    <motion.div 
                      className="pt-6 border-t border-orange-100"
                      variants={fadeInUp}
                    >
                      <p className="text-sm text-gray-600 text-center">
                        By submitting this form, you agree to our{' '}
                        <span className="text-orange-600 font-medium hover:text-orange-700 cursor-pointer">
                          Privacy Policy
                        </span>
                        . We'll never share your information with third parties.
                      </p>
                      
                      {/* Trust badges */}
                      <div className="flex items-center justify-center gap-6 mt-6">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          <span className="text-sm text-gray-600">SSL Secured</span>
                        </div>
                        <div className="h-4 w-px bg-gray-300"></div>
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-blue-500" />
                          <span className="text-sm text-gray-600">GDPR Compliant</span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Success Message */}
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-white rounded-3xl p-8 max-w-md mx-4 shadow-2xl border border-orange-100"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center"
                  >
                    <CheckCircle className="h-10 w-10 text-emerald-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600"
                  >
                    Got it!
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
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

export default Contact;