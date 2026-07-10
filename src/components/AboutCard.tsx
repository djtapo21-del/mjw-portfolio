// src/components/AboutCard.tsx
import { Card } from './ui/Card'
import { Title, SubTitle, Body, Caption } from './ui/Text'

export default function AboutCard() {
    const mobileDivider = <div className="h-px bg-white/5 md:hidden w-full" />;

    return (
        // 1단계 외곽 카드
        <Card span={1} gap="medium">

            {/* 1단계 부모 카드 상단 헤더 (이 눈높이가 기준선이 됩니다) */}
            <div className="flex flex-col gap-1.5 pb-4 border-b border-white/[0.06]">
                <Title>Career Info</Title>
                <Body>실무 활동 및 주요 프로젝트 내역입니다.</Body>
            </div>

            {/* 2단계 내부 이력 리스트 (수기 패딩 p-4를 지워 모바일 좌우 정렬선을 100% 일치시킴) */}
            <div className="flex flex-col gap-3">

                {/* 이력 1 */}
                <Card variant="tile" className="gap-1.5">
                    <div className="flex items-center justify-between">
                        <SubTitle>(주)디자인테크</SubTitle>
                        <Caption>23.07 - 23.12</Caption>
                    </div>
                    <Body className="text-xs">반응형 웹 퍼블리싱 및 UI 컴포넌트 개발</Body>
                </Card>

                {mobileDivider}

                {/* 이력 2 */}
                <Card variant="tile" className="gap-1.5">
                    <div className="flex items-center justify-between">
                        <SubTitle>교내 캡스톤 프로젝트</SubTitle>
                        <Caption>23.03 - 23.06</Caption>
                    </div>
                    <Body className="text-xs">위치 기반 커뮤니티 애플리케이션 프론트엔드 개발</Body>
                </Card>

                {mobileDivider}

                {/* 이력 3 */}
                <Card variant="tile" className="gap-1.5">
                    <div className="flex items-center justify-between">
                        <SubTitle>개인 프리랜서</SubTitle>
                        <Caption>22.09 - 22.12</Caption>
                    </div>
                    <Body className="text-xs">소상공인 맞춤형 브랜드 웹사이트 제작 및 배포</Body>
                </Card>

            </div>
        </Card>
    )
}