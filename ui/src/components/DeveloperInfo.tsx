import React from 'react'

export default function DeveloperInfo(){
  return (
    <section id="developer" className="relative perspective-2000">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-3xl blur-3xl animate-pulse"></div>
      
      <div className="relative bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 shadow-2xl transform hover:scale-[1.02] hover:rotate-y-2 transition-all duration-500 card-3d">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
            <span className="text-3xl">👨‍💻</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Developer Details
            </h2>
            <p className="text-gray-400">Creator & Maintainer</p>
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
        <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl border border-purple-500/20">
          <h3 className="text-xl font-bold text-purple-300 mb-3 flex items-center gap-2">
            <span>🎯</span> Project Vision
          </h3>
          <p className="text-gray-300 leading-relaxed">
            This repository provides an <span className="text-purple-400 font-semibold">interactive and well-documented</span> learning environment 
            for Deep Learning as per the RGPV syllabus — combining theory, practicals, and real-world demonstrations through organized notes, 
            Jupyter notebooks, responsive React UI, and reference materials.
          </p>
        </div>

        {/* Contact Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
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
    <div className="flex items-start gap-3 p-4 bg-slate-900/50 dark:bg-slate-900/50 light:bg-gray-100 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 card-3d group">
      <span className="text-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{icon}</span>
      <div>
        <div className="text-sm text-gray-500 dark:text-gray-500 light:text-gray-600 mb-1">{label}</div>
        <div className="text-white dark:text-white light:text-gray-900 font-medium">{value}</div>
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
      className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl text-white font-medium shadow-lg hover:shadow-purple-500/50 transform hover:scale-110 hover:-translate-y-2 hover:rotate-2 transition-all duration-300 group card-3d"
    >
      <span className="group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{icon}</span>
      <span>{label}</span>
    </a>
  )
}
