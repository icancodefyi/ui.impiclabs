'use client';

import React from "react";

export interface FloatingButtonProps {
  /** Button text or content */
  children: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Button position */
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  /** Background color */
  backgroundColor?: string;
  /** Text color */
  textColor?: string;
  /** Additional className */
  className?: string;
  /** Icon component (optional) */
  icon?: React.ReactNode;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({
  children,
  onClick,
  size = 'md',
  position = 'bottom-right',
  backgroundColor = '#3b82f6',
  textColor = '#ffffff',
  className = '',
  icon,
}) => {
  const sizeClasses = {
    sm: 'h-12 w-12 text-sm',
    md: 'h-14 w-14 text-base',
    lg: 'h-16 w-16 text-lg'
  };

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6', 
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6'
  };

  return (
    <button
      onClick={onClick}
      className={`
        fixed ${positionClasses[position]} ${sizeClasses[size]}
        rounded-full shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        flex items-center justify-center
        hover:scale-110 active:scale-95
        z-50 ${className}
      `}
      style={{
        backgroundColor,
        color: textColor,
      }}
      aria-label="Floating action button"
    >
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </button>
  );
};

export default FloatingButton;
