import Card from './ui/Card'
import Badge from './ui/Badge'
import Text from './ui/Text'

function ContactCard() {
  return (
    /* 내부 div 2개를 모두 없앴습니다 */
    <Card className="flex flex-col gap-y-4">
      <Badge text="Contact" />

      <Text variant="title-large" className="text-lg">
        함께 성장하기
      </Text>

      {/* 연락처 링크들은 묶어두는 것이 맞지만, 코드를 더 단순화하기 위해 gap 통일에 맡깁니다 */}
      <a href="mailto:your-email@gmail.com" className="text-sm text-zinc-400 hover:text-brand-blue transition-colors duration-300 flex items-center gap-2">
        ✉️ your-email@gmail.com
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-brand-blue transition-colors duration-300 flex items-center gap-2">
        🐙 GitHub 바로가기
      </a>
      <a href="https://blog.naver.com" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-brand-blue transition-colors duration-300 flex items-center gap-2">
        📝 기술 블로그
      </a>
    </Card>
  )
}

export default ContactCard