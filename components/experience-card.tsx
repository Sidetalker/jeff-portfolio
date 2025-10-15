interface ExperienceCardProps {
  title: string
  company: string
  period: string
  duration: string
  location?: string
  description: string
  skills: string[]
}

export function ExperienceCard({
  title,
  company,
  period,
  duration,
  location,
  description,
  skills,
}: ExperienceCardProps) {
  return (
    <article className="border-l-2 border-primary pl-6">
      <h3 className="mb-1 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mb-1 text-base font-medium text-foreground">{company}</p>
      <div className="mb-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <span>{period}</span>
        <span>·</span>
        <span>{duration}</span>
        {location && (
          <>
            <span>·</span>
            <span>{location}</span>
          </>
        )}
      </div>
      <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
            {skill}
          </span>
        ))}
      </div>
    </article>
  )
}
