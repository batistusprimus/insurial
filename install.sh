#!/bin/bash

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install and use Node 16
nvm install 16.20.2
nvm use 16.20.2

# Install dependencies
npm install

echo "Installation completed!"
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"
