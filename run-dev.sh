#!/bin/bash
cd "$(dirname "$0")"
echo "🚀 Lancement du serveur de développement Insurial..."
echo "📁 Répertoire: $(pwd)"
echo "🔧 Version Node.js: $(node --version)"
echo ""

# Essayer différentes méthodes pour lancer Next.js
if [ -f "./node_modules/.bin/next" ]; then
    echo "🟢 Lancement avec binaire local..."
    ./node_modules/.bin/next dev --port 3000
elif command -v npx >/dev/null 2>&1; then
    echo "🟡 Lancement avec npx..."
    npx next dev --port 3000
else
    echo "🔴 Impossible de lancer Next.js"
    echo "❌ Veuillez réinstaller les dépendances:"
    echo "   rm -rf node_modules package-lock.json"
    echo "   npm install"
    exit 1
fi
