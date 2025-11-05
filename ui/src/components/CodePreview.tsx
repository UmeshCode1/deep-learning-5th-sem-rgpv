import React, { useState } from 'react'
import { Copy, Check, Code, Play } from 'lucide-react'

interface CodeSnippet {
  title: string
  description: string
  language: string
  code: string
  output?: string
}

const codeSnippets: CodeSnippet[] = [
  {
    title: 'Neural Network Forward Pass',
    description: 'Basic forward propagation implementation',
    language: 'python',
    code: `import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def forward_pass(X, W1, W2):
    # Hidden layer
    z1 = np.dot(X, W1)
    a1 = sigmoid(z1)
    
    # Output layer
    z2 = np.dot(a1, W2)
    a2 = sigmoid(z2)
    
    return a2`,
    output: 'Output: [[0.73105858]]'
  },
  {
    title: 'CNN Architecture',
    description: 'Simple CNN model using PyTorch',
    language: 'python',
    code: `import torch.nn as nn

class SimpleCNN(nn.Module):
    def __init__(self):
        super(SimpleCNN, self).__init__()
        self.conv1 = nn.Conv2d(3, 32, 3, padding=1)
        self.conv2 = nn.Conv2d(32, 64, 3, padding=1)
        self.pool = nn.MaxPool2d(2, 2)
        self.fc1 = nn.Linear(64 * 8 * 8, 128)
        self.fc2 = nn.Linear(128, 10)
        
    def forward(self, x):
        x = self.pool(F.relu(self.conv1(x)))
        x = self.pool(F.relu(self.conv2(x)))
        x = x.view(-1, 64 * 8 * 8)
        x = F.relu(self.fc1(x))
        return self.fc2(x)`,
    output: 'Model: SimpleCNN with 105,354 parameters'
  },
  {
    title: 'Training Loop',
    description: 'Standard PyTorch training loop',
    language: 'python',
    code: `for epoch in range(num_epochs):
    model.train()
    for batch_idx, (data, target) in enumerate(train_loader):
        optimizer.zero_grad()
        output = model(data)
        loss = criterion(output, target)
        loss.backward()
        optimizer.step()
        
    # Validation
    model.eval()
    with torch.no_grad():
        val_loss = 0
        correct = 0
        for data, target in val_loader:
            output = model(data)
            val_loss += criterion(output, target).item()
            pred = output.argmax(dim=1)
            correct += pred.eq(target).sum().item()`,
    output: 'Epoch 10: Loss=0.234, Accuracy=92.5%'
  }
]

export default function CodePreview() {
  const [selectedSnippet, setSelectedSnippet] = useState(0)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [showOutput, setShowOutput] = useState(false)

  const copyToClipboard = (code: string, index: number) => {
    navigator.clipboard.writeText(code)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const currentSnippet = codeSnippets[selectedSnippet]

  return (
    <section id="code-examples" className="scroll-mt-20 perspective-2000">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-4 mb-6">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-500/30 dark:shadow-purple-500/30 animate-float">
            <Code className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 animate-gradient tracking-tighter">
            Code Examples
          </h2>
        </div>
        <p className="text-base sm:text-xl text-slate-900 dark:text-gray-300 font-bold max-w-2xl mx-auto leading-relaxed">
          Interactive code snippets from your practicals with live preview
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Snippet Selector */}
        <div className="lg:col-span-1 space-y-2 sm:space-y-3">
          {codeSnippets.map((snippet, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedSnippet(index)
                setShowOutput(false)
              }}
              className={`w-full text-left p-4 sm:p-5 rounded-xl transition-all duration-300 group ${
                selectedSnippet === index
                  ? 'bg-gradient-to-r from-indigo-600 to-sky-600 dark:from-purple-600 dark:to-pink-600 text-white shadow-2xl shadow-indigo-500/30 dark:shadow-purple-500/30 scale-105 border-2 border-indigo-400/50 dark:border-purple-400/50'
                  : 'glass-dark border-2 border-indigo-500/30 dark:border-purple-500/30 hover:border-indigo-500/60 dark:hover:border-purple-500/50 hover:scale-[1.02] hover:shadow-xl'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <Code className={`w-5 h-5 sm:w-6 sm:h-6 ${
                  selectedSnippet === index ? 'text-white' : 'text-indigo-700 dark:text-purple-400'
                }`} />
                <h3 className={`font-bold text-base sm:text-lg ${
                  selectedSnippet === index ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}>
                  {snippet.title}
                </h3>
              </div>
              <p className={`text-sm font-medium ${
                selectedSnippet === index ? 'text-white/90' : 'text-slate-800 dark:text-gray-300'
              }`}>
                {snippet.description}
              </p>
            </button>
          ))}
        </div>

        {/* Code Display */}
        <div className="lg:col-span-2">
          <div className="glass-dark backdrop-blur-xl rounded-2xl border-2 border-purple-500/40 overflow-hidden shadow-2xl shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-3 sm:px-6 py-3 sm:py-4 border-b border-purple-500/30 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
                </div>
                <span className="text-xs sm:text-sm font-mono font-semibold text-gray-200 dark:text-gray-200 px-2 py-1 bg-slate-800/80 rounded border border-purple-500/30">
                  {currentSnippet.language}
                </span>
              </div>

              <div className="flex gap-1.5 sm:gap-2">
                {currentSnippet.output && (
                  <button
                    onClick={() => setShowOutput(!showOutput)}
                    className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                      showOutput
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                        : 'bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30'
                    }`}
                  >
                    <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{showOutput ? 'Show Code' : 'Run'}</span>
                    <span className="sm:hidden">{showOutput ? 'Code' : 'Run'}</span>
                  </button>
                )}
                <button
                  onClick={() => copyToClipboard(currentSnippet.code, selectedSnippet)}
                  className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg text-xs sm:text-sm font-medium transition-all border border-purple-500/30"
                >
                  {copiedIndex === selectedSnippet ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Code/Output Area */}
            <div className="relative">
              {!showOutput ? (
                <div className="p-3 sm:p-6 overflow-x-auto bg-slate-950/95 dark:bg-slate-950/95 min-h-[300px] sm:min-h-[400px]">
                  <div className="flex gap-4">
                    {/* Line Numbers */}
                    <div className="select-none text-gray-500 dark:text-gray-500 font-mono text-xs sm:text-sm leading-relaxed text-right pr-4 border-r border-purple-500/20">
                      {currentSnippet.code.split('\n').map((_, i) => (
                        <div key={i}>{i + 1}</div>
                      ))}
                    </div>
                    {/* Code Content */}
                    <pre className="flex-1 text-xs sm:text-sm leading-relaxed">
                      <code className="text-gray-100 dark:text-gray-100 font-mono font-medium tracking-wide">
                        {currentSnippet.code}
                      </code>
                    </pre>
                  </div>
                </div>
              ) : (
                <div className="p-3 sm:p-6 bg-slate-950/95 min-h-[300px] sm:min-h-[400px]">
                  <div className="flex items-start gap-3">
                    <div className="text-green-400 dark:text-green-400 font-mono text-sm font-bold">{'>>>'}</div>
                    <div className="flex-1">
                      <div className="text-green-400 dark:text-green-400 font-mono text-sm font-semibold mb-4">
                        Running {currentSnippet.title}...
                      </div>
                      <div className="text-cyan-300 dark:text-cyan-300 font-mono text-sm font-medium animate-pulse bg-slate-900/50 p-4 rounded-lg border border-cyan-500/20">
                        {currentSnippet.output}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Info */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-3 sm:px-6 py-2 sm:py-3 border-t border-purple-500/30 flex items-center justify-between text-xs sm:text-sm">
              <div className="text-gray-200 dark:text-gray-200 font-medium">
                <span className="text-purple-400">Lines:</span> {currentSnippet.code.split('\n').length}
              </div>
              <div className="text-gray-200 dark:text-gray-200 font-medium">
                <span className="text-purple-400">{selectedSnippet + 1}</span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-400">{codeSnippets.length}</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4">
            <button
              onClick={() => setSelectedSnippet(Math.max(0, selectedSnippet - 1))}
              disabled={selectedSnippet === 0}
              className="flex-1 px-6 py-3 bg-slate-800/80 hover:bg-slate-700/90 disabled:opacity-30 disabled:cursor-not-allowed text-gray-100 rounded-xl font-semibold transition-all border border-purple-500/30 hover:border-purple-500/50 hover:scale-[1.02] shadow-lg"
            >
              ← Previous
            </button>
            <button
              onClick={() => setSelectedSnippet(Math.min(codeSnippets.length - 1, selectedSnippet + 1))}
              disabled={selectedSnippet === codeSnippets.length - 1}
              className="flex-1 px-6 py-3 bg-slate-800/80 hover:bg-slate-700/90 disabled:opacity-30 disabled:cursor-not-allowed text-gray-100 rounded-xl font-semibold transition-all border border-purple-500/30 hover:border-purple-500/50 hover:scale-[1.02] shadow-lg"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
