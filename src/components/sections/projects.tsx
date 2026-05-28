import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/brand-icons";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/layout/reveal";
import { featuredProjects } from "@/content/projects";

export function Projects() {
  return (
    <Section id="projects" className="border-t border-border">
      <Reveal>
        <SectionHeading
          eyebrow="Selected work"
          title="Projects."
          description="A handful of products and systems I've designed, shipped or led."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project, idx) => (
          <Reveal key={project.slug} delay={idx * 0.05}>
            <Card className="group flex h-full flex-col overflow-hidden hover:border-foreground/30">
              <div
                className="relative aspect-[16/9] w-full overflow-hidden bg-muted"
                aria-hidden
              >
                {project.image && !project.image.endsWith(".svg") ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--muted))_0%,hsl(var(--background))_100%)]" />
                    <div className="absolute inset-0 flex items-center justify-center font-mono text-sm text-muted-foreground/70">
                      {project.title}
                    </div>
                  </>
                )}
              </div>

              <CardContent className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {project.year}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-3 pt-2">
                  {project.links?.live && (
                    <Link
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:underline"
                    >
                      Live <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                  {project.links?.repo && (
                    <Link
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <GithubIcon className="h-3.5 w-3.5" /> Code
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
