# GitHub Copilot Instructions - Ryan Castillo Portfolio

## Architecture Overview

This is a **single-page React application** with a unique monolithic component architecture. Unlike typical React apps, this doesn't use React Router - all sections (`home`, `about`, `projects`, `hobbies`, `contact`) are rendered conditionally in one `App.jsx` file based on `activeSection` state managed via navigation buttons.

**Key Design Decision**: All portfolio data is centralized in `src/constants/data.js` as static exports (`skills`, `projects`, `experience`, `hobbies`, `socialLinks`, `aboutData`). This creates a CMS-like content management system where all updates happen in a single file.

## 🤖 AI Agent Enhanced Development Environment

### Available MCP (Model Context Protocol) Tools

This project is equipped with comprehensive MCP tools to enhance development workflow. AI agents have access to:

#### **Postman MCP Server** - API Testing & Collection Management
- **Purpose**: API testing, collection management, and documentation
- **Usage**: Test portfolio APIs, validate endpoints, generate API documentation
- **Commands**: `npm run mcp:test-postman`
- **Config**: Environment variable `POSTMAN_API_KEY` securely stored

#### **Context7 MCP Server** - Documentation & Context Management  
- **Purpose**: Intelligent documentation search and context retrieval
- **Usage**: Find relevant documentation, code examples, and best practices
- **Benefits**: Enhanced code suggestions with up-to-date library documentation
- **Config**: Environment variable `CONTEXT7_API_KEY` securely stored

#### **Hugging Face MCP Server** - AI Model Access & Inference
- **Purpose**: Access to AI models, embeddings, and inference capabilities
- **Usage**: Code analysis, automated testing, content generation
- **Benefits**: Enhanced code quality analysis and intelligent refactoring suggestions
- **Config**: Environment variable `HUGGING_FACE_API_KEY` securely stored
- **Required Permissions**: 
  - ✅ Read access to repos
  - ✅ Write access to repos  
  - ✅ Inference API access
- **Troubleshooting**: 
  - If getting 401 errors, ensure API key has write permissions
  - New tokens may take 5-10 minutes to activate
  - Verify token at: https://huggingface.co/settings/tokens

#### **Playwright MCP Server** - Browser Automation & Testing
- **Purpose**: End-to-end testing, UI automation, performance testing
- **Usage**: Automated testing of portfolio functionality, accessibility checks
- **Benefits**: Comprehensive testing coverage and performance validation

#### **Sequential Thinking MCP Server** - Structured Reasoning
- **Purpose**: Complex problem-solving and structured decision making
- **Usage**: Architecture decisions, debugging complex issues, refactoring plans
- **Benefits**: Enhanced problem-solving capabilities for complex development challenges

#### **GitHub MCP Server** - Repository Management & Analysis
- **Purpose**: Repository insights, commit analysis, issue management, Git operations
- **Usage**: Code review assistance, project health analysis, contribution tracking
- **Benefits**: 30 Git operations + 33 CLI aliases, comprehensive workflow automation
- **Features**: 
  - ✅ Complete Git workflow management (add→commit→push)
  - ✅ Advanced operations (merge, rebase, cherry-pick, bisect)
  - ✅ Repository analysis and optimization
  - ✅ Development session management
- **Config**: Environment variable `GITHUB_TOKEN` uses `GITHUB_ACCESS_TOKEN`
- **CLI Access**: Available via `npx github-mcp-server` with 33 aliases
- **Test**: `npm run mcp:test-github`

### 🛠️ AI-Enhanced Error Management System

#### Vite + Tailwind Error Resolution
AI agents can use MCP tools to automatically resolve common issues:

**Current Known Issues**:
```bash
# PostCSS/Tailwind Configuration Errors
- Missing tailwindcss-animate dependency → Auto-install via Playwright MCP
- Invalid CSS imports → Context7 MCP provides correct Tailwind patterns
- ESLint configuration conflicts → GitHub MCP suggests community solutions

# Error Resolution Commands
npm run mcp:test                    # Validate MCP configuration
npm install tailwindcss-animate     # Fix animation dependency
npm run lint:fix                    # Auto-fix linting issues
```

#### Automated Code Hardening
AI agents can leverage MCP tools for:
- **Security Analysis**: Hugging Face models for vulnerability detection
- **Performance Optimization**: Playwright for performance testing and metrics
- **Code Quality**: Context7 for best practices and pattern matching
- **Testing Coverage**: Sequential thinking for comprehensive test planning

### 🔒 Secure Environment Configuration

All MCP tools use environment variables for API key management:
```bash
# Environment Files (.env.local)
POSTMAN_API_KEY=PMAK-***           # Postman API access
CONTEXT7_API_KEY=c29a5cea-***      # Context7 documentation access  
HUGGING_FACE_API_KEY=hf_HKJrIQ***  # Hugging Face model access
GITHUB_ACCESS_TOKEN=ghp_***        # GitHub repository access
```

**Security Features**:
- All API keys stored in gitignored environment files
- MCP configuration uses `${env:}` variable substitution
- Additional security patterns in `.gitignore` prevent key exposure
- Test script validates configuration without exposing sensitive data

## Essential Development Patterns

### Data-Driven Icon Mapping
Icons from `lucide-react` are mapped via string references in data, then dynamically resolved in components:
```jsx
// In data.js: { name: 'Power BI', icon: 'BarChart3' }
// In App.jsx: 
const SkillIcon = ({ skill }) => {
  const IconComponent = { BarChart3, Database, Brain }[skill.icon] || BarChart3
  return <IconComponent className="w-5 h-5" />
}
```

### Component Architecture
- **Monolithic App.jsx**: Contains all render functions (`renderHome()`, `renderAbout()`, etc.) as internal functions, not separate components
- **UI Components**: `src/components/ui/` follows shadcn/ui patterns with variant-based styling
- **No Router**: Navigation handled by `setActiveSection()` state updates

### Content Management System
**Single source of truth**: `src/constants/data.js` contains:
- `skills[]` - Technologies with categories and icon mappings
- `projects[]` - Portfolio projects with `technologies`, `highlights`, `status`, `impact` fields
- `experience[]` - Work history with `company`, `role`, `period`, `description`
- `hobbies[]`, `socialLinks[]`, `aboutData{}` - Personal content

To add new projects or update content, modify these exported arrays/objects.

## Critical Development Workflows

### AI-Enhanced Development Commands
```bash
# Development with MCP assistance
npm run dev                        # Start development server
npm run mcp:test                   # Validate MCP tools and API keys
npm run mcp:test-postman          # Test Postman integration
npm run mcp:test-context7         # Test Context7 documentation access
npm run mcp:test-hf               # Test Hugging Face integration

# Error Resolution & Code Hardening  
npm run lint:fix                   # ESLint auto-fixes with MCP suggestions
npm run test:coverage              # Comprehensive testing with Playwright MCP
npm run build                      # Production build with optimization analysis
```

### MCP-Powered Error Resolution
AI agents should use MCP tools to:
1. **Context7**: Search for solution patterns and best practices
2. **GitHub**: Analyze similar issues in the community
3. **Hugging Face**: Use AI models for code analysis and suggestions
4. **Sequential Thinking**: Break down complex problems systematically
5. **Playwright**: Validate fixes with automated testing

### Testing Approach
- Main test file: `src/App.test.jsx`
- **Mocks all data**: Tests mock `src/constants/data.js` imports for predictable testing
- **MCP Integration**: Playwright MCP for E2E testing, HuggingFace MCP for test generation
- Uses Vitest + React Testing Library for component testing

## Styling System

### Tailwind + CSS Variables Pattern
- **Dark Mode**: Controlled by `darkMode` state that toggles `dark` class on `document.documentElement`
- **Custom Properties**: `src/index.css` uses `oklch()` color values with CSS custom properties
- **Brand Color**: Green accent (`#22c55e` equivalent) as primary throughout
- **Design System**: Uses shadcn/ui component patterns with Tailwind utility classes
- **AI Enhancement**: Context7 MCP provides Tailwind best practices and pattern suggestions

### Responsive Design
- Mobile-first approach with `md:` and `lg:` breakpoints
- Navigation collapses on mobile (hidden `md:flex`)
- Grid layouts that stack on smaller screens
- **AI Testing**: Playwright MCP validates responsive behavior across devices

## Deployment Configuration

### Docker & Static Hosting Ready
- `nginx.conf` configured for SPA routing with security headers
- Optimized for Vercel, Netlify deployment
- Build optimization with manual chunk splitting (`vendor`, `ui` chunks)
- Environment variables use `VITE_*` prefix
- **AI Enhancement**: GitHub MCP analyzes deployment best practices

### Performance Optimizations
- Manual chunk splitting separates React core from UI libraries
- Console/debugger statements stripped in production
- Static assets optimized and compressed
- **AI Monitoring**: Playwright MCP provides performance metrics and optimization suggestions

## Code Quality Standards

- **PropTypes**: Runtime validation instead of TypeScript
- **Modern React**: Hooks-only, no class components
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **ESLint Rules**: React-specific rules with accessibility checks
- **AI Enhancement**: All MCP tools contribute to code quality analysis and suggestions

## 🎯 AI Agent Development Guidelines

When working on this codebase:

1. **Always use MCP tools** for enhanced development capabilities
2. **Validate environment** with `npm run mcp:test` before starting work
3. **Leverage Context7** for up-to-date documentation and best practices
4. **Use Playwright MCP** for comprehensive testing and validation
5. **Apply Hugging Face models** for intelligent code analysis
6. **Follow security patterns** for API key management
7. **Remember the centralized data approach** and single-file component architecture

The MCP tools provide significant enhancement to development workflow - use them actively for error resolution, code hardening, and feature development.

## 🛠️ Additional Developer Workflows

### Build and Test
- **Install dependencies**: `npm install`
- **Start development server**: `npm run dev`
- **Run tests**: `npm run test`
- **Lint code**: `npm run lint`
- **Fix lint errors**: `npm run lint:fix`
- **Build for production**: `npm run build`

### Debugging
- Use `npm run test:ui` for an interactive test runner.
- Check `vite.config.js` for custom build configurations.

### Deployment
- **Static Hosting**: Vercel, Netlify, or GitHub Pages.
- **Docker**: Use `npm run docker:build` and `npm run docker:run`.

---

## 📋 Codebase Structure

### Key Directories
- `src/components/ui/`: Reusable UI components (e.g., `button.jsx`, `card.jsx`)
- `src/constants/`: Centralized data and configuration
- `src/hooks/`: Custom React hooks
- `src/services/`: API service integrations
- `src/utils/`: Utility functions
- `tests/`: Unit and integration tests

### Important Files
- `vite.config.js`: Build configuration
- `tailwind.config.js`: Styling configuration
- `.env`: Environment-specific variables

---

## 📐 Project-Specific Conventions

### Styling
- Use **Tailwind CSS** for all styling.
- Follow the design system defined in `tailwind.config.js`.

### Component Design
- Use **PropTypes** for type validation.
- Place reusable components in `src/components/ui/`.
- Organize page-specific sections in `src/components/sections/`.

### Testing
- Write tests for all components in `src/components/`.
- Use **React Testing Library** for DOM interactions.
- Place test files alongside components (e.g., `App.test.jsx`).

### Data Management
- Store static data in `src/constants/data.js`.
- Use custom hooks for stateful logic in `src/hooks/`.

---

## 🔗 Integration Points

### External Dependencies
- **Icons**: Lucide React
- **Testing**: Vitest, React Testing Library
- **Linting**: ESLint, Prettier

### Environment Variables
- Define variables in `.env` (e.g., `VITE_APP_TITLE`, `VITE_CONTACT_EMAIL`).
- Use `import.meta.env` to access variables in code.

---

## 🚨 Important Notes

- **Do not modify `LICENSE` or `CNAME` files.**
- Ensure all changes are responsive and accessible.
- Follow the commit message convention: `feat:`, `fix:`, `chore:`, etc.
- Run `npm run lint` and `npm run test` before submitting changes.

---

For questions or clarifications, refer to the `README.md` or contact the project owner.

*Happy coding!*