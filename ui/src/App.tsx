import React, { useState, useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import SyllabusView from './components/SyllabusView'
import PracticalsView from './components/PracticalsView'
import DeveloperInfo from './components/DeveloperInfo'
import Hero from './components/Hero'
import AssignmentsView from './components/AssignmentsView'
import AnnouncementBanner from './components/AnnouncementBanner'
import ScrollToTop from './components/ScrollToTop'
import LoadingScreen from './components/LoadingScreen'
import { initScrollAnimations } from './utils/scrollAnimations'

export default function App(){
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

function AppContent(){
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Initialize scroll animations after loading
      setTimeout(() => {
        initScrollAnimations()
      }, 100)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className="min-h-screen transition-colors duration-500 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
        <AnnouncementBanner />
        <Navbar />
        <Hero />
      <main className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        <DeveloperInfo />
        <SyllabusView />
        <PracticalsView />
        <AssignmentsView />
      </main>
      
      {/* Modern Footer */}
      <footer className="relative mt-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 dark:from-purple-900 dark:via-pink-900 dark:to-blue-900 opacity-90"></div>
        
        {/* Animated Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          {/* Footer Content Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* About Section */}
            <div className="text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-2xl">
                  🧠
                </div>
                <h3 className="text-2xl font-black">Deep Learning Hub</h3>
              </div>
              <p className="text-white/90 leading-relaxed font-medium">
                A comprehensive resource for Deep Learning (AL 503B) course under RGPV University.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="text-white">
              <h4 className="text-lg font-black mb-4 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#syllabus" className="text-white/90 hover:text-white font-semibold transition-colors hover:translate-x-2 inline-block">📚 Syllabus</a></li>
                <li><a href="#practicals" className="text-white/90 hover:text-white font-semibold transition-colors hover:translate-x-2 inline-block">💻 Practicals</a></li>
                <li><a href="#assignments" className="text-white/90 hover:text-white font-semibold transition-colors hover:translate-x-2 inline-block">📝 Assignments</a></li>
                <li><a href="#developer" className="text-white/90 hover:text-white font-semibold transition-colors hover:translate-x-2 inline-block">👨‍💻 Developer</a></li>
              </ul>
            </div>
            
            {/* Contact & Social */}
            <div className="text-white">
              <h4 className="text-lg font-black mb-4 uppercase tracking-wider">Connect</h4>
              <div className="space-y-3">
                <a href="https://github.com/UmeshCode1/deep-learning-5th-sem-rgpv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/90 hover:text-white font-semibold transition-all hover:translate-x-2">
                  <span className="text-2xl">🔗</span>
                  <span>GitHub Repository</span>
                </a>
                <a href="https://www.linkedin.com/in/umesh-patel-5647b42a4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/90 hover:text-white font-semibold transition-all hover:translate-x-2">
                  <span className="text-2xl">💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href="mailto:umesh.code1@gmail.com" className="flex items-center gap-3 text-white/90 hover:text-white font-semibold transition-all hover:translate-x-2">
                  <span className="text-2xl">📧</span>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white">
              <p className="font-bold text-center md:text-left">
                © 2025 Umesh Patel | Deep Learning (AL 503B) | RGPV Bhopal
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xl">❤️</span>
                <p className="font-semibold">Developed for AI & ML Club, OCT</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
    </>
  )
}
