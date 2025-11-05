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
import CodePreview from './components/CodePreview'
import LearningTimeline from './components/LearningTimeline'
import KeyboardShortcuts from './components/KeyboardShortcuts'
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-16 sm:space-y-20 lg:space-y-24">
        <DeveloperInfo />
        <SyllabusView />
        <PracticalsView />
        <AssignmentsView />
        <CodePreview />
        <LearningTimeline />
      </main>
      
      {/* Floating Components */}
      <KeyboardShortcuts />
      
      {/* Enhanced Modern Footer */}
      <footer className="relative mt-16 sm:mt-24 overflow-hidden">
        {/* Enhanced Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-purple-900 dark:via-pink-900 dark:to-blue-900 opacity-95"></div>
        
        {/* Animated Blobs with better positioning */}
        <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-500/30 dark:bg-purple-500/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-pink-500/30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
            {/* About Section - Enhanced */}
            <div className="text-white sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-xl transform hover:rotate-12 hover:scale-110 transition-all duration-300">
                  🧠
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight">Deep Learning Hub</h3>
              </div>
              <p className="text-white/95 leading-relaxed font-medium text-sm sm:text-base mb-4">
                A comprehensive, interactive resource for Deep Learning (AL 503B) course under RGPV University, Bhopal.
              </p>
              <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-semibold">
                <span className="text-lg">🎓</span>
                <span>AI & ML Engineering</span>
              </div>
            </div>
            
            {/* Quick Links - Enhanced */}
            <div className="text-white">
              <h4 className="text-base sm:text-lg font-black mb-3 sm:mb-4 uppercase tracking-wider flex items-center gap-2">
                <span className="text-xl">⚡</span> Quick Links
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                <li><a href="#syllabus" className="flex items-center gap-2 text-white/90 hover:text-white font-semibold text-sm sm:text-base transition-all hover:translate-x-2 hover:gap-3 group"><span className="group-hover:scale-125 transition-transform">📚</span> Course Syllabus</a></li>
                <li><a href="#practicals" className="flex items-center gap-2 text-white/90 hover:text-white font-semibold text-sm sm:text-base transition-all hover:translate-x-2 hover:gap-3 group"><span className="group-hover:scale-125 transition-transform">💻</span> Practicals</a></li>
                <li><a href="#assignments" className="flex items-center gap-2 text-white/90 hover:text-white font-semibold text-sm sm:text-base transition-all hover:translate-x-2 hover:gap-3 group"><span className="group-hover:scale-125 transition-transform">📝</span> Assignments</a></li>
                <li><a href="#code-examples" className="flex items-center gap-2 text-white/90 hover:text-white font-semibold text-sm sm:text-base transition-all hover:translate-x-2 hover:gap-3 group"><span className="group-hover:scale-125 transition-transform">💡</span> Code Examples</a></li>
                <li><a href="#developer" className="flex items-center gap-2 text-white/90 hover:text-white font-semibold text-sm sm:text-base transition-all hover:translate-x-2 hover:gap-3 group"><span className="group-hover:scale-125 transition-transform">�‍💻</span> About Developer</a></li>
              </ul>
            </div>
            
            {/* Resources - New Section */}
            <div className="text-white">
              <h4 className="text-base sm:text-lg font-black mb-3 sm:mb-4 uppercase tracking-wider flex items-center gap-2">
                <span className="text-xl">📖</span> Resources
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                <li><a href="../syllabus/deep_learning_syllabus.md" className="flex items-center gap-2 text-white/90 hover:text-white font-semibold text-sm sm:text-base transition-all hover:translate-x-2 hover:gap-3 group"><span className="group-hover:scale-125 transition-transform">📄</span> Full Syllabus PDF</a></li>
                <li><a href="#learning-timeline" className="flex items-center gap-2 text-white/90 hover:text-white font-semibold text-sm sm:text-base transition-all hover:translate-x-2 hover:gap-3 group"><span className="group-hover:scale-125 transition-transform">🗓️</span> Learning Path</a></li>
                <li><a href="https://github.com/UmeshCode1/deep-learning-5th-sem-rgpv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/90 hover:text-white font-semibold text-sm sm:text-base transition-all hover:translate-x-2 hover:gap-3 group"><span className="group-hover:scale-125 transition-transform">📦</span> Source Code</a></li>
                <li><a href="https://github.com/UmeshCode1/deep-learning-5th-sem-rgpv/issues" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/90 hover:text-white font-semibold text-sm sm:text-base transition-all hover:translate-x-2 hover:gap-3 group"><span className="group-hover:scale-125 transition-transform">🐛</span> Report Issues</a></li>
              </ul>
            </div>
            
            {/* Contact & Social - Enhanced */}
            <div className="text-white">
              <h4 className="text-base sm:text-lg font-black mb-3 sm:mb-4 uppercase tracking-wider flex items-center gap-2">
                <span className="text-xl">🌐</span> Connect
              </h4>
              <div className="space-y-2.5 sm:space-y-3">
                <a href="https://github.com/UmeshCode1/deep-learning-5th-sem-rgpv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 text-white/90 hover:text-white font-semibold text-sm sm:text-base transition-all hover:translate-x-2 hover:gap-3 sm:hover:gap-4 group bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg backdrop-blur-sm">
                  <span className="text-xl sm:text-2xl group-hover:scale-125 transition-transform">🔗</span>
                  <span>GitHub Repo</span>
                </a>
                <a href="https://www.linkedin.com/in/umesh-patel-5647b42a4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 text-white/90 hover:text-white font-semibold text-sm sm:text-base transition-all hover:translate-x-2 hover:gap-3 sm:hover:gap-4 group bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg backdrop-blur-sm">
                  <span className="text-xl sm:text-2xl group-hover:scale-125 transition-transform">💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href="mailto:umesh.code1@gmail.com" className="flex items-center gap-2 sm:gap-3 text-white/90 hover:text-white font-semibold text-sm sm:text-base transition-all hover:translate-x-2 hover:gap-3 sm:hover:gap-4 group bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg backdrop-blur-sm">
                  <span className="text-xl sm:text-2xl group-hover:scale-125 transition-transform">📧</span>
                  <span>Email Me</span>
                </a>
                <a href="https://chat.whatsapp.com/FjcQN6dyIotISFbxoizoom" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 text-white/90 hover:text-white font-semibold text-sm sm:text-base transition-all hover:translate-x-2 hover:gap-3 sm:hover:gap-4 group bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg backdrop-blur-sm">
                  <span className="text-xl sm:text-2xl group-hover:scale-125 transition-transform">💬</span>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Enhanced Bottom Bar */}
          <div className="border-t border-white/30 pt-6 sm:pt-8 mt-2">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-white">
              <div className="text-center sm:text-left">
                <p className="font-bold text-sm sm:text-base mb-1">
                  © 2025 <span className="text-white font-black">Umesh Patel</span> | Deep Learning (AL 503B)
                </p>
                <p className="text-xs sm:text-sm text-white/80 font-medium">
                  Oriental College of Technology • RGPV Bhopal
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2 bg-white/15 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-lg sm:text-xl animate-pulse">❤️</span>
                  <p className="font-semibold text-xs sm:text-sm">Made with passion</p>
                </div>
                <div className="flex items-center gap-2 bg-white/15 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-lg sm:text-xl">🚀</span>
                  <p className="font-semibold text-xs sm:text-sm">AI & ML Club</p>
                </div>
              </div>
            </div>
            
            {/* Tech Stack Badge */}
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/20 flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/80 font-semibold">
              <span className="flex items-center gap-1 bg-white/10 px-2 sm:px-3 py-1 rounded-full">⚛️ React</span>
              <span className="flex items-center gap-1 bg-white/10 px-2 sm:px-3 py-1 rounded-full">🎨 Tailwind CSS</span>
              <span className="flex items-center gap-1 bg-white/10 px-2 sm:px-3 py-1 rounded-full">📘 TypeScript</span>
              <span className="flex items-center gap-1 bg-white/10 px-2 sm:px-3 py-1 rounded-full">⚡ Vite</span>
              <span className="flex items-center gap-1 bg-white/10 px-2 sm:px-3 py-1 rounded-full">🧠 Deep Learning</span>
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
