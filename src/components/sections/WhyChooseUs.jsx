import React from 'react';
import { CheckCircle, Clock, TrendingUp, Headphones, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: 'Proven Expertise',
      description: '10+ years of combined experience in building enterprise-grade applications.',
      delay: 0.1,
    },
    {
      icon: Clock,
      title: 'Rapid Delivery',
      description: 'Agile development process ensuring timely delivery without compromising quality.',
      delay: 0.2,
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Architectures designed to grow with your business needs and user base.',
      delay: 0.3,
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Round-the-clock technical support and maintenance services.',
      delay: 0.4,
    },
  ];

  const stats = [
    { value: '40%', label: 'Average reduction in development time', delay: 0.5 },
    { value: '100%', label: 'Client satisfaction rate', delay: 0.6 },
    { value: '3x', label: 'Faster time-to-market', delay: 0.7 },
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const pulseVariants = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  return (
    <section className="relative py-20 md:py-28  overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-orange-200/20 to-orange-100/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-orange-100/10 to-orange-200/20 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDJ2LTJoLTJ2MnptMC00aDJ2LTJoLTJ2MnptMi0yaDJ2LTJoLTJ2MnptLTQgMGgydi0yaC0ydjJ6bTItNmgydi0yaC0ydjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge 
              variant="outline" 
              className="mb-4 px-4 py-1.5 border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-50"
            >
              <Sparkles className="h-3.5 w-3.5 mr-2" />
              Why We Stand Out
            </Badge>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Why Choose{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  Sammunat
                </span>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-orange-200/50 to-amber-200/50 rounded-full -z-0"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
                />
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              We combine technical expertise with business understanding to deliver solutions that drive real value.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Benefits */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="space-y-6">
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit.title}
                    variants={itemVariants}
                    whileHover={{ x: 8 }}
                    className="group"
                  >
                    <Card className="overflow-hidden border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg hover:shadow-orange-100/50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-5">
                          <motion.div
                            className="relative"
                            whileHover={{ rotate: 10 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                          >
                            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200">
                              <benefit.icon className="h-7 w-7 text-white" />
                            </div>
                            <motion.div
                              className="absolute inset-0 border-2 border-orange-300 rounded-xl"
                              variants={pulseVariants}
                              initial="initial"
                              animate="pulse"
                            />
                          </motion.div>
                          
                          <div className="flex-1 pt-1">
                            <h4 className="font-bold text-xl mb-2 group-hover:text-orange-600 transition-colors">
                              {benefit.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                              {benefit.description}
                            </p>
                          </div>
                          
                          <ArrowRight className="h-5 w-5 text-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-10"
              >
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg shadow-orange-200 hover:shadow-xl hover:shadow-orange-300 transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Stats Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              className="lg:sticky lg:top-8"
            >
              <Card className="border-none shadow-2xl overflow-hidden bg-gradient-to-br from-white to-orange-50">
                <CardContent className="p-0">
                  {/* Card Header */}
                  <div className="p-8 pb-6 bg-gradient-to-r from-orange-500/5 via-orange-500/10 to-orange-500/5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Our Impact</h3>
                        <p className="text-sm text-gray-600 mt-1">Numbers that speak for themselves</p>
                      </div>
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                          <TrendingUp className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="p-8 pt-6">
                    <div className="space-y-8">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={stat.value}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: stat.delay }}
                          className="group"
                        >
                          <div className="relative">
                            <div className="flex items-baseline gap-3">
                              <motion.div
                                className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"
                                whileHover={{ scale: 1.05 }}
                              >
                                {stat.value}
                              </motion.div>
                              <div className="flex-1">
                                <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                                  {stat.label}
                                </p>
                              </div>
                            </div>
                            <div className="absolute -bottom-3 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500" />
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 }}
                      className="mt-10"
                    >
                      <Card className="border border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50/50">
                        <CardContent className="p-6">
                          <div className="flex gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold text-lg">"</span>
                            </div>
                            <div>
                              <p className="text-gray-700 italic">
                                "Sammunat transformed our digital infrastructure, enabling us to scale seamlessly."
                              </p>
                              <div className="flex items-center justify-between mt-4">
                                <div>
                                  <p className="font-semibold text-gray-900">CTO, Fortune 500 Company</p>
                                  <div className="flex items-center gap-1 mt-1">
                                    {[...Array(5)].map((_, i) => (
                                      <div
                                        key={i}
                                        className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                                      />
                                    ))}
                                  </div>
                                </div>
                                <div className="text-6xl text-orange-200 opacity-50 leading-none">"</div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;