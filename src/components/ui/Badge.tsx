// src/components/ui/Badge.tsx 최종본
interface BadgeProps {
    text: string
}

function Badge({ text }: BadgeProps) {
    return (
        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 self-start">
            {text}
        </span>
    )
}

export default Badge