'use client';

import React, { useEffect, useState } from 'react';
import '../styles/SkeletonLoader.css';

/**
 * MinimalisticLoader component that shows a clean, minimal loading animation
 * with subtle branding elements while content loads
 */
const SkeletonLoader = ({ isVisible, message = 'Loading...' }) => {
  // Add state for animation
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    if (isVisible) {
      // Show immediately
      setVisible(true);
    } else {
      // Delay hiding to allow for animation
      const timer = setTimeout(() => {
        setVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);
  
  if (!isVisible && !visible) return null;
  
  return (
    <div 
      className={`skeleton-loader-container ${isVisible ? 'visible' : 'hiding'}`}
    >
      <div className="skeleton-loader-content">
        <div className="skeleton-loader-pulse"></div>
        
        <div className="skeleton-minimal">
          <div className="skeleton-logo-minimal">
            <span className="core-text">Core</span>
            <span className="verify-text">Verify</span>
          </div>
          
          <div className="skeleton-dots">
            <div className="dot dot1"></div>
            <div className="dot dot2"></div>
            <div className="dot dot3"></div>
          </div>
          
          <div className="skeleton-message">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader; 