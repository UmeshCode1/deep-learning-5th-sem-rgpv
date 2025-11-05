# Deep Learning Portal - UI Documentation

## 🎯 Overview
Modern, fully responsive academic portal for RGPV 5th Semester Deep Learning course (AL 503B).

## ✨ Features Implemented

### 1. **SEO & Meta Tags**
- Comprehensive Open Graph tags for social media sharing
- Twitter Card support
- Proper meta descriptions and keywords
- Canonical URLs
- Favicon and Apple Touch Icon support

### 2. **Announcement Banner**
- Dismissible top banner with latest updates
- Gradient background with animations
- Responsive design
- Session-based visibility

### 3. **Enhanced Navigation**
- **Active Section Highlighting**: Automatically highlights current section
- **Scroll Spy**: Detects which section is in viewport
- **Sticky Header**: Stays at top while scrolling
- **Mobile Menu**: Full-featured hamburger menu
- **Smooth Scroll**: Animated transitions between sections

### 4. **Modern Hero Section**
- **Typing Effect**: Dynamic subtitle with rotating messages
- **Neural Network Animation**: Canvas-based particle system with connections
- **Animated Blobs**: Floating gradient backgrounds
- **Responsive Stats**: 3D cards with hover effects
- **Developer Card**: Enhanced with gradients and animations

### 5. **Scroll to Top Button**
- Appears after scrolling 300px
- Smooth scroll animation
- Neon glow effect
- Animated icon on hover

### 6. **Enhanced Section Headers**
- Unified design across all sections
- Large typography (6xl-7xl)
- Gradient icon containers
- Descriptive subtitles
- Color-coded gradients per section

### 7. **Modern Footer**
- 3-column grid layout
- Quick links section
- Social media integration
- Animated background effects
- Copyright and attribution

### 8. **Light/Dark Theme**
- Complete theme parity
- Smooth transitions (300ms)
- CSS custom properties
- Persistent localStorage
- Theme-aware components

### 9. **Search & Filter**
- Real-time search in Practicals
- Tag-based filtering
- Difficulty filtering in Assignments
- Empty state handling

### 10. **Typography System**
- Google Fonts: Inter (body) & Space Grotesk (headings)
- Optimized font weights (300-900)
- Enhanced letter-spacing
- Responsive sizing

### 11. **Performance Optimizations**
- Tree-shaking with Vite
- CSS minification
- Code splitting
- Efficient re-renders with React
- Lazy loading ready

## 🎨 Design System

### Colors
```css
Light Theme:
- Primary: #ffffff
- Secondary: #f8fafc
- Accent Purple: #7c3aed
- Accent Pink: #ec4899
- Accent Blue: #3b82f6

Dark Theme:
- Primary: #0f172a
- Secondary: #1e293b
- Accent Purple: #a78bfa
- Accent Pink: #f472b6
- Accent Blue: #60a5fa
```

### Typography
- **Headings**: Space Grotesk (300-700)
- **Body**: Inter (300-900)
- **Base Size**: 16px
- **Line Height**: 1.5-1.75

### Spacing Scale
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px

## 🚀 Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Install Dependencies
```bash
cd ui
npm install
```

### Development Server
```bash
npm run dev
```
Opens at: http://localhost:5173/

### Build for Production
```bash
npm run build
```
Output: `dist/` directory

### Preview Production Build
```bash
npm run preview
```

## 📦 Tech Stack
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter & Space Grotesk)

## 🎯 Component Structure
```
src/
├── components/
│   ├── AnnouncementBanner.tsx    # Top dismissible banner
│   ├── Navbar.tsx                 # Navigation with scroll spy
│   ├── Hero.tsx                   # Hero with animations
│   ├── DeveloperInfo.tsx          # About section
│   ├── SyllabusView.tsx           # Course syllabus
│   ├── PracticalsView.tsx         # Jupyter notebooks
│   ├── AssignmentsView.tsx        # Unit assignments
│   └── ScrollToTop.tsx            # Floating button
├── context/
│   └── ThemeContext.tsx           # Theme management
├── App.tsx                        # Main app component
└── main.tsx                       # Entry point
```

## 🌐 Deployment
Automatically deployed to GitHub Pages via GitHub Actions on push to main branch.

**Live URL**: https://umeshcode1.github.io/deep-learning-5th-sem-rgpv/

## 👨‍💻 Developer
**Umesh Patel**
- Role: Vice President, AI & ML Club
- Institution: Oriental College of Technology, Bhopal
- University: RGPV
- Email: umesh.code1@gmail.com
- LinkedIn: [Umesh Patel](https://www.linkedin.com/in/umesh-patel-5647b42a4)

## 📄 License
This project is part of academic coursework under RGPV University.

## 🙏 Acknowledgments
- RGPV University
- Oriental College of Technology
- AI & ML Club, OCT Bhopal
- Deep Learning Course Faculty

---
Built with ❤️ for the AI & ML Community
