# GitHub Copilot Instructions - Ryan Castillo Portfolio

## 📐 **NEW ARCHITECTURE OVERVIEW** (UPDATED 2025)

**⚠️ CRITICAL ARCHITECTURE CHANGE:** This project has been completely refactored from a monolithic to a modular component system.

This is a **single-page React application** with a **modular component architecture**. Unlike typical React apps, this doesn't use React Router - all sections (`home`, `about`, `projects`, `hobbies`, `contact`) are rendered conditionally based on `activeSection` state, but now each section is a separate, focused component.

### **Key Architectural Decisions:**

1. **Modular Components**: Each section is now a separate component file (max 150 lines each)
2. **Data Separation**: All portfolio data moved from `src/constants/data.js` to individual files in `src/data/`
3. **Utility Components**: Reusable components extracted to `src/components/common/`
4. **Modular CSS**: CSS organized into `src/styles/` with variables, base, components, and utilities
5. **Path Aliases**: All imports use `@/` aliases for clean, maintainable code
6. **PropTypes Validation**: Every component has strict type validation

### **Directory Structure (MANDATORY COMPLIANCE):**
```
src/
├── App.jsx                    # Main app (50 lines max - routing only)
├── main.jsx                   # Application entry point  
├── index.css                  # Main CSS with imports
├── components/                # All React components
│   ├── common/                # Reusable utilities
│   │   └── IconComponents.jsx # SkillIcon, SocialIcon, HobbyIcon
│   ├── layout/                # Layout components  
│   │   ├── Navigation.jsx     # Header navigation
│   │   └── Footer.jsx         # Site footer
│   ├── sections/              # Main page sections
│   │   ├── HomeSection.jsx    # Home page section
│   │   ├── AboutSection.jsx   # About me section  
│   │   ├── ProjectsSection.jsx # Projects portfolio
│   │   ├── HobbiesSection.jsx # Hobbies & interests
│   │   ├── ContactSection.jsx # Contact information
│   │   ├── ExperienceSection.jsx # Work experience
│   │   ├── home/              # Home subsections  
│   │   │   ├── HeroComponent.jsx     # Hero banner
│   │   │   ├── SkillsGrid.jsx        # Skills display
│   │   │   ├── FeaturedProjects.jsx  # Project preview
│   │   │   └── QuickContact.jsx      # Contact links
│   │   └── projects/          # Project subsections
│   │       ├── ProjectCard.jsx       # Individual project
│   │       └── ProjectFilter.jsx     # Project filtering
│   └── ui/                    # shadcn/ui components
│       ├── badge.jsx          # Badge component
│       ├── button.jsx         # Button component
│       └── card.jsx           # Card component
├── data/                      # Data management (NO UI LOGIC)
│   ├── skills.js              # Technology skills array
│   ├── projects.js            # Portfolio projects array
│   ├── experience.js          # Work experience array
│   ├── hobbies.js             # Personal hobbies array
│   ├── socialLinks.js         # Social media links array
│   └── aboutData.js           # About page data object
├── styles/                    # Modular CSS organization
│   ├── variables.css          # CSS custom properties & colors
│   ├── base.css               # Base styles & resets
│   ├── components.css         # Component-specific styles
│   └── utilities.css          # Custom utility classes
├── hooks/                     # Custom React hooks
├── services/                  # API services & integrations  
└── utils/                     # Pure utility functions
```

### **Component Import Pattern (MANDATORY):**
```javascript
// ✅ CORRECT - Use path aliases
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'  
import HomeSection from '@/components/sections/HomeSection'
import { skills } from '@/data/skills'

// ❌ WRONG - Relative imports (NEVER USE)
import Navigation from '../components/layout/Navigation'
import Footer from './Footer'
import { skills } from '../../../../data/skills'
```

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

### **New Data-Driven Architecture:**
Data is now separated into individual files in `src/data/`:
```javascript
// skills.js - Technology skills with categories
export const skills = [
  { name: 'Power BI', icon: 'BarChart3', category: 'BI Tools' },
  { name: 'Python', icon: 'Brain', category: 'Programming' }
]

// projects.js - Portfolio projects  
export const projects = [
  { 
    title: 'Project Name',
    technologies: ['React', 'Python'],
    highlights: ['Achievement 1', 'Achievement 2'],
    status: 'Completed',
    impact: 'High'
  }
]
```

### **Icon Component System:**
Icons from `lucide-react` are dynamically resolved via `IconComponents.jsx`:
```javascript
// In IconComponents.jsx
import PropTypes from 'prop-types'
import { BarChart3, Database, Brain } from 'lucide-react'

export const SkillIcon = ({ skill }) => {
  const IconComponent = { BarChart3, Database, Brain }[skill.icon] || BarChart3
  return <IconComponent className="w-5 h-5" />
}

SkillIcon.propTypes = {
  skill: PropTypes.shape({
    icon: PropTypes.string.isRequired
  }).isRequired
}
```

### **New Component Architecture:**
- **Micro-Components**: Each section broken into focused, single-purpose components
- **Layout Components**: Navigation and Footer handle layout concerns
- **Section Components**: Each page section is a dedicated component  
- **UI Components**: `src/components/ui/` follows shadcn/ui patterns
- **No Router**: Navigation still handled by `setActiveSection()` state updates

### **Content Management System:**
**Multiple sources of truth**: Individual data files in `src/data/`:
- `skills.js` - Technologies with categories and icon mappings
- `projects.js` - Portfolio projects with comprehensive metadata  
- `experience.js` - Work history with detailed descriptions
- `hobbies.js`, `socialLinks.js`, `aboutData.js` - Personal content

To add new content, modify the appropriate data file and import where needed.

## 🎨 **COMPONENT STANDARDS** (STRICT COMPLIANCE)

### **Mandatory Component Structure:**
```javascript
// ✅ CORRECT Component Template
import React from 'react'
import PropTypes from 'prop-types'

const ComponentName = ({ prop1, prop2 }) => {
  // Component logic here (max 100 lines)
  
  return (
    <div className="tailwind-classes">
      {/* JSX content */}
    </div>
  )
}

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })
}

export default ComponentName
```

### **Component Size Limits (ENFORCED):**
- **Section Components**: Max 150 lines each
- **Sub-Components**: Max 100 lines each  
- **Utility Components**: Max 75 lines each
- **Main App.jsx**: Max 50 lines (routing logic only)

### **PropTypes Validation (MANDATORY):**
Every component MUST have PropTypes validation. Common patterns:
```javascript
// String validation
PropTypes.string.isRequired

// Array of objects
PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string.isRequired
}))

// Icon props (for IconComponents)
PropTypes.shape({
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}).isRequired
```

## 🎨 **CSS & STYLING SYSTEM**

### **Modular CSS Architecture (MANDATORY):**
```css
/* src/index.css - Main imports only */
@import 'tailwindcss/base';
@import 'tailwindcss/components'; 
@import 'tailwindcss/utilities';
@import './styles/variables.css';
@import './styles/base.css';
@import './styles/components.css'; 
@import './styles/utilities.css';

/* src/styles/variables.css - CSS custom properties */
:root {
  --portfolio-green-50: oklch(0.96 0.02 142);
  --portfolio-green-500: oklch(0.67 0.15 142);
  --portfolio-green-600: oklch(0.61 0.16 142);
}

/* src/styles/base.css - Base styles & resets */
html, body { /* base styles */ }

/* src/styles/components.css - Component-specific styles */
.card-hover-effect { /* component styles */ }

/* src/styles/utilities.css - Custom utilities */
@layer utilities {
  .animate-fade-in { /* custom animations */ }
}
```

### **Color System (ENFORCE BRAND COLORS):**
- **Primary Green**: `--portfolio-green-500` (oklch color space)
- **Dark Green**: `--portfolio-green-600` for hover states
- **Light Green**: `--portfolio-green-50` for backgrounds
- **Neutral Colors**: `--portfolio-gray-*` series for text and borders

### **Responsive Design Rules:**
- **Mobile-First**: Always start with mobile styles
- **Breakpoints**: Use `sm:`, `md:`, `lg:`, `xl:` prefixes consistently
- **Grid Layouts**: Use `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` patterns
- **Flexbox**: Use `flex flex-col md:flex-row` for responsive direction changes

### **Animation Standards:**
```css
/* Custom animations in utilities.css */
.animate-fade-in { animation: fadeIn 0.6s ease-in-out; }
.animate-slide-up { animation: slideUp 0.6s ease-out; }
.transition-transform-colors { 
  transition: transform, color, background-color 300ms ease;
}
```
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

## 🚨 MANDATORY PRE-DEVELOPMENT CHECKLIST

**BEFORE MAKING ANY CODE CHANGES, AI AGENTS MUST:**

### 1. **Dependency Compatibility Check** (CRITICAL)
```bash
# ALWAYS run these commands FIRST before any development:
cd "d:\Projects\New Profile\my-portfolio-static"

# Check package.json integrity
npm ls --depth=0                    # Verify all dependencies installed
npm outdated                        # Check for outdated packages
npm audit                          # Security vulnerability check

# Test development environment
npm run dev --dry-run              # Simulate dev server start
npm run build --dry-run            # Simulate production build
npm run test --passWithNoTests     # Verify test environment

# Validate MCP tools configuration
npm run mcp:test                   # Test all MCP integrations
```

### 2. **Environment Validation** (REQUIRED)
```bash
# Verify Node.js and npm versions
node --version                     # Must be >=18.0.0
npm --version                      # Must be >=9.0.0

# Check Vite configuration
npx vite --version                 # Verify Vite installation
npx tailwindcss --version         # Verify Tailwind CSS

# Validate critical dependencies
npm list react react-dom          # Core React dependencies
npm list lucide-react prop-types  # UI dependencies
npm list @vitejs/plugin-react     # Build dependencies
```

### 3. **Pre-Change Compatibility Matrix**
**Required Dependencies Status Check:**
```javascript
// CRITICAL DEPENDENCIES - Must be present and compatible
{
  "react": "^18.2.0",              // ✅ Core framework
  "react-dom": "^18.2.0",          // ✅ DOM rendering
  "lucide-react": "^0.294.0",      // ✅ Icon library
  "prop-types": "^15.8.1",         // ✅ Type validation
  "@vitejs/plugin-react": "^4.1.1", // ✅ Vite React support
  "tailwindcss": "^3.3.5",         // ✅ CSS framework
  "postcss": "^8.4.31",            // ✅ CSS processing
  "autoprefixer": "^10.4.16"       // ✅ CSS prefixes
}
```

### 4. **Architecture Compatibility Check**
```bash
# Verify modular structure exists
ls src/components/layout/          # Navigation.jsx, Footer.jsx
ls src/components/sections/        # All section components
ls src/components/common/          # IconComponents.jsx
ls src/data/                       # All data files
ls src/styles/                     # Modular CSS files

# Test import path aliases
grep -r "@/components" src/        # Verify @ alias usage
grep -r "./components" src/        # Flag relative imports (should be none)
```

## 🎯 AI Agent Development Guidelines

**DEVELOPMENT WORKFLOW - STRICT ORDER:**

### Phase 1: Pre-Development (MANDATORY)
1. **Run dependency compatibility check** (above checklist)
2. **Validate environment** with all required tools
3. **Test current codebase** works without changes
4. **Document baseline state** before modifications

### Phase 2: Planning & Analysis
1. **Always use MCP tools** for enhanced development capabilities
2. **Leverage Context7** for up-to-date documentation and best practices
3. **Apply Hugging Face models** for intelligent code analysis
4. **Use Sequential Thinking MCP** for complex architectural decisions

### Phase 3: Implementation Rules
1. **Follow modular architecture** - NO monolithic components
2. **Use @ path aliases** - NO relative imports
3. **Validate PropTypes** - ALL components must have type validation
4. **Test incrementally** - Run dev server after each major change
5. **Follow CSS modular structure** - NO inline styles or scattered CSS

### Phase 4: Post-Change Validation
1. **Run compatibility check again** after changes
2. **Use Playwright MCP** for comprehensive testing and validation
3. **Verify responsive design** works on all devices
4. **Test dark mode toggle** functionality
5. **Ensure no console errors** in browser dev tools

## 🚫 CRITICAL FAILURE POINTS TO AVOID

### Dependency-Related Failures
```bash
# ❌ NEVER ignore these errors:
Module not found: Can't resolve '@/components'  # Fix vite.config.js
Cannot read property 'map' of undefined        # Missing data imports
React Hook called in non-React function        # Component structure issue
Tailwind CSS not working                       # Missing @tailwind directives
```

### Architecture Violations
```bash
# ❌ NEVER create these patterns:
- Components over 150 lines
- Relative imports (../../../)
- Hardcoded data in components
- CSS-in-JS or inline styles
- Components without PropTypes
- Missing @ path alias usage
```

## 🧪 **Mandatory Testing Protocol**

### Before Code Changes
```bash
# 1. Dependency health check
npm ci                             # Clean install
npm run dev                        # Must start without errors
curl http://localhost:5173/        # Must return 200 OK

# 2. Build process validation
npm run build                      # Must complete successfully
npm run preview                    # Must serve correctly
npm run lint                       # Must pass without errors

# 3. Component structure validation  
find src/components -name "*.jsx" -exec grep -L "PropTypes" {} \;  # Should return nothing
grep -r "useState\|useEffect" src/data/  # Should return nothing (no logic in data)
```

### After Code Changes
```bash
# 1. Regression testing
npm run dev                        # Dev server starts
npm run test                       # All tests pass  
npm run build                      # Production build works
npm run preview                    # Preview serves correctly

# 2. Component integration testing
# Visit each section: home, about, projects, hobbies, contact
# Test dark mode toggle
# Test responsive design (mobile, tablet, desktop)
# Test all navigation links
# Verify no console errors
```

## 🔧 **Compatibility Troubleshooting Guide**

### Common Dependency Issues & Solutions
```bash
# Issue: @tailwindcss/vite missing
# Solution: Remove from vite.config.js, use standard Tailwind setup

# Issue: PropTypes not found
# Solution: npm install prop-types

# Issue: Lucide icons not rendering
# Solution: Check icon names in data files match Lucide exports

# Issue: @ path aliases not working
# Solution: Verify vite.config.js resolve.alias configuration

# Issue: CSS not loading
# Solution: Check src/index.css imports all modular CSS files
```

### Emergency Recovery Commands
```bash
# If development environment breaks:
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm run dev

# If build fails:
npm run build -- --mode development  # Debug build issues
npm run preview -- --debug           # Debug preview issues
```

**The MCP tools provide significant enhancement to development workflow - use them actively for error resolution, code hardening, and feature development, but ONLY after completing the mandatory compatibility checks.**

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