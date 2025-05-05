'use client';

import React from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Avatar, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AdminSidebar from './AdminSidebar';
import { SnackbarProvider } from 'notistack';

export default function AdminLayout({ children, title = 'CoreVerify Admin' }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <SnackbarProvider maxSnack={3}>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        {/* App Bar */}
        <AppBar 
          position="fixed" 
          sx={{ 
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: '#fff',
            color: 'text.primary',
            boxShadow: '0px 2px 4px rgba(0,0,0,0.05)'
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              {title}
            </Typography>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <Avatar sx={{ ml: 2 }} />
          </Toolbar>
        </AppBar>

        {/* Sidebar */}
        <Box
          component="nav"
          sx={{ width: { sm: 280 }, flexShrink: { sm: 0 } }}
        >
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
              width: 280,
              height: '100%',
              position: 'fixed',
              top: 0,
              left: 0,
              pt: '64px', // Height of AppBar
              boxSizing: 'border-box'
            }}
          >
            <AdminSidebar />
          </Box>
        </Box>

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: { sm: `calc(100% - 280px)` },
            ml: { sm: '280px' },
            mt: '64px' // Height of AppBar
          }}
        >
          {children}
        </Box>
      </Box>
    </SnackbarProvider>
  );
} 