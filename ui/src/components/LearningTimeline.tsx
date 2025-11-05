import React from 'react'
import { Brain, Sparkles, Network, Zap, Code } from 'lucide-react'

interface TimelineItem {
  id: number
  week: string
  title: string
  topics: string[]
  icon: JSX.Element
  color: string
  practicals: string[]
  milestone: string
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    week: 'Week 1-3',
    title: 'Introduction & Fundamentals',
    topics: [
      'Machine Learning Basics',
      'Neural Networks Introduction',
      'Multilayer Perceptrons',
      'Activation Functions',
      'Backpropagation'
    ],
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-600 to-pink-600',
    practicals: ['P1: MLP Implementation'],
    milestone: 'Master the basics of neural networks'
  },
  {
    id: 2,
    week: 'Week 4-6',
    title: 'Optimization & Autoencoders',
    topics: [
      'Gradient Descent Variants',
      'Adam, RMSprop, SGD',
      'Regularization Techniques',
      'Autoencoders Architecture',
      'Dimensionality Reduction'
    ],
    icon: <Zap className="w-6 h-6" />,
    color: 'from-blue-600 to-cyan-600',
    practicals: ['P2: Autoencoder'],
    milestone: 'Optimize and compress data efficiently'
  },
  {
    id: 3,
    week: 'Week 7-9',
    title: 'Convolutional Neural Networks',
    topics: [
      'CNN Architecture',
      'Convolution & Pooling',
      'VGG, ResNet, Inception',
      'Transfer Learning',
      'Image Classification'
    ],
    icon: <Network className="w-6 h-6" />,
    color: 'from-green-600 to-teal-600',
    practicals: ['P3: CNN CIFAR-10'],
    milestone: 'Master computer vision'
  },
  {
    id: 4,
    week: 'Week 10-12',
    title: 'Recurrent Networks & Sequences',
    topics: [
      'RNN Fundamentals',
      'LSTM & GRU',
      'Sequence to Sequence',
      'Attention Mechanism',
      'Text Generation'
    ],
    icon: <Code className="w-6 h-6" />,
    color: 'from-orange-600 to-red-600',
    practicals: ['P4: RNN Text Generation'],
    milestone: 'Handle sequential data'
  },
  {
    id: 5,
    week: 'Week 13-15',
    title: 'Generative Models & GANs',
    topics: [
      'Generative Adversarial Networks',
      'Generator & Discriminator',
      'Training GANs',
      'Image Synthesis',
      'Advanced Architectures'
    ],
    icon: <Sparkles className="w-6 h-6" />,
    color: 'from-violet-600 to-purple-600',
    practicals: ['P5: GAN Image Generation'],
    milestone: 'Generate new content'
  }
]

export default function LearningTimeline() {
  return (
    <section id="learning-timeline" className="scroll-mt-20 perspective-2000">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16 px-4">
        <div className="inline-flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-600 to-teal-600 dark:from-emerald-500 dark:to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl animate-float">
            <span className="text-3xl sm:text-4xl">🗓️</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 animate-gradient tracking-tighter">
            Learning Path
          </h2>
        </div>
        <p className="text-base sm:text-xl text-slate-900 dark:text-gray-400 font-bold max-w-2xl mx-auto leading-relaxed">
          Your week-by-week journey through Deep Learning - from basics to advanced topics
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto px-3 sm:px-0">
        {/* Vertical Line */}
        <div className="absolute left-7 sm:left-8 md:left-1/2 top-0 bottom-0 w-1 sm:w-1 bg-gradient-to-b from-purple-600 via-blue-600 to-green-600 dark:from-purple-500 dark:via-blue-500 dark:to-green-500 opacity-40"></div>

        {/* Timeline Items */}
        <div className="space-y-10 sm:space-y-12 md:space-y-14">
          {timelineData.map((item, index) => (
            <div 
              key={item.id}
              className={`relative flex items-center gap-4 sm:gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline Node */}
              <div className="absolute left-7 sm:left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl border-3 sm:border-4 border-white dark:border-slate-900 animate-pulse-glow`}>
                  <div className="text-white text-base sm:text-lg">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Content Card */}
              <div className={`flex-1 ml-16 sm:ml-24 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8 lg:pr-16' : 'md:ml-auto md:pl-8 lg:pl-16'
              } md:w-[calc(50%-3rem)] lg:w-[calc(50%-4rem)]`}>
                <div className="glass-dark backdrop-blur-xl rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 border border-purple-500/30 shadow-2xl hover:scale-105 transition-all duration-500 card-3d group">
                  {/* Week Badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r ${item.color} text-white text-sm sm:text-sm font-bold mb-4 sm:mb-4 shadow-lg`}>
                    <span className="text-base">📅</span>
                    <span>{item.week}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl md:text-2xl font-black text-black dark:text-white mb-3 sm:mb-3 group-hover:text-indigo-700 dark:group-hover:text-purple-300 transition-colors leading-tight">
                    {item.title}
                  </h3>

                  {/* Topics */}
                  <div className="mb-5">
                    <h4 className="text-sm sm:text-sm font-bold text-indigo-700 dark:text-purple-400 uppercase tracking-wider mb-3">
                      Key Topics:
                    </h4>
                    <ul className="space-y-2.5">
                      {item.topics.map((topic, i) => (
                        <li 
                          key={i} 
                          className="flex items-start gap-2.5 text-slate-800 dark:text-gray-300 text-sm sm:text-sm font-medium leading-relaxed"
                        >
                          <span className="text-purple-500 mt-0.5 text-base">▸</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Practicals */}
                  <div className="mb-5">
                    <h4 className="text-sm sm:text-sm font-bold text-sky-700 dark:text-blue-400 uppercase tracking-wider mb-3">
                      Hands-on:
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {item.practicals.map((practical, i) => (
                        <span 
                          key={i}
                          className={`px-4 py-2 rounded-lg bg-gradient-to-r ${item.color} text-sm sm:text-sm font-bold border-2 border-white/30 dark:border-white/20 text-white shadow-lg`}
                        >
                          {practical}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Milestone */}
                  <div className="flex items-center gap-2.5 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-lg border border-purple-500/20">
                    <span className="text-xl sm:text-2xl">🎯</span>
                    <span className="text-sm sm:text-base font-bold text-indigo-700 dark:text-purple-300">
                      {item.milestone}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Completion Badge */}
        <div className="mt-16 sm:mt-20 text-center px-4">
          <div className="inline-block glass-dark backdrop-blur-xl rounded-2xl p-6 sm:p-8 md:p-10 border border-purple-500/30 shadow-2xl animate-bounce-slow max-w-md">
            <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-5">🎓</div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mb-3 sm:mb-4">
              Course Complete!
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-slate-900 dark:text-gray-400 font-bold leading-relaxed">
              Master all 5 units and become a Deep Learning expert
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
