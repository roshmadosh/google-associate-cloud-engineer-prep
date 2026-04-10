const fs = require('fs');
const path = require('path');

function parseMD(content) {
  // Split by --- and filter out empty blocks or header
  const blocks = content.split(/---\s*\n/).filter(b => b.trim().length > 0 && !b.includes('A list of question-answer pairs'));
  
  return blocks.map(block => {
    const lines = block.split('\n');
    const result = { id: '', question: '', answer: '', refs: [], tags: [] };
    
    let currentKey = '';
    
    lines.forEach(line => {
      const trimmed = line.trim();
      if (!trimmed) return;
      
      const match = trimmed.match(/^([a-z]+):\s*(.*)/i);
      if (match) {
        currentKey = match[1].toLowerCase();
        let value = match[2].trim();
        
        if (currentKey === 'refs' || currentKey === 'tags') {
          // Handle [ "a", "b" ]
          const listMatch = value.match(/\[(.*)\]/);
          if (listMatch) {
            result[currentKey] = listMatch[1].split(',').map(s => s.trim().replace(/^"(.*)"$/, '$1')).filter(s => s);
          }
        } else {
          result[currentKey] = value;
        }
      } else if (currentKey && currentKey !== 'refs' && currentKey !== 'tags') {
        result[currentKey] += ' ' + trimmed;
      }
    });

    // Clean up quotes from start/end of question and answer
    ['question', 'answer', 'id'].forEach(key => {
      if (result[key].startsWith('"')) {
        // Find the last quote if it exists
        if (result[key].endsWith('"')) {
          result[key] = result[key].substring(1, result[key].length - 1);
        } else {
          result[key] = result[key].substring(1);
        }
      }
    });

    return result;
  }).filter(q => q.question || q.answer);
}

const inputPath = path.join(__dirname, 'ESSENTIAL_GC_INFRA_FOUNDATION.md');
if (!fs.existsSync(inputPath)) {
  console.error('Input file not found:', inputPath);
  process.exit(1);
}

const content = fs.readFileSync(inputPath, 'utf8');
const questions = parseMD(content);

const templatePath = path.join(__dirname, 'template.html');
if (!fs.existsSync(templatePath)) {
  console.error('Template file not found:', templatePath);
  process.exit(1);
}

let html = fs.readFileSync(templatePath, 'utf8');
html = html.replace('__QUESTIONS_JSON__', JSON.stringify(questions, null, 2));

fs.writeFileSync(path.join(__dirname, 'index.html'), html);
console.log(`Generated index.html with ${questions.length} questions.`);

// Generate links.html
const linksPath = path.join(__dirname, 'links.json');
const linksTemplatePath = path.join(__dirname, 'links_template.html');

if (fs.existsSync(linksPath) && fs.existsSync(linksTemplatePath)) {
  const linksData = JSON.parse(fs.readFileSync(linksPath, 'utf8'));
  let linksHtml = fs.readFileSync(linksTemplatePath, 'utf8');
  
  const linksListHtml = Object.entries(linksData).map(([title, url]) => `
            <div class="link-card">
                <div class="link-title">${title}</div>
                <a href="${url}" target="_blank">${url}</a>
            </div>`).join('');
            
  linksHtml = linksHtml.replace('__LINKS__', linksListHtml);
  fs.writeFileSync(path.join(__dirname, 'links.html'), linksHtml);
  console.log(`Generated links.html with ${Object.keys(linksData).length} links.`);
} else {
  console.warn('links.json or links_template.html not found, skipping links generation.');
}
