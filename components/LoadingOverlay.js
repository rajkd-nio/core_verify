'use client';

import React, { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';

const LoadingOverlay = ({ isVisible, message = 'Processing document...' }) => {
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
      style={{
        position: 'fixed', // Change to fixed to cover the entire viewport
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker background for better contrast
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
      }}
    >
      <Spinner 
        color="primary" 
        style={{ 
          width: '3rem', 
          height: '3rem'
        }} 
      />
      <div style={{ color: 'white', marginTop: '1rem', fontWeight: 'bold' }}>
        {message}
      </div>
    </div>
  );
};

export default LoadingOverlay; 