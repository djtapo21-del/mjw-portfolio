// src/components/ui/FallbackImage.tsx
// 통합 이미지 폴백 컴포넌트 — AutoImage / ThumbImage / ViewerImage 대체
import { useState } from 'react'
import { cn } from '../../lib/utils'

interface FallbackImageProps {
    src: string
    alt: string
    /** 폴백 표시 텍스트 (기본: alt) */
    fallbackText?: string
    /** 폴백 배경 색상 클래스 (예: "bg-tag-blue/10 border-tag-blue/20 text-tag-blue") */
    fallbackColor?: string
    /** 이미지 클래스 */
    className?: string
    /** 컨테이너 클래스 */
    containerClassName?: string
}

export default function FallbackImage({
    src,
    alt,
    fallbackText,
    fallbackColor,
    className,
    containerClassName,
}: FallbackImageProps) {
    const [error, setError] = useState(false)

    if (error) {
        const text = fallbackText ?? alt
        if (fallbackColor) {
            // ProjectCard 스타일: 커스텀 색상 + rounded
            return (
                <div
                    className={cn(
                        "w-full h-full flex items-center justify-center",
                        fallbackColor,
                        containerClassName,
                    )}
                >
                    <span className="text-xs font-bold tracking-widest uppercase">{text}</span>
                </div>
            )
        }
        // DetailCard/DetailViewer 스타일: 그라데이션 폴백
        return (
            <div
                className={cn(
                    "w-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center",
                    containerClassName,
                )}
            >
                <span className="text-sm text-white/30 font-mono">{text}</span>
            </div>
        )
    }

    return (
        <img
            src={src}
            alt={alt}
            className={cn("object-cover", className)}
            onError={() => setError(true)}
        />
    )
}