'use client';

import React, { createContext, useState, useContext } from 'react';
import SkeletonLoader from '../components/SkeletonLoader';

// Create a context to store the loading state
const LoadingContext = createContext({
  isLoading: false,
  setLoading: () => {},
  loadingMessage: '',
  setLoadingMessage: () => {}
});

// Provider component that wraps the app
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessageState] = useState('Processing document...');

  // Function to set loading state
  const setLoading = (value) => {
    setIsLoading(value);
  };

  // Function to set loading message
  const setLoadingMessage = (message) => {
    setLoadingMessageState(message);
  };

  // Provide the loading state and functions to the app
  return (
    <LoadingContext.Provider value={{ 
      isLoading, 
      setLoading, 
      loadingMessage, 
      setLoadingMessage 
    }}>
      {children}
      {/* Global skeleton loader that appears on top of everything */}
      <SkeletonLoader isVisible={isLoading} message={loadingMessage} />
    </LoadingContext.Provider>
  );
};

// Custom hook to use the loading context
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}; 