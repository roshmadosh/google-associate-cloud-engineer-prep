# Prep for Google Associate Cloud Engineer Certification  

## How to Update

The pages are generated from source files using a build script.

### 1. Update Content

- **Flashcards/Questions**: Edit `ESSENTIAL_GC_INFRA_FOUNDATION.md`. Follow the existing format with `---` separators and `question:`, `answer:`, etc.
- **Links**: Edit `links.json` to add or modify the URLs shown on the links page.

### 2. Regenerate Pages

After making changes to the source files, run the following command to update `index.html` and `links.html`:

```bash
npm run build
```

This will execute `generate.js` and refresh the static HTML files.
# google-associate-cloud-engineer-prep
