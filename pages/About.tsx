import React from 'react';
import { Heart, Award, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <div className="relative py-24 bg-secondary">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text mb-6">Our Story</h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Redburry Cakes began with a simple philosophy: a cake should be as memorable as the moment it celebrates.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 md:order-1 h-[600px] bg-white rounded-2xl shadow-xl border border-gray-100 p-4">
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                src="/images/about-kitchen.jpg"
                alt="Our Kitchen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl font-serif font-bold text-text">The Art of Baking</h2>
            <p className="text-text-secondary leading-loose">
              Founded in 2010 in the heart of the city, Redburry Cakes was born from a passion for refined aesthetics and uncompromising flavor. We don't just bake; we sculpt, we design, and we pour our hearts into every layer.
            </p>
            <p className="text-text-secondary leading-loose">
              Our ingredients are sourced from the finest local producers and premium global suppliers—Madagascan vanilla, Belgian chocolate, and seasonal fruits picked at their peak.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-secondary rounded-xl">
                <h3 className="text-2xl font-bold text-primary mb-1">15+</h3>
                <p className="text-sm text-text-secondary uppercase tracking-wide">Years Experience</p>
              </div>
              <div className="p-6 bg-secondary rounded-xl">
                <h3 className="text-2xl font-bold text-primary mb-1">5k+</h3>
                <p className="text-sm text-text-secondary uppercase tracking-wide">Cakes Delivered</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Heart className="text-primary" size={32} />, title: "Made with Love", desc: "Every swirl of frosting is applied by hand with meticulous care." },
            { icon: <Award className="text-primary" size={32} />, title: "Premium Quality", desc: "We never compromise on ingredients. Only the best for you." },
            { icon: <Clock className="text-primary" size={32} />, title: "Freshly Baked", desc: "Baked the same day it's delivered to ensure maximum freshness." },
          ].map((val, i) => (
            <div key={i} className="text-center p-8 rounded-2xl border border-gray-100 hover:shadow-card transition-all">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                {val.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">{val.title}</h3>
              <p className="text-text-secondary">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;