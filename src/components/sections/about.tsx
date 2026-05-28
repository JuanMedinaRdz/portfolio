import Image from "next/image";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/layout/reveal";
import { education } from "@/content/experience";
import { siteConfig } from "@/content/site.config";

export function About() {
  return (
    <Section id="about">
      <Reveal>
        <SectionHeading eyebrow="About" title="A short intro." />
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-5 md:gap-14">
        <Reveal className="md:col-span-2">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl border border-border bg-muted md:max-w-none">
            <Image
              src={siteConfig.avatarUrl}
              alt={`Portrait of ${siteConfig.name}`}
              fill
              priority
              sizes="(min-width: 768px) 40vw, 80vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="space-y-6 md:col-span-3">
          <Reveal>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;m{" "}
              <span className="text-foreground">{siteConfig.name}</span>, a
              junior software engineer whose main strength is{" "}
              <span className="text-foreground">mobile development</span> with{" "}
              <span className="text-foreground">Flutter</span> — building apps
              from the screen design all the way to working functionality.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;ve also worked on web development and QA automation, and I
              learn by shipping real projects. Lately I&apos;m exploring
              workflow automation with n8n and AI-assisted development. I care
              about writing the kind of code I would be happy to inherit.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Education & Certifications
              </h3>
              <ul className="mt-4 space-y-4">
                {education.map((item) => (
                  <li
                    key={item.title}
                    className="flex flex-col gap-1 border-l-2 border-border pl-4"
                  >
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.institution} · {item.period}
                    </p>
                    {item.description && (
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
