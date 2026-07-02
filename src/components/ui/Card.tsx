// src/components/Card.tsx
import React from 'react' // 1. React 자체를 직접 불러옵니다.

interface CardProps {
    children: React.ReactNode  // 2. React.ReactNode 형식으로 지정합니다.
    className?: string
}

function Card({ children, className = '' }: CardProps) {
    return (
        <div className={`bg-zinc-900/50 min-h-[16rem] md:h-64 rounded-3xl p-6 text-white border border-white/10 ${className}`}>
            {children}
        </div>
    )
}

export default Card