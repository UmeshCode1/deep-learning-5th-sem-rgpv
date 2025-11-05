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
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl animate-float">
            <Code className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 animate-gradient tracking-tighter">
            Code Examples
          </h2>
        </div>
        <p className="text-xl text-slate-800 dark:text-gray-400 font-semibold max-w-2xl mx-auto">
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
              className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                selectedSnippet === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 text-white shadow-xl scale-105'
                  : 'glass-dark border border-purple-500/20 hover:border-purple-500/40 hover:scale-102'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <Code className={`w-5 h-5 ${
                  selectedSnippet === index ? 'text-white' : 'text-purple-400'
                }`} />
                <h3 className={`font-bold ${
                  selectedSnippet === index ? 'text-white' : 'text-slate-900 dark:text-white'
                }`}>
                  {snippet.title}
                </h3>
              </div>
              <p className={`text-sm ${
                selectedSnippet === index ? 'text-white/90' : 'text-slate-600 dark:text-gray-400'
              }`}>
                {snippet.description}
              </p>
            </button>
          ))}
        </div>

        {/* Code Display */}
        <div className="lg:col-span-2">
          <div className="glass-dark backdrop-blur-xl rounded-2xl border border-purple-500/30 overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-slate-900/80 px-3 sm:px-6 py-3 sm:py-4 border-b border-purple-500/20 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs sm:text-sm font-mono text-gray-400">
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
                <div className="p-3 sm:p-6 overflow-x-auto">
                  <pre className="text-xs sm:text-sm leading-relaxed">
                    <code className="text-gray-300 font-mono">
                      {currentSnippet.code}
                    </code>
                  </pre>
                </div>
              ) : (
                <div className="p-3 sm:p-6 bg-slate-950/50">
                  <div className="flex items-start gap-3">
                    <div className="text-green-400 font-mono text-sm">{'>>>'}</div>
                    <div className="flex-1">
                      <div className="text-green-400 font-mono text-sm mb-4">
                        Running {currentSnippet.title}...
                      </div>
                      <div className="text-cyan-300 font-mono text-sm animate-pulse">
                        {currentSnippet.output}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Info */}
            <div className="bg-slate-900/80 px-3 sm:px-6 py-2 sm:py-3 border-t border-purple-500/20 flex items-center justify-between text-xs sm:text-sm">
              <div className="text-gray-400">
                Lines: {currentSnippet.code.split('\n').length}
              </div>
              <div className="text-gray-400">
                {selectedSnippet + 1}/{codeSnippets.length}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4">
            <button
              onClick={() => setSelectedSnippet(Math.max(0, selectedSnippet - 1))}
              disabled={selectedSnippet === 0}
              className="flex-1 px-6 py-3 bg-slate-800/50 hover:bg-slate-800/70 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-all border border-purple-500/20 hover:border-purple-500/40"
            >
              ← Previous
            </button>
            <button
              onClick={() => setSelectedSnippet(Math.min(codeSnippets.length - 1, selectedSnippet + 1))}
              disabled={selectedSnippet === codeSnippets.length - 1}
              className="flex-1 px-6 py-3 bg-slate-800/50 hover:bg-slate-800/70 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-all border border-purple-500/20 hover:border-purple-500/40"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
