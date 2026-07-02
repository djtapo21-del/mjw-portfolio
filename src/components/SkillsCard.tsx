// src/components/SkillsCard.tsx
import Card from './ui/Card'
import Badge from './ui/Badge'
import Text from './ui/Text'
import Tag from './ui/Tag' // 1. 공통 태그 컴포넌트 불러오기

function SkillsCard() {
    return (
        <Card className="flex flex-col justify-between">
            <div>
                <Badge text="Skills" />
                <Text variant="title-large" className="text-lg mt-2">
                    주요 기술 스택
                </Text>
            </div>

            {/* 2. 기존 복잡한 span 태그들 대신 우리가 만든 <Tag> 적용! */}
            <div className="flex flex-wrap gap-2 mt-4">
                <Tag color="blue">React</Tag>
                <Tag color="yellow">TypeScript</Tag>
                <Tag color="sky">Tailwind CSS</Tag>
                <Tag color="green">Node.js</Tag>
                <Tag color="purple">Redux</Tag>
                <Tag color="zinc">Git</Tag>
            </div>
        </Card>
    )
}

export default SkillsCard