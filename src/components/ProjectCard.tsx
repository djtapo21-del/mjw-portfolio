// src/components/ProjectCard.tsx
import { useState } from 'react'
import { Card } from './ui/Card'
import { Title, Body } from './ui/Text'
import { Tag } from './ui/Tag'

// 자동 폴백(Fallback) 이미지 검출기
function AutoImage({ src, text, color }: { src: string; text: string; color: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`w-full h-full ${color} rounded-xl flex items-center justify-center`}>
        <span className="text-xs font-bold tracking-widest uppercase">{text}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={text}
      className="w-full h-full object-cover rounded-xl"
      onError={() => setError(true)}
    />
  );
}

export default function ProjectsCard() {
  // 수정 1: 다른 컴포넌트와 동일하게 모바일 디바이더의 자체 마진(my-6) 제거 (부모의 gap으로 간격 조절)
  const mobileDivider = <div className="h-px bg-white/5 md:hidden w-full" />;

  return (
    <Card span={3} gap="medium">

      {/* 1단계 부모 카드 상단 헤더 */}
      <div className="flex flex-col gap-1.5 pb-4 border-b border-white/[0.06]">
        <Title>Featured Projects</Title>
        <Body>React와 Tailwind CSS를 활용한 모던 벤토 그리드 아키텍처 기반의 개인 웹사이트</Body>
      </div>

      {/* 2단계 내부 프로젝트 타일 리스트 */}
      {/* 수정 2: 모바일 환경에서 타일 간격을 주기 위해 gap-6 추가 */}
      <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-4 mt-auto">

        {/* 프로젝트 타일 1 */}
        {/* 수정 3: 복잡했던 패딩(p-0, pb-6 등) 제거 후 Card 기본 규칙(md:p-5)과 flex gap-4 활용 */}
        <Card variant="tile" className="flex flex-col gap-4">
          <div className="w-full aspect-video shrink-0 overflow-hidden block rounded-xl">
            <AutoImage
              src="/projects/portfolio.webp"
              text="PORTFOLIO"
              color="bg-tag-blue/10 border border-tag-blue/20 text-tag-blue"
            />
          </div>
          {/* 텍스트 영역의 중복 패딩 제거 */}
          <div className="flex-1 flex flex-col justify-between text-left gap-3">
            <div className="flex flex-col gap-y-1.5">
              <Title className="text-base leading-snug line-clamp-1">나만의 포트폴리오 제작</Title>
              <div className="flex flex-wrap gap-1.5">
                <Tag color="zinc">HTML</Tag>
                <Tag color="blue">CSS</Tag>
                <Tag color="yellow">JS</Tag>
                <Tag color="zinc">Git Page</Tag>
              </div>
              <Body className="line-clamp-2 mt-1">React와 Tailwind CSS를 활용한 모던 벤토 그리드 아키텍처 기반의 개인 웹사이트</Body>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto pt-2">
              <a
                href="https://github.com/djtapo21-del/KNationalPark-Personal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1.5 group/link w-fit"
              >
                <span className="text-xs font-bold text-brand-high group-hover/link:text-white transition-colors duration-300">
                  GitHub 코드 보기 →
                </span>
              </a>
              <a
                href="https://www.knps.or.kr/portal/main.do"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1.5 group/link w-fit"
              >
                <span className="text-xs font-bold text-brand-mid group-hover/link:text-white transition-colors duration-300">
                  기존 사이트 보기 →
                </span>
              </a>
            </div>
          </div>
        </Card>

        {mobileDivider}

        {/* 프로젝트 타일 2 */}
        <Card variant="tile" className="flex flex-col gap-4">
          <div className="w-full aspect-video shrink-0 overflow-hidden block rounded-xl">
            <AutoImage
              src="/projects/weather.webp"
              text="WEATHER"
              color="bg-tag-sky/10 border border-tag-sky/20 text-tag-sky"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between text-left gap-3">
            <div className="flex flex-col gap-y-1.5">
              <Title className="text-base leading-snug line-clamp-1">날씨 가이드 서비스</Title>
              <div className="flex flex-wrap gap-1.5">
                <Tag color="sky">Figma</Tag>
                <Tag color="zinc">TypeScript</Tag>
                <Tag color="zinc">API</Tag>
              </div>
              <Body className="line-clamp-2 mt-1">OpenWeather API를 연동하여 실시간 기상 정보와 의상 추천 기능을 제공하는 웹 앱</Body>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto pt-2">
              <a
                href="https://github.com/username/weather-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1.5 group/link w-fit"
              >
                <span className="text-xs font-bold text-brand-high group-hover/link:text-white transition-colors duration-300">
                  GitHub 코드 보기 →
                </span>
              </a>
              <a
                href="https://youtube-music-mu-one.vercel.app/#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1.5 group/link w-fit"
              >
                <span className="text-xs font-bold text-brand-mid group-hover/link:text-white transition-colors duration-300">
                  기존 사이트 보기 →
                </span>
              </a>
            </div>
          </div>
        </Card>

        {mobileDivider}

        {/* 프로젝트 타일 3 */}
        <Card variant="tile" className="flex flex-col gap-4">
          <div className="w-full aspect-video shrink-0 overflow-hidden block rounded-xl">
            <AutoImage
              src="/projects/links.webp"
              text="LINKS"
              color="bg-tag-purple/10 border border-tag-purple/20 text-tag-purple"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between text-left gap-3">
            <div className="flex flex-col gap-y-1.5">
              <Title className="text-base leading-snug line-clamp-1">링크 모음 대시보드</Title>
              <div className="flex flex-wrap gap-1.5">
                <Tag color="zinc">HTML5</Tag>
                <Tag color="zinc">CSS3</Tag>
                <Tag color="zinc">JavaScript</Tag>
              </div>
              <Body className="line-clamp-2 mt-1">자주 사용하는 사이트 링크를 카테고리별로 관리하고 공유할 수 있는 유틸리티</Body>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto pt-2">
              <a
                href="https://github.com/username/links-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-1.5 group/link w-fit"
              >
                <span className="text-xs font-bold text-brand-high group-hover/link:text-white transition-colors duration-300">
                  GitHub 코드 보기 →
                </span>
              </a>
              <a
                href="https://username.github.io/links"
                target="_blank"
                rel="noopener noreferrer"
                // 수정 4: 기존에 있던 불필요한 mt-1 클래스를 제거하여 다른 링크 버튼들과 높이 맞춤
                className="flex items-center gap-x-1.5 group/link w-fit"
              >
                <span className="text-xs font-bold text-brand-mid group-hover/link:text-white transition-colors duration-300">
                  기존 사이트 보기 →
                </span>
              </a>
            </div>
          </div>
        </Card>

      </div>
    </Card>
  )
}