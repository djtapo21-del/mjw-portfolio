import Card from './ui/Card'
import Badge from './ui/Badge'
import Text from './ui/Text'

function AboutCard() {
    return (
        <Card className="md:col-span-2 flex flex-col gap-y-4">

            <Badge text="About Me" />

            <Text variant="title-large">
                안녕하세요, <br className="md:hidden" />
                효율적인 코드를 고민하는 <br />
                <span className="text-brand-blue">홍길동</span>입니다. 👋
            </Text>

            {/* mt-auto를 추가하여 그리드가 강제로 늘린 높이의 하단에 본문이 꽉 차게 붙도록 만듭니다 */}
            <Text variant="text-body" className="mt-auto">
                복잡한 문제를 단순하게 해결하는 과정에서 즐거움을 느낍니다.
                사용자 중심의 직관적인 인터페이스를 만드는 것을 목표로 합니다.
            </Text>

        </Card>
    )
}

export default AboutCard