'use client';

import React, { useState } from 'react';
import AdvancedSkeletonLoader from './AdvancedSkeletonLoader';
import ContentSkeletonLoader from './ContentSkeletonLoader';
import { Button, Card, CardBody, CardHeader, Row, Col } from 'reactstrap';

/**
 * SkeletonLoaderDemo - A component to demonstrate the various skeleton loaders
 */
const SkeletonLoaderDemo = () => {
  // State for controlling which loaders are visible
  const [showFullScreen, setShowFullScreen] = useState(false);
  const [spinnerType, setSpinnerType] = useState('pulse');
  const [loaderTheme, setLoaderTheme] = useState('light');
  
  const toggleFullScreen = () => setShowFullScreen(!showFullScreen);
  
  return (
    <div className="skeleton-demo-container py-4">
      <h2 className="mb-4">Skeleton Loader Components</h2>
      
      <Row className="mb-4">
        <Col md={12}>
          <Card>
            <CardHeader>
              <h5 className="mb-0">Full Page Loader</h5>
            </CardHeader>
            <CardBody>
              <div className="mb-3">
                <div className="d-flex align-items-center mb-3">
                  <label className="me-3 mb-0">Spinner Type:</label>
                  <div className="btn-group btn-group-sm">
                    <Button 
                      color={spinnerType === 'pulse' ? 'primary' : 'outline-primary'}
                      onClick={() => setSpinnerType('pulse')}
                    >
                      Pulse
                    </Button>
                    <Button 
                      color={spinnerType === 'bar' ? 'primary' : 'outline-primary'}
                      onClick={() => setSpinnerType('bar')}
                    >
                      Bar
                    </Button>
                    <Button 
                      color={spinnerType === 'circle' ? 'primary' : 'outline-primary'}
                      onClick={() => setSpinnerType('circle')}
                    >
                      Circle
                    </Button>
                  </div>
                </div>
                
                <div className="d-flex align-items-center mb-3">
                  <label className="me-3 mb-0">Theme:</label>
                  <div className="btn-group btn-group-sm">
                    <Button 
                      color={loaderTheme === 'light' ? 'primary' : 'outline-primary'}
                      onClick={() => setLoaderTheme('light')}
                    >
                      Light
                    </Button>
                    <Button 
                      color={loaderTheme === 'dark' ? 'primary' : 'outline-primary'}
                      onClick={() => setLoaderTheme('dark')}
                    >
                      Dark
                    </Button>
                  </div>
                </div>
              </div>
              
              <Button 
                color="primary" 
                onClick={toggleFullScreen}
              >
                {showFullScreen ? 'Hide' : 'Show'} Full Screen Loader
              </Button>
              
              <AdvancedSkeletonLoader 
                isVisible={showFullScreen}
                spinnerType={spinnerType}
                theme={loaderTheme}
                message="Loading content..."
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
      
      <h3 className="mb-3">Content Skeleton Loaders</h3>
      
      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <CardHeader>
              <h5 className="mb-0">Text Content</h5>
            </CardHeader>
            <CardBody>
              <ContentSkeletonLoader 
                type="text"
                lines={4}
                animation="wave"
              />
            </CardBody>
          </Card>
        </Col>
        
        <Col md={6} className="mb-4">
          <Card>
            <CardHeader>
              <h5 className="mb-0">Form</h5>
            </CardHeader>
            <CardBody>
              <ContentSkeletonLoader 
                type="form"
                animation="wave"
              />
            </CardBody>
          </Card>
        </Col>
        
        <Col md={6} className="mb-4">
          <Card>
            <CardHeader>
              <h5 className="mb-0">Card</h5>
            </CardHeader>
            <CardBody>
              <ContentSkeletonLoader 
                type="card"
                cards={1}
                animation="pulse"
              />
            </CardBody>
          </Card>
        </Col>
        
        <Col md={6} className="mb-4">
          <Card>
            <CardHeader>
              <h5 className="mb-0">Table</h5>
            </CardHeader>
            <CardBody>
              <ContentSkeletonLoader 
                type="table"
                rows={3}
                columns={4}
                animation="wave"
              />
            </CardBody>
          </Card>
        </Col>
        
        <Col md={6} className="mb-4">
          <Card>
            <CardHeader>
              <h5 className="mb-0">Profile</h5>
            </CardHeader>
            <CardBody>
              <ContentSkeletonLoader 
                type="profile"
                animation="pulse"
              />
            </CardBody>
          </Card>
        </Col>
        
        <Col md={6} className="mb-4">
          <Card>
            <CardHeader>
              <h5 className="mb-0">List</h5>
            </CardHeader>
            <CardBody>
              <ContentSkeletonLoader 
                type="list"
                lines={5}
                animation="wave"
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
      
      <h3 className="mb-3">Dark Mode Variants</h3>
      
      <Row className="mb-4">
        <Col md={12}>
          <Card className="bg-dark text-white">
            <CardHeader className="bg-dark text-white border-secondary">
              <h5 className="mb-0">Dark Mode Examples</h5>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md={6} className="mb-3">
                  <ContentSkeletonLoader 
                    type="text"
                    lines={3}
                    animation="wave"
                    dark={true}
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <ContentSkeletonLoader 
                    type="profile"
                    animation="pulse"
                    dark={true}
                  />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SkeletonLoaderDemo; 