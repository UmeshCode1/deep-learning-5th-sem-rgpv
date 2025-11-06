import React, { useMemo, useState } from 'react'
import { Menu, X, BookOpen, Code, FileText, User, Home, Sparkles } from 'lucide-react'

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const menuItems = [
    { icon: Home, label: 'Home', href: '#hero', color: 'from-purple-500 to-pink-500' },
    { icon: User, label: 'Developer', href: '#developer', color: 'from-blue-500 to-cyan-500' },
    { icon: BookOpen, label: 'Syllabus', href: '#syllabus', color: 'from-green-500 to-emerald-500' },
    { icon: Code, label: 'Practicals', href: '#practicals', color: 'from-orange-500 to-red-500' },
    { icon: FileText, label: 'Assignments', href: '#assignments', color: 'from-violet-500 to-purple-500' },
    { icon: Sparkles, label: 'Code Examples', href: '#code-examples', color: 'from-yellow-500 to-amber-500' },
  ]

  return (
    <div className="fixed bottom-[calc(env(safe-area-inset-bottom)+6rem)] right-[calc(env(safe-area-inset-right)+0.75rem)] sm:bottom-[calc(env(safe-area-inset-bottom)+7rem)] sm:right-[calc(env(safe-area-inset-right)+2rem)] z-50">
      {/* Menu Items */}
      <div className={`absolute bottom-16 right-0 flex flex-col gap-3 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {menuItems.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setIsOpen(false)}
            aria-label={item.label}
            title={item.label}
            className={`group flex items-center gap-3 bg-white dark:bg-slate-800 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-white/20 overflow-hidden`}
            style={{
              animationDelay: `${index * 50}ms`,
              animation: isOpen && !prefersReducedMotion ? 'bounce-in 0.5s ease-out' : 'none'
            }}
          >
            {/* Label (hidden by default, shown on hover) */}
            <span className="px-4 py-2 text-sm font-bold text-slate-700 dark:text-gray-300 whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300">
              {item.label}
            </span>
            
            {/* Icon */}
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
              <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
          </a>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-purple-500 dark:via-pink-500 dark:to-blue-500 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group border-2 border-white/30 overflow-hidden ${
          isOpen ? 'rotate-90' : 'rotate-0'
        }`}
        aria-label={isOpen ? 'Close quick menu' : 'Open quick menu'}
        aria-expanded={isOpen}
        aria-controls="floating-quick-menu"
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div>
        
        {/* Icon */}
        {isOpen ? (
          <X className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 transition-transform duration-300" />
        ) : (
          <Menu className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 transition-transform duration-300" />
        )}
        
        {/* Pulse ring removed for cleaner UI */}
      </button>
      {/* Hidden container id for aria-controls linkage */}
      <div id="floating-quick-menu" hidden aria-hidden={!isOpen}></div>
    </div>
  )
}
