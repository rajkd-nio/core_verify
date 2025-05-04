'use client';

import React from 'react';

/**
 * A minimalistic loading overlay that appears over content
 * Redesigned to match the new AdvancedSkeletonLoader
 */
const LoadingOverlay = ({ 
  isVisible = true, 
  message = 'Loading...', 
  progress,
  theme = 'light', 
  blur = true,
  spinnerType = 'pulse',
  hideBackdrop = false
}) => {
  if (!isVisible) return null;
  
  // Base colors based on theme
  const backdropColor = theme === 'light' 
    ? 'rgba(255, 255, 255, 0.92)' 
    : 'rgba(33, 33, 33, 0.92)';
  
  const contentBg = theme === 'light' ? 'white' : '#222';
  const textColor = theme === 'light' ? '#555' : '#ddd';
  const accentColor = '#FF69B4';
  
  return (
    <div 
      className="loading-overlay"
      style={{
        backgroundColor: hideBackdrop ? 'transparent' : backdropColor,
        backdropFilter: blur && !hideBackdrop ? 'blur(5px)' : 'none'
      }}
    >
      <div 
        className="loading-content"
        style={{
          backgroundColor: contentBg,
          boxShadow: `0 8px 32px rgba(0, 0, 0, ${theme === 'light' ? '0.06' : '0.2'})`
        }}
      >
        <div className="loading-pulse"></div>
        
        {spinnerType === 'pulse' && (
          <div className="dots-container">
            <div className="dot dot1"></div>
            <div className="dot dot2"></div>
            <div className="dot dot3"></div>
          </div>
        )}
        
        {spinnerType === 'bar' && (
          <div className="bar-container">
            <div className="loading-bar">
              <div className="bar-inner"></div>
            </div>
          </div>
        )}
        
        {spinnerType === 'circle' && (
          <div className="circle-container">
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
        
        <div 
          className="loading-message"
          style={{ color: textColor }}
        >
          {message}
        </div>
        
        {progress !== undefined && (
          <div className="progress-container">
            <div className="loading-progress">
              <div 
                className="progress-bar" 
                style={{ 
                  width: `${progress}%`,
                  backgroundColor: accentColor
                }}
              ></div>
            </div>
            <div 
              className="progress-value"
              style={{ color: textColor }}
            >
              {progress}%
            </div>
          </div>
        )}
      </div>
      
      <style jsx>{`
        .loading-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          border-radius: 8px;
        }
        
        .loading-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1.8rem;
          border-radius: 12px;
          min-width: 180px;
          position: relative;
          overflow: hidden;
          animation: slide-up 0.4s forwards;
          transform: translateY(20px);
        }
        
        .loading-pulse {
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, ${accentColor}, transparent);
          background-size: 200% 100%;
          animation: loading-pulse 2s infinite;
          border-radius: 1px;
          position: absolute;
          top: 0;
          left: 0;
        }
        
        .dots-container {
          display: flex;
          gap: 8px;
          margin: 1rem 0;
        }
        
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: ${accentColor};
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
        
        .bar-container {
          width: 120px;
          margin: 1rem 0;
        }
        
        .loading-bar {
          width: 100%;
          height: 4px;
          background-color: ${theme === 'light' ? '#f0f0f0' : '#444'};
          border-radius: 2px;
          overflow: hidden;
        }
        
        .bar-inner {
          height: 100%;
          width: 30%;
          background-color: ${accentColor};
          animation: bar-slide 1.5s ease-in-out infinite;
          border-radius: 2px;
        }
        
        .circle-container {
          width: 36px;
          height: 36px;
          margin: 1rem 0;
        }
        
        .circular {
          animation: rotate 2s linear infinite;
          transform-origin: center center;
        }
        
        .circle-path {
          stroke: ${accentColor};
          stroke-dasharray: 150, 200;
          stroke-dashoffset: -10;
          stroke-linecap: round;
          animation: dash 1.5s ease-in-out infinite;
        }
        
        .loading-message {
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          font-weight: 500;
          max-width: 200px;
        }
        
        .progress-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 0.5rem;
        }
        
        .loading-progress {
          width: 100%;
          height: 4px;
          background-color: ${theme === 'light' ? '#f0f0f0' : '#444'};
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 0.3rem;
        }
        
        .progress-bar {
          height: 100%;
          border-radius: 2px;
          transition: width 0.3s ease;
        }
        
        .progress-value {
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        @keyframes slide-up {
          to {
            transform: translateY(0);
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
      `}</style>
    </div>
  );
};

export default LoadingOverlay; 