// src/App.tsx
import AboutCard from './components/AboutCard'
import ContactCard from './components/ContactCard'
import SkillsCard from './components/SkillsCard'
import ProjectsCard from './components/ProjectsCard'

function App() {
  return (
    <div className="min-h-screen bg-black p-8 flex items-center justify-center">
      {/* 
        Bento Grid 레이아웃 매니저:
        이제 App.tsx는 디자인이나 데이터를 전혀 모른 채,
        오직 '카드를 배치하는 역할'만 수행하는 가장 깨끗한 상태가 되었습니다.
      */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
        <AboutCard />
        <ContactCard />
        <SkillsCard />
        <ProjectsCard />
      </div>
    </div>
  )
}

export default App