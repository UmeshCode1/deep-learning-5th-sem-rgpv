import React from 'react'

const units = [
  {id:1, title:'Introduction, MLPs, PCA', icon:'🎯', color:'from-purple-600 to-pink-600'},
  {id:2, title:'Optimization & Autoencoders', icon:'⚡', color:'from-blue-600 to-cyan-600'},
  {id:3, title:'CNNs & Architectures', icon:'🔍', color:'from-green-600 to-teal-600'},
  {id:4, title:'RNNs, LSTM, Attention', icon:'🔄', color:'from-orange-600 to-red-600'},
  {id:5, title:'Generative Models & GANs', icon:'✨', color:'from-violet-600 to-purple-600'}
]

export default function SyllabusView(){
  return (
    <section id="syllabus" className="scroll-mt-20 perspective-2000">
      {/* Enhanced Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl animate-float">
            <span className="text-4xl">📚</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 animate-gradient tracking-tighter">
            Course Syllabus
          </h2>
        </div>
        <p className="text-xl text-slate-900 dark:text-gray-400 font-bold max-w-2xl mx-auto">
          Comprehensive breakdown of all 5 units covering Deep Learning fundamentals to advanced topics
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {units.map((u, idx) => (
          <div 
            key={u.id} 
            className="group relative perspective-1000 scroll-fade-in scroll-scale-up"
            style={{animationDelay: `${idx * 100}ms`}}
          >
            {/* 3D Card Effect */}
            <div className="relative glass-dark backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 dark:border-purple-400/30 hover:border-purple-500/60 dark:hover:border-purple-400/60 shadow-2xl hover-depth transition-all duration-500 card-3d">
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${u.color} opacity-0 group-hover:opacity-25 dark:group-hover:opacity-35 rounded-3xl blur-2xl transition-opacity duration-500 -z-10`}></div>
              
              {/* Card content */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${u.color} rounded-2xl flex items-center justify-center text-4xl shadow-3d-purple transform group-hover:rotate-12 group-hover:scale-125 transition-all duration-500`}>
                    {u.icon}
                  </div>
                  <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${u.color}`}>
                    Unit {u.id}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-700 dark:group-hover:text-purple-300 transition-colors">
                  {u.title}
                </h3>
                
                <a 
                  href={`../syllabus/deep_learning_syllabus.md`}
                  className={`inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r ${u.color} rounded-xl text-white text-sm font-medium shadow-3d-purple hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 hover:rotate-2 transition-all duration-300 card-3d group/btn`}
                >
                  <span>View Details</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

