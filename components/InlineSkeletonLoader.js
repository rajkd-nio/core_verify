'use client';

import React from 'react';

/**
 * InlineSkeletonLoader - A minimalistic inline loading component
 * for use within forms and content sections
 */
const InlineSkeletonLoader = ({ 
  width = '100%', 
  height = '24px',
  count = 1,
  style = {},
  className = '',
  circle = false,
  inline = false
}) => {
  const baseStyle = {
    display: inline ? 'inline-block' : 'block',
    backgroundColor: '#f0f0f0',
    borderRadius: circle ? '50%' : '4px',
    animation: 'inline-skeleton-pulse 1.5s ease-in-out infinite',
    ...style
  };
  
  // Create the specified number of skeleton elements
  const items = Array(count).fill(0).map((_, index) => (
    <span 
      key={index}
      className={`inline-skeleton ${className}`}
      style={{
        ...baseStyle,
        width: typeof width === 'string' ? width : `${width}px`,
        height: typeof height === 'string' ? height : `${height}px`,
        marginBottom: index < count - 1 ? '8px' : 0
      }}
    >
      &nbsp;
    </span>
  ));
  
  return (
    <div className="inline-skeleton-container">
      {items}
      <style jsx>{`
        @keyframes inline-skeleton-pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .inline-skeleton {
          position: relative;
          overflow: hidden;
        }
        
        .inline-skeleton::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            rgba(255, 255, 255, 0) 0%, 
            rgba(255, 255, 255, 0.6) 50%, 
            rgba(255, 255, 255, 0) 100%);
          animation: inline-skeleton-shine 1.5s infinite;
        }
        
        @keyframes inline-skeleton-shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default InlineSkeletonLoader; 