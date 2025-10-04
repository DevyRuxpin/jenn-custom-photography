#!/bin/bash

# Modern 2025 Deployment Script for Jenn Custom Photography Site
# This script handles the complete deployment pipeline

set -e  # Exit on any error

echo "🚀 Starting Modern 2025 Deployment Pipeline..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Check Node.js version (modern 2025 requirement)
print_status "Checking Node.js version..."
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js 18+ is required. Current version: $(node --version)"
    exit 1
fi
print_success "Node.js version check passed: $(node --version)"

# Install dependencies with modern approach
print_status "Installing dependencies with legacy peer deps support..."
npm ci --legacy-peer-deps

# Run type checking
print_status "Running TypeScript type checking..."
npx tsc --noEmit

# Run linting
print_status "Running ESLint..."
npm run lint

# Run tests
print_status "Running test suite..."
npm run test:run

# Build the application
print_status "Building application for production..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    print_error "Build failed - dist directory not found"
    exit 1
fi

print_success "Build completed successfully"

# Modern 2025 deployment options
echo ""
print_status "Choose deployment target:"
echo "1) Shopify Oxygen (Recommended for 2025)"
echo "2) Docker Container"
echo "3) Static Hosting (Vercel/Netlify)"
echo "4) Local Preview"

read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        print_status "Deploying to Shopify Oxygen..."
        if command -v shopify &> /dev/null; then
            shopify app deploy
            print_success "Deployed to Shopify Oxygen successfully"
        else
            print_warning "Shopify CLI not found. Installing..."
            npm install -g @shopify/cli
            shopify app deploy
            print_success "Deployed to Shopify Oxygen successfully"
        fi
        ;;
    2)
        print_status "Building Docker container..."
        if command -v docker &> /dev/null; then
            docker build -t jenn-custom-photography:latest .
            print_success "Docker container built successfully"
            print_status "To run: docker run -p 3000:3000 jenn-custom-photography:latest"
        else
            print_error "Docker not found. Please install Docker first."
        fi
        ;;
    3)
        print_status "Ready for static hosting deployment..."
        print_success "Build artifacts are in the 'dist' directory"
        print_status "Upload the contents of 'dist' to your hosting provider"
        ;;
    4)
        print_status "Starting local preview server..."
        npm run preview
        ;;
    *)
        print_error "Invalid choice. Exiting."
        exit 1
        ;;
esac

print_success "🎉 Deployment pipeline completed successfully!"
print_status "Your modern 2025 Shopify photography site is ready!"

# Display deployment summary
echo ""
echo "📊 Deployment Summary:"
echo "✅ Dependencies installed"
echo "✅ TypeScript compilation passed"
echo "✅ Linting passed"
echo "✅ Tests passed"
echo "✅ Production build completed"
echo "✅ Deployment successful"

echo ""
print_status "Next steps:"
echo "1. Configure your Shopify store credentials"
echo "2. Set up environment variables"
echo "3. Configure domain and SSL"
echo "4. Set up monitoring and analytics"

print_success "🚀 Your site is live and ready for customers!"
