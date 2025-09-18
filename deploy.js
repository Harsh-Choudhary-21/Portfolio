#!/usr/bin/env node

// Simple deployment check script
const fs = require('fs');
const path = require('path');

console.log('🚀 Preparing for Netlify deployment...');

// Check if required files exist
const requiredFiles = ['package.json', 'netlify.toml', 'vite.config.js', 'index.html'];
const missingFiles = requiredFiles.filter(file => !fs.existsSync(file));

if (missingFiles.length > 0) {
  console.error('❌ Missing required files:', missingFiles.join(', '));
  process.exit(1);
}

// Check package.json scripts
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
if (!packageJson.scripts.build) {
  console.error('❌ Missing build script in package.json');
  process.exit(1);
}

console.log('✅ All deployment files are ready!');
console.log('📝 Next steps:');
console.log('1. Push your code to GitHub/GitLab');
console.log('2. Connect your repository to Netlify');
console.log('3. Netlify will automatically detect your build settings');
console.log('4. Your site will be deployed at: https://[site-name].netlify.app');