import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  to?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  className = '', 
  onClick,
  type = 'button'
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-white hover:shadow-glow hover:bg-red-700 px-6 py-3 rounded-lg",
    secondary: "bg-transparent text-text border border-text-tertiary hover:border-primary hover:text-primary px-6 py-3 rounded-lg",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full",
    white: "bg-white text-primary hover:bg-gray-50 hover:shadow-lg px-8 py-4 rounded-full font-bold shadow-md",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;