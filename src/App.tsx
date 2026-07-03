import AboutCard from './components/AboutCard'
import ContactCard from './components/ContactCard'
import SkillsCard from './components/SkillsCard'
import ProjectCard from './components/ProjectCard'
import Card from './components/ui/Card'
import Badge from './components/ui/Badge'
import Text from './components/ui/Text'
import heroImage from './assets/hero.png'

function App() {
  return (
    <div className="min-h-screen bg-page-bg p-8 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">

        {/* 1층 */}
        <AboutCard />
        <ContactCard />

        {/* 2층 */}
        <SkillsCard />
        <ProjectCard
          title="나만의 포트폴리오 제작"
          desc="React와 Tailwind CSS를 활용한 모던 Bento Grid 아키텍처 포트폴리오"
          image={heroImage}
          link="https://your-portfolio-link.com"
          badge="Featured"
        />
        <ProjectCard
          title="투두 매니저 (Todo App)"
          desc="TypeScript와 로컬스토리지를 활용하여 할 일을 체계적으로 관리하는 앱"
          image={heroImage}
          link="https://your-todo-link.com"
          badge="Web App"
        />

        {/* 3층 */}
        <ProjectCard
          title="날씨 가이드 (Weather)"
          desc="OpenWeather API를 사용해 전 세계 날씨 정보를 실시간으로 조회하는 사이트"
          image={heroImage}
          link="https://your-weather-link.com"
          badge="API Project"
        />
        <ProjectCard
          title="링크 모음 대시보드"
          desc="개발용 자주 쓰는 사이트 링크들을 카테고리별로 정리한 북마크 서비스"
          image={heroImage}
          link="https://your-bookmark-link.com"
          badge="Utility"
        />

        {/* 빈 공간 채우기 카드 */}
        <Card className="flex flex-col h-full gap-y-3">
          <Badge text="Next" />
          <Text variant="title-large" className="text-xl text-zinc-500">
            새로운 프로젝트 준비 중
          </Text>
          <Text variant="text-body" className="text-xs text-zinc-600 line-clamp-2">
            더 멋진 서비스로 채워질 공간입니다.
          </Text>
          <div className="text-zinc-700 text-3xl font-extrabold self-end mt-auto">🚀</div>
        </Card>

      </div>
    </div>
  )
}

export default App