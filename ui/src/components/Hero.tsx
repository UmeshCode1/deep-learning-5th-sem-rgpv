import React, { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [typedText, setTypedText] = useState('')
  const subtitles = [
    'Neural Networks & Deep Learning',
    'AI & Machine Learning Excellence',
    'Interactive Jupyter Notebooks',
    'RGPV 5th Semester Course',
    'Comprehensive Learning Resources'
  ]
  const [subtitleIndex, setSubtitleIndex] = useState(0)

  // Typing effect
  useEffect(() => {
    const currentSubtitle = subtitles[subtitleIndex]
    let charIndex = 0
    
    const typingInterval = setInterval(() => {
      if (charIndex <= currentSubtitle.length) {
        setTypedText(currentSubtitle.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setSubtitleIndex((prev) => (prev + 1) % subtitles.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [subtitleIndex])

  // Particle animation (optimized)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Setup size with devicePixelRatio for crisp rendering
    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = window.innerWidth
      const height = window.innerHeight
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    setSize()

    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 30 : 50
    const particles: Array<{x: number, y: number, vx: number, vy: number, size: number}> = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      })
    }

    let rafId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(168, 85, 247, ${0.3 + Math.random() * 0.3})`
        ctx.fill()

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.hypot(dx, dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.15 * (1 - dist / 150)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })

      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    // Debounced resize with rAF
    let resizeTicking = false
    const onResize = () => {
      if (!resizeTicking) {
        resizeTicking = true
        requestAnimationFrame(() => {
          setSize()
          resizeTicking = false
        })
      }
    }
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      window.removeEventListener('resize', onResize)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section id="hero" aria-labelledby="hero-title" className="relative overflow-hidden perspective-2000 min-h-screen flex items-center">
      {/* Particle canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none transform-gpu"
        style={{ zIndex: 1, willChange: 'transform' }}
      />

      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 dark:bg-purple-500 light:bg-purple-300 rounded-full mix-blend-multiply dark:mix-blend-multiply light:mix-blend-normal filter blur-3xl opacity-30 dark:opacity-30 light:opacity-40 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 dark:bg-blue-500 light:bg-blue-300 rounded-full mix-blend-multiply dark:mix-blend-multiply light:mix-blend-normal filter blur-3xl opacity-30 dark:opacity-30 light:opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-pink-500 dark:bg-pink-500 light:bg-pink-300 rounded-full mix-blend-multiply dark:mix-blend-multiply light:mix-blend-normal filter blur-3xl opacity-30 dark:opacity-30 light:opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 text-center" style={{ zIndex: 2 }}>
        <div className="animate-fade-in">
          {/* Main title with modern typography */}
          <h1 id="hero-title" className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 mb-6 sm:mb-8 animate-gradient animate-pulse-glow tracking-tighter leading-none drop-shadow-2xl">
            Deep Learning
          </h1>
          <p className="sr-only">Course landing hero for Deep Learning AL 503(B) at RGPV, Bhopal</p>
          
          {/* Course code badge with modern design */}
          <div className="inline-block mb-5 sm:mb-6 animate-slide-in-bottom stagger-1">
            <div className="glass-modern px-6 py-3 sm:px-10 sm:py-5 rounded-2xl gradient-border hover-lift neon-glow shadow-2xl">
              <div className="text-3xl sm:text-5xl font-black text-black dark:text-white mb-1 sm:mb-2 tracking-tight">AL 503(B)</div>
              <div className="text-xs sm:text-sm font-bold text-indigo-700 dark:text-purple-300 uppercase tracking-widest">Course Code</div>
            </div>
          </div>

          {/* Dynamic Typing Subtitle (aria-live for SR) */}
          <div className="mb-6 sm:mb-8 animate-slide-in-bottom stagger-2">
            <div className="glass-modern px-4 py-3 sm:px-8 sm:py-4 rounded-2xl border border-purple-500/30 dark:border-purple-400/30 inline-block shadow-xl" role="status" aria-live="polite" aria-atomic="true">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 rounded-full animate-pulse" aria-hidden="true"></div>
                <p className="text-base sm:text-xl md:text-2xl font-bold text-black dark:text-white min-h-[24px] sm:min-h-[32px]">
                  {typedText}
                  <span className="animate-pulse" aria-hidden="true">|</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Course meta chips (semantic list) */}
          <ul role="list" aria-label="Course metadata" className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-base sm:text-xl md:text-2xl text-indigo-700 dark:text-purple-300 mb-8 sm:mb-12 animate-slide-in-bottom stagger-3 font-semibold">
            <li>
              <span className="inline-block px-4 py-2 sm:px-6 sm:py-2.5 glass-modern rounded-full border border-purple-500/30 dark:border-purple-400/30 font-semibold micro-interact shadow-lg">
                🎓 RGPV Bhopal · 5th Semester
              </span>
            </li>
          </ul>
          
          {/* Author card */}
          <div className="inline-block mb-8 sm:mb-12 animate-slide-in-bottom stagger-3">
            <div className="glass-modern px-6 py-4 sm:px-12 sm:py-6 rounded-2xl border border-purple-500/30 dark:border-purple-400/30 modern-card neon-glow group cursor-pointer shadow-2xl">
              <div className="flex items-center gap-3 sm:gap-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl group-hover:rotate-12 transition-transform duration-500 shadow-xl">
                  👨‍💻
                </div>
                <div className="text-left">
                  <p className="text-black dark:text-white font-black text-xl sm:text-3xl group-hover:text-indigo-700 dark:group-hover:text-purple-300 transition-colors tracking-tight">Umesh Patel</p>
                  <p className="text-indigo-700 dark:text-purple-300 text-sm sm:text-base font-bold">AI & Machine Learning Enthusiast</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote with modern card design */}
          <div className="max-w-3xl mx-auto animate-slide-in-bottom stagger-4 px-2 sm:px-0">
            <div className="glass-modern p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-purple-500/30 dark:border-purple-400/30 modern-card shadow-2xl">
              <div className="flex items-start gap-3 sm:gap-5">
                <span className="text-3xl sm:text-5xl float-smooth">💡</span>
                <p className="text-slate-800 dark:text-gray-300 text-sm sm:text-xl italic leading-relaxed text-left font-semibold">
                  "This repository is part of the official coursework for Deep Learning (AL503B) 
                  under RGPV, Bhopal, following the AICTE Flexible Curriculum"
                </p>
              </div>
            </div>
          </div>

          {/* Quick stats with semantic list */}
          <ul role="list" aria-label="Course stats" className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-16 animate-slide-in-bottom stagger-5">
            <li className="list-none"><StatBadge icon="📚" value="5" label="Units" /></li>
            <li className="list-none"><StatBadge icon="💻" value="5" label="Practicals" /></li>
            <li className="list-none"><StatBadge icon="📝" value="5" label="Assignments" /></li>
          </ul>

          {/* Primary CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 animate-slide-in-bottom stagger-5">
            <a href="#syllabus" className="btn btn-primary btn-pill shadow-3d hover-depth">
              <span className="text-lg" aria-hidden="true">📚</span>
              <span className="font-bold">Open Syllabus</span>
            </a>
            <a href="#practicals" className="btn btn-secondary btn-pill hover-depth">
              <span className="text-lg" aria-hidden="true">💻</span>
              <span className="font-bold">View Practicals</span>
            </a>
            <a href="#assignments" className="btn btn-ghost btn-pill hover-depth">
              <span className="text-lg" aria-hidden="true">📝</span>
              <span className="font-bold">See Assignments</span>
            </a>
          </div>

          {/* Enhanced scroll indicator with animation */}
          <div className="mt-20 animate-bounce">
            <a href="#developer" className="inline-flex flex-col items-center gap-2 text-indigo-700 dark:text-purple-300 group cursor-pointer">
              <span className="text-sm font-bold uppercase tracking-wider group-hover:text-indigo-900 dark:group-hover:text-purple-100 transition-colors">Explore More</span>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <svg className="w-8 h-8 relative z-10 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <div className="flex gap-1 mt-2">
                <div className="w-1.5 h-1.5 bg-indigo-600 dark:bg-purple-400 rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-indigo-600 dark:bg-purple-400 rounded-full animate-pulse animation-delay-200"></div>
                <div className="w-1.5 h-1.5 bg-indigo-600 dark:bg-purple-400 rounded-full animate-pulse animation-delay-400"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatBadge({icon, value, label}: {icon: string, value: string, label: string}) {
  return (
    <div className="glass-modern card-glass card-hover p-6 rounded-2xl border border-purple-500/30 dark:border-purple-400/30 modern-card neon-glow group" aria-label={`${value} ${label}`}>
      <div className="text-5xl mb-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 float-smooth" aria-hidden="true">{icon}</div>
      <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mb-2">{value}</div>
      <div className="text-sm font-bold text-indigo-700 dark:text-purple-300 uppercase tracking-widest">{label}</div>
    </div>
  )
}
