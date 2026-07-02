// src/components/ui/Text.tsx
import React from 'react'

interface TextProps {
  variant: 'title-large' | 'text-body' // 사용할 수 있는 글씨 스타일 정의
  children: React.ReactNode            // 보여줄 글씨 내용
  className?: string                   // 미세한 마진 등 개별 커스텀 스타일용
}

function Text({ variant, children, className = '' }: TextProps) {
  // variant에 따라 시맨틱(Semantic)한 HTML 태그를 선택하여 렌더링합니다.
  if (variant === 'title-large') {
    return (
      <h2 className={`text-2xl md:text-3xl font-bold mt-2 leading-tight text-white ${className}`}>
        {children}
      </h2>
    )
  }

  // 기본적으로 'text-body'일 때는 본문용 <p> 태그를 사용합니다.
  return (
    <p className={`text-zinc-400 text-sm md:text-base mt-4 md:mt-0 ${className}`}>
      {children}
    </p>
  )
}

export default Text