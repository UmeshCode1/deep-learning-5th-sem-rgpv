import React, { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('theme') as Theme | null
      if (saved === 'dark' || saved === 'light') return saved
      if (typeof window !== 'undefined' && window.matchMedia) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        return prefersDark ? 'dark' : 'light'
      }
      return 'dark'
    } catch {
      return 'dark'
    }
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
  const root = document.documentElement
  const body = document.body
    
    // Add visual feedback during theme change
    body.classList.add('theme-switching')
    
    // Add smooth transition
  root.style.transition = 'background-color 0.3s ease, color 0.3s ease'
  root.setAttribute('data-theme', theme)
  body.setAttribute('data-theme', theme)
    
    // Remove transition and animation classes after completion
    const timer = setTimeout(() => {
      root.style.transition = ''
      body.classList.remove('theme-switching')
    }, 350)
    
    return () => clearTimeout(timer)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
