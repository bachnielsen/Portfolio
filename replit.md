# Personal Resume Website

## Overview

This is a modern personal resume website built with React, TypeScript, and a comprehensive tech stack. The application serves as a professional portfolio showcasing personal information, experience, education, and contact details in an elegant, responsive design.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Component Library**: Radix UI primitives with shadcn/ui components
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL storage
- **API Design**: RESTful API with `/api` prefix routing

### Component Design
- **UI Components**: Comprehensive shadcn/ui component library
- **Design System**: Consistent theming with CSS custom properties
- **Accessibility**: Built on Radix UI primitives for accessibility compliance
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling
- **Hero Section**: Professional introduction with profile image
- **About Section**: Personal background and skills showcase
- **Experience Section**: Professional timeline with version-style display
- **Education Section**: Academic background with subject highlights
- **Contact Section**: Multiple contact methods with social links
- **Footer**: Additional links and branding

### Backend Components
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Route Handler**: Centralized route registration system
- **Development Server**: Vite integration for hot module replacement
- **Error Handling**: Global error handling middleware

### Database Schema
- **Users Table**: Basic user authentication schema
- **Validation**: Zod schemas for type-safe data validation
- **Migrations**: Drizzle Kit for database schema management

## Data Flow

### Static Content Flow
1. Personal data defined in `/client/src/lib/data.ts`
2. Components consume data directly for static content
3. No API calls required for main content display

### Dynamic Content Flow
1. Frontend components make API requests using TanStack Query
2. Express routes handle API endpoints under `/api` prefix
3. Storage layer abstracts database operations
4. Response data flows back through query client to components

### Development Flow
1. Vite dev server serves frontend with HMR
2. Express server handles API routes and serves static files in production
3. Database migrations managed through Drizzle Kit
4. TypeScript compilation handled by Vite and tsc

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Framework**: Radix UI components, Tailwind CSS
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Build Tools**: Vite, TypeScript, PostCSS
- **State Management**: TanStack Query
- **Validation**: Zod for schema validation
- **Routing**: Wouter for lightweight routing

### Development Dependencies
- **Replit Integration**: Vite plugins for Replit environment
- **ESBuild**: Production bundling for server code
- **Development Tools**: Hot reload, error overlay, cartographer

## Deployment Strategy

### Production Build
1. **Frontend**: Vite builds optimized static assets to `/dist/public`
2. **Backend**: ESBuild bundles server code to `/dist/index.js`
3. **Database**: Drizzle migrations ensure schema consistency

### Environment Configuration
- **Development**: Uses Vite dev server with Express API
- **Production**: Express serves static files and API routes
- **Database**: Requires `DATABASE_URL` environment variable

### Server Architecture
- **Static Files**: Served from `/dist/public` in production
- **API Routes**: Express handles `/api/*` endpoints
- **SPA Routing**: Falls back to `index.html` for client-side routing

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 04, 2025. Initial setup