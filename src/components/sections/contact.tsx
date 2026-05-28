import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/layout/reveal";
import { siteConfig, socialLinks } from "@/content/site.config";

export function Contact() {
  return (
    <Section id="contact" className="border-t border-border">
      <Reveal>
        <SectionHeading
          eyebrow="Let's talk"
          title="Have a project in mind?"
          description="I'm currently open to senior roles and selective freelance engagements. The fastest way to reach me is email."
          align="center"
          className="mx-auto"
        />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-4">
          <Link href={`mailto:${siteConfig.email}`}>
            <Button size="lg">
              <Mail className="h-4 w-4" />
              {siteConfig.email}
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>

          <ul className="flex items-center gap-2">
            {socialLinks
              .filter((s) => s.label !== "Email")
              .map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                </li>
              ))}
          </ul>

          <p className="mt-2 text-xs text-muted-foreground">
            Based in {siteConfig.location}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
