import React from 'react'

export default function DeveloperInfo(){
  return (
    <section id="developer" className="relative perspective-2000">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-3xl blur-3xl animate-pulse"></div>
      
      <div className="relative glass-dark backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 dark:border-purple-400/20 shadow-2xl transform hover:scale-[1.02] transition-all duration-500 card-3d">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-sky-600 dark:from-purple-500 dark:to-blue-500 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
            <span className="text-3xl">👨‍💻</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-purple-400 dark:to-blue-400">
              Developer Details
            </h2>
            <p className="text-slate-800 dark:text-gray-400 font-bold">Creator & Maintainer</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left column - Personal Info */}
          <div className="space-y-4">
            <InfoCard icon="👤" label="Name" value="Umesh Patel" />
            <InfoCard icon="🎓" label="College" value="Oriental College of Technology, Bhopal" />
            <InfoCard icon="🏛️" label="University" value="Rajiv Gandhi Proudyogiki Vishwavidyalaya" />
            <InfoCard icon="💼" label="Branch" value="CSE (AI & Machine Learning)" />
          </div>

          {/* Right column - Course Info */}
          <div className="space-y-4">
            <InfoCard icon="📚" label="Semester" value="5th Semester" />
            <InfoCard icon="🔢" label="Course Code" value="AL 503(B)" />
            <InfoCard icon="🧠" label="Subject" value="Deep Learning" />
            <InfoCard icon="🎯" label="Focus" value="Neural Networks & AI" />
          </div>
        </div>

        {/* Project Vision */}
        <div className="mt-8 p-6 bg-gradient-to-r from-indigo-100/70 to-sky-100/70 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl border border-indigo-500/30 dark:border-purple-400/20 shadow-md">
          <h3 className="text-xl font-bold text-indigo-700 dark:text-purple-300 mb-3 flex items-center gap-2">
            <span>🎯</span> Project Vision
          </h3>
          <p className="text-slate-800 dark:text-gray-300 leading-relaxed font-medium">
            This repository provides an <span className="text-indigo-700 dark:text-purple-400 font-bold">interactive and well-documented</span> learning environment 
            for Deep Learning as per the RGPV syllabus — combining theory, practicals, and real-world demonstrations through organized notes, 
            Jupyter notebooks, responsive React UI, and reference materials.
          </p>
        </div>

        {/* Contact Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-indigo-700 dark:text-purple-300 mb-4 flex items-center gap-2">
            <span>📬</span> Connect With Me
          </h3>
          <div className="flex flex-wrap gap-3">
            <ContactLink href="mailto:umesh.code1@gmail.com" icon="📧" label="Email" />
            <ContactLink href="https://chat.whatsapp.com/FjcQN6dyIotISFbxoizoom" icon="💬" label="AnantreX Community" />
            <ContactLink href="https://www.linkedin.com/in/umesh-patel-5647b42a4" icon="💼" label="LinkedIn" />
            <ContactLink href="https://www.instagram.com/nycto_phile.i" icon="📸" label="Instagram" />
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({icon, label, value}: {icon: string, label: string, value: string}){
  return (
    <div className="flex items-start gap-3 p-4 sm:p-5 bg-gradient-to-br from-white to-indigo-50/50 dark:from-slate-900/80 dark:to-slate-800/50 rounded-xl border-2 border-indigo-500/40 dark:border-purple-500/30 hover:border-indigo-600/60 dark:hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/30 dark:hover:shadow-purple-500/25 card-3d group">
      <span className="text-2xl sm:text-3xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{icon}</span>
      <div>
        <div className="text-sm text-indigo-700 dark:text-gray-400 mb-1 font-bold uppercase tracking-wide">{label}</div>
        <div className="text-black dark:text-white font-bold text-base">{value}</div>
      </div>
    </div>
  )
}

function ContactLink({href, icon, label}: {href: string, icon: string, label: string}){
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-purple-600 dark:to-blue-600 hover:from-indigo-500 hover:to-sky-500 dark:hover:from-purple-500 dark:hover:to-blue-500 rounded-xl text-white font-medium shadow-lg shadow-indigo-500/30 dark:shadow-purple-500/30 hover:shadow-indigo-500/50 dark:hover:shadow-purple-500/50 transform hover:scale-110 hover:-translate-y-2 hover:rotate-2 transition-all duration-300 group card-3d border border-indigo-400/30 dark:border-purple-400/30"
    >
      <span className="group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{icon}</span>
      <span>{label}</span>
    </a>
  )
}
