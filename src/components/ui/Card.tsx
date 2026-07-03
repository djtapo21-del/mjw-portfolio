// src/components/ui/Card.tsx
import React from 'react'

interface CardProps {
    children: React.ReactNode
    className?: string
}

function Card({ children, className = '' }: CardProps) {
    return (
        /* 고정 높이(md:h-64)를 지우고 h-full을 주어 유연하게 늘어나도록 수정했습니다 */
        <div className={`bg-card-bg rounded-card p-6 text-white border border-card-border h-full ${className}`}>
            {children}
        </div>
    )
}

export default Card