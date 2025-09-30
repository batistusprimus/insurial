#!/usr/bin/env node

// Script de démarrage simple pour Next.js
const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Démarrage du serveur de développement...');

// Essayer de démarrer Next.js directement
const nextPath = path.join(__dirname, 'node_modules', '.bin', 'next');
const child = spawn('node', [nextPath, 'dev'], {
  stdio: 'inherit',
  cwd: __dirname
});

child.on('error', (error) => {
  console.error('❌ Erreur lors du démarrage:', error.message);
  
  // Fallback: essayer avec npx
  console.log('🔄 Tentative avec npx...');
  const fallback = spawn('npx', ['next', 'dev'], {
    stdio: 'inherit',
    cwd: __dirname
  });
  
  fallback.on('error', (fallbackError) => {
    console.error('❌ Impossible de démarrer le serveur:', fallbackError.message);
    console.log('\n📝 Pour résoudre le problème npm:');
    console.log('1. Réinstallez Node.js depuis https://nodejs.org/');
    console.log('2. Ou utilisez nvm: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash');
    console.log('3. Puis: nvm install 18 && nvm use 18');
  });
});

child.on('close', (code) => {
  console.log(`Serveur arrêté avec le code ${code}`);
});
