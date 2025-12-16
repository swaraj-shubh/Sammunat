import React from 'react';
import { Linkedin, Github, Globe, Mail, ArrowUpRight, Sparkles, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      color: 'hover:text-[#0A66C2]',
      delay: 0.1
    },
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
      color: 'hover:text-[#333]',
      delay: 0.2
    },
    {
      icon: Globe,
      href: '#',
      label: 'Website',
      color: 'hover:text-orange-500',
      delay: 0.3
    },
    {
      icon: Mail,
      href: 'mailto:contact@sammunat.com',
      label: 'Email',
      color: 'hover:text-[#EA4335]',
      delay: 0.4
    }
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'Cloud Solutions',
    'UI/UX Design',
    'DevOps',
    'Consulting'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-orange-500/5 to-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDJ2LTJoLTJ2MnptMC00aDJ2LTJoLTJ2MnptMi0yaDJ2LTJoLTJ2MnptLTQgMGgydi0yaC0ydjJ6bTItNmgydi0yaC0ydjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <motion.div
                  className="absolute inset-0 border-2 border-orange-300 rounded-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Sammunat
                </h3>
                <p className="text-sm text-gray-400">Digital Excellence</p>
              </div>
            </div>

            <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
              Building scalable digital solutions for modern businesses. We transform ideas into robust, 
              production-ready platforms that drive growth and innovation.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-orange-400" />
                <span>San Francisco, California</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-5 w-5 text-orange-400" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              Quick Links
              <ArrowUpRight className="h-4 w-4 text-orange-400" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.label}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group-hover:text-orange-400"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services & Newsletter */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Services */}
            <div>
              <h4 className="text-xl font-bold mb-6">Our Services</h4>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1.5 bg-gray-800/50 hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-amber-500/20 text-gray-300 hover:text-white rounded-full text-sm border border-gray-700 hover:border-orange-500/30 transition-all duration-300 cursor-default"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-xl font-bold mb-6">Stay Updated</h4>
              <p className="text-gray-400 mb-4 text-sm">
                Subscribe to our newsletter for the latest updates.
              </p>
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800/50 border-gray-700 focus:border-orange-500 focus:ring-orange-500 text-white"
                />
                <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30">
                  <Send className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <Separator className="bg-gray-800/50 mb-8" />

        {/* Social & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: social.delay }}
                whileHover={{ scale: 1.1, y: -2 }}
                className={`relative p-3 rounded-xl bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-orange-500/50 ${social.color} transition-all duration-300 group`}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.label}
                </div>
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {currentYear}{' '}
              <span className="text-orange-400 font-medium">Sammunat</span>
              . All rights reserved.
            </p>
            <div className="flex gap-4 mt-2 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </a>
              <span>•</span>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-full shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <ArrowUpRight className="h-5 w-5 rotate-[-45deg]" />
        </motion.button>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-30" />
    </footer>
  );
};

export default Footer;