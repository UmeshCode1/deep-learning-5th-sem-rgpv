import React from 'react'

interface SectionHeaderProps {
  id: string
  title: string
  emoji?: string
  subtitle?: string
}

export default function SectionHeader({ id, title, emoji, subtitle }: SectionHeaderProps) {
  const copyLink = async () => {
    try {
      const url = new URL(window.location.href)
      url.hash = id
      await navigator.clipboard.writeText(url.toString())
    } catch (e) {
      // Fallback: update hash so users can copy from address bar
      window.location.hash = id
    }
  }

  return (
    <div className="flex items-start justify-between gap-3 mb-6">
      <div className="flex items-center gap-3">
        {emoji && (
          <span className="text-2xl sm:text-3xl" aria-hidden="true">{emoji}</span>
        )}
        <h2 id={`${id}-title`} className="section-header">{title}</h2>
      </div>
      <button
        onClick={copyLink}
        className="btn btn-ghost btn-pill text-sm"
        aria-labelledby={`${id}-title`}
        title="Copy link to this section"
      >
        🔗 Copy link
      </button>
    </div>
  )
}
