# 🚛 XPHUB - Liquid Bulk Transport Website

A modern, responsive website showcasing professional web development skills through a fictional liquid bulk transport company. Built with cutting-edge web technologies to demonstrate expertise in full-stack development, UI/UX design, and modern web development practices.

## 🌐 Live Demo

**🔗 [View Live Website](https://xphub.us/)**

> **Note**: This is a portfolio showcase project demonstrating web development skills and is not affiliated with any actual business.

## 📋 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Key Highlights](#-key-highlights)
- [Performance & Optimization](#-performance--optimization)
- [Portfolio Context](#-portfolio-context)
- [About the Developer](#-about-the-developer)

## ✨ Features

- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Interactive Quote System**: Professional quote request modal with form validation
- **Service Showcase**: Comprehensive display of liquid bulk transport services
- **Customer Testimonials**: Interactive carousel showcasing client feedback
- **Modern UI/UX**: Clean, professional design with custom branding
- **SEO Optimized**: Comprehensive SEO with industry-specific keywords
- **Contact Integration**: Email service integration for quote requests
- **Type Safety**: Full TypeScript implementation for robust development
- **Performance**: Optimized images, lazy loading, and efficient bundle splitting
- **Portfolio Ready**: Designed to showcase professional web development skills

## 🛠 Technologies Used

### Frontend

- **React 19** - Latest React with concurrent features
- **Next.js 15** - Full-stack React framework with App Router
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **Headless UI** - Accessible component primitives
- **Radix UI** - Low-level UI primitives for building design systems
- **Lucide React** - Beautiful, customizable icons
- **Embla Carousel** - Lightweight carousel library

### Backend & APIs

- **Next.js API Routes** - Serverless API endpoints
- **Resend** - Email service integration for quote requests
- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation for form data

### Development Tools

- **ESLint** - Code linting and quality assurance
- **Prettier** - Code formatting with Tailwind CSS plugin
- **Turbopack** - Fast bundling and development
- **TypeScript** - Static type checking

## 📁 Project Structure

```text
src/
├── app/                   # Next.js App Router pages
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with metadata and navigation
│   ├── page.tsx           # Homepage with all sections
│   ├── robots.ts          # SEO robots configuration
│   └── sitemap.ts         # Dynamic sitemap generation
├── components/            # Reusable React components
│   ├── Nav.tsx            # Main navigation component
│   ├── QuoteModal.tsx     # Quote request modal with form
│   ├── RequestQuoteButton.tsx # CTA button component
│   ├── MobileNavModal.tsx # Mobile navigation modal
│   ├── SmoothScrollLink.tsx # Smooth scrolling navigation links
│   └── ui/                # Reusable UI components
│       ├── button.tsx     # Custom button component
│       └── carousel.tsx   # Carousel component for testimonials
├── constants/             # Data and configuration
│   ├── index.ts           # Services, testimonials, and form data
│   └── seokeywords.ts     # SEO keywords for liquid bulk transport
├── lib/                   # Utility functions and actions
│   ├── actions/           # Server actions
│   │   └── sendEmail.ts   # Email sending functionality
│   ├── seokeywords.ts     # SEO keyword management
│   └── utils.ts           # Utility functions
└── public/                # Static assets
    └── assets/            # Images and icons
        ├── services/      # Service-specific icons
        ├── socials/       # Social media icons
        └── whyus/         # Why choose us images
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/xphub.git
   cd xphub
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   RESEND_API_KEY=your_resend_api_key
   COMPANY_EMAIL=your_company_email@domain.com
   ```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Highlights

### Portfolio Features

- **Service Showcase**: Comprehensive display of liquid bulk transport services including Chemical Liquids, Food-Grade Liquids, Petroleum Fluids, and Industrial Fluids
- **Quote Request System**: Professional quote request modal with comprehensive form validation
- **Customer Testimonials**: Interactive carousel showcasing client feedback and ratings
- **Company Information**: Detailed about section with fictional company history and values
- **Service Areas**: Nationwide coverage presentation with 24/7 support availability

### Technical Excellence

- **Modern React Patterns**: Hooks, context, and custom components for optimal performance
- **TypeScript Mastery**: Comprehensive type safety throughout the application
- **Form Validation**: Robust form handling with Zod schema validation
- **Email Integration**: Professional email service for quote requests
- **SEO Optimization**: Industry-specific keywords and meta tags for search visibility
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts

### Code Quality

- **Clean Architecture**: Well-organized component structure and separation of concerns
- **Reusable Components**: Modular design with composable UI elements
- **Form Management**: Professional form handling with validation and error states
- **Type Safety**: Comprehensive TypeScript interfaces and type definitions
- **Performance**: Optimized images and efficient bundle splitting

### User Experience

- **Smooth Navigation**: Smooth scrolling between sections
- **Interactive Elements**: Hover effects, loading states, and micro-interactions
- **Mobile Optimization**: Responsive design with mobile navigation modal
- **Fast Loading**: Optimized images and efficient bundle splitting
- **Accessibility**: Semantic HTML and ARIA attributes for screen readers

## ⚡ Performance & Optimization

- **Next.js 15**: Latest framework features with improved performance
- **Turbopack**: Fast development builds and hot reloading
- **Image Optimization**: Next.js Image component with automatic optimization
- **Code Splitting**: Automatic route-based code splitting
- **SEO Ready**: Server-side rendering and meta tag optimization
- **Bundle Analysis**: Optimized JavaScript bundles for faster loading
- **Form Validation**: Client-side and server-side validation for data integrity

## 🎨 Portfolio Context

### Project Purpose

This project was created as a **portfolio showcase** to demonstrate professional web development skills and capabilities. The XPHUB website represents a fictional liquid bulk transport company designed to showcase:

- **Full-Stack Development**: Complete website with frontend and backend functionality
- **Modern Web Technologies**: Latest React, Next.js, and TypeScript implementation
- **UI/UX Design**: Professional, responsive design with custom branding
- **Form Handling**: Advanced form validation and email integration
- **SEO Optimization**: Industry-specific keyword research and implementation
- **Performance**: Optimized loading and user experience

### Design Choices

- **Industry Selection**: Chose liquid bulk transport to demonstrate ability to work with complex, industry-specific requirements
- **Professional Aesthetic**: Clean, modern design that conveys trust and reliability
- **Comprehensive Features**: Included all typical business website features (services, testimonials, contact forms, etc.)
- **Mobile-First**: Responsive design showcasing mobile development expertise

### Skills Demonstrated

- **React 19 & Next.js 15**: Latest framework features and best practices
- **TypeScript**: Comprehensive type safety and development experience
- **Tailwind CSS**: Utility-first styling and responsive design
- **Form Management**: React Hook Form with Zod validation
- **Email Integration**: Resend API for professional email handling
- **SEO**: Industry-specific keyword research and meta tag optimization
- **Performance**: Image optimization, code splitting, and bundle analysis

## 👨‍💻 About the Developer

**Tye Stanley** - Software Developer & UT University Graduate

- **Full-Stack Developer** with expertise in modern web technologies
- **Frontend Specialist** in React, TypeScript, and responsive design
- **Backend Experience** with Node.js, Express.js, .NET, and API development
- **UI/UX Focus** on creating engaging, accessible user experiences
- **Continuous Learner** always exploring new technologies and best practices

## 📞 Contact

- **Portfolio**: [tyestanley.com](https://tyestanley.com/)
- **LinkedIn**: [linkedin.com/in/tyestanley](https://www.linkedin.com/in/tyestanley/)
- **GitHub**: [github.com/TyeStanley](https://github.com/TyeStanley)
- **Email**: Available through contact form on portfolio website

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **Portfolio Showcase Project** - Demonstrating professional web development skills through a comprehensive business website implementation.
