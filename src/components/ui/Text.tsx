// src/components/ui/Text.tsx
import React from 'react'

interface TextProps {
  variant: 'title-large' | 'text-body' // 사용할 수 있는 글씨 스타일 정의
  children: React.ReactNode            // 보여줄 글씨 내용
  className?: string                   // 미세한 마진 등 개별 커스텀 스타일용
}

function Text({ variant, children, className = '' }: TextProps) {
  if (variant === 'title-large') {
    return (
      <h2 className={`text-2xl md:text-3xl font-bold leading-tight text-text-title ${className}`}>
        {children}
      </h2>
    )
  }
  return (
    <p className={`text-text-body text-sm md:text-base ${className}`}>
      {children}
    </p>
  )
}

export default Text