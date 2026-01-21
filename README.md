# Portfolio Website

A modern, responsive portfolio website built with React.js that showcases projects, skills, photos, and professional information. This single-page application (SPA) provides a clean and intuitive interface for presenting your work and personal brand.

**Live Site:** [https://sragvivadali.github.io](https://sragvivadali.github.io)

## 🎯 Overview

This portfolio website is a personal showcase platform that includes:
- **About Section**: Personal introduction, role, description, and links to resume and social profiles
- **Projects Section**: Display of featured projects with descriptions, tech stacks, and links to source code
- **Skills Section**: List of technical skills and technologies
- **Photos Section**: Photography portfolio gallery
- **Contact Section**: Contact information and email
- **Interactive Features**: Chat popup, scroll-to-top button, responsive navigation

## 🛠️ Tech Stack

### Core Technologies
- **React.js** (v18.2.0) - UI library for building component-based interfaces
- **React DOM** (v17.0.2) - DOM rendering for React
- **React Scripts** (v5.0.1) - Build tooling and development server
- **Material-UI Icons** (v4.12.3) - Icon library for UI elements

### Additional Libraries
- **uniqid** - Unique ID generation for React keys
- **react-grid-gallery** - Photo gallery component
- **react-photo-gallery** - Responsive photo gallery layouts
- **prop-types** - Runtime type checking for React props

### Development Tools
- **ESLint** - Code linting and quality checks
- **Prettier** - Code formatting
- **GitHub Pages** - Hosting and deployment

## 📁 Codebase Structure

```
src/
├── App.js                 # Main application component (root)
├── App.css                # Global application styles
├── index.js               # Application entry point
├── index.css              # Global CSS styles
├── portfolio.js           # Data configuration (projects, skills, about info)
└── components/            # Reusable React components
    ├── Header/            # Site header with title and navigation
    ├── Navbar/            # Navigation menu component
    ├── About/             # About section component
    ├── Projects/          # Projects listing component
    ├── ProjectContainer/  # Individual project card component
    ├── Skills/            # Skills display component
    ├── Photos/            # Photo gallery component
    ├── Contact/           # Contact information component
    ├── ChatPopup/         # Interactive chat popup component
    ├── Footer/            # Site footer component
    └── ScrollToTop/       # Scroll-to-top button component

public/
└── index.html             # HTML template

build/                     # Production build output (generated)
.github/
└── workflows/
    └── deploy.yml         # GitHub Actions deployment workflow
```

## 🔧 How It Works

### Data-Driven Architecture

The application uses a **data-driven approach** where all content is stored in a single configuration file (`portfolio.js`). This makes it easy to update the portfolio without modifying component code.

**Key Configuration Objects:**
- `header`: Site title and homepage URL
- `about`: Personal information, role, description, resume link, and social media links
- `projects`: Array of project objects with name, description, tech stack, and source code links
- `skills`: Array of skill/technology names
- `images`: Photo gallery image URLs and external portfolio link
- `contact`: Contact email address

### Component Architecture

The application follows a **component-based architecture** where the UI is broken down into reusable, modular components:

1. **App.js** (Root Component)
   - Renders the main layout structure
   - Orchestrates all major sections
   - Wraps the application with theme classes

2. **Header Component**
   - Displays site title (clickable link to homepage)
   - Contains the navigation menu

3. **About Component**
   - Renders personal introduction
   - Displays role and description
   - Shows resume download button
   - Links to GitHub and LinkedIn profiles

4. **Projects Component**
   - Maps through projects array from `portfolio.js`
   - Renders `ProjectContainer` for each project
   - Displays projects in a responsive grid layout

5. **ProjectContainer Component**
   - Individual project card
   - Shows project name, description, tech stack
   - Provides link to source code (GitHub icon)
   - Supports "In Progress" status badge

6. **Skills Component**
   - Displays skills as a list or tags
   - Pulls data from `portfolio.js`

7. **Photos Component**
   - Image gallery showcasing photography work
   - Links to external photography portfolio

8. **Contact Component**
   - Contact information display
   - Email contact link

9. **ChatPopup Component**
   - Interactive chat interface (work in progress)

10. **Footer Component**
    - Site footer with additional information

### Rendering Flow

1. **Entry Point** (`index.js`):
   - Renders the `App` component into the DOM root element
   - Applies global styles

2. **App Component** (`App.js`):
   - Imports and renders all section components
   - Defines the overall page structure
   - Includes header, main content, and footer

3. **Data Flow**:
   - Components import data from `portfolio.js`
   - Data flows down from parent to child components (unidirectional)
   - Each component receives data as props or imports directly

4. **Styling**:
   - Each component has its own CSS file
   - Global styles in `index.css` and `App.css`
   - Material-UI icons for consistent iconography

### Build Process

1. **Development**: `npm start` runs the development server with hot reload
2. **Build**: `npm run build` creates optimized production files in `build/`
3. **Deploy**: Automatically deployed via GitHub Actions to GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sragvivadali/sragvivadali.github.io.git
   cd sragvivadali.github.io
   ```

2. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```
   (Note: `--legacy-peer-deps` is needed due to some dependency conflicts)

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000`

### Customizing Your Portfolio

1. **Update Portfolio Data**:
   - Edit `src/portfolio.js` to update:
     - Personal information (`about` object)
     - Projects list (`projects` array)
     - Skills list (`skills` array)
     - Photo gallery URLs (`images` object)
     - Contact information (`contact` object)

2. **Modify Components**:
   - Each component in `src/components/` can be customized
   - Update CSS files to change styling
   - Modify component logic in `.js` files

3. **Add New Projects**:
   ```javascript
   {
     name: 'Project Name',
     description: 'Project description...',
     stack: ['Technology1', 'Technology2'],
     sourceCode: 'https://github.com/username/repo',
   }
   ```

## 📦 Available Scripts

- `npm start` - Runs the app in development mode with hot reload
- `npm run build` - Creates an optimized production build
- `npm test` - Runs the test suite
- `npm run deploy` - Builds and deploys to GitHub Pages
- `npm run lint` - Runs ESLint to check code quality
- `npm run format` - Formats code using Prettier

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically:
- Builds the React app on every push to `main`
- Deploys to the `gh-pages` branch
- Makes the site live on GitHub Pages

**How it works:**
1. Push changes to `main` branch
2. GitHub Actions automatically triggers
3. Builds the project
4. Deploys to `gh-pages` branch
5. Site updates within 1-5 minutes

### Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

This will:
- Build the project
- Deploy to the `gh-pages` branch
- Update the live site at `https://sragvivadali.github.io`

## 🎨 Features

- ✅ Responsive design (mobile-friendly)
- ✅ Single Page Application (SPA) architecture
- ✅ Smooth scrolling navigation
- ✅ Interactive chat popup
- ✅ Photo gallery integration
- ✅ Project showcase with tech stack tags
- ✅ Social media integration
- ✅ Resume download link
- ✅ SEO-friendly meta tags
- ✅ Fast loading and optimized build

## 📝 Notes

- The project uses React 18 with legacy OpenSSL provider flags for compatibility
- Material-UI v4 is used for icons
- All portfolio content is centralized in `portfolio.js` for easy updates
- The build process optimizes assets for production deployment

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork it and customize for your own use!

## 📄 License

This project is open source and available for personal use.

---

**Built with ❤️ using React.js**
