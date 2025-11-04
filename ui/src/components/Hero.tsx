import React from 'react'

export default function Hero(){
  return (
    <div className="relative overflow-hidden perspective-2000">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-multiply light:mix-blend-normal filter blur-xl opacity-20 dark:opacity-20 light:opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-multiply light:mix-blend-normal filter blur-xl opacity-20 dark:opacity-20 light:opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply dark:mix-blend-multiply light:mix-blend-normal filter blur-xl opacity-20 dark:opacity-20 light:opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="transform hover:scale-105 transition-transform duration-500 card-3d animate-float-slow">
          <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-6 animate-gradient drop-shadow-2xl">
            Deep Learning
          </h1>
          <div className="text-4xl font-semibold text-gray-200 dark:text-gray-200 light:text-gray-800 mb-4 animate-float">
            AL 503(B)
          </div>
          <div className="text-2xl text-purple-300 dark:text-purple-300 light:text-purple-600 mb-8">
            RGPV Bhopal | 5th Semester
          </div>
          
          <div className="inline-block px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-3d-purple transform hover:scale-110 hover:-translate-y-2 hover:rotate-2 transition-all duration-500 hover:shadow-purple-500/60 card-3d group">
            <p className="text-white font-bold text-xl group-hover:scale-110 transition-transform">Developed by: Umesh Patel</p>
            <p className="text-purple-200 text-base mt-1">AI & Machine Learning Enthusiast</p>
          </div>

          <div className="mt-12 text-gray-300 dark:text-gray-300 light:text-gray-700 max-w-2xl mx-auto">
            <p className="text-base italic border-l-4 border-purple-500 pl-6 py-3 bg-slate-800/30 dark:bg-slate-800/30 light:bg-white/50 rounded-r-xl backdrop-blur-sm shadow-lg">
              "This repository is part of the official coursework for Deep Learning (AL503B) 
              under RGPV, Bhopal, following the AICTE Flexible Curriculum"
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
