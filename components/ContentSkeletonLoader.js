'use client';

import React from 'react';

/**
 * ContentSkeletonLoader - A versatile skeleton loader for content blocks
 * Supports multiple layout patterns for different types of content
 */
const ContentSkeletonLoader = ({
  type = 'text',              // text, card, form, list, profile, table
  lines = 3,                  // For text type - number of lines
  cards = 2,                  // For card type - number of cards
  rows = 3,                   // For table type - number of rows
  columns = 3,                // For table type - number of columns
  width = '100%',             // Container width
  height,                     // Optional fixed height
  animation = 'wave',         // wave, pulse, none
  rounded = 'md',             // none, sm, md, lg, full
  gap = 'md',                 // Spacing: xs, sm, md, lg
  className = '',             // Additional class names
  dark = false,               // Dark mode
  noMargin = false,           // Remove default margins
  customConfig                // For advanced custom layouts
}) => {
  // Calculate rounded corners based on setting
  const getBorderRadius = () => {
    const radiusMap = {
      none: '0',
      sm: '4px',
      md: '8px',
      lg: '12px',
      full: '9999px'
    };
    return radiusMap[rounded] || '8px';
  };
  
  // Calculate gap between elements
  const getGap = () => {
    const gapMap = {
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '16px'
    };
    return gapMap[gap] || '12px';
  };
  
  // Base color based on theme
  const baseColor = dark ? '#444' : '#eee';
  const highlightColor = dark ? '#555' : '#f5f5f5';
  
  // Animation class name
  const animationClass = animation === 'none' ? '' : `skeleton-${animation}`;
  
  // Function to generate a row of table cells
  const renderTableRow = (rowIndex, colCount) => {
    return (
      <div 
        key={`row-${rowIndex}`} 
        className="skeleton-table-row"
        style={{ display: 'flex', gap: getGap() }}
      >
        {Array(colCount).fill(0).map((_, colIndex) => (
          <div 
            key={`cell-${rowIndex}-${colIndex}`} 
            className={`skeleton-item ${animationClass}`}
            style={{ 
              height: '20px',
              flex: colIndex === 0 ? '0 0 30px' : '1',
              borderRadius: getBorderRadius()
            }}
          ></div>
        ))}
      </div>
    );
  };
  
  // Function to generate a card
  const renderCard = (index) => {
    return (
      <div 
        key={`card-${index}`} 
        className="skeleton-card"
        style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: getGap(),
          marginBottom: noMargin ? '0' : '24px',
          width: '100%'
        }}
      >
        {/* Image placeholder */}
        <div 
          className={`skeleton-item ${animationClass}`}
          style={{ 
            height: '140px',
            width: '100%',
            borderRadius: getBorderRadius()
          }}
        ></div>
        
        {/* Title placeholder */}
        <div 
          className={`skeleton-item ${animationClass}`}
          style={{ 
            height: '24px',
            width: '80%',
            borderRadius: getBorderRadius()
          }}
        ></div>
        
        {/* Description lines */}
        <div 
          className={`skeleton-item ${animationClass}`}
          style={{ 
            height: '16px',
            width: '100%',
            borderRadius: getBorderRadius()
          }}
        ></div>
        <div 
          className={`skeleton-item ${animationClass}`}
          style={{ 
            height: '16px',
            width: '90%',
            borderRadius: getBorderRadius()
          }}
        ></div>
      </div>
    );
  };
  
  // Function to render a form skeleton
  const renderForm = () => {
    return (
      <div className="skeleton-form" style={{ display: 'flex', flexDirection: 'column', gap: getGap() }}>
        {/* Label + Input pair */}
        <div className="skeleton-form-group" style={{ marginBottom: '16px' }}>
          <div 
            className={`skeleton-item ${animationClass}`}
            style={{ 
              height: '16px', 
              width: '30%', 
              marginBottom: '8px',
              borderRadius: getBorderRadius()
            }}
          ></div>
          <div 
            className={`skeleton-item ${animationClass}`}
            style={{ 
              height: '38px', 
              width: '100%',
              borderRadius: getBorderRadius() 
            }}
          ></div>
        </div>
        
        {/* Label + Input pair */}
        <div className="skeleton-form-group" style={{ marginBottom: '16px' }}>
          <div 
            className={`skeleton-item ${animationClass}`}
            style={{ 
              height: '16px', 
              width: '40%', 
              marginBottom: '8px',
              borderRadius: getBorderRadius()
            }}
          ></div>
          <div 
            className={`skeleton-item ${animationClass}`}
            style={{ 
              height: '38px', 
              width: '100%',
              borderRadius: getBorderRadius() 
            }}
          ></div>
        </div>
        
        {/* Label + Textarea pair */}
        <div className="skeleton-form-group" style={{ marginBottom: '16px' }}>
          <div 
            className={`skeleton-item ${animationClass}`}
            style={{ 
              height: '16px', 
              width: '35%', 
              marginBottom: '8px',
              borderRadius: getBorderRadius()
            }}
          ></div>
          <div 
            className={`skeleton-item ${animationClass}`}
            style={{ 
              height: '100px', 
              width: '100%',
              borderRadius: getBorderRadius() 
            }}
          ></div>
        </div>
        
        {/* Button placeholder */}
        <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'flex-end' }}>
          <div 
            className={`skeleton-item ${animationClass}`}
            style={{ 
              height: '38px', 
              width: '120px',
              borderRadius: getBorderRadius() 
            }}
          ></div>
        </div>
      </div>
    );
  };
  
  // Function to render a profile skeleton
  const renderProfile = () => {
    return (
      <div className="skeleton-profile" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {/* Avatar placeholder */}
        <div 
          className={`skeleton-item ${animationClass}`}
          style={{ 
            height: '64px', 
            width: '64px',
            borderRadius: '50%'  // Always circular for avatar
          }}
        ></div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: getGap(), flex: 1 }}>
          {/* Name placeholder */}
          <div 
            className={`skeleton-item ${animationClass}`}
            style={{ 
              height: '24px', 
              width: '40%',
              borderRadius: getBorderRadius()
            }}
          ></div>
          
          {/* Email/subtitle placeholder */}
          <div 
            className={`skeleton-item ${animationClass}`}
            style={{ 
              height: '16px', 
              width: '60%',
              borderRadius: getBorderRadius()
            }}
          ></div>
        </div>
      </div>
    );
  };
  
  // Render the appropriate skeleton based on type
  const renderSkeleton = () => {
    switch(type) {
      case 'text':
        return (
          <div 
            className="skeleton-text"
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: getGap(),
              width: width
            }}
          >
            {Array(lines).fill(0).map((_, i) => (
              <div 
                key={`line-${i}`}
                className={`skeleton-item ${animationClass}`}
                style={{ 
                  height: '16px',
                  width: i === lines - 1 && lines > 1 ? '70%' : '100%',
                  borderRadius: getBorderRadius()
                }}
              ></div>
            ))}
          </div>
        );
        
      case 'card':
        return (
          <div 
            className="skeleton-cards"
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              width: width
            }}
          >
            {Array(cards).fill(0).map((_, i) => renderCard(i))}
          </div>
        );
        
      case 'form':
        return renderForm();
        
      case 'list':
        return (
          <div 
            className="skeleton-list"
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: getGap(),
              width: width
            }}
          >
            {Array(lines).fill(0).map((_, i) => (
              <div 
                key={`list-item-${i}`}
                style={{ display: 'flex', alignItems: 'center', gap: getGap() }}
              >
                {/* Bullet or number */}
                <div 
                  className={`skeleton-item ${animationClass}`}
                  style={{ 
                    height: '16px',
                    width: '16px',
                    borderRadius: '50%'
                  }}
                ></div>
                
                {/* Item text */}
                <div 
                  className={`skeleton-item ${animationClass}`}
                  style={{ 
                    height: '16px',
                    flex: 1,
                    borderRadius: getBorderRadius()
                  }}
                ></div>
              </div>
            ))}
          </div>
        );
        
      case 'profile':
        return renderProfile();
        
      case 'table':
        return (
          <div 
            className="skeleton-table"
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: getGap(),
              width: width
            }}
          >
            {/* Header row */}
            <div 
              className="skeleton-table-header"
              style={{ 
                display: 'flex', 
                gap: getGap(), 
                marginBottom: '8px'
              }}
            >
              {Array(columns).fill(0).map((_, i) => (
                <div 
                  key={`header-${i}`}
                  className={`skeleton-item ${animationClass}`}
                  style={{ 
                    height: '24px',
                    flex: i === 0 ? '0 0 30px' : '1',
                    borderRadius: getBorderRadius()
                  }}
                ></div>
              ))}
            </div>
            
            {/* Data rows */}
            {Array(rows).fill(0).map((_, i) => renderTableRow(i, columns))}
          </div>
        );
        
      default:
        return (
          <div 
            className={`skeleton-item ${animationClass}`}
            style={{ 
              height: height || '100px',
              width: width,
              borderRadius: getBorderRadius()
            }}
          ></div>
        );
    }
  };
  
  return (
    <div 
      className={`content-skeleton-loader ${className}`}
      style={{
        height: height,
        width: width,
        marginBottom: noMargin ? '0' : '16px'
      }}
    >
      {renderSkeleton()}
      
      <style jsx>{`
        .content-skeleton-loader {
          position: relative;
        }
        
        .skeleton-item {
          background-color: ${baseColor};
          position: relative;
          overflow: hidden;
        }
        
        .skeleton-wave::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, 
            transparent 0%, 
            ${highlightColor} 50%, 
            transparent 100%);
          animation: wave 1.5s ease-in-out infinite;
          transform: translateX(-100%);
        }
        
        .skeleton-pulse {
          animation: pulse 1.5s ease-in-out infinite;
        }
        
        @keyframes wave {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default ContentSkeletonLoader; 