// src/components/ContactCard.tsx
import { Card } from './ui/Card'
import { Body, SubTitle, Label, Caption } from './ui/Text'

export default function ContactCard() {
  const mobileDivider = <div className="h-px bg-white/5 md:hidden w-full" />;

  return (
    <Card span={2}>
      {/* 1. 상단 메인 인사말 */}
      <div className="flex flex-col gap-3 pb-4 border-b border-white/[0.06]">
        <h1 className="text-2xl md:text-3xl font-semibold text-white tracking-wide leading-tight">
          사용자 경험을 코드로 설계하는 <br />
          <span className="text-brand-high">홍길동</span>입니다. 👋
        </h1>
        <Body>
          복잡한 비즈니스 로직을 직관적인 UI로 풀어내는 것을 좋아하며,
          디자인 감각을 바탕으로 픽셀 단위까지 완성도 있는 결과물을 만들어냅니다.
        </Body>
      </div>

      {/* 2. 하단 리스트 그리드 (수기 패딩 p-5를 완전히 지워 끝선 정렬 동기화) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">

        {/* 인적 사항 타일 */}
        <Card variant="tile">
          <div className="flex flex-col gap-y-3.5">
            <div className="flex flex-col gap-y-0.5">
              <Label>Birth</Label>
              <SubTitle>1999. 05. 20</SubTitle>
            </div>
            <div className="flex flex-col gap-y-0.5">
              <Label>Location</Label>
              <SubTitle>부산광역시 수영구</SubTitle>
            </div>
            <div className="flex flex-col gap-y-0.5">
              <Label>Military</Label>
              <SubTitle>군필 (공군 병장 만기전역)</SubTitle>
            </div>
            <div className="flex flex-col gap-y-0.5">
              <Label>Education</Label>
              <SubTitle className="leading-snug">한국폴리텍대학 섬유패션캠퍼스</SubTitle>
              <Caption>텍스타일컬러디자인과 | 2018.02 졸업</Caption>
            </div>
            <div className="flex flex-col gap-y-0.5">
              <Label>Job Status</Label>
              <SubTitle>신입 / 정규직 희망</SubTitle>
            </div>
          </div>
        </Card>

        {mobileDivider}

        {/* 오른쪽 영역 */}
        <div className="flex flex-col gap-4">
          {/* 자격증 타일 */}
          <Card variant="tile" className="flex-1">
            <div className="flex flex-col gap-3">
              <Label>Certificates</Label>
              <div className="flex items-center justify-between">
                <SubTitle>컴퓨터그래픽스운용기능사</SubTitle>
                <Caption>2015.12</Caption>
              </div>
              <div className="flex items-center justify-between">
                <SubTitle>웹디자인기능사</SubTitle>
                <Caption>2015.11</Caption>
              </div>
              <div className="flex items-center justify-between">
                <SubTitle>전자출판기능사</SubTitle>
                <Caption>2015.09</Caption>
              </div>
              <div className="flex items-center justify-between">
                <SubTitle>섬유디자인산업기사</SubTitle>
                <Caption>2017.08</Caption>
              </div>
            </div>
          </Card>

          {mobileDivider}

          {/* 연락처 타일 */}
          <Card variant="tile">
            <div className="flex flex-col gap-3">
              <Label>Contact Channel</Label>
              <div className="flex flex-col gap-y-3.5 pt-1.5">
                <a
                  href="mailto:email@gmail.com"
                  className="flex items-center gap-x-3 text-text-body hover:text-white transition-colors duration-300"
                >
                  <span className="text-base leading-none shrink-0">📧</span>
                  <Body className="font-semibold text-text-body hover:text-white transition-colors duration-300">
                    email@gmail.com
                  </Body>
                </a>
                <a
                  href="tel:010-1234-5678"
                  className="flex items-center gap-x-3 text-text-body hover:text-white transition-colors duration-300"
                >
                  <span className="text-base leading-none shrink-0">📱</span>
                  <Body className="font-semibold text-text-body hover:text-white transition-colors duration-300">
                    010-1234-5678
                  </Body>
                </a>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </Card>
  )
}