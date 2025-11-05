import React, { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [loadingStage, setLoadingStage] = useState('Initializing...')

  useEffect(() => {
    const stages = [
      { progress: 20, text: 'Loading Neural Networks...' },
      { progress: 40, text: 'Preparing Practicals...' },
      { progress: 60, text: 'Loading Assignments...' },
      { progress: 80, text: 'Setting up Resources...' },
      { progress: 100, text: 'Almost Ready!' }
    ]
    
    let stageIndex = 0
    
    // Simulate loading progress with stages
    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + 5
        
        // Update loading stage text
        if (stageIndex < stages.length && nextProgress >= stages[stageIndex].progress) {
          setLoadingStage(stages[stageIndex].text)
          stageIndex++
        }
        
        if (nextProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsVisible(false), 800)
          return 100
        }
        return nextProgress
      })
    }, 80)

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

        {/* Loading Text with Stage */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 animate-gradient">
            Deep Learning Hub
          </h2>
          <div className="space-y-2">
            <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-gray-400">
              AI-Powered Learning Platform
            </p>
            <p className="text-sm font-semibold text-indigo-600 dark:text-purple-400 animate-pulse">
              {loadingStage}
            </p>
          </div>
        </div>

        {/* Enhanced Progress Bar */}
        <div className="w-72 sm:w-80 mx-auto space-y-3">
          <div className="relative h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 transition-all duration-300 ease-out rounded-full relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect on progress bar */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
            {/* Glow effect */}
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full blur-lg opacity-50 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-gray-500">
              Loading Resources...
            </p>
          </div>
        </div>

        {/* Animated Brain Icon with particles */}
        <div className="relative">
          <div className="text-5xl sm:text-6xl animate-bounce">
            🧠
          </div>
          {/* Sparkle particles */}
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"
              style={{
                animationDelay: `${i * 0.3}s`,
                transform: `translate(${i * 20 - 20}px, ${i * 15 - 15}px)`
              }}
            />
          ))}
        </div>
      </div>

    </div>
  )
}
