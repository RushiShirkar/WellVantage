# WellVantage

A React-based application for managing leads and customer relationships.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18 or higher recommended)
- **npm** (comes with Node.js) or **yarn**

You can verify your installation by running:
```bash
node --version
npm --version
```

## Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd WellVantage
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

   This will install all required packages including:
   - React and React DOM
   - Redux Toolkit for state management
   - React Router for navigation
   - Tailwind CSS for styling
   - Vite for build tooling

## Running the Application

### Development Mode

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port). The dev server includes hot module replacement (HMR), so changes will automatically reload in the browser.

### Production Build

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Technology Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

## Project Structure

```
WellVantage/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── utils/          # Utility functions
│   └── main.jsx        # Application entry point
├── public/             # Static assets
└── package.json        # Project dependencies and scripts
```