# Image assets

This folder holds all visual assets served from the public route.

## Conventions

- **Format:** WebP for everything except Open Graph cards (PNG/JPG for social-network compatibility).
- **Naming:** kebab-case, descriptive (`platform-rebuild.webp`, not `proj1.webp`).
- **Optimization:** keep portraits/cards under 200 KB; project screenshots under 350 KB.

## Folders

| Path                       | Purpose                                  | Recommended size       |
| -------------------------- | ---------------------------------------- | ---------------------- |
| `images/avatar.webp`       | Main portrait used in About / Hero.      | 800×800 (square)       |
| `images/projects/*.webp`   | Project screenshots / mockups.           | 1600×1000 (16:10)      |
| `images/og/cover.png`      | Default Open Graph card.                 | 1200×630               |
| `images/logos/*.webp`      | Company or technology logos.             | 256×256 max            |

## How to add the avatar

Place your portrait at `public/images/avatar.webp`. It will automatically appear in the About section through `siteConfig.avatarUrl`.
