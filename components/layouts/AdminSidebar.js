'use client';

import React from 'react';
import { 
  Box, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  Divider,
  Typography
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ArticleIcon from '@mui/icons-material/Article';
import CategoryIcon from '@mui/icons-material/Category';
import FolderIcon from '@mui/icons-material/Folder';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  {
    title: 'Dashboard',
    path: '/admin',
    icon: <DashboardIcon />
  },
  {
    title: 'Users',
    path: '/admin/users',
    icon: <PersonIcon />
  },
  {
    title: 'Form Templates',
    path: '/admin/forms',
    icon: <ArticleIcon />
  },
  {
    title: 'Document Types',
    path: '/admin/document-types',
    icon: <CategoryIcon />
  },
  {
    title: 'Documents',
    path: '/admin/documents',
    icon: <FolderIcon />
  },
  {
    title: 'Settings',
    path: '/admin/settings',
    icon: <SettingsIcon />
  }
];

export default function AdminSidebar() {
  const pathname = usePathname();
  
  return (
    <Box sx={{ 
      width: '100%', 
      maxWidth: 280, 
      bgcolor: 'background.paper',
      height: '100%',
      borderRight: '1px solid',
      borderColor: 'divider'
    }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          CoreVerify Admin
        </Typography>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <Link href={item.path} style={{ textDecoration: 'none', width: '100%', color: 'inherit' }}>
              <ListItemButton selected={pathname === item.path || pathname.startsWith(`${item.path}/`)}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
} 