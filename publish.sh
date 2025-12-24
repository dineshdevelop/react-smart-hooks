#!/bin/bash

# React Smart Hooks - Publishing Script
# Make sure to update YOUR_GITHUB_USERNAME in package.json first!

echo "🚀 React Smart Hooks - Publishing Helper"
echo "=========================================="
echo ""

# Check if package.json has been updated
if grep -q "YOUR_GITHUB_USERNAME\|YOUR_USERNAME" package.json; then
    echo "⚠️  WARNING: Please update package.json with your GitHub username first!"
    echo "   Edit package.json and replace YOUR_GITHUB_USERNAME with your actual username"
    echo ""
    exit 1
fi

echo "✅ Step 1: Checking build..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed! Fix errors before publishing."
    exit 1
fi

echo ""
echo "✅ Step 2: Running tests..."
npm test
if [ $? -ne 0 ]; then
    echo "❌ Tests failed! Fix errors before publishing."
    exit 1
fi

echo ""
echo "📋 Next Steps:"
echo "=============="
echo ""
echo "1. Create GitHub repository at: https://github.com/new"
echo "   - Name: react-smart-hooks"
echo "   - Description: A collection of reusable React hooks for React and Next.js projects"
echo "   - Public"
echo "   - DON'T initialize with README"
echo ""
echo "2. Push to GitHub:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/react-smart-hooks.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Login to npm:"
echo "   npm login"
echo ""
echo "4. Publish to npm:"
echo "   npm publish --dry-run  # Test first"
echo "   npm publish             # Actually publish"
echo ""
echo "For scoped packages (@username/react-smart-hooks):"
echo "   npm publish --access public"
echo ""

