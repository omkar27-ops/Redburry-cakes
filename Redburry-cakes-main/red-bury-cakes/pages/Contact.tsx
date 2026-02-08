import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  return (
    <div className="pt-[72px] min-h-screen bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text mb-4">Get In Touch</h1>
          <p className="text-lg text-text-secondary">We'd love to hear about your upcoming celebration.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Info Column */}
          <div className="space-y-12">

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-6">Store Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-text">Visit Us</p>
                    <p className="text-text-secondary">Crown Building, Shop no. 11, adjacent to Eden Supermarket and Gravity Fitness<br />Thane, Maharashtra 400607</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-text">Call Us</p>
                    <p className="text-text-secondary"> 077009 55559</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-text">Email Us</p>
                    <p className="text-text-secondary">hello@redburrycakes.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-6">Opening Hours</h2>
              <div className="space-y-3 text-text-secondary">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Tuesday - Sunday</span>
                  <span className="font-medium text-text">11:00 AM - 10:00 PM</span>
                </div>


                <div className="flex justify-between pb-2">
                  <span>Monday</span>
                  <span className="font-medium text-text">Closed</span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 w-full h-48 rounded-2xl flex items-center justify-center text-text-tertiary">
              <span className="flex items-center gap-2"><MapPin size={16} /> Google Maps Integration</span>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-secondary p-8 md:p-10 rounded-3xl">
            <h2 className="text-2xl font-serif font-semibold mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="c-name" className="block text-sm font-medium text-text-secondary mb-2">Name</label>
                  <input type="text" id="c-name" className="w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-primary/20 bg-white" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="c-phone" className="block text-sm font-medium text-text-secondary mb-2">Phone</label>
                  <input type="tel" id="c-phone" className="w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-primary/20 bg-white" placeholder="Your Phone" />
                </div>
              </div>

              <div>
                <label htmlFor="c-email" className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                <input type="email" id="c-email" className="w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-primary/20 bg-white" placeholder="your@email.com" />
              </div>

              <div>
                <label htmlFor="c-type" className="block text-sm font-medium text-text-secondary mb-2">Inquiry Type</label>
                <select id="c-type" className="w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-primary/20 bg-white text-text-secondary">
                  <option>Wedding Cake Consultation</option>
                  <option>Birthday Order</option>
                  <option>Corporate Event</option>
                  <option>Other Question</option>
                </select>
              </div>

              <div>
                <label htmlFor="c-message" className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                <textarea id="c-message" rows={4} className="w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-primary/20 bg-white" placeholder="Tell us about your event..."></textarea>
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;