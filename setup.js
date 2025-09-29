#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🍦 Setting up Kwality Walls...\n');

// Check if package.json exists
if (!fs.existsSync('package.json')) {
  console.error('❌ package.json not found. Please run this script from the project root.');
  process.exit(1);
}

try {
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  console.log('\n✅ Dependencies installed successfully!');
  console.log('\n🚀 To start the development server, run:');
  console.log('   npm run dev');
  console.log('\n🌐 Then open http://localhost:3000 in your browser');
  console.log('\n📚 For more information, check the README.md file');
  
} catch (error) {
  console.error('❌ Error during setup:', error.message);
  process.exit(1);
}
