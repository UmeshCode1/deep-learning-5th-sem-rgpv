import React, { useState, useEffect } from 'react'
import { TrendingUp, Award, Clock, Target, BookOpen, Code2, CheckCircle, Zap } from 'lucide-react'

export default function StatsDashboard() {
  const [stats, setStats] = useState({
    totalStudyTime: 0,
    completedTopics: 0,
    totalTopics: 75,
    practicalsDone: 0,
    totalPracticals: 5,
    assignmentsCompleted: 0,
    totalAssignments: 5,
    currentStreak: 0,
    longestStreak: 0
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Load stats from localStorage
    const savedStats = localStorage.getItem('learning-stats')
    if (savedStats) {
      setStats(JSON.parse(savedStats))
    }

    // Update study time every minute
    const interval = setInterval(() => {
      setStats(prev => {
        const updated = { ...prev, totalStudyTime: prev.totalStudyTime + 1 }
        localStorage.setItem('learning-stats', JSON.stringify(updated))
        return updated
      })
    }, 60000) // Every minute

    return () => clearInterval(interval)
  }, [])

  const completionPercentage = Math.round((stats.completedTopics / stats.totalTopics) * 100)
  const practicalProgress = Math.round((stats.practicalsDone / stats.totalPracticals) * 100)
  const assignmentProgress = Math.round((stats.assignmentsCompleted / stats.totalAssignments) * 100)

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-24 right-4 z-40 p-4 bg-gradient-to-br from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 neon-glow group"
        aria-label="Show statistics"
      >
        <TrendingUp className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </button>
    )
  }

  return (
    <div className="fixed bottom-24 right-4 z-40 w-[420px] max-h-[85vh] overflow-hidden animate-slide-in-right">
      <div className="glass-dark backdrop-blur-xl rounded-2xl border border-emerald-500/30 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-white" />
              <h3 className="text-2xl font-bold text-white">Your Stats</h3>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Overall Progress Circle */}
          <div className="flex items-center justify-center">
            <div className="relative w-32 h-32">
              <svg className="w-32 h-32 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-white/20"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 56}`}
                  strokeDashoffset={`${2 * Math.PI * 56 * (1 - completionPercentage / 100)}`}
                  className="text-white transition-all duration-1000"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-white">{completionPercentage}%</span>
                <span className="text-xs text-white/80 font-medium">Complete</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="p-6 space-y-4 max-h-[50vh] overflow-y-auto">
          {/* Study Time */}
          <StatCard
            icon={<Clock className="w-5 h-5" />}
            label="Total Study Time"
            value={formatTime(stats.totalStudyTime)}
            color="from-blue-500 to-cyan-500"
            progress={Math.min(100, (stats.totalStudyTime / (15 * 60)) * 100)} // 15 hours goal
          />

          {/* Topics Completed */}
          <StatCard
            icon={<BookOpen className="w-5 h-5" />}
            label="Topics Mastered"
            value={`${stats.completedTopics}/${stats.totalTopics}`}
            color="from-purple-500 to-pink-500"
            progress={completionPercentage}
          />

          {/* Practicals */}
          <StatCard
            icon={<Code2 className="w-5 h-5" />}
            label="Practicals Done"
            value={`${stats.practicalsDone}/${stats.totalPracticals}`}
            color="from-green-500 to-emerald-500"
            progress={practicalProgress}
          />

          {/* Assignments */}
          <StatCard
            icon={<CheckCircle className="w-5 h-5" />}
            label="Assignments Complete"
            value={`${stats.assignmentsCompleted}/${stats.totalAssignments}`}
            color="from-orange-500 to-red-500"
            progress={assignmentProgress}
          />

          {/* Current Streak */}
          <StatCard
            icon={<Zap className="w-5 h-5" />}
            label="Current Streak"
            value={`${stats.currentStreak} days`}
            color="from-yellow-500 to-orange-500"
            progress={(stats.currentStreak / 30) * 100} // 30 days goal
            showFire={stats.currentStreak > 0}
          />

          {/* Longest Streak */}
          <StatCard
            icon={<Award className="w-5 h-5" />}
            label="Longest Streak"
            value={`${stats.longestStreak} days`}
            color="from-violet-500 to-purple-500"
            progress={(stats.longestStreak / 30) * 100}
            showTrophy={stats.longestStreak >= 7}
          />

          {/* Achievement Level */}
          <div className="glass-modern p-4 rounded-xl border border-emerald-500/30">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-400" />
                <span className="font-bold text-slate-900 dark:text-white">Achievement Level</span>
              </div>
              <span className="text-2xl">
                {completionPercentage < 25 ? '🌱' : 
                 completionPercentage < 50 ? '🌿' :
                 completionPercentage < 75 ? '🌳' :
                 completionPercentage < 100 ? '⭐' : '🏆'}
              </span>
            </div>
            <div className="text-sm text-slate-600 dark:text-gray-400">
              {completionPercentage < 25 ? 'Beginner - Keep going!' :
               completionPercentage < 50 ? 'Intermediate - Great progress!' :
               completionPercentage < 75 ? 'Advanced - Almost there!' :
               completionPercentage < 100 ? 'Expert - Final push!' :
               'Master - Congratulations! 🎉'}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="pt-4 border-t border-purple-500/20">
            <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-3">
              Quick Actions
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setStats(prev => ({
                    ...prev,
                    completedTopics: prev.completedTopics + 1
                  }))
                }}
                className="px-3 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg text-xs font-medium transition-colors border border-purple-500/30"
              >
                + Topic
              </button>
              <button
                onClick={() => {
                  setStats(prev => ({
                    ...prev,
                    practicalsDone: Math.min(prev.totalPracticals, prev.practicalsDone + 1)
                  }))
                }}
                className="px-3 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-300 rounded-lg text-xs font-medium transition-colors border border-green-500/30"
              >
                + Practical
              </button>
              <button
                onClick={() => {
                  setStats(prev => ({
                    ...prev,
                    assignmentsCompleted: Math.min(prev.totalAssignments, prev.assignmentsCompleted + 1)
                  }))
                }}
                className="px-3 py-2 bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 rounded-lg text-xs font-medium transition-colors border border-orange-500/30"
              >
                + Assignment
              </button>
              <button
                onClick={() => {
                  if (confirm('Reset all statistics?')) {
                    const resetStats = {
                      totalStudyTime: 0,
                      completedTopics: 0,
                      totalTopics: 75,
                      practicalsDone: 0,
                      totalPracticals: 5,
                      assignmentsCompleted: 0,
                      totalAssignments: 5,
                      currentStreak: 0,
                      longestStreak: 0
                    }
                    setStats(resetStats)
                    localStorage.setItem('learning-stats', JSON.stringify(resetStats))
                  }
                }}
                className="px-3 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg text-xs font-medium transition-colors border border-red-500/30"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ 
  icon, 
  label, 
  value, 
  color, 
  progress,
  showFire = false,
  showTrophy = false 
}: { 
  icon: JSX.Element
  label: string
  value: string
  color: string
  progress: number
  showFire?: boolean
  showTrophy?: boolean
}) {
  return (
    <div className="glass-modern p-4 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all group">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${color} bg-opacity-20`}>
            <div className={`text-transparent bg-clip-text bg-gradient-to-r ${color}`}>
              {icon}
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-600 dark:text-gray-400">{label}</div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">{value}</div>
          </div>
        </div>
        <div className="text-2xl">
          {showFire && '🔥'}
          {showTrophy && '🏆'}
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="h-2 bg-slate-700/30 rounded-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${Math.min(100, progress)}%` }}
        />
      </div>
    </div>
  )
}
