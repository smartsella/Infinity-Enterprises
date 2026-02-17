
import React from 'react';
import { Link } from 'react-router-dom';

export function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  to, 
  onClick, 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 active:scale-95";
  const variants = {
    primary: "btn-primary",
    secondary: "bg-surface hover:bg-white/10 text-white border border-white/10 rounded-full px-6 py-3",
    outline: "btn-outline",
    ghost: "hover:bg-white/5 text-gray-300 hover:text-white px-4 py-2 rounded-lg"
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
