import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-forest-800 hover:bg-forest-900 text-ivory-100 shadow-sm hover:shadow focus:ring-forest-700',
    gold: 'bg-gold-500 hover:bg-gold-600 text-charcoal-900 font-bold shadow-sm hover:shadow focus:ring-gold-500',
    secondary: 'bg-ivory-100 hover:bg-ivory-200 text-forest-800 border border-forest-800/20 focus:ring-forest-700',
    outline: 'bg-transparent hover:bg-forest-800 hover:text-ivory-100 text-forest-800 border border-forest-800 focus:ring-forest-700',
    white: 'bg-white hover:bg-ivory-100 text-forest-800 shadow-sm focus:ring-forest-700'
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5'
  };

  const combinedStyles = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedStyles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
