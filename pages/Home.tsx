import React from 'react';
import { ArrowRight, Quote, Star, Check } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* SECTION 2: HERO */}
      <section className="relative min-h-screen pt-[72px] flex items-center overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Content Column */}
          <div className="flex flex-col items-start gap-8 z-10 py-12 lg:py-0">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-secondary text-primary text-xs font-bold tracking-wider uppercase mb-2">
              Premium Artisan Cakes
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-[4rem] font-serif font-bold text-text leading-[1.1]">
              Baked With <span className="text-primary">Love</span>,<br />
              Designed To Celebrate
            </h1>

            <p className="text-lg text-text-secondary max-w-md leading-relaxed">
              Custom cakes for birthdays, weddings & special moments.
              Freshly baked. Beautifully crafted. Delivered with care.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Button to="/contact" variant="primary">
                Browse Cakes
              </Button>
              <Button to="/contact" variant="secondary">
                Custom Order
              </Button>
            </div>
          </div>

          {/* Floating Cake Gallery (Visuals Column) */}
          <div className="relative h-[400px] md:h-[600px] w-full block">
            {/* 1. Large Hero (Top Right) */}
            <div className="absolute top-0 right-0 w-32 h-40 md:w-64 md:h-80 bg-white p-2 shadow-card rounded-2xl rotate-[3deg] z-20 hover:scale-105 transition-transform duration-500 border border-primary/10">
              <div className="w-full h-full rounded-xl flex items-center justify-center bg-white border-2 border-dashed border-primary/30 text-primary/40 font-bold uppercase tracking-widest text-xs relative overflow-hidden">
                <img src="/images/gallery-1.jpg" alt="Cake Gallery 1" className="w-full h-full object-cover rounded-xl" />
                <div className="absolute bottom-2 left-0 right-0 text-center text-[10px] font-bold text-primary/60 uppercase tracking-widest bg-white/80 backdrop-blur-sm py-1">Wedding</div>
              </div>
            </div>

            {/* 2. Medium Square (Center) */}
            <div className="absolute top-1/4 left-1/4 w-24 h-24 md:w-48 md:h-48 bg-white p-2 shadow-card rounded-2xl rotate-[-2deg] z-30 hover:scale-105 transition-transform duration-500 border border-primary/10">
              <div className="w-full h-full rounded-xl flex items-center justify-center bg-white border-2 border-dashed border-primary/30 text-primary/40 font-bold uppercase tracking-widest text-xs overflow-hidden">
                <img src="/images/gallery-2.jpg" alt="Cake Gallery 2" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>

            {/* 3. Tall Thin (Left) */}
            <div className="absolute top-10 left-0 w-16 h-32 md:w-32 md:h-64 bg-white p-2 shadow-card rounded-2xl rotate-[-6deg] z-10 hover:scale-105 transition-transform duration-500 border border-primary/10">
              <div className="w-full h-full rounded-xl flex items-center justify-center bg-white border-2 border-dashed border-primary/30 text-primary/40 font-bold uppercase tracking-widest text-xs overflow-hidden">
                <img src="/images/gallery-3.jpg" alt="Cake Gallery 3" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>

            {/* 4. Small Square (Top Center) */}
            <div className="absolute top-[-20px] left-[40%] w-16 h-16 md:w-32 md:h-32 bg-white p-2 shadow-card rounded-xl rotate-[5deg] z-10 hover:scale-105 transition-transform duration-500 border border-primary/10">
              <div className="w-full h-full rounded-lg flex items-center justify-center bg-white border-2 border-dashed border-primary/30 text-primary/40 font-bold uppercase tracking-widest text-xs overflow-hidden">
                <img src="/images/gallery-4.jpg" alt="Cake Gallery 4" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>

            {/* 5. Medium Rectangle (Bottom Right) */}
            <div className="absolute bottom-10 right-10 w-28 h-20 md:w-56 md:h-40 bg-white p-2 shadow-card rounded-2xl rotate-[-3deg] z-20 hover:scale-105 transition-transform duration-500 border border-primary/10">
              <div className="w-full h-full rounded-xl flex items-center justify-center bg-white border-2 border-dashed border-primary/30 text-primary/40 font-bold uppercase tracking-widest text-xs overflow-hidden">
                <img src="/images/gallery-5.jpg" alt="Cake Gallery 5" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>

            {/* 6. Small Portrait (Bottom Left) */}
            <div className="absolute bottom-20 left-10 w-16 h-24 md:w-36 md:h-48 bg-white p-2 shadow-card rounded-xl rotate-[4deg] z-20 hover:scale-105 transition-transform duration-500 border border-primary/10">
              <div className="w-full h-full rounded-lg flex items-center justify-center bg-white border-2 border-dashed border-primary/30 text-primary/40 font-bold uppercase tracking-widest text-xs overflow-hidden">
                <img src="/images/gallery-1.jpg" alt="Cake Gallery 6" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>

            {/* 7. Mini Square (Floating Top Right - deeper) */}
            <div className="absolute top-20 right-[30%] w-12 h-12 md:w-24 md:h-24 bg-white p-1.5 shadow-sm rounded-lg rotate-[12deg] z-0 opacity-80 border border-primary/10">
              <div className="w-full h-full rounded-md flex items-center justify-center bg-white border-2 border-dashed border-primary/30 text-primary/40 font-bold uppercase tracking-widest text-[10px] overflow-hidden">
                <img src="/images/gallery-2.jpg" alt="Cake Gallery 7" className="w-full h-full object-cover rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED CAKES */}
      <section className="bg-secondary py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-[2.4rem] font-serif font-semibold text-text mb-4">
              Our Best Sellers
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, name: "Velvet Rose Royale", price: "₹450", desc: "Red velvet sponge, mascarpone cream, fresh berries.", image: "/images/featured-red-velvet.jpg" },
              { id: 2, name: "Midnight Truffle", price: "₹550", desc: "Dark Belgian chocolate, gold dust, truffle ganache.", image: "/images/featured-midnight-truffle.jpg" },
              { id: 3, name: "Vanilla Bean Dream", price: "₹350", desc: "Madagascan vanilla, swiss buttercream, white orchids.", image: "/images/featured-vanilla-bean.jpg" }
            ].map((cake) => (
              <div key={cake.id} className="group bg-white rounded-2xl p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow border border-transparent hover:border-primary/10">
                <div className="aspect-square rounded-xl overflow-hidden mb-6 flex items-center justify-center bg-secondary border-2 border-dashed border-primary/20 relative group-hover:border-primary/50 transition-colors">
                  <img src={cake.image} alt={cake.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="px-2 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-semibold text-text">{cake.name}</h3>
                    <span className="text-primary font-bold">{cake.price}</span>
                  </div>
                  <p className="text-text-secondary text-sm mb-6">{cake.desc}</p>
                  <Button variant="secondary" className="w-full py-2 border-primary/20 hover:bg-primary hover:text-white" onClick={() => { }}>
                    Order Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CUSTOM CAKES */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] md:h-[500px] group bg-white border border-gray-100 p-4">
            <div className="w-full h-full rounded-xl flex items-center justify-center bg-secondary border-2 border-dashed border-primary/20 relative overflow-hidden">
              <img src="/images/custom-cakes.jpg" alt="Custom Cakes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-text font-serif text-2xl tracking-wide bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl inline-block shadow-lg border border-primary/10">Handcrafted Masterpieces</span>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl md:text-[2.4rem] font-serif font-semibold text-text leading-tight">
              Custom Cakes For<br />Every Occasion
            </h2>
            <p className="text-text-secondary text-lg">
              Every celebration deserves a centerpiece that tastes as incredible as it looks. work directly with our pastry chefs to design the cake of your dreams.
            </p>

            <ul className="space-y-4">
              {['Birthdays & Milestones', 'Luxury Weddings', 'Anniversary Celebrations', 'Corporate Events'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-text font-medium">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-primary">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button to="/contact" variant="primary">
                Request Custom Design
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TESTIMONIALS */}
      <section className="bg-white py-20 border-t border-gray-50 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 mb-12">
          <h2 className="text-2xl font-serif font-semibold text-text">Client Love</h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto gap-6 pb-12 px-6 md:px-[calc((100vw-1200px)/2)] no-scrollbar snap-x max-w-full">
          {[
            { name: "Ritika & Sourav", event: "Wedding", quote: "The most stunning cake we've ever seen. It tasted like heaven!" },
            { name: "Ananya Singh", event: "30th Birthday", quote: "Redburry Cakes nailed the design perfectly. Everyone asked where it was from." },
            { name: "TechCorp Inc.", event: "Corporate Gala", quote: "Professional service and a dessert that impressed our VIP clients." },
            { name: "Sanjana Yadav", event: "Baby Shower", quote: "Elegant, not too sweet, and absolutely beautiful packaging." },
          ].map((item, idx) => (
            <div key={idx} className="min-w-[300px] md:min-w-[400px] bg-secondary p-8 rounded-2xl relative snap-start">
              <Quote className="text-primary/20 absolute top-6 right-6" size={48} />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-primary fill-primary" />)}
              </div>
              <p className="text-text font-serif text-lg italic mb-6 leading-relaxed">"{item.quote}"</p>
              <div>
                <p className="font-bold text-text">{item.name}</p>
                <p className="text-sm text-text-tertiary uppercase tracking-wider mt-1">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: CTA */}
      <section className="bg-primary py-24 text-center px-6">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Make Your Celebration Sweeter
          </h2>
          <p className="text-white/80 text-lg">
            Because every celebration deserves something special!
          </p>
          <Button variant="white" to="/contact">
            Order Now
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;