# Prep for Google Associate Cloud Engineer Certification  

## Usage

Clone the repo, then just open `index.html` in a browser.  

The main page lists question-answer pairs. Each question has tags that you can click on to filter by that tag. References to answers will be available in the answers. Answers may reference other question-answer pairs, and clicking on the link should take you to it.     

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
