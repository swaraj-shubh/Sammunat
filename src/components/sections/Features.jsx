import React from 'react';
import { Cloud, Shield, Zap, Code } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud-Native Architecture',
      description: 'Build applications designed for the cloud with auto-scaling, high availability, and global distribution.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with encryption at rest and in transit, RBAC, and compliance certifications.',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed and scalability with minimal latency and maximum throughput.',
    },
    {
      icon: Code,
      title: 'Modern Stack',
      description: 'Built with cutting-edge technologies and best practices for maintainable, future-proof solutions.',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Scale</h2>
          <p className="text-lg text-gray-600">
            Our platform provides everything you need to build, deploy, and scale digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;