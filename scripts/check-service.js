#!/usr/bin/env node

/**
 * Simple script to check if the Core Verify service is running
 * and provide instructions for integration testing.
 */

const http = require('http');
const { exec } = require('child_process');
const os = require('os');

const CORE_VERIFY_URL = 'http://localhost:3001';
const NURSEIO_URL = 'http://localhost:3000';

console.log('🔍 Checking if Core Verify service is running...');

function checkService(url) {
  return new Promise((resolve) => {
    http.get(url, (response) => {
      if (response.statusCode === 200) {
        resolve(true);
      } else {
        resolve(false);
      }
    }).on('error', () => {
      resolve(false);
    });
  });
}

async function openBrowser(url) {
  const platform = os.platform();
  let command;
  
  switch (platform) {
    case 'darwin':
      command = `open ${url}`;
      break;
    case 'win32':
      command = `start ${url}`;
      break;
    default:
      command = `xdg-open ${url}`;
  }
  
  exec(command, (error) => {
    if (error) {
      console.error(`Failed to open browser: ${error.message}`);
    }
  });
}

async function main() {
  const isRunning = await checkService(CORE_VERIFY_URL);
  
  if (isRunning) {
    console.log('✅ Core Verify service is running on ' + CORE_VERIFY_URL);
  } else {
    console.log('❌ Core Verify service is NOT running.');
    console.log();
    console.log('To start Core Verify, run:');
    console.log('cd ' + __dirname + '/..');
    console.log('npm run dev');
    process.exit(1);
  }
  
  // Check if NurseIO web is running
  const nurseioRunning = await checkService(NURSEIO_URL);
  
  console.log();
  console.log('=== INTEGRATION TESTING ===');
  console.log();
  
  if (nurseioRunning) {
    console.log('✅ NurseIO Web is running on ' + NURSEIO_URL);
    console.log();
    console.log('To test the integration:');
    console.log('1. Go to the NurseIO Dashboard: ' + NURSEIO_URL + '/admin/dashboard');
    console.log('2. Click on the "Verify Documents" button');
    console.log('3. Check browser console logs for communication between apps');
    
    // Ask if they want to open the dashboard
    console.log();
    console.log('Opening NurseIO Dashboard in browser...');
    await openBrowser(NURSEIO_URL + '/admin/dashboard');
  } else {
    console.log('❌ NurseIO Web is NOT running.');
    console.log();
    console.log('To start NurseIO Web, open another terminal and run:');
    console.log('cd ' + __dirname + '/../../nurseio-web');
    console.log('npm run dev');
    console.log();
    console.log('Once both services are running, run this script again to test the integration.');
  }
  
  console.log();
  console.log('You can test the standalone Core Verify app at:');
  console.log(CORE_VERIFY_URL);
  console.log();
  console.log('Demo page with iframe example:');
  console.log(CORE_VERIFY_URL + '/demo');
}

main().catch(console.error); 