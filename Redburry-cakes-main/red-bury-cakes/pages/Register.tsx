import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register", formData);
  };

  return (
    <div className="min-h-screen pt-[80px] flex">
      {/* Left Image Side */}
      <div className="hidden lg:flex w-1/2 bg-secondary items-center justify-center p-12 border-l border-gray-100 order-2">
        <div className="w-full max-w-lg aspect-[4/5] bg-white rounded-2xl border-2 border-dashed border-primary/20 flex flex-col items-center justify-center p-8 shadow-card text-center relative overflow-hidden">
             <span className="text-primary/30 font-serif font-bold text-3xl uppercase tracking-widest mb-4">Frosting</span>
             <span className="text-text-tertiary font-medium">Visual Placeholder</span>
        </div>
        <div className="absolute bottom-20 right-12 z-20 text-text max-w-md text-right pointer-events-none">
          <h2 className="text-4xl font-serif font-bold mb-4">Join The Club</h2>
          <p className="text-lg text-text-secondary">Create an account to get exclusive access to seasonal menus and priority booking.</p>
        </div>
      </div>

      {/* Right Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white order-1">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-serif font-bold text-text mb-2">Create Account</h1>
            <p className="text-text-secondary">
              Already a member?{' '}
              <Link to="/login" className="text-primary font-medium hover:underline">
                Sign in here
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 mt-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Full Name</label>
              <input 
                type="text" 
                id="name" 
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-2">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-secondary mb-2">Password</label>
              <input 
                type="password" 
                id="password" 
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="••••••••"
              />
              <p className="text-xs text-text-tertiary mt-2">Must be at least 8 characters.</p>
            </div>

            <Button type="submit" variant="primary" className="w-full">
              Create Account
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;