import React, { useState } from 'react'

const units = [
  {id:1, title:'Foundations, MLPs, PCA', icon:'📝', color:'from-purple-600 to-pink-600', difficulty:'Beginner', topics:['basics', 'neural-networks', 'pca']},
  {id:2, title:'Optimization & Autoencoders', icon:'⚙️', color:'from-blue-600 to-cyan-600', difficulty:'Intermediate', topics:['optimization', 'unsupervised']},
  {id:3, title:'CNN Architectures', icon:'🧩', color:'from-green-600 to-teal-600', difficulty:'Intermediate', topics:['cnn', 'architectures']},
  {id:4, title:'RNNs, LSTM, Attention', icon:'🔗', color:'from-orange-600 to-red-600', difficulty:'Advanced', topics:['rnn', 'lstm', 'attention']},
  {id:5, title:'Generative Models & GANs', icon:'✨', color:'from-violet-600 to-purple-600', difficulty:'Advanced', topics:['gan', 'generative']},
]

export default function AssignmentsView(){
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)

  const filteredUnits = selectedDifficulty 
    ? units.filter(u => u.difficulty === selectedDifficulty)
    : units

  const difficulties = ['Beginner', 'Intermediate', 'Advanced']

  return (
    <section id="assignments" className="scroll-mt-20 perspective-2000">
      <div className="flex items-center gap-3 mb-8 animate-float">
        <span className="text-5xl animate-rotate-3d">📄</span>
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 animate-gradient">
          Assignments
        </h2>
      </div>

      {/* Difficulty Filter */}
      <div className="glass-dark p-6 rounded-2xl border border-purple-500/20 mb-8 animate-slide-in-bottom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400">Filter by difficulty:</span>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedDifficulty(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  !selectedDifficulty
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-slate-900/50 text-gray-400 hover:text-white border border-purple-500/20'
                }`}
              >
                All
              </button>
              {difficulties.map(diff => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff === selectedDifficulty ? null : diff)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedDifficulty === diff
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'bg-slate-900/50 text-gray-400 hover:text-white border border-purple-500/20'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          <div className="text-sm text-gray-400">
            {filteredUnits.length === units.length
              ? `Showing all ${units.length} assignments`
              : `Found ${filteredUnits.length} ${selectedDifficulty} assignment${filteredUnits.length > 1 ? 's' : ''}`
            }
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredUnits.map((u, idx) => (
          <div key={u.id} className="group relative perspective-1000 animate-slide-in-bottom" style={{animationDelay: `${idx*100}ms`}}>
            <div className="relative glass-dark backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 shadow-3d hover:shadow-3d-purple transform hover:-translate-y-4 hover:scale-105 transition-all duration-500 card-3d hover-lift">
              <div className={`absolute inset-0 bg-gradient-to-r ${u.color} opacity-0 group-hover:opacity-30 rounded-2xl blur-2xl transition-opacity duration-500`}></div>
              <div className="relative z-10">
                {/* Difficulty badge */}
                <div className="absolute top-0 right-0">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    u.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                    u.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                    'bg-red-500/20 text-red-300 border border-red-500/30'
                  }`}>
                    {u.difficulty}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${u.color} rounded-2xl flex items-center justify-center text-4xl shadow-3d-purple transform group-hover:rotate-12 group-hover:scale-125 transition-all duration-500 overflow-hidden`}>
                    <div className="absolute inset-0 shimmer"></div>
                    <span className="relative z-10">{u.icon}</span>
                  </div>
                  <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${u.color}`}>
                    Unit {u.id}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{u.title}</h3>
                
                {/* Topics tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {u.topics.map(topic => (
                    <span key={topic} className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded text-xs text-purple-300">
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a 
                    href={`../assignments/unit${u.id}.md`} 
                    className={`flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r ${u.color} rounded-xl text-white text-sm font-medium shadow-3d-purple hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 group/btn overflow-hidden`}
                  >
                    <div className="absolute inset-0 shimmer"></div>
                    <span className="relative z-10">Open</span>
                    <span className="relative z-10 group-hover/btn:translate-x-1 transition-transform">→</span>
                  </a>
                  <a 
                    href={`../assignments/README.md`} 
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 glass-dark rounded-xl text-white/80 hover:text-white border border-purple-500/20 hover:border-purple-500/40 transition-all hover-lift"
                  >
                    <span className="text-lg">📘</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Assignment Stats */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
        <AssignmentStat icon="📝" value={units.length.toString()} label="Total Units" color="from-purple-600 to-pink-600" />
        <AssignmentStat icon="🟢" value={units.filter(u => u.difficulty === 'Beginner').length.toString()} label="Beginner" color="from-green-600 to-teal-600" />
        <AssignmentStat icon="🟡" value={units.filter(u => u.difficulty === 'Intermediate').length.toString()} label="Intermediate" color="from-yellow-600 to-orange-600" />
        <AssignmentStat icon="🔴" value={units.filter(u => u.difficulty === 'Advanced').length.toString()} label="Advanced" color="from-red-600 to-pink-600" />
      </div>
    </section>
  )
}

function AssignmentStat({icon, value, label, color}: {icon: string, value: string, label: string, color: string}) {
  return (
    <div className="glass-dark rounded-2xl p-6 border border-purple-500/20 text-center hover-lift group">
      <div className="text-4xl mb-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">{icon}</div>
      <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${color} mb-2`}>
        {value}
      </div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  )
}
