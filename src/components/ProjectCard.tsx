import Card from './ui/Card'
import Badge from './ui/Badge'
import Text from './ui/Text'
import heroImage from '../assets/hero.png'

interface ProjectCardProps {
  title: string
  desc: string
  image: string
  link: string
  badge?: string
}

function ProjectCard({ title, desc, image, link, badge = 'Project' }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-[26rem] gap-y-3">

      <Badge text={badge} />

      <a href={link} target="_blank" rel="noopener noreferrer" className="block group/title">
        <Text variant="title-large" className="text-xl line-clamp-1 group-hover/title:text-brand-blue transition-colors duration-300">
          {title}
        </Text>
      </a>

      <p className="text-body line-clamp-2">
        {desc}
      </p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-brand-blue font-semibold inline-flex items-center gap-1 hover:underline hover:text-blue-400 transition-colors duration-300"
      >
        자세히 보기 ↗
      </a>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full aspect-video overflow-hidden rounded-xl border border-white/10 block group hover:border-brand-blue transition-colors duration-300 mt-auto shrink-0"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </a>

    </Card>
  )
}

export default ProjectCard