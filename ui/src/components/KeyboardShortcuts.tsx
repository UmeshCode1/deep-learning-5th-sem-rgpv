import React, { useState, useEffect } from 'react'
import { Command, Search, ArrowUp, ArrowDown, Keyboard, X } from 'lucide-react'

interface Shortcut {
  keys: string[]
  description: string
  category: string
}

const shortcuts: Shortcut[] = [
  // Navigation
  { keys: ['Ctrl', 'K'], description: 'Open search', category: 'Navigation' },
  { keys: ['Home'], description: 'Scroll to top', category: 'Navigation' },
  { keys: ['End'], description: 'Scroll to bottom', category: 'Navigation' },
  { keys: ['↑'], description: 'Scroll up', category: 'Navigation' },
  { keys: ['↓'], description: 'Scroll down', category: 'Navigation' },
  
  // Sections
  { keys: ['1'], description: 'Go to Developer Info', category: 'Sections' },
  { keys: ['2'], description: 'Go to Syllabus', category: 'Sections' },
  { keys: ['3'], description: 'Go to Practicals', category: 'Sections' },
  { keys: ['4'], description: 'Go to Assignments', category: 'Sections' },
  { keys: ['5'], description: 'Go to Code Examples', category: 'Sections' },
  { keys: ['6'], description: 'Go to Learning Timeline', category: 'Sections' },
  
  // Actions
  { keys: ['T'], description: 'Toggle theme', category: 'Actions' },
  { keys: ['?'], description: 'Show this help', category: 'Actions' },
  { keys: ['Esc'], description: 'Close modal', category: 'Actions' },
]

export default function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Show shortcuts modal with ? key
      if (e.key === '?' && !e.ctrlKey && !e.altKey) {
        e.preventDefault()
        setIsOpen(true)
      }

      // Close with Escape
      if (e.key === 'Escape') {
        setIsOpen(false)
        setSearchTerm('')
      }

      // Ctrl+K for search
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault()
        const searchInput = document.querySelector('input[placeholder*="Search"]') as HTMLInputElement
        searchInput?.focus()
      }

      // Number keys for navigation (when not in input)
      if (!isOpen && e.target instanceof HTMLElement && e.target.tagName !== 'INPUT') {
        const num = parseInt(e.key)
        if (num >= 1 && num <= 6) {
          e.preventDefault()
          // Map numbers to section IDs or scroll positions
          const sectionMap: { [key: number]: string } = {
            1: 'developer',
            2: 'syllabus',
            3: 'practicals',
            4: 'assignments',
            5: 'code-examples',
            6: 'learning-timeline'
          }
          const sectionId = sectionMap[num]
          const section = document.querySelector(`#${sectionId}, section:nth-of-type(${num + 1})`)
          section?.scrollIntoView({ behavior: 'smooth' })
        }
      }

      // Toggle theme with T key
      if (e.key === 't' && !e.ctrlKey && !isOpen && e.target instanceof HTMLElement && e.target.tagName !== 'INPUT') {
        e.preventDefault()
        const themeButton = document.querySelector('button[aria-label*="theme"]') as HTMLButtonElement
        themeButton?.click()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const filteredShortcuts = shortcuts.filter(shortcut => 
    shortcut.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shortcut.keys.some(key => key.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const categories = Array.from(new Set(shortcuts.map(s => s.category)))

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 left-4 sm:bottom-24 sm:left-8 z-40 p-3 sm:p-4 bg-gradient-to-br from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-white/20 group"
        aria-label="Show keyboard shortcuts"
        title="Press ? for shortcuts"
      >
        <Keyboard className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
      </button>
    )
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
        <div 
          className="glass-dark backdrop-blur-xl rounded-xl sm:rounded-2xl border border-purple-500/30 shadow-2xl max-w-3xl w-full max-h-[90vh] sm:max-h-[85vh] overflow-hidden animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-2 sm:p-3 bg-white/20 rounded-lg sm:rounded-xl">
                  <Keyboard className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-2xl font-black text-white">Keyboard Shortcuts</h2>
                  <p className="text-white/80 text-xs sm:text-sm hidden sm:block">Master these shortcuts for faster navigation</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 sm:p-2 hover:bg-white/20 rounded-lg transition-colors text-white"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
              <input
                type="text"
                placeholder="Search shortcuts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/20 border border-white/30 rounded-xl px-12 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white/50 focus:bg-white/25 transition-all"
                autoFocus
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Shortcuts List */}
          <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
            {categories.map(category => {
              const categoryShortcuts = filteredShortcuts.filter(s => s.category === category)
              if (categoryShortcuts.length === 0) return null

              return (
                <div key={category}>
                  <h3 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-1 h-4 bg-purple-500 rounded-full"></span>
                    {category}
                  </h3>
                  <div className="space-y-2">
                    {categoryShortcuts.map((shortcut, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-3 glass-modern rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all group"
                      >
                        <span className="text-gray-900 dark:text-white font-semibold group-hover:text-indigo-700 dark:group-hover:text-purple-300 transition-colors">
                          {shortcut.description}
                        </span>
                        <div className="flex gap-2">
                          {shortcut.keys.map((key, keyIndex) => (
                            <React.Fragment key={keyIndex}>
                              <kbd className="px-3 py-1.5 bg-slate-800 dark:bg-slate-700 text-white rounded-lg text-sm font-mono border border-slate-600 dark:border-slate-500 shadow-lg min-w-[2.5rem] text-center">
                                {key}
                              </kbd>
                              {keyIndex < shortcut.keys.length - 1 && (
                                <span className="text-slate-900 dark:text-gray-400 font-bold">+</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}

            {filteredShortcuts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No shortcuts found</h3>
                <p className="text-slate-800 dark:text-gray-400 font-medium">Try a different search term</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 bg-slate-900/30 dark:bg-slate-900/50 border-t border-purple-500/20">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-slate-900 dark:text-gray-400 font-bold">
                <Keyboard className="w-4 h-4" />
                <span>{filteredShortcuts.length} shortcuts available</span>
              </div>
              <div className="flex items-center gap-2 text-slate-900 dark:text-gray-400 font-bold">
                <span>Press</span>
                <kbd className="px-2 py-1 bg-slate-800 dark:bg-slate-700 text-white rounded text-xs font-mono">
                  Esc
                </kbd>
                <span>to close</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
