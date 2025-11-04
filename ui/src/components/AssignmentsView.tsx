import React from 'react'

const units = [
  {id:1, title:'Foundations, MLPs, PCA', icon:'📝', color:'from-purple-600 to-pink-600'},
  {id:2, title:'Optimization & Autoencoders', icon:'⚙️', color:'from-blue-600 to-cyan-600'},
  {id:3, title:'CNN Architectures', icon:'🧩', color:'from-green-600 to-teal-600'},
  {id:4, title:'RNNs, LSTM, Attention', icon:'🔗', color:'from-orange-600 to-red-600'},
  {id:5, title:'Generative Models & GANs', icon:'✨', color:'from-violet-600 to-purple-600'},
]

export default function AssignmentsView(){
  return (
    <section id="assignments" className="scroll-mt-20 perspective-2000">
      <div className="flex items-center gap-3 mb-8 animate-float">
        <span className="text-5xl animate-rotate-3d">📄</span>
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 animate-gradient">
          Assignments
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {units.map((u, idx) => (
          <div key={u.id} className="group relative perspective-1000" style={{animationDelay: `${idx*100}ms`}}>
            <div className="relative bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 shadow-3d hover:shadow-3d-purple transform hover:-translate-y-4 hover:scale-110 transition-all duration-500 card-3d hover:rotate-y-5">
              <div className={`absolute inset-0 bg-gradient-to-r ${u.color} opacity-0 group-hover:opacity-30 rounded-2xl blur-2xl transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${u.color} rounded-2xl flex items-center justify-center text-4xl shadow-3d-purple transform group-hover:rotate-12 group-hover:scale-125 transition-all duration-500`}>
                    {u.icon}
                  </div>
                  <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${u.color}`}>
                    Unit {u.id}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white dark:text-white light:text-gray-900 mb-4">{u.title}</h3>
                <div className="flex gap-3">
                  <a href={`../assignments/unit${u.id}.md`} className={`inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r ${u.color} rounded-xl text-white text-sm font-medium shadow-3d-purple hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 hover:rotate-2 transition-all duration-300`}>
                    <span>Open</span><span>→</span>
                  </a>
                  <a href={`../assignments/README.md`} className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900/50 rounded-xl text-white/80 hover:text-white border border-purple-500/20 hover:border-purple-500/40 transition-all">Guide</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
