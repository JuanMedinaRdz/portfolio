import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/layout/reveal";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <Section id="experience" className="border-t border-border">
      <Reveal>
        <SectionHeading
          eyebrow="Career"
          title="Experience."
          description="A summary of the teams I've worked with and the impact I delivered."
        />
      </Reveal>

      <ol className="mt-12 space-y-10 border-l border-border pl-6 sm:pl-8">
        {experience.map((item, idx) => (
          <Reveal key={`${item.company}-${item.period}`} delay={idx * 0.05}>
            <li className="relative">
              <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-background bg-foreground sm:-left-[39px]" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {item.role}{" "}
                  <span className="text-muted-foreground">· {item.company}</span>
                </h3>
                <p className="text-sm text-muted-foreground">{item.period}</p>
              </div>

              <p className="mt-3 max-w-2xl text-pretty text-muted-foreground">
                {item.description}
              </p>

              {item.highlights && (
                <ul className="mt-4 max-w-2xl space-y-1.5 text-sm text-muted-foreground">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 before:mt-2 before:h-1 before:w-1 before:flex-none before:rounded-full before:bg-foreground/40"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              {item.stack && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              )}
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
