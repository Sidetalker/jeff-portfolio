import type React from "react"
interface SkillBadgeProps {
  children: React.ReactNode
}

export function SkillBadge({ children }: SkillBadgeProps) {
  return <span className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">{children}</span>
}
