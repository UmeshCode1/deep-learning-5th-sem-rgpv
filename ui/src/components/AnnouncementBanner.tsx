import React, { useState } from 'react'
import { X } from 'lucide-react'

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-700 dark:via-pink-700 dark:to-blue-700 text-white py-3 px-4 shadow-lg animate-slide-in-bottom">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <span className="text-2xl animate-bounce">📘</span>
          <p className="text-sm md:text-base font-semibold">
            <span className="hidden md:inline">🎉 Updated November 2025 — </span>
            <span className="font-bold">New Lab Notes & Practicals Available!</span>
            <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">NEW</span>
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="p-1 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
          aria-label="Close announcement"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
