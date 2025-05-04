'use client';

import React, { useEffect, useState } from 'react';

/**
 * AdvancedSkeletonLoader - A modern, clean loading component
 * with subtle animations and customization options
 */
const AdvancedSkeletonLoader = ({ 
  isVisible = false, 
  message = 'Loading...', 
  theme = 'light',
  logo = true,
  overlay = true,
  blur = true,
  spinnerType = 'pulse',
  position = 'center'
}) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    if (isVisible) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);
  
  if (!isVisible && !visible) return null;
  
  return (
    <div 
      className={`advanced-skeleton-container ${isVisible ? 'visible' : 'hiding'} ${theme} ${position}`}
      style={{
        position: overlay ? 'fixed' : 'absolute',
        backdropFilter: blur ? 'blur(5px)' : 'none'
      }}
    >
      <div className="advanced-skeleton-content">
        <div className="advanced-skeleton-pulse"></div>
        
        {logo && (
          <div className="advanced-skeleton-logo">
            <span className="core-text">Core</span>
            <span className="verify-text">Verify</span>
          </div>
        )}
        
        <div className="advanced-skeleton-animation">
          {spinnerType === 'pulse' && (
            <div className="skeleton-dots">
              <div className="dot dot1"></div>
              <div className="dot dot2"></div>
              <div className="dot dot3"></div>
            </div>
          )}
          
          {spinnerType === 'bar' && (
            <div className="skeleton-bar">
              <div className="bar-inner"></div>
            </div>
          )}
          
          {spinnerType === 'circle' && (
            <div className="skeleton-circle">
              <svg viewBox="0 0 50 50" className="circular">
                <circle 
                  cx="25" 
                  cy="25" 
                  r="20" 
                  fill="none" 
                  strokeWidth="4"
                  className="circle-path"
                />
              </svg>
            </div>
          )}
        </div>
        
        <div className="advanced-skeleton-message">
          {message}
        </div>
      </div>
      
      <style jsx>{`
        .advanced-skeleton-container {
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
          opacity: 0;
          visibility: hidden;
        }
        
        .advanced-skeleton-container.visible {
          opacity: 1;
          visibility: visible;
        }
        
        .advanced-skeleton-container.hiding {
          opacity: 0;
          visibility: hidden;
        }
        
        .advanced-skeleton-container.light {
          background-color: rgba(255, 255, 255, 0.92);
          color: #333;
        }
        
        .advanced-skeleton-container.dark {
          background-color: rgba(33, 33, 33, 0.92);
          color: #fff;
        }
        
        .advanced-skeleton-container.center {
          align-items: center;
        }
        
        .advanced-skeleton-container.top {
          align-items: flex-start;
          padding-top: 20vh;
        }
        
        .advanced-skeleton-content {
          width: 100%;
          max-width: 250px;
          background-color: ${theme === 'light' ? 'white' : '#222'};
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, ${theme === 'light' ? '0.06' : '0.2'});
          padding: 1.8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          transform: translateY(20px);
          animation: slide-up 0.4s forwards;
          position: relative;
          overflow: hidden;
        }
        
        .advanced-skeleton-pulse {
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #FF69B4, transparent);
          background-size: 200% 100%;
          animation: loading-pulse 2s infinite;
          border-radius: 1px;
          position: absolute;
          top: 0;
          left: 0;
        }
        
        .advanced-skeleton-logo {
          font-size: 1.8rem;
          font-weight: 700;
          letter-spacing: -0.5px;
          display: flex;
          align-items: baseline;
          justify-content: center;
          margin-bottom: 0.5rem;
        }
        
        .core-text {
          color: ${theme === 'light' ? '#333' : '#fff'};
        }
        
        .verify-text {
          color: #FF69B4;
          margin-left: 4px;
        }
        
        .advanced-skeleton-animation {
          display: flex;
          justify-content: center;
          margin: 1rem 0;
        }
        
        .skeleton-dots {
          display: flex;
          gap: 8px;
        }
        
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #FF69B4;
          opacity: 0.6;
        }
        
        .dot1 {
          animation: pulse 1.2s infinite;
        }
        
        .dot2 {
          animation: pulse 1.2s infinite 0.4s;
        }
        
        .dot3 {
          animation: pulse 1.2s infinite 0.8s;
        }
        
        .skeleton-bar {
          width: 120px;
          height: 4px;
          background-color: ${theme === 'light' ? '#f0f0f0' : '#444'};
          border-radius: 2px;
          overflow: hidden;
        }
        
        .bar-inner {
          height: 100%;
          width: 30%;
          background-color: #FF69B4;
          animation: bar-slide 1.5s ease-in-out infinite;
          border-radius: 2px;
        }
        
        .skeleton-circle {
          width: 36px;
          height: 36px;
        }
        
        .circular {
          animation: rotate 2s linear infinite;
          transform-origin: center center;
        }
        
        .circle-path {
          stroke: #FF69B4;
          stroke-dasharray: 150, 200;
          stroke-dashoffset: -10;
          stroke-linecap: round;
          animation: dash 1.5s ease-in-out infinite;
        }
        
        .advanced-skeleton-message {
          text-align: center;
          color: ${theme === 'light' ? '#555' : '#ddd'};
          font-size: 0.9rem;
          font-weight: 500;
          max-width: 200px;
        }
        
        @keyframes slide-up {
          to {
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        
        @keyframes loading-pulse {
          0% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes bar-slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }
        
        @keyframes rotate {
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes dash {
          0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35;
          }
          100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124;
          }
        }
        
        @media (max-width: 768px) {
          .advanced-skeleton-content {
            max-width: 220px;
            padding: 1.5rem;
          }
          
          .advanced-skeleton-logo {
            font-size: 1.5rem;
          }
          
          .advanced-skeleton-message {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AdvancedSkeletonLoader; 