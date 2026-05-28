import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/layout/reveal";
import { siteConfig, socialLinks } from "@/content/site.config";

export function Hero() {
  return (
    <Section
      id="home"
      className="hero-grid relative pt-32 sm:pt-40"
      containerClassName="relative"
    >
      <div className="flex max-w-3xl flex-col gap-6">
        <Reveal>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted/40 py-1 pl-1 pr-3 text-xs font-medium text-muted-foreground">
            <Image
              src={siteConfig.avatarUrl}
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 rounded-full border border-border object-cover"
            />
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to junior opportunities
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {siteConfig.name}.<br />
            <span className="text-muted-foreground">{siteConfig.role}.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {siteConfig.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Link href="#projects">
              <Button>
                View work <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href={siteConfig.resumeUrl} target="_blank" rel="noopener">
              <Button variant="secondary">
                <Download className="h-4 w-4" /> Resume
              </Button>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mt-6 flex items-center gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
