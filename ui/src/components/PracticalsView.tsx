import React, { useState } from 'react'

const practicals = [
  {id:'P1', title:'MLP Implementation', desc:'Build Neural Networks from scratch', file:'../practicals/P1_MLP_Implementation.ipynb', icon:'🧠', color:'from-purple-600 to-pink-600', tags:['neural-networks', 'basics', 'numpy']},
  {id:'P2', title:'Autoencoder', desc:'Dimensionality reduction & reconstruction', file:'../practicals/P2_Autoencoder.ipynb', icon:'🔐', color:'from-blue-600 to-cyan-600', tags:['unsupervised', 'reconstruction', 'mnist']},
  {id:'P3', title:'CNN CIFAR-10', desc:'Image classification with CNNs', file:'../practicals/P3_CNN_Image_Classification.ipynb', icon:'🖼️', color:'from-green-600 to-teal-600', tags:['cnn', 'classification', 'computer-vision']},
  {id:'P4', title:'RNN Text Generation', desc:'Sequence modeling with LSTM', file:'../practicals/P4_RNN_Text_Generation.ipynb', icon:'📝', color:'from-orange-600 to-red-600', tags:['rnn', 'lstm', 'nlp']},
  {id:'P5', title:'GAN Image Generation', desc:'Generate synthetic images', file:'../practicals/P5_GAN_Image_Generation.ipynb', icon:'✨', color:'from-violet-600 to-purple-600', tags:['gan', 'generative', 'images']}
]

export default function PracticalsView(){
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const allTags = Array.from(new Set(practicals.flatMap(p => p.tags)))
  
  const filteredPracticals = practicals.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         p.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         p.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTag = !selectedTag || p.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  return (
    <section id="practicals" className="scroll-mt-20 perspective-2000">
      {/* Enhanced Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl animate-float">
            <span className="text-4xl">💻</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 dark:from-blue-400 dark:via-cyan-400 dark:to-purple-400 animate-gradient tracking-tighter">
            Practical Notebooks
          </h2>
        </div>
        <p className="text-xl text-slate-900 dark:text-gray-400 font-bold max-w-2xl mx-auto">
          Interactive Jupyter notebooks with hands-on implementations and real-world examples
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="glass-dark p-6 rounded-2xl border border-purple-500/20 mb-8 animate-slide-in-bottom">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search input */}
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search practicals..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900/50 dark:bg-slate-900/50 light:bg-white/80 border border-purple-500/30 rounded-xl px-5 py-3 pl-12 text-slate-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter tags */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                !selectedTag 
                  ? 'bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-purple-600 dark:to-blue-600 text-white shadow-lg' 
                  : 'bg-white/60 dark:bg-slate-900/50 text-slate-800 dark:text-gray-400 hover:text-indigo-700 dark:hover:text-white border border-indigo-500/30 dark:border-purple-500/20 font-medium'
              }`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all transform hover:scale-105 ${
                  selectedTag === tag
                    ? 'bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-purple-600 dark:to-blue-600 text-white shadow-xl border-2 border-indigo-400 dark:border-purple-400'
                    : 'bg-white dark:bg-slate-900/70 text-indigo-700 dark:text-gray-300 hover:text-indigo-900 dark:hover:text-white border-2 border-indigo-500/50 dark:border-purple-500/30 hover:border-indigo-600 dark:hover:border-purple-500/50 hover:shadow-lg'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4 text-sm text-slate-900 dark:text-gray-400 font-bold">
          {filteredPracticals.length === practicals.length 
            ? `Showing all ${practicals.length} practicals`
            : `Found ${filteredPracticals.length} of ${practicals.length} practicals`
          }
        </div>
      </div>
      
      {/* Practicals grid */}
      <div className="space-y-6">
        {filteredPracticals.length === 0 ? (
          <div className="text-center py-20 glass-dark rounded-2xl border border-purple-500/20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No practicals found</h3>
            <p className="text-gray-400">Try adjusting your search or filters</p>
          </div>
        ) : (
          filteredPracticals.map((p, idx) => (
          <div 
            key={p.id} 
            className="group relative perspective-1000"
            style={{animationDelay: `${idx * 100}ms`}}
          >
            {/* 3D Card with hover effect */}
            <div className="relative glass-dark backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 shadow-3d hover:shadow-3d-purple transform hover:-translate-y-4 hover:scale-[1.02] transition-all duration-500 card-3d hover-lift">
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${p.color} opacity-0 group-hover:opacity-15 dark:group-hover:opacity-20 rounded-2xl blur-2xl transition-opacity duration-500`}></div>
              
              {/* Card content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-6 mb-4">
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
                        <h3 className="text-2xl font-bold text-black dark:text-white group-hover:text-indigo-700 dark:group-hover:text-purple-300 transition-colors">
                          {p.title}
                        </h3>
                      </div>
                      <p className="text-slate-800 dark:text-gray-400 text-base font-medium group-hover:text-black dark:group-hover:text-gray-300 transition-colors">
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
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 pl-26">
                  {p.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1.5 bg-indigo-200 dark:bg-purple-500/30 border-2 border-indigo-600 dark:border-purple-500/50 rounded-full text-xs text-indigo-900 dark:text-purple-200 font-bold shadow-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          ))
        )}
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
    <div className="bg-white/90 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-indigo-500/30 dark:border-purple-500/20 text-center transform hover:scale-110 hover:-translate-y-4 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/20 dark:hover:shadow-purple-500/20 card-3d group">
      <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">{icon}</div>
      <div className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${color} mb-3`}>
        {value}
      </div>
      <div className="text-slate-900 dark:text-gray-400 text-lg font-bold">{label}</div>
    </div>
  )
}

