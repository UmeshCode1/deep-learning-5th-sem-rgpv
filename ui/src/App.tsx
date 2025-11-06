import React, { useState, useEffect, lazy, Suspense } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SectionHeader from './components/SectionHeader'
import LoadingScreen from './components/LoadingScreen'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'
import FloatingMenu from './components/FloatingMenu'
import AnnouncementBanner from './components/AnnouncementBanner'
import KeyboardShortcuts from './components/KeyboardShortcuts'
import { initScrollAnimations } from './utils/scrollAnimations'
import { initRevealAnimations, runWhenIdle } from './utils/performance'
import { useIntersectionObserver } from './hooks/useIntersectionObserver'

// Lazy load heavy components for better performance
const DeveloperInfo = lazy(() => import('./components/DeveloperInfo'))
const SyllabusView = lazy(() => import('./components/SyllabusView'))
const PracticalsView = lazy(() => import('./components/PracticalsView'))
const AssignmentsView = lazy(() => import('./components/AssignmentsView'))
const CodePreview = lazy(() => import('./components/CodePreview'))
const LearningTimeline = lazy(() => import('./components/LearningTimeline'))

// Loading fallback component
function ComponentLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-indigo-200 dark:border-purple-800 border-t-indigo-600 dark:border-t-purple-400 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl">🧠</span>
        </div>
      </div>
    </div>
  )
}

export default function App(){
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

function AppContent(){
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Optimized loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Show content with slight delay for smooth transition
      setTimeout(() => {
        setShowContent(true)
        // Initialize animations when browser is idle (performance boost)
        runWhenIdle(() => {
          initScrollAnimations()
          initRevealAnimations()
        })
      }, 300)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  // Performance: Disable animations during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isLoading])

  // Initialize reduced effects from persistence
  useEffect(() => {
    try {
      const reduced = localStorage.getItem('reducedEffects') === '1'
      if (reduced) document.body.setAttribute('data-reduced-effects', 'true')
    } catch {}
  }, [])

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className={`min-h-screen transition-all duration-500 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        {/* Scroll Progress Indicator */}
        <ScrollProgress />
        
        {/* Floating Quick Navigation Menu */}
        <FloatingMenu />
        
        <AnnouncementBanner />
        <Navbar />
        <Hero />
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-16 sm:space-y-20 lg:space-y-24" role="main">
        <Suspense fallback={<ComponentLoader />}>
          <section id="developer" className="section reveal scroll-fade-in">
            <SectionHeader id="developer" title="Developer" emoji="👨‍💻" />
            <DeveloperInfo />
          </section>
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <section id="syllabus" className="section reveal scroll-fade-in">
            <SectionHeader id="syllabus" title="Syllabus" emoji="📚" />
            <SyllabusView />
          </section>
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <section id="practicals" className="section reveal scroll-fade-in">
            <SectionHeader id="practicals" title="Practicals" emoji="💻" />
            <PracticalsView />
          </section>
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <section id="assignments" className="section reveal scroll-fade-in">
            <SectionHeader id="assignments" title="Assignments" emoji="📝" />
            <AssignmentsView />
          </section>
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <section id="code-examples" className="section reveal scroll-fade-in">
            <SectionHeader id="code-examples" title="Code Examples" emoji="💡" />
            <CodePreview />
          </section>
        </Suspense>
        <Suspense fallback={<ComponentLoader />}>
          <section id="learning-timeline" className="section reveal scroll-fade-in">
            <SectionHeader id="learning-timeline" title="Learning Timeline" emoji="🗓️" />
            <LearningTimeline />
          </section>
        </Suspense>
      </main>
      
      {/* Floating Components */}
      <KeyboardShortcuts />
      
      {/* Enhanced Modern Footer */}
      <FooterWithEntrance />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
    </>
  )
}

// Footer component with entrance animation
function FooterWithEntrance() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.15, triggerOnce: true })
  const [ripples, setRipples] = useState<Array<{id: number, x: number, y: number}>>([])

  const handleTileClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()
    setRipples(prev => [...prev, { id, x, y }])
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id))
    }, 600)
  }

  return (
    <footer ref={ref} className={`relative mt-16 sm:mt-24 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-purple-900 dark:via-pink-900 dark:to-blue-900 opacity-95"></div>
      
      {/* Animated Blobs with better positioning */}
      <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-500/30 dark:bg-purple-500/30 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-pink-500/30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 pb-32 sm:pb-40">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* About Section - Enhanced */}
          <div className="text-white sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-xl transform hover:rotate-12 hover:scale-110 transition-all duration-300">
                🧠
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">Deep Learning Hub</h3>
            </div>
            <p className="text-white/95 leading-relaxed font-medium text-sm sm:text-base mb-4">
              A comprehensive, interactive resource for Deep Learning (AL 503B) course under RGPV University, Bhopal.
            </p>
            <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-semibold">
              <span className="text-lg">🎓</span>
              <span>AI & ML Engineering</span>
            </div>
          </div>
            
            {/* Quick Links - Tile Cards */}
            <div className="text-white">
              <h4 className="text-base sm:text-lg font-black mb-3 sm:mb-4 uppercase tracking-wider flex items-center gap-2">
                <span className="text-xl">⚡</span> Quick Links
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <a href="#syllabus" className="tile-card has-tooltip" aria-label="Open syllabus" style={{animationDelay: '0ms'}}>
                  <span className="tile-icon">📚</span>
                  <div className="tile-text">
                    <span className="tile-title">Course Syllabus</span>
                    <span className="tile-sub">All units and outcomes</span>
                  </div>
                  <span className="tooltip">Syllabus</span>
                </a>
                <a href="#practicals" className="tile-card has-tooltip" aria-label="View practicals" style={{animationDelay: '50ms'}}>
                  <span className="tile-icon">💻</span>
                  <div className="tile-text">
                    <span className="tile-title">Practicals</span>
                    <span className="tile-sub">Hands-on notebooks</span>
                  </div>
                  <span className="tooltip">Practicals</span>
                </a>
                <a href="#assignments" className="tile-card has-tooltip" aria-label="See assignments" style={{animationDelay: '100ms'}}>
                  <span className="tile-icon">📝</span>
                  <div className="tile-text">
                    <span className="tile-title">Assignments</span>
                    <span className="tile-sub">Coursework tasks</span>
                  </div>
                  <span className="tooltip">Assignments</span>
                </a>
                <a href="#code-examples" className="tile-card has-tooltip" aria-label="Explore code examples" style={{animationDelay: '150ms'}}>
                  <span className="tile-icon">💡</span>
                  <div className="tile-text">
                    <span className="tile-title">Code Examples</span>
                    <span className="tile-sub">Reference snippets</span>
                  </div>
                  <span className="tooltip">Code Examples</span>
                </a>
                <a href="#developer" className="tile-card has-tooltip md:col-span-2" aria-label="About developer" style={{animationDelay: '200ms'}}>
                  <span className="tile-icon">👨‍💻</span>
                  <div className="tile-text">
                    <span className="tile-title">About Developer</span>
                    <span className="tile-sub">Know the creator</span>
                  </div>
                  <span className="tooltip">Developer</span>
                </a>
              </div>
            </div>
            
            {/* Resources - Tile Cards */}
            <div className="text-white">
              <h4 className="text-base sm:text-lg font-black mb-3 sm:mb-4 uppercase tracking-wider flex items-center gap-2">
                <span className="text-xl">📖</span> Resources
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <a href="../syllabus/deep_learning_syllabus.md" className="tile-card has-tooltip" style={{animationDelay: '0ms'}}>
                  <span className="tile-icon">📄</span>
                  <div className="tile-text">
                    <span className="tile-title">Full Syllabus</span>
                    <span className="tile-sub">Markdown version</span>
                  </div>
                  <span className="tooltip">Open syllabus file</span>
                </a>
                <a href="#learning-timeline" className="tile-card has-tooltip" style={{animationDelay: '50ms'}}>
                  <span className="tile-icon">🗓️</span>
                  <div className="tile-text">
                    <span className="tile-title">Learning Path</span>
                    <span className="tile-sub">Timeline & milestones</span>
                  </div>
                  <span className="tooltip">See roadmap</span>
                </a>
                <a href="https://github.com/UmeshCode1/deep-learning-5th-sem-rgpv" target="_blank" rel="noopener noreferrer" className="tile-card has-tooltip" style={{animationDelay: '100ms'}}>
                  <span className="tile-icon">📦</span>
                  <div className="tile-text">
                    <span className="tile-title">Source Code</span>
                    <span className="tile-sub">GitHub repository</span>
                  </div>
                  <span className="tooltip">Open on GitHub</span>
                </a>
                <a href="https://github.com/UmeshCode1/deep-learning-5th-sem-rgpv/issues" target="_blank" rel="noopener noreferrer" className="tile-card has-tooltip" style={{animationDelay: '150ms'}}>
                  <span className="tile-icon">🐛</span>
                  <div className="tile-text">
                    <span className="tile-title">Report Issues</span>
                    <span className="tile-sub">Create a ticket</span>
                  </div>
                  <span className="tooltip">Open issues</span>
                </a>
              </div>
            </div>
            
            {/* Contact & Social - Enhanced */}
            <div className="text-white">
              <h4 className="text-base sm:text-lg font-black mb-3 sm:mb-4 uppercase tracking-wider flex items-center gap-2">
                <span className="text-xl">🌐</span> Connect
              </h4>
              <div className="space-y-2.5 sm:space-y-3">
                <a href="https://github.com/UmeshCode1/deep-learning-5th-sem-rgpv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 text-white/90 hover:text-white font-semibold text-sm sm:text-base transition-all hover:translate-x-2 hover:gap-3 sm:hover:gap-4 group bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg backdrop-blur-sm">
                  <span className="text-xl sm:text-2xl group-hover:scale-125 transition-transform">🔗</span>
                  <span>GitHub Repo</span>
                </a>
                <a href="https://www.linkedin.com/in/umesh-patel-5647b42a4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 text-white/90 hover:text-white font-semibold text-sm sm:text-base transition-all hover:translate-x-2 hover:gap-3 sm:hover:gap-4 group bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg backdrop-blur-sm">
                  <span className="text-xl sm:text-2xl group-hover:scale-125 transition-transform">💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href="mailto:umesh.code1@gmail.com" className="flex items-center gap-2 sm:gap-3 text-white/90 hover:text-white font-semibold text-sm sm:text-base transition-all hover:translate-x-2 hover:gap-3 sm:hover:gap-4 group bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg backdrop-blur-sm">
                  <span className="text-xl sm:text-2xl group-hover:scale-125 transition-transform">📧</span>
                  <span>Email Me</span>
                </a>
                <a href="https://chat.whatsapp.com/FjcQN6dyIotISFbxoizoom" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 text-white/90 hover:text-white font-semibold text-sm sm:text-base transition-all hover:translate-x-2 hover:gap-3 sm:hover:gap-4 group bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg backdrop-blur-sm">
                  <span className="text-xl sm:text-2xl group-hover:scale-125 transition-transform">💬</span>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Enhanced Bottom Bar */}
          <div className="border-t border-white/30 pt-6 sm:pt-8 mt-2">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-white">
              <div className="text-center sm:text-left">
                <p className="font-bold text-sm sm:text-base mb-1">
                  © 2025 <span className="text-white font-black">Umesh Patel</span> | Deep Learning (AL 503B)
                </p>
                <p className="text-xs sm:text-sm text-white/80 font-medium">
                  Oriental College of Technology • RGPV Bhopal
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2 bg-white/15 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-lg sm:text-xl animate-pulse">❤️</span>
                  <p className="font-semibold text-xs sm:text-sm">Made with passion</p>
                </div>
                <div className="flex items-center gap-2 bg-white/15 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-lg sm:text-xl">🚀</span>
                  <p className="font-semibold text-xs sm:text-sm">AI & ML Club</p>
                </div>
              </div>
            </div>
            
            {/* Tech Stack pills removed for a cleaner footer */}
          </div>
        </div>

        {/* Ripple effects container */}
        {ripples.map(ripple => (
          <span
            key={ripple.id}
            className="tile-ripple-effect"
            style={{
              left: ripple.x,
              top: ripple.y,
            }}
          />
        ))}
      </footer>
    )
  }
