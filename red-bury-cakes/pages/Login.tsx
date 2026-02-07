import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login", { email, password });
    // Handle login logic
  };

  return (
    <div className="min-h-screen pt-[80px] flex">
      {/* Left Image Side */}
      <div className="hidden lg:flex w-1/2 bg-secondary items-center justify-center p-12 border-r border-gray-100">
        <div className="w-full max-w-lg aspect-[4/5] bg-white rounded-2xl border-2 border-dashed border-primary/20 flex flex-col items-center justify-center p-8 shadow-card text-center relative overflow-hidden">
            <span className="text-primary/30 font-serif font-bold text-3xl uppercase tracking-widest mb-4">Cake Art</span>
            <span className="text-text-tertiary font-medium">Visual Placeholder</span>
        </div>
        <div className="absolute bottom-20 left-12 z-20 text-text max-w-md pointer-events-none">
          <h2 className="text-4xl font-serif font-bold mb-4">Welcome Back</h2>
          <p className="text-lg text-text-secondary">Sign in to manage your orders, view favorites, and track deliveries.</p>
        </div>
      </div>

      {/* Right Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-serif font-bold text-text mb-2">Sign In</h1>
            <p className="text-text-secondary">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary font-medium hover:underline">
                Register here
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-text-secondary">Password</label>
                <a href="#" className="text-xs text-primary hover:underline">Forgot password?</a>
              </div>
              <input 
                type="password" 
                id="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            <Button type="submit" variant="primary" className="w-full">
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;