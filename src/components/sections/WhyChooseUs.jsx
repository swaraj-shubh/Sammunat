import React from 'react';
import { CheckCircle, Clock, TrendingUp, Headphones } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: 'Proven Expertise',
      description: '10+ years of combined experience in building enterprise-grade applications.',
    },
    {
      icon: Clock,
      title: 'Rapid Delivery',
      description: 'Agile development process ensuring timely delivery without compromising quality.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Architectures designed to grow with your business needs and user base.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Round-the-clock technical support and maintenance services.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="text-primary">Sammunat</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine technical expertise with business understanding to deliver solutions that drive real value. Our approach ensures that every project is built on a solid foundation for long-term success.
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Stats Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">Our Impact</h3>
              
              <div className="space-y-6">
                <div className="pb-4 border-b border-gray-100">
                  <div className="text-3xl font-bold text-primary mb-2">40%</div>
                  <p className="text-gray-600">Average reduction in development time for our clients</p>
                </div>
                
                <div className="pb-4 border-b border-gray-100">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="text-gray-600">Client satisfaction rate across all delivered projects</p>
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3x</div>
                  <p className="text-gray-600">Faster time-to-market compared to traditional approaches</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
                <p className="text-sm text-primary font-medium">
                  "Sammunat transformed our digital infrastructure, enabling us to scale seamlessly."
                </p>
                <p className="text-sm text-gray-600 mt-2">— CTO, Fortune 500 Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;