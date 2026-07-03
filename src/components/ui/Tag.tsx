// src/components/ui/Tag.tsx
import React from 'react'

interface TagProps {
  children: React.ReactNode
  color?: 'blue' | 'yellow' | 'sky' | 'green' | 'purple' | 'zinc'
}

function Tag({ children, color = 'zinc' }: TagProps) {
  const colorStyles = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    sky: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    green: 'bg-green-500/10 text-green-400 border-green-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    zinc: 'bg-zinc-800 text-zinc-300 border-zinc-700'
  }

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${colorStyles[color]}`}>
      {children}
    </span>
  )
}

export default Tag