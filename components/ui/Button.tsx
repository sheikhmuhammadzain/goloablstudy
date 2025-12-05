import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-bold transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const variants = {
    primary: "bg-brand-600 text-white border-2 border-brand-600 shadow-[0_4px_0_0_#5b21b6] hover:bg-brand-700 hover:shadow-[0_4px_0_0_#4c1d95] active:shadow-none active:translate-y-1",
    secondary: "bg-white text-gray-900 border-2 border-gray-200 shadow-[0_4px_0_0_#e5e7eb] hover:bg-gray-50 hover:border-gray-300 hover:shadow-[0_4px_0_0_#d1d5db] active:shadow-none active:translate-y-1",
    outline: "bg-transparent text-brand-700 border-2 border-brand-200 shadow-[0_4px_0_0_#ddd6fe] hover:bg-brand-50 active:shadow-none active:translate-y-1",
    ghost: "text-gray-600 hover:text-brand-600 hover:bg-brand-50/50 rounded-lg",
  };

  const sizes = {
    sm: "h-10 px-4 text-xs",
    md: "h-12 px-6 text-sm",
    lg: "h-14 px-8 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};