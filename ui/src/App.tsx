import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import SyllabusView from './components/SyllabusView'
import PracticalsView from './components/PracticalsView'
import DeveloperInfo from './components/DeveloperInfo'
import Hero from './components/Hero'

export default function App(){
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

function AppContent(){
  return (
    <div className="min-h-screen transition-colors duration-500 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 light:from-gray-50 light:via-purple-50 light:to-blue-50">
      <Navbar />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        <DeveloperInfo />
        <SyllabusView />
        <PracticalsView />
      </main>
      <footer className="bg-slate-900/50 dark:bg-slate-900/50 light:bg-white/50 backdrop-blur-sm border-t border-purple-500/20 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 dark:text-gray-400 light:text-gray-700">
          <p>© 2025 Umesh Patel | Deep Learning (AL 503B) | RGPV Bhopal</p>
          <p className="text-sm mt-2">Developed with ❤️ for AI & ML Club, OCT</p>
        </div>
      </footer>
    </div>
  )
}
