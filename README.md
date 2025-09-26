# Ryan Castillo - Data & Analytics Portfolio 🚀

A modern, responsive portfolio website showcasing Ryan Castillo's expertise in data analytics, business intelligence, and technical skills. Built with React, Vite, and Tailwind CSS, featuring a clean design with dark mode support and smooth animations.

## 🌟 Features

- **Modern React Architecture**: Built with React 18, Vite, and modern ES6+ features
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode Support**: Seamless light/dark theme switching
- **Performance Optimized**: Fast loading with code splitting and lazy loading
- **SEO Friendly**: Proper meta tags, structured data, and semantic HTML
- **Accessible**: WCAG compliant with keyboard navigation and screen reader support
- **Professional Content**: Showcases projects, experience, skills, and achievements

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite with ESBuild
- **Styling**: Tailwind CSS with custom design system
- **Type Safety**: PropTypes for component validation
- **Testing**: Vitest with React Testing Library
- **Linting**: ESLint with React and accessibility rules
- **Formatting**: Prettier with Tailwind plugin

## 📋 Project Structure

```
ryan-castillo-portfolio/
├── src/
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   └── badge.jsx
│   │   └── sections/           # Page sections
│   ├── constants/
│   │   └── data.js            # Portfolio data and content
│   ├── utils/                 # Utility functions
│   ├── hooks/                 # Custom React hooks
│   ├── services/              # API services
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles and Tailwind
├── docs/                     # Documentation
├── tests/                    # Test files
├── public/                   # Static assets
├── package.json              # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── index.html               # HTML entry point
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ryancastillo/portfolio.git
   cd ryan-castillo-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run type-check` - Run TypeScript type checking

## 🎨 Design Features

### Visual Design
- **Clean Typography**: Modern font hierarchy with excellent readability
- **Consistent Spacing**: Carefully designed spacing system
- **Color Palette**: Professional color scheme with green accent
- **Smooth Animations**: Subtle transitions and hover effects
- **Card-based Layout**: Clean card design for content organization

### User Experience
- **Intuitive Navigation**: Clear navigation with active states
- **Mobile-First**: Responsive design that works on all screen sizes
- **Fast Loading**: Optimized performance with code splitting
- **Accessibility**: Keyboard navigation and screen reader support

## 📱 Sections

### Home
- Hero section with introduction
- Skills showcase with icons
- Featured projects preview
- Social media links

### About
- Personal information and background
- Core values and principles
- Professional interests
- Current learning journey

### Projects
- Comprehensive project gallery
- Detailed project information
- Technology stack for each project
- Project status and impact metrics

### Hobbies & Interests
- Personal interests and activities
- Skill levels and experience duration
- Life philosophy and work-life balance

### Contact
- Contact information and social links
- Professional networking profiles
- Current focus and availability

## 🔧 Development

### Code Quality
- **ESLint**: Configured with React and accessibility rules
- **Prettier**: Consistent code formatting
- **Type Safety**: PropTypes for component validation
- **Testing**: Unit tests with Vitest and React Testing Library

### Performance
- **Code Splitting**: Automatic code splitting with Vite
- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: Optimized assets and lazy loading
- **Bundle Analysis**: Build analysis tools included

### Deployment
- **Static Site**: Can be deployed to any static hosting service
- **Docker Support**: Dockerfile included for containerized deployment
- **CI/CD Ready**: GitHub Actions workflow configured
- **Environment Variables**: Support for different environments

## 📊 Portfolio Content

### Professional Experience
- **2Degrees**: Procurement Data Analyst & D365 FinOps Administrator
- **Auckland Transport**: Data & Insights Analyst and Process Analyst
- **Technical Skills**: Power BI, Python, SQL, D365 FinOps, Process Automation

### Key Projects
- NZ Government Procurement Analytics Dashboard
- 2Degrees Procurement Optimization
- Auckland Transport Data Insights Platform
- AI-Powered Spend Analysis Tool
- Supply Chain Risk Assessment Dashboard
- Vendor Performance Analytics

### Skills & Technologies
- **Analytics**: Power BI, SQL, Python, Excel
- **Systems**: D365 FinOps, SAP FICO, PowerApps
- **Tools**: Azure DevOps, ServiceNow, SharePoint
- **Methodologies**: Agile, Process Optimization, Data Storytelling

## 🌐 Deployment

### Static Hosting Options
- **Vercel**: Recommended for React applications
- **Netlify**: Great for static sites with forms
- **GitHub Pages**: Free hosting for public repositories
- **AWS S3 + CloudFront**: Scalable cloud hosting

### Docker Deployment
```bash
# Build Docker image
npm run docker:build

# Run container
npm run docker:run
```

### Environment Variables
Create a `.env` file for environment-specific configuration:
```env
VITE_APP_TITLE="Ryan Castillo Portfolio"
VITE_APP_DESCRIPTION="Data & Analytics Professional Portfolio"
VITE_CONTACT_EMAIL="ryangcastillo@outlook.com"
```

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

**Ryan Castillo**
- Email: ryangcastillo@outlook.com
- Phone: +64 22 356 5108
- LinkedIn: https://www.linkedin.com/in/castillo-ryan/
- Location: Auckland, New Zealand

---

*Built with ❤️ using React, Vite, and Tailwind CSS*
