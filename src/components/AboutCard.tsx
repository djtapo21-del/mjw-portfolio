// src/components/AboutCard.tsx
import Card from './ui/Card' // IDE가 자동으로 잡아준 경로일 것입니다.
import Badge from './ui/Badge'

function AboutCard() {
    return (
        <Card className="md:col-span-2 flex flex-col justify-between">
            <div>
                <Badge text="About Me" />

                {/* 1. 글로벌 클래스 .title-large 적용 */}
                <h2 className="title-large">
                    안녕하세요, <br className="md:hidden" />
                    효율적인 코드를 고민하는 <br />
                    <span className="text-blue-500">홍길동</span>입니다. 👋
                </h2>
            </div>

            {/* 2. 글로벌 클래스 .text-body 적용 */}
            <p className="text-body">
                복잡한 문제를 단순하게 해결하는 과정에서 즐거움을 느낍니다.
                사용자 중심의 직관적인 인터페이스를 만드는 것을 목표로 합니다.
            </p>
        </Card>
    )
}

export default AboutCard