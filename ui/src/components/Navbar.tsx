import React from 'react'
import { useTheme } from '../context/ThemeContext'

export default function Navbar(){
  const { theme, toggleTheme } = useTheme()
  
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 dark:bg-slate-900/80 light:bg-white/90 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-500/10 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-3d-purple transform hover:rotate-12 hover:scale-110 transition-all duration-300 animate-float">
              <span className="text-2xl font-bold text-white">R</span>
            </div>
            <div>
              <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 animate-gradient">
                RGPV Bhopal
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600">Deep Learning — AL 503(B)</div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-2">
            <NavLink href="#developer" icon="👨‍💻" label="Developer" />
            <NavLink href="#syllabus" icon="📚" label="Syllabus" />
            <NavLink href="#practicals" icon="💻" label="Practicals" />
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative w-16 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-1 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 group ml-4 card-3d"
              aria-label="Toggle theme"
            >
              <div className={`absolute w-6 h-6 rounded-full bg-white shadow-lg transform transition-all duration-500 flex items-center justify-center ${theme === 'dark' ? 'translate-x-0' : 'translate-x-8'}`}>
                <span className="text-sm group-hover:scale-125 group-hover:rotate-180 transition-all duration-500">
                  {theme === 'dark' ? '🌙' : '☀️'}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({href, icon, label}: {href: string, icon: string, label: string}){
  return (
    <a 
      href={href} 
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 dark:bg-slate-800/50 light:bg-gray-100 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 text-gray-300 dark:text-gray-300 light:text-gray-700 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30 card-3d group"
    >
      <span className="text-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{icon}</span>
      <span className="font-medium hidden md:inline">{label}</span>
    </a>
  )
}

