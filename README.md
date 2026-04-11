# Prep for Google Associate Cloud Engineer Certification  

## How to Use

Navigate to https://roshmadosh.github.io/google-associate-cloud-engineer-prep/ to view the static site.  

You can also open `index.html` in a browser from a local installation of the repo.  

## How to Update

### 1. Update Content

**Flashcards/Questions**: Edit `questions.md`. Follow the existing format with `---` separators and the following keys:  
- `id` for cross-referencing questions (optional)
- `question`
- `answer`
- `refs` as an array of strings for reference URLs (i.e. documentation)
- `tags` as an array of hyphen-delimited strings in all lowercase.  

If you want to reference different question in an answer, you can do so by `id` using the following notation:  

```
[label](#id)
```
 
**Links**: Edit `links.json` to add or modify the URLs shown on the links page.

### 2. Regenerate Pages

After making changes to the source files, run the following command:  

```bash
npm run build
```

This will execute `generate.js` and refresh the static HTML files.
