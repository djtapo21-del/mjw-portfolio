// src/components/ProjectCard.tsx
import { Card } from './ui/Card'
import { Title, Body } from './ui/Text'
import { Tag } from './ui/Tag'
import FallbackImage from './ui/FallbackImage'

interface ProjectLink {
  label: string
  href: string
  variant: 'primary' | 'secondary'
}

interface ProjectData {
  title: string
  description: string
  thumbnail: string
  fallbackText: string
  fallbackColor: string
  tags: { label: string; color: 'blue' | 'yellow' | 'sky' | 'green' | 'purple' | 'pink' | 'zinc' }[]
  links: ProjectLink[]
  thumbnailHref: string
}

const projects: ProjectData[] = [
  {
    title: "국립공원공단",
    description: "편리한 예약 시스템과 공원 정보를 지도로 한눈에 확인할 수 있는 국립공원공단 웹사이트",
    thumbnail: "/projects/project01.png",
    fallbackText: "PORTFOLIO",
    fallbackColor: "bg-tag-blue/10 border border-tag-blue/20 text-tag-blue",
    tags: [
      { label: "HTML", color: "zinc" },
      { label: "CSS", color: "blue" },
      { label: "JS", color: "yellow" },
      { label: "Git Page", color: "zinc" },
    ],
    links: [
      {
        label: "GitHub 코드 보기 →",
        href: "https://github.com/djtapo21-del/KNationalPark-Personal",
        variant: "primary",
      },
      {
        label: "기존 사이트 보기 →",
        href: "https://www.knps.or.kr/portal/main.do",
        variant: "secondary",
      },
    ],
    thumbnailHref: "https://djtapo21-del.github.io/KNationalPark-Personal/",
  },
  {
    title: "유튜브 뮤직",
    description: "유튜브 API를 연동하여 실시간 인기 뮤직비디오 정보와 음악을 제공하는 웹 앱",
    thumbnail: "/projects/project02.png",
    fallbackText: "WEATHER",
    fallbackColor: "bg-tag-sky/10 border border-tag-sky/20 text-tag-sky",
    tags: [
      { label: "HTML", color: "zinc" },
      { label: "CSS", color: "blue" },
      { label: "JS", color: "yellow" },
      { label: "Vercel", color: "zinc" },
      { label: "API", color: "zinc" },
    ],
    links: [
      {
        label: "GitHub 코드 보기 →",
        href: "https://github.com/djtapo21-del/YoutubeMusic",
        variant: "primary",
      },
    ],
    thumbnailHref: "https://youtube-music-mu-one.vercel.app/",
  },
  {
    title: "SK 텔레콤",
    description: "공식 사이트를 분석하여 반응형 레이아웃과 UI 컴포넌트를 동일하게 구현한 클론 프로젝트",
    thumbnail: "/projects/project03.png",
    fallbackText: "LINKS",
    fallbackColor: "bg-tag-purple/10 border border-tag-purple/20 text-tag-purple",
    tags: [
      { label: "HTML", color: "zinc" },
      { label: "CSS", color: "blue" },
      { label: "JS", color: "yellow" },
      { label: "Git Page", color: "zinc" },
    ],
    links: [
      {
        label: "GitHub 코드 보기 →",
        href: "https://github.com/djtapo21-del/Sk-telecom",
        variant: "primary",
      },
      {
        label: "기존 사이트 보기 →",
        href: "https://www.sktelecom.com/",
        variant: "secondary",
      },
    ],
    thumbnailHref: "https://djtapo21-del.github.io/Sk-telecom/",
  },
  {
    title: "던킨 리뉴얼 프로젝트",
    description: "Figma를 활용한 던킨 브랜드 웹사이트 리뉴얼 UI/UX 디자인 프로젝트",
    thumbnail: "/projects/project04.webp",
    fallbackText: "DUNKIN",
    fallbackColor: "bg-tag-pink/10 border border-tag-pink/20 text-tag-pink",
    tags: [
      { label: "Figma", color: "zinc" },
    ],
    links: [
      {
        label: "피그마 디자인 보기 →",
        href: "https://www.figma.com/design/rxy6cxxHAki5IczhGbtPwU/%EB%8D%98%ED%82%A8-%EB%A6%AC%EB%89%B4%EC%96%BC-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=0-1&t=hY0Ud2Xx9XEAbq5f-1",
        variant: "primary",
      },
    ],
    thumbnailHref: "https://www.figma.com/design/rxy6cxxHAki5IczhGbtPwU/%EB%8D%98%ED%82%A8-%EB%A6%AC%EB%89%B4%EC%96%BC-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=0-1&t=hY0Ud2Xx9XEAbq5f-1",
  },
]

export default function ProjectsCard() {
  return (
    <Card span={3} gap="medium">

      {/* ── 헤더 ── */}
      <div className="flex flex-col gap-1.5 pb-4 border-b border-white/[0.06]">
        <Title>프로젝트</Title>
      </div>

      {/* ── 프로젝트 타일 목록 ── */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-4 mt-auto">
        {projects.map((project, idx) => (
          <Card key={idx} variant="tile" className="flex flex-col gap-4 cursor-pointer hover:border-white/30 hover:bg-white/[0.05]">
            <a href={project.thumbnailHref} target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative w-full aspect-video shrink-0 overflow-hidden block rounded-xl">
                <FallbackImage
                  src={project.thumbnail}
                  alt={project.fallbackText}
                  fallbackText={project.fallbackText}
                  fallbackColor={project.fallbackColor}
                  className="w-full h-full rounded-xl"
                  containerClassName="rounded-xl"
                />
              </div>
            </a>
            <div className="flex-1 flex flex-col justify-start text-left gap-3">
              <div className="flex flex-col gap-y-1.5">
                <Title className="text-base leading-snug line-clamp-1">{project.title}</Title>
                <Body className="line-clamp-2 mt-1">{project.description}</Body>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, i) => (
                  <Tag key={i} color={tag.color}>{tag.label}</Tag>
                ))}
              </div>

              <div className="hidden md:flex flex-wrap gap-x-4 gap-y-2 mt-auto pt-2">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-1.5 group/link w-fit"
                  >
                    <span className={`text-xs font-bold ${link.variant === 'primary' ? 'text-brand-high' : 'text-brand-mid'} group-hover/link:text-white`}>
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  )
}