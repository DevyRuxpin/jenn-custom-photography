# Contributing to Jenn Custom Photography

Thank you for your interest in contributing to Jenn Custom Photography! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### 🐛 Reporting Bugs

When reporting bugs, please include:

- **Description**: Clear description of the issue
- **Steps to Reproduce**: Step-by-step instructions
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**: Browser, OS, device information
- **Screenshots**: If applicable

### ✨ Suggesting Features

For feature requests, please provide:

- **Use Case**: Why this feature would be valuable
- **Detailed Description**: How the feature should work
- **Mockups/Wireframes**: Visual representations if possible
- **Acceptance Criteria**: Clear requirements for completion

### 🔧 Code Contributions

#### Getting Started

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/yourusername/jenn-custom-photography.git
   cd jenn-custom-photography
   ```
3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Install dependencies**
   ```bash
   npm install
   ```
5. **Start development server**
   ```bash
   npm run dev
   ```

#### Development Guidelines

##### Code Style
- Use TypeScript for all new code
- Follow the existing code style and patterns
- Use meaningful variable and function names
- Add comments for complex logic

##### Testing
- Write tests for new features
- Ensure all tests pass before submitting
- Aim for good test coverage

##### Commits
- Use conventional commit messages
- Keep commits focused and atomic
- Write clear, descriptive commit messages

#### Pull Request Process

1. **Update documentation** for any new features
2. **Add tests** for new functionality
3. **Ensure all tests pass**
4. **Update CHANGELOG.md** if applicable
5. **Create a pull request** with a clear description

### 📝 Documentation

We welcome contributions to improve documentation:

- **README.md**: Main project documentation
- **Code comments**: Inline documentation
- **API documentation**: Function and component documentation
- **Tutorials**: Step-by-step guides

## 🛠️ Development Setup

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher
- Git

### Environment Variables

Create a `.env.local` file:

```env
VITE_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
VITE_SHOPIFY_STOREFRONT_TOKEN=your-storefront-access-token
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run test` | Run tests |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript checks |

## 🎯 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Application pages
├── contexts/      # React contexts
├── lib/           # Utility functions
├── types/         # TypeScript definitions
└── styles/        # Global styles
```

## 📋 Coding Standards

### TypeScript
- Use strict mode
- Define proper types for all props and functions
- Use interfaces for object shapes
- Avoid `any` type

### React
- Use functional components with hooks
- Follow React best practices
- Use proper key props for lists
- Optimize re-renders

### CSS/Styling
- Use Tailwind CSS utility classes
- Follow the established design system
- Use CSS variables for theming
- Ensure responsive design

### Performance
- Use React.memo for expensive components
- Implement proper loading states
- Optimize images and assets
- Monitor bundle size

## 🧪 Testing Guidelines

### Unit Tests
- Test component rendering
- Test user interactions
- Test business logic
- Mock external dependencies

### Integration Tests
- Test API integrations
- Test user workflows
- Test state management
- Test routing

### E2E Tests
- Test critical user journeys
- Test cross-browser compatibility
- Test responsive design
- Test performance

## 📖 Documentation Standards

### Code Comments
```typescript
/**
 * Uploads a photo to the server and returns the upload result
 * @param file - The file to upload
 * @param onProgress - Progress callback function
 * @returns Promise with upload result
 */
async function uploadPhoto(file: File, onProgress?: (progress: number) => void): Promise<UploadResult> {
  // Implementation
}
```

### README Sections
- Clear project description
- Installation instructions
- Usage examples
- API documentation
- Contributing guidelines

## 🏷️ Release Process

### Versioning
We use semantic versioning (SemVer):
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

### Changelog
Update `CHANGELOG.md` with:
- New features
- Bug fixes
- Breaking changes
- Deprecations

## 🤔 Questions?

If you have questions about contributing:

- **GitHub Discussions**: For general questions
- **GitHub Issues**: For bug reports and feature requests
- **Email**: hello@jenncustomphotography.com

## 📜 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive experience for everyone, regardless of:
- Age, body size, disability, ethnicity
- Gender identity and expression
- Level of experience, education
- Nationality, personal appearance
- Race, religion, sexual orientation

### Our Standards

**Positive behavior includes:**
- Using welcoming and inclusive language
- Being respectful of different viewpoints
- Accepting constructive criticism
- Focusing on what's best for the community
- Showing empathy towards others

**Unacceptable behavior includes:**
- Harassment or discrimination
- Trolling or insulting comments
- Public or private harassment
- Publishing private information
- Inappropriate sexual attention

### Enforcement

Project maintainers are responsible for clarifying and enforcing our standards. They may take action to address any behavior they deem inappropriate.

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Jenn Custom Photography! 🎉
