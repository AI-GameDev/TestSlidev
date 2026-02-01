# CLAUDE.md

This file provides guidance for Claude Code when working in this repository.

## Project Overview

This is a multi-presentation Slidev project. Each presentation is stored in its own folder under `presentations/` and automatically deployed to GitHub Pages via GitHub Actions.

## Project Structure

```
/slidev/
├── presentations/           # All presentations
│   ├── comfyui/            # Example presentation
│   │   ├── slides.md       # Slide content
│   │   └── public/images/  # Images for this presentation
│   └── template/           # Template for new presentations
├── shared/                  # Shared resources
│   ├── components/         # Vue components
│   └── styles/             # CSS styles
├── scripts/                 # Utility scripts
│   └── create-presentation.js
├── docs/                    # Documentation
└── .github/workflows/       # GitHub Actions
```

## Common Commands

```bash
# Start dev server (default: comfyui)
pnpm dev

# Start dev server for specific presentation
pnpm slidev presentations/<name>/slides.md --open

# Create new presentation
pnpm new <presentation-name>

# Build for production
pnpm build

# Export to PDF
pnpm export
```

## Creating a New Presentation

1. Run `pnpm new my-presentation`
2. Edit `presentations/my-presentation/slides.md`
3. Add presentation name to `.github/workflows/deploy.yml` matrix:
   ```yaml
   matrix:
     presentation: [comfyui, my-presentation]
   ```
4. Push to `main` branch to deploy

## Critical Configuration Notes

### routerMode: 'hash' (REQUIRED)
Every presentation's frontmatter MUST include `routerMode: 'hash'` for GitHub Pages:
```yaml
---
routerMode: 'hash'
---
```
Without this, direct URL access will return 404 errors.

### Image Paths
- Store images in `presentations/<name>/public/images/`
- Reference with absolute path: `/images/filename.png`
- GitHub Actions automatically fixes paths for subdirectory deployment

### Frontmatter Template
```yaml
---
theme: light-icons
routerMode: 'hash'
title: Presentation Title
transition: slide-left
mdc: true
aspectRatio: '16/9'
canvasWidth: 980
layout: intro
---
```

## GitHub Pages Deployment

- Automatic deployment on push to `main` branch
- Each presentation gets its own URL: `https://<user>.github.io/<repo>/<presentation>/`
- Index page at root lists all presentations
- Matrix build: each presentation builds independently

## Slide Syntax

### Slide Separator
Use `---` to separate slides:
```markdown
---
layout: intro
---
# Slide Title

---

# Next Slide
```

### Common Layouts
- `default` - Standard layout
- `intro` - Title/intro slide
- `center` - Centered content
- `image-right` / `image-left` - Image with text
- `two-cols` - Two column layout

### Click Animations
```markdown
<v-clicks>

- Item 1
- Item 2
- Item 3

</v-clicks>
```

### Code Blocks with Highlighting
````markdown
```python {2-3}
def hello():
    print("Hello")  # highlighted
    return True     # highlighted
```
````

### Image Layouts
Use image in frontmatter for background images:
```yaml
---
layout: dynamic-image
image: /images/my-image.png
---
```

### Mermaid Diagrams
````markdown
```mermaid
flowchart LR
    A[Start] --> B[Process]
    B --> C[End]
```
````

## Troubleshooting

### Local vs Production Environment

| Item | Local | Production |
|------|-------|------------|
| URL format | `localhost:3030/1` | `...github.io/repo/name/#/1` |
| Image paths | `/images/...` | Auto-converted |
| Router mode | history | hash (required) |

### Images not showing
1. Check path is `/images/filename.png` (absolute)
2. Verify file exists in `presentations/<name>/public/images/`
3. Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R)

### Build failures
1. Check GitHub Actions logs
2. Verify `slides.md` has valid YAML frontmatter
3. Ensure all referenced images exist

### 404 errors on direct URL access
1. Confirm `routerMode: 'hash'` is in frontmatter
2. URLs should look like `.../#/1` not `.../1`
