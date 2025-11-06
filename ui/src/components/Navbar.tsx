import React, { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function Navbar(){
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          
          // Active section detection (throttled)
          const sections = ['hero', 'developer', 'syllabus', 'practicals', 'assignments']
          const currentSection = sections.find(section => {
            const element = document.getElementById(section)
            if (element) {
              const rect = element.getBoundingClientRect()
              return rect.top <= 100 && rect.bottom >= 100
            }
            return false
          })
          
          if (currentSection) {
            setActiveSection(currentSection)
          }
          
          ticking = false
        })
        ticking = true
      }
    }
    
    // Initial call
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
  <nav aria-label="Primary" className={`sticky top-[env(safe-area-inset-top)] z-50 navbar-blur border-b backdrop-blur-2xl transition-all duration-500 ${
      scrolled 
        ? 'shadow-2xl shadow-indigo-500/30 dark:shadow-purple-500/30 py-2 sm:py-3 border-indigo-500/30 dark:border-purple-500/30 bg-white/80 dark:bg-slate-900/80' 
        : 'py-3 sm:py-4 border-indigo-500/20 dark:border-purple-500/20 bg-white/60 dark:bg-slate-900/60'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="relative w-11 h-11 sm:w-14 sm:h-14 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-purple-600 dark:via-pink-500 dark:to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/50 dark:shadow-purple-500/50 transform hover:rotate-12 hover:scale-110 transition-all duration-300 animate-pulse-glow group overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent shimmer"></div>
              <span className="text-lg sm:text-2xl font-black text-white relative z-10 group-hover:scale-125 transition-transform">🧠</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 animate-gradient tracking-tight">
                Deep Learning Hub
              </div>
              <div className="text-xs text-slate-700 dark:text-gray-400 font-bold">RGPV — AL 503(B) | 5th Semester</div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink href="#developer" icon="👨‍💻" label="Developer" activeSection={activeSection} />
            <NavLink href="#syllabus" icon="📚" label="Syllabus" activeSection={activeSection} />
            <NavLink href="#practicals" icon="💻" label="Practicals" activeSection={activeSection} />
            <NavLink href="#assignments" icon="📄" label="Assignments" activeSection={activeSection} />
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`relative w-16 h-8 rounded-full transition-all duration-500 hover:scale-110 active:scale-95 group ml-4 overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50' 
                  : 'bg-gradient-to-r from-indigo-500 to-sky-500 shadow-lg shadow-indigo-500/40 hover:shadow-indigo-500/60 border-2 border-indigo-600/40'
              }`}
              aria-label="Toggle theme"
              aria-pressed={theme === 'dark'}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer"></div>
              <div className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-xl transform transition-all duration-500 ease-out flex items-center justify-center ${
                theme === 'dark' 
                  ? 'bg-white translate-x-0 shadow-purple-400/50' 
                  : 'bg-gradient-to-br from-amber-300 to-yellow-400 translate-x-8 border-2 border-yellow-500/60 shadow-yellow-500/50'
              }`}>
                <span className="text-xs group-hover:scale-125 group-hover:rotate-180 group-active:scale-90 transition-all duration-500">
                  {theme === 'dark' ? '🌙' : '☀️'}
                </span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg glass-dark border border-purple-500/20 hover-lift"
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-4 glass-dark rounded-2xl border border-purple-500/20 p-4 animate-slide-in-bottom">
            <div className="flex flex-col space-y-2">
              <MobileNavLink href="#developer" icon="👨‍💻" label="Developer" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="#syllabus" icon="📚" label="Syllabus" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="#practicals" icon="💻" label="Practicals" onClick={() => setMobileMenuOpen(false)} />
              <MobileNavLink href="#assignments" icon="📄" label="Assignments" onClick={() => setMobileMenuOpen(false)} />
              
              <div className="pt-2 border-t border-purple-500/20">
                <button
                  onClick={() => {
                    toggleTheme()
                    setMobileMenuOpen(false)
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border hover-lift active:scale-95 transition-all duration-300 ${
                    theme === 'dark'
                      ? 'glass-dark border-purple-500/20 text-white hover:border-purple-500/40'
                      : 'bg-gradient-to-r from-indigo-500 to-sky-500 border-indigo-600/40 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50'
                  }`}
                  title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                  <span className="font-semibold">Switch Theme</span>
                  <span className="text-2xl transition-transform hover:scale-125 hover:rotate-12">{theme === 'dark' ? '🌙' : '☀️'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function NavLink({href, icon, label, activeSection}: {href: string, icon: string, label: string, activeSection?: string}){
  const sectionId = href.replace('#', '')
  const isActive = activeSection === sectionId
  
  return (
    <a 
      href={href} 
      aria-current={isActive ? 'page' : undefined}
      className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl glass-dark border transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover-lift group overflow-hidden ${
        isActive 
          ? 'border-purple-500/60 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-white shadow-lg shadow-purple-500/30' 
          : 'border-indigo-500/30 hover:border-indigo-500/50 text-slate-900 dark:text-gray-200 hover:text-indigo-700 dark:hover:text-white font-semibold'
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-opacity duration-300 ${isActive ? 'opacity-20' : 'opacity-0 group-hover:opacity-10'}`}></div>
      <span className="relative text-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{icon}</span>
      <span className="relative font-semibold">{label}</span>
      {isActive && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></span>}
    </a>
  )
}

function MobileNavLink({href, icon, label, onClick}: {href: string, icon: string, label: string, onClick: () => void}){
  return (
    <a 
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 px-4 py-3 rounded-lg glass-dark border btn-ghost border-indigo-500/30 dark:border-purple-500/20 hover:border-indigo-500/50 dark:hover:border-purple-500/40 text-slate-800 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-white transition-all duration-300 hover-lift group font-medium"
    >
      <span className="text-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{icon}</span>
      <span className="font-medium">{label}</span>
    </a>
  )
}

