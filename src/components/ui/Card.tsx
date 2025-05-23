import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string; 
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow ${className}`}> {/* Increased padding */}
      {children}
    </div>
  );
};

export default Card;