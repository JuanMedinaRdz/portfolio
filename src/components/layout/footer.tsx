import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig, socialLinks } from "@/content/site.config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div>
          <p className="font-medium text-foreground">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            © {new Date().getFullYear()} — Built with Next.js & Tailwind.
          </p>
        </div>

        <ul className="flex items-center gap-2">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <Link
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
