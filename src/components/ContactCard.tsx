// src/components/ContactCard.tsx
import Card from './ui/Card'
import Badge from './ui/Badge'
import Text from './ui/Text' // 1. 공통 텍스트 컴포넌트 불러오기

function ContactCard() {
  return (
    <Card className="flex flex-col justify-between">
      <div>
        <Badge text="Contact" />

        {/* 기존 h3 태그 대신 공통 Text 컴포넌트 적용 (글자 크기만 text-lg로 커스텀) */}
        <Text variant="title-large" className="text-lg mt-2">
          함께 성장하기
        </Text>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <a
          href="mailto:your-email@gmail.com"
          className="text-sm text-zinc-400 hover:text-blue-500 transition-colors duration-300 flex items-center gap-2"
        >
          ✉️ your-email@gmail.com
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-400 hover:text-blue-500 transition-colors duration-300 flex items-center gap-2"
        >
          🐙 GitHub 바로가기
        </a>
        <a
          href="https://blog.naver.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-400 hover:text-blue-500 transition-colors duration-300 flex items-center gap-2"
        >
          📝 기술 블로그
        </a>
      </div>
    </Card>
  )
}

export default ContactCard