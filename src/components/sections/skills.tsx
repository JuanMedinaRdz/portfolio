import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Reveal } from "@/components/layout/reveal";
import { skillCategories, technologies } from "@/content/skills";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  return (
    <Section id="skills" className="border-t border-border">
      <Reveal>
        <SectionHeading
          eyebrow="What I do"
          title="Skills & expertise."
          description="A pragmatic, end-to-end toolkit honed across product, infra and team leadership."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {skillCategories.map((category, idx) => (
          <Reveal key={category.title} delay={idx * 0.05}>
            <Card className="h-full hover:border-foreground/30">
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 before:mt-2 before:h-1 before:w-1 before:flex-none before:rounded-full before:bg-foreground/40"
                    >
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-16">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Technologies
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech.name}>{tech.name}</Badge>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
