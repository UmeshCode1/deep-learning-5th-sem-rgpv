import React, { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight
          const progress = Math.min(100, Math.max(0, (window.pageYOffset / totalHeight) * 100))
          setScrollProgress(progress)
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
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1">
        <div
          className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 transition-all duration-150 ease-out relative overflow-hidden"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 blur-sm bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-75"></div>
        </div>
      </div>

      {/* Bottom-left circular progress removed to reduce visual clutter */}
    </>
  )
}
