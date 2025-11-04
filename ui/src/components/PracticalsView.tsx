import React from 'react'

const practicals = [
  {id:'P1', title:'MLP Implementation', desc:'Build Neural Networks from scratch', file:'../practicals/P1_MLP_Implementation.ipynb', icon:'🧠', color:'from-purple-600 to-pink-600'},
  {id:'P2', title:'Autoencoder', desc:'Dimensionality reduction & reconstruction', file:'../practicals/P2_Autoencoder.ipynb', icon:'🔐', color:'from-blue-600 to-cyan-600'},
  {id:'P3', title:'CNN CIFAR-10', desc:'Image classification with CNNs', file:'../practicals/P3_CNN_Image_Classification.ipynb', icon:'🖼️', color:'from-green-600 to-teal-600'},
  {id:'P4', title:'RNN Text Generation', desc:'Sequence modeling with LSTM', file:'../practicals/P4_RNN_Text_Generation.ipynb', icon:'📝', color:'from-orange-600 to-red-600'},
  {id:'P5', title:'GAN Image Generation', desc:'Generate synthetic images', file:'../practicals/P5_GAN_Image_Generation.ipynb', icon:'✨', color:'from-violet-600 to-purple-600'}
]

export default function PracticalsView(){
  return (
    <section id="practicals" className="scroll-mt-20 perspective-2000">
      <div className="flex items-center gap-3 mb-8 animate-float">
        <span className="text-5xl animate-rotate-3d">💻</span>
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 animate-gradient">
          Practical Notebooks
        </h2>
      </div>
      
      <div className="space-y-6">
        {practicals.map((p, idx) => (
          <div 
            key={p.id} 
            className="group relative perspective-1000"
            style={{animationDelay: `${idx * 100}ms`}}
          >
            {/* 3D Card with hover effect */}
            <div className="relative bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 shadow-3d hover:shadow-3d-purple transform hover:-translate-y-4 hover:scale-[1.02] transition-all duration-500 card-3d">
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${p.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-2xl transition-opacity duration-500`}></div>
              
              {/* Card content */}
              <div className="relative z-10 flex items-center justify-between gap-6">
                <div className="flex items-start gap-6 flex-1">
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${p.color} rounded-2xl flex items-center justify-center text-4xl shadow-3d-purple transform group-hover:rotate-12 group-hover:scale-125 transition-all duration-500`}>
                    {p.icon}
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-4 py-2 bg-gradient-to-r ${p.color} rounded-xl text-white text-base font-bold shadow-lg transform group-hover:scale-110 transition-transform`}>
                        {p.id}
                      </span>
                      <h3 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 group-hover:text-purple-300 dark:group-hover:text-purple-300 light:group-hover:text-purple-600 transition-colors">
                        {p.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-base group-hover:text-gray-300 dark:group-hover:text-gray-300 light:group-hover:text-gray-700 transition-colors">
                      {p.desc}
                    </p>
                  </div>
                </div>
                
                {/* Action button */}
                <a 
                  href={p.file}
                  className={`flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${p.color} rounded-xl text-white font-semibold shadow-3d-purple hover:shadow-2xl transform hover:scale-110 hover:-translate-y-2 hover:rotate-2 transition-all duration-300 card-3d group/btn`}
                >
                  <span className="text-lg">Open</span>
                  <span className="text-2xl group-hover/btn:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard icon="📊" value="5" label="Jupyter Notebooks" color="from-purple-600 to-pink-600" />
        <StatCard icon="🎯" value="100%" label="Syllabus Coverage" color="from-blue-600 to-cyan-600" />
        <StatCard icon="⚡" value="Ready" label="To Execute" color="from-green-600 to-teal-600" />
      </div>
    </section>
  )
}

function StatCard({icon, value, label, color}: {icon: string, value: string, label: string, color: string}){
  return (
    <div className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 text-center transform hover:scale-110 hover:-translate-y-4 transition-all duration-500 hover:shadow-3d-purple card-3d group">
      <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">{icon}</div>
      <div className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${color} mb-3`}>
        {value}
      </div>
      <div className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-lg">{label}</div>
    </div>
  )
}

