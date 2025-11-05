import React, { useEffect, useRef } from 'react'

export default function Hero(){
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{x: number, y: number, vx: number, vy: number, size: number}> = []
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      })
    }

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
        particles.slice(i + 1).forEach(p2 => {
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.15 * (1 - dist / 150)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="relative overflow-hidden perspective-2000 min-h-screen flex items-center">
      {/* Particle canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 dark:bg-purple-500 light:bg-purple-300 rounded-full mix-blend-multiply dark:mix-blend-multiply light:mix-blend-normal filter blur-3xl opacity-30 dark:opacity-30 light:opacity-40 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 dark:bg-blue-500 light:bg-blue-300 rounded-full mix-blend-multiply dark:mix-blend-multiply light:mix-blend-normal filter blur-3xl opacity-30 dark:opacity-30 light:opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-pink-500 dark:bg-pink-500 light:bg-pink-300 rounded-full mix-blend-multiply dark:mix-blend-multiply light:mix-blend-normal filter blur-3xl opacity-30 dark:opacity-30 light:opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 py-24 text-center" style={{ zIndex: 2 }}>
        <div className="animate-fade-in">
          {/* Main title with modern typography */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 mb-8 animate-gradient animate-pulse-glow tracking-tighter leading-none drop-shadow-2xl">
            Deep Learning
          </h1>
          
          {/* Course code badge with modern design */}
          <div className="inline-block mb-6 animate-slide-in-bottom stagger-1">
            <div className="glass-modern px-10 py-5 rounded-2xl gradient-border hover-lift neon-glow shadow-2xl">
              <div className="text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">AL 503(B)</div>
              <div className="text-sm font-bold text-purple-600 dark:text-purple-300 uppercase tracking-widest">Course Code</div>
            </div>
          </div>

          {/* University info with enhanced styling */}
          <div className="text-2xl text-purple-700 dark:text-purple-300 mb-12 animate-slide-in-bottom stagger-2">
            <span className="inline-block px-8 py-3 glass-modern rounded-full border border-purple-500/30 dark:border-purple-400/30 font-semibold micro-interact shadow-lg">
              🎓 RGPV Bhopal | 5th Semester
            </span>
          </div>
          
          {/* Developer card with modern design */}
          <div className="inline-block mb-12 animate-slide-in-bottom stagger-3">
            <div className="glass-modern px-12 py-6 rounded-2xl border border-purple-500/30 dark:border-purple-400/30 modern-card neon-glow group cursor-pointer shadow-2xl">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 rounded-2xl flex items-center justify-center text-4xl group-hover:rotate-12 transition-transform duration-500 shadow-xl">
                  👨‍💻
                </div>
                <div className="text-left">
                  <p className="text-slate-900 dark:text-white font-black text-3xl group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors tracking-tight">Umesh Patel</p>
                  <p className="text-purple-600 dark:text-purple-300 text-base font-semibold">AI & Machine Learning Enthusiast</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote with modern card design */}
          <div className="max-w-3xl mx-auto animate-slide-in-bottom stagger-4">
            <div className="glass-modern p-8 rounded-3xl border border-purple-500/30 dark:border-purple-400/30 modern-card shadow-2xl">
              <div className="flex items-start gap-5">
                <span className="text-5xl float-smooth">💡</span>
                <p className="text-slate-700 dark:text-gray-300 text-xl italic leading-relaxed text-left font-medium">
                  "This repository is part of the official coursework for Deep Learning (AL503B) 
                  under RGPV, Bhopal, following the AICTE Flexible Curriculum"
                </p>
              </div>
            </div>
          </div>

          {/* Quick stats with modern cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-16 animate-slide-in-bottom stagger-5">
            <StatBadge icon="📚" value="5" label="Units" />
            <StatBadge icon="💻" value="5" label="Practicals" />
            <StatBadge icon="📝" value="5" label="Assignments" />
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 animate-bounce">
            <div className="inline-flex flex-col items-center gap-2 text-purple-600 dark:text-purple-300">
              <span className="text-sm font-medium">Explore</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatBadge({icon, value, label}: {icon: string, value: string, label: string}) {
  return (
    <div className="glass-modern p-6 rounded-2xl border border-purple-500/30 dark:border-purple-400/30 modern-card neon-glow group shadow-xl">
      <div className="text-5xl mb-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 float-smooth">{icon}</div>
      <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mb-2">{value}</div>
      <div className="text-sm font-bold text-purple-600 dark:text-purple-300 uppercase tracking-widest">{label}</div>
    </div>
  )
}
