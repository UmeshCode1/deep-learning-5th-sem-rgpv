import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let ticking = false
    
    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.pageYOffset > 300)
          ticking = false
        })
        ticking = true
      }
    }

    // Initial check
    toggleVisibility()
    
    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40 flex flex-col gap-3 animate-fade-in">
      {/* Scroll to Top Button - Enhanced */}
      <button
        onClick={scrollToTop}
        className="relative p-3 sm:p-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-purple-600 dark:via-pink-600 dark:to-blue-600 text-white rounded-full shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 group border-2 border-white/30 overflow-hidden"
        aria-label="Scroll to top"
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer"></div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div>
        
        {/* Icon */}
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:animate-bounce drop-shadow-lg" />
        
        {/* Ripple effect on hover */}
        <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping opacity-0 group-hover:opacity-100"></div>
      </button>

      {/* Progress Ring */}
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 mx-auto">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-indigo-200 dark:text-purple-800"
          />
          <circle
            cx="50%"
            cy="50%"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray={`${(window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 125} 125`}
            className="text-indigo-600 dark:text-purple-400 transition-all duration-300"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-indigo-600 dark:text-purple-400">
          {Math.round((window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%
        </div>
      </div>
    </div>
  )
}
