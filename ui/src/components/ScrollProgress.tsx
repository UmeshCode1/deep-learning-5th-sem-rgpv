import React, { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.pageYOffset / totalHeight) * 100
      setScrollProgress(progress)
    }

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

      {/* Circular Progress Indicator (Bottom Left) */}
      <div className="fixed bottom-4 left-4 sm:bottom-8 sm:left-8 z-40 hidden md:block">
        <div className="relative w-14 h-14 sm:w-16 sm:h-16">
          {/* Background circle */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-slate-300 dark:text-slate-700"
            />
            {/* Progress circle */}
            <circle
              cx="50%"
              cy="50%"
              r="28"
              fill="none"
              stroke="url(#progress-gradient)"
              strokeWidth="3"
              strokeDasharray={`${(scrollProgress / 100) * 176} 176`}
              strokeLinecap="round"
              className="transition-all duration-300 drop-shadow-lg"
            />
            {/* Gradient definition */}
            <defs>
              <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Center percentage */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-black text-indigo-600 dark:text-purple-400">
              {Math.round(scrollProgress)}%
            </span>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-20 blur-lg animate-pulse"></div>
        </div>
      </div>
    </>
  )
}
