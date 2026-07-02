// src/components/ui/Button.tsx
import React from 'react'

interface ButtonProps {
  children: React.ReactNode // 버튼 안에 들어갈 글씨
  onClick?: () => void      // 버튼 클릭 시 실행할 함수 (선택)
  className?: string        // 마진 등 추가 스타일용
}

function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-white text-black px-4 py-2 rounded-xl text-sm font-semibold hover:bg-zinc-200 transition-colors ${className}`}
    >
      {children}
    </button>
  )
}

export default Button