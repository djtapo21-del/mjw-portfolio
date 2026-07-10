// src/App.tsx
import ContactCard from './components/ContactCard'
import AboutCard from './components/AboutCard'
import SkillsCard from './components/SkillsCard'
import ProjectCard from './components/ProjectCard' // s 없이 수입
import { Label } from './components/ui/Text'

export default function App() {
  return (
    <div className="min-h-screen bg-page-bg p-4 md:p-12 flex flex-col items-center justify-start gap-y-16 w-full">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">
        <ContactCard />
        <AboutCard />
        <SkillsCard />
        <ProjectCard />   {/* s 없이 호출 완료 (에러 발생 안 함!) */}
      </div>

      <footer className="mt-auto">
        <Label className="text-zinc-700 normal-case tracking-normal">
          © 2026 Designed & Built by Hong Gil Dong
        </Label>
      </footer>
    </div>
  )
}