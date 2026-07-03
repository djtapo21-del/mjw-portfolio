import Card from './ui/Card'
import Badge from './ui/Badge'
import Text from './ui/Text'
import Tag from './ui/Tag'

function SkillsCard() {
    return (
        /* 내부 div를 없애고 부모가 gap-y-4로 전체 흐름을 통제합니다 */
        <Card className="flex flex-col gap-y-4">

            <Badge text="Skills" />

            <Text variant="title-large" className="text-lg">
                주요 기술 스택
            </Text>

            <div className="flex flex-wrap gap-2">
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