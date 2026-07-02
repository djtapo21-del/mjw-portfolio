// src/components/ProjectsCard.tsx
import { useState, useEffect } from 'react'
import Card from './ui/Card'
import Badge from './ui/Badge'
import Text from './ui/Text'      // 1. 공통 텍스트 컴포넌트 불러오기
import Button from './ui/Button'  // 2. 공통 버튼 컴포넌트 불러오기
import heroImage from '../assets/hero.png'

function ProjectsCard() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <Card className="md:col-span-2">
            {isLoading ? (
                /* [A] 로딩 중 (스켈레톤) */
                <div className="animate-pulse flex flex-col md:flex-row h-full gap-6">
                    <div className="flex-1 flex flex-col justify-between py-2">
                        <div>
                            <div className="h-4 bg-zinc-800 rounded w-1/4"></div>
                            <div className="h-8 bg-zinc-800 rounded w-3/4 mt-4"></div>
                        </div>
                        <div className="h-10 bg-zinc-800 rounded w-full mt-4"></div>
                    </div>
                    <div className="w-full md:w-48 h-32 md:h-full bg-zinc-800 rounded-2xl"></div>
                </div>
            ) : (
                /* [B] 로딩 완료 */
                <div className="flex flex-col md:flex-row h-full gap-6 justify-between items-start md:items-stretch">
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <Badge text="Featured Project" />

                            {/* h3 대신 공통 Text 컴포넌트 적용 */}
                            <Text variant="title-large" className="text-xl md:text-2xl mt-2">
                                나만의 포트폴리오 사이트 제작
                            </Text>

                            {/* p 대신 공통 Text 컴포넌트 적용 (글자 크기만 text-sm으로 살짝 조절) */}
                            <Text variant="text-body" className="mt-2 text-sm">
                                React와 Tailwind CSS를 활용한 모던 Bento Grid 아키텍처 포트폴리오
                            </Text>
                        </div>

                        {/* 기존 복잡한 button 대신 공통 Button 컴포넌트 적용! */}
                        <Button className="mt-4 md:mt-0 self-start">
                            자세히 보기
                        </Button>
                    </div>
                    <div className="w-full md:w-48 h-32 md:h-full overflow-hidden rounded-2xl border border-white/10">
                        <img src={heroImage} alt="Project Thumbnail" className="w-full h-full object-cover" />
                    </div>
                </div>
            )}
        </Card>
    )
}

export default ProjectsCard