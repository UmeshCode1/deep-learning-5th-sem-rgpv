import React, { useState, useEffect } from 'react'
import { Check, Circle, Lock } from 'lucide-react'

interface ProgressItem {
  id: string
  title: string
  type: 'unit' | 'practical' | 'assignment'
  completed: boolean
}

export default function ProgressTracker() {
  const [progress, setProgress] = useState<ProgressItem[]>([])
  const [showTracker, setShowTracker] = useState(true)

  // Initialize progress from localStorage or default
  useEffect(() => {
    const savedProgress = localStorage.getItem('learning-progress')
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress))
    } else {
      // Default progress items
      const defaultProgress: ProgressItem[] = [
        { id: 'unit-1', title: 'Unit 1: Introduction & MLPs', type: 'unit', completed: false },
        { id: 'unit-2', title: 'Unit 2: Optimization', type: 'unit', completed: false },
        { id: 'unit-3', title: 'Unit 3: CNNs', type: 'unit', completed: false },
        { id: 'unit-4', title: 'Unit 4: RNNs & LSTM', type: 'unit', completed: false },
        { id: 'unit-5', title: 'Unit 5: GANs', type: 'unit', completed: false },
        { id: 'p1', title: 'P1: MLP Implementation', type: 'practical', completed: false },
        { id: 'p2', title: 'P2: Autoencoder', type: 'practical', completed: false },
        { id: 'p3', title: 'P3: CNN CIFAR-10', type: 'practical', completed: false },
        { id: 'p4', title: 'P4: RNN Text Gen', type: 'practical', completed: false },
        { id: 'p5', title: 'P5: GAN Images', type: 'practical', completed: false },
        { id: 'a1', title: 'Assignment 1', type: 'assignment', completed: false },
        { id: 'a2', title: 'Assignment 2', type: 'assignment', completed: false },
        { id: 'a3', title: 'Assignment 3', type: 'assignment', completed: false },
        { id: 'a4', title: 'Assignment 4', type: 'assignment', completed: false },
        { id: 'a5', title: 'Assignment 5', type: 'assignment', completed: false },
      ]
      setProgress(defaultProgress)
      localStorage.setItem('learning-progress', JSON.stringify(defaultProgress))
    }
  }, [])

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (progress.length > 0) {
      localStorage.setItem('learning-progress', JSON.stringify(progress))
    }
  }, [progress])

  const toggleCompletion = (id: string) => {
    setProgress(prev => 
      prev.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }

  const resetProgress = () => {
    if (confirm('Reset all progress? This action cannot be undone.')) {
      const resetItems = progress.map(item => ({ ...item, completed: false }))
      setProgress(resetItems)
    }
  }

  // Calculate stats
  const totalItems = progress.length
  const completedItems = progress.filter(item => item.completed).length
  const completionPercentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0

  const unitStats = {
    total: progress.filter(p => p.type === 'unit').length,
    completed: progress.filter(p => p.type === 'unit' && p.completed).length
  }

  const practicalStats = {
    total: progress.filter(p => p.type === 'practical').length,
    completed: progress.filter(p => p.type === 'practical' && p.completed).length
  }

  const assignmentStats = {
    total: progress.filter(p => p.type === 'assignment').length,
    completed: progress.filter(p => p.type === 'assignment' && p.completed).length
  }

  if (!showTracker) {
    return (
      <button
        onClick={() => setShowTracker(true)}
        className="fixed top-24 right-4 z-40 p-3 bg-gradient-to-br from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 neon-glow animate-pulse"
        aria-label="Show progress tracker"
      >
        <span className="text-2xl">📊</span>
      </button>
    )
  }

  return (
    <div className="fixed top-24 right-4 z-40 w-96 max-h-[80vh] overflow-hidden animate-slide-in-right">
      <div className="glass-dark backdrop-blur-xl rounded-2xl border border-purple-500/30 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📊</span>
              <h3 className="text-xl font-bold text-white">Your Progress</h3>
            </div>
            <button
              onClick={() => setShowTracker(false)}
              className="text-white hover:bg-white/20 rounded-lg p-1 transition-colors"
            >
              ✕
            </button>
          </div>
          
          {/* Overall Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-white/90">
              <span>{completedItems} of {totalItems} completed</span>
            </div>
            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-1000 ease-out"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 p-4 bg-slate-900/30 dark:bg-slate-900/50">
          <StatCard 
            icon="📚" 
            label="Units" 
            completed={unitStats.completed} 
            total={unitStats.total}
            color="from-purple-500 to-pink-500"
          />
          <StatCard 
            icon="💻" 
            label="Practicals" 
            completed={practicalStats.completed} 
            total={practicalStats.total}
            color="from-blue-500 to-cyan-500"
          />
          <StatCard 
            icon="📝" 
            label="Assignments" 
            completed={assignmentStats.completed} 
            total={assignmentStats.total}
            color="from-green-500 to-emerald-500"
          />
        </div>

        {/* Progress List */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-2">
          {['unit', 'practical', 'assignment'].map(type => {
            const items = progress.filter(item => item.type === type)
            return (
              <div key={type} className="space-y-2">
                <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider px-2">
                  {type}s
                </h4>
                {items.map(item => (
                  <ProgressItem 
                    key={item.id}
                    item={item}
                    onToggle={() => toggleCompletion(item.id)}
                  />
                ))}
              </div>
            )
          })}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-900/30 dark:bg-slate-900/50 border-t border-purple-500/20 flex gap-2">
          <button
            onClick={resetProgress}
            className="flex-1 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg text-sm font-medium transition-colors border border-red-500/30"
          >
            Reset All
          </button>
          <button
            onClick={() => {
              const data = new Blob([JSON.stringify(progress, null, 2)], { type: 'application/json' })
              const url = URL.createObjectURL(data)
              const link = document.createElement('a')
              link.href = url
              link.download = 'learning-progress.json'
              link.click()
            }}
            className="flex-1 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg text-sm font-medium transition-colors border border-purple-500/30"
          >
            Export
          </button>
        </div>

        {/* Motivational Message */}
        {completionPercentage === 100 && (
          <div className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-t border-green-500/30">
            <div className="text-center">
              <div className="text-4xl mb-2">🎉</div>
              <div className="text-green-300 font-bold">Congratulations!</div>
              <div className="text-sm text-green-400">You've completed everything!</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function StatCard({ icon, label, completed, total, color }: {
  icon: string
  label: string
  completed: number
  total: number
  color: string
}) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div className="bg-slate-800/50 dark:bg-slate-800/70 rounded-xl p-3 text-center border border-purple-500/20 hover:border-purple-500/40 transition-all">
      <div className="text-2xl mb-1">{icon}</div>
      <div className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${color}`}>
        {completed}/{total}
      </div>
      <div className="text-xs text-gray-400">{label}</div>
      <div className="mt-2 h-1.5 bg-slate-700 rounded-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${color} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

function ProgressItem({ item, onToggle }: {
  item: ProgressItem
  onToggle: () => void
}) {
  const iconMap = {
    unit: '📚',
    practical: '💻',
    assignment: '📝'
  }

  const colorMap = {
    unit: 'from-purple-500 to-pink-500',
    practical: 'from-blue-500 to-cyan-500',
    assignment: 'from-green-500 to-emerald-500'
  }

  return (
    <button
      onClick={onToggle}
      className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group ${
        item.completed 
          ? 'bg-green-500/10 border border-green-500/30 hover:bg-green-500/20' 
          : 'bg-slate-800/50 border border-purple-500/20 hover:border-purple-500/40 hover:bg-slate-800/70'
      }`}
    >
      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
        item.completed 
          ? 'bg-green-500 text-white scale-110' 
          : 'bg-slate-700 text-slate-400 group-hover:bg-purple-500/30'
      }`}>
        {item.completed ? (
          <Check className="w-4 h-4" />
        ) : (
          <Circle className="w-3 h-3" />
        )}
      </div>
      
      <span className="text-xl flex-shrink-0">{iconMap[item.type]}</span>
      
      <span className={`flex-1 text-left text-sm font-medium transition-all ${
        item.completed 
          ? 'text-green-300 line-through' 
          : 'text-slate-300 group-hover:text-white'
      }`}>
        {item.title}
      </span>
    </button>
  )
}
