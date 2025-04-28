'use client';

import React from 'react';
import { Spinner } from 'reactstrap';

const LoadingOverlay = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <Spinner 
        color="primary" 
        style={{ 
          width: '3rem', 
          height: '3rem'
        }} 
      />
    </div>
  );
};

export default LoadingOverlay; 