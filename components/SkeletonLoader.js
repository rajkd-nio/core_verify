'use client';

import React, { useEffect, useState } from 'react';
import '../styles/SkeletonLoader.css';

/**
 * SkeletonLoader component that shows animated loading placeholders
 * with CoreVerify branding while content loads
 */
const SkeletonLoader = ({ isVisible, message = 'Processing document...' }) => {
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
        <div className="skeleton-logo-container">
          <div className="skeleton-logo">
            <span className="core-text">Core</span>
            <span className="verify-text">Verify</span>
            <div className="skeleton-logo-badge">
              <span className="badge-text">Document Processing</span>
            </div>
          </div>
        </div>

        <div className="skeleton-loader-pulse"></div>
        
        <div className="skeleton-form">
          <div className="skeleton-field">
            <div className="skeleton-label"></div>
            <div className="skeleton-input"></div>
          </div>
          
          <div className="skeleton-field">
            <div className="skeleton-label"></div>
            <div className="skeleton-input"></div>
          </div>
          
          <div className="skeleton-field">
            <div className="skeleton-label"></div>
            <div className="skeleton-input"></div>
          </div>
          
          <div className="skeleton-drop-area">
            <div className="skeleton-drop-icon"></div>
          </div>
          
          <div className="skeleton-progress">
            <div className="skeleton-progress-bar"></div>
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