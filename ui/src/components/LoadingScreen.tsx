import React, { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsVisible(false), 500)
          return 100
        }
        return prev + 10
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div className={`fixed inset-0 z-[100] bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 flex items-center justify-center transition-opacity duration-500 ${progress === 100 ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center space-y-8">
        {/* Neural Network Animation */}
        <div className="relative w-40 h-40 mx-auto">
          {/* Center Node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 rounded-full animate-pulse shadow-2xl shadow-purple-500/50"></div>
          
          {/* Orbiting Nodes */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-4 h-4"
              style={{
                animation: `orbit ${3 + i * 0.5}s linear infinite`,
                transformOrigin: '0 0',
                transform: `rotate(${i * 60}deg) translateX(60px)`
              }}
            >
              <div className="w-4 h-4 bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 rounded-full shadow-lg"></div>
            </div>
          ))}
          
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full animate-spin-slow opacity-30">
            <circle cx="80" cy="80" r="60" fill="none" stroke="currentColor" strokeWidth="1" className="text-purple-500 dark:text-purple-400" strokeDasharray="4 4" />
          </svg>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 animate-gradient">
            Deep Learning Hub
          </h2>
          <p className="text-lg font-bold text-slate-900 dark:text-gray-400">
            Loading AI-Powered Learning Platform...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto space-y-2">
          <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm font-bold text-purple-600 dark:text-purple-400 text-right">
            {progress}%
          </p>
        </div>

        {/* Brain Icon */}
        <div className="text-6xl animate-bounce">
          🧠
        </div>
      </div>

    </div>
  )
}
