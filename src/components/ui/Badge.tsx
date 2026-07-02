// src/components/Badge.tsx
interface BadgeProps {
    text: string
}

function Badge({ text }: BadgeProps) {
    return (
        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 block">
            {text}
        </span>
    )
}

export default Badge