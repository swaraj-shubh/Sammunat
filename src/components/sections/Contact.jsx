import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would connect to a backend
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to transform your digital presence? Let's discuss how we can help you build scalable solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <p className="text-gray-600">contact@sammunat.com</p>
                    <p className="text-sm text-gray-500">Typically replies within 4 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Location</h4>
                    <p className="text-gray-600">San Francisco, CA</p>
                    <p className="text-sm text-gray-500">Serving clients globally</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-lg mb-4">What happens next?</h4>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
                    <span className="text-gray-600">We schedule a call to understand your requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
                    <span className="text-gray-600">Prepare a customized proposal and timeline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
                    <span className="text-gray-600">Begin development with regular updates</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="mb-2">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="mb-2">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="mb-2">Company (Optional)</Label>
                  <Input
                    id="company"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="mb-2">Project Details</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project requirements, timeline, and goals..."
                    rows={6}
                    required
                  />
                </div>

                <div className="flex items-center gap-4">
                  <Button type="submit" className="flex-1">
                    Send Message
                  </Button>
                  <Button type="button" variant="outline">
                    Schedule a Call
                  </Button>
                </div>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our Privacy Policy. We'll never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;