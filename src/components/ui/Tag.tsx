// src/components/ui/Tag.tsx
import React from 'react'

interface TagProps {
  children: React.ReactNode // 태그에 들어갈 글씨 (예: React)
  color?: 'blue' | 'yellow' | 'sky' | 'green' | 'purple' | 'zinc' // 사용할 수 있는 색상들
}

function Tag({ children, color = 'zinc' }: TagProps) {
  // 테일윈드는 "bg-${color}-500" 처럼 동적으로 글자를 조합하면 스타일을 읽지 못합니다.
  // 따라서 아래처럼 미리 완성된 클래스명을 맵핑(Mapping)해두고 쓰는 것이 실무 표준입니다.
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