import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, 'src/stitch_designs');
const DEST_DIR = path.join(__dirname, 'src/pages_gen');

if (!fs.existsSync(DEST_DIR)) {
  fs.mkdirSync(DEST_DIR, { recursive: true });
}

function convertHtmlToJsx(html) {
  // Extract body content. The templates usually have <body ...> ... </body>
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let content = bodyMatch ? bodyMatch[1] : html;
  
  // Remove the script tag to main.jsx if it exists (usually placed at bottom of templates)
  content = content.replace(/<script[^>]*src="[^"]*main\.jsx"[^>]*><\/script>/gi, '');
  content = content.replace(/<div id="root"><\/div>/gi, '');

  content = content.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
  content = content.replace(/class=/g, 'className=');
  content = content.replace(/for=/g, 'htmlFor=');
  content = content.replace(/tabindex=/g, 'tabIndex=');
  content = content.replace(/autocomplete=/g, 'autoComplete=');
  content = content.replace(/autofocus=/g, 'autoFocus=');
  content = content.replace(/readonly=/g, 'readOnly=');
  content = content.replace(/maxlength=/g, 'maxLength=');
  content = content.replace(/minlength=/g, 'minLength=');
  content = content.replace(/stroke-width=/g, 'strokeWidth=');
  content = content.replace(/stroke-linecap=/g, 'strokeLinecap=');
  content = content.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
  content = content.replace(/clip-rule=/g, 'clipRule=');
  content = content.replace(/fill-rule=/g, 'fillRule=');
  content = content.replace(/clip-path=/g, 'clipPath=');

  // Self closing tags
  content = content.replace(/<img([^>]+?)(?<!\/)>/g, '<img$1 />');
  content = content.replace(/<input([^>]+?)(?<!\/)>/g, '<input$1 />');
  content = content.replace(/<br(?:>|\s+[^>]*>)/g, '<br />');
  content = content.replace(/<hr(?:>|\s+[^>]*>)/g, '<hr />');
  content = content.replace(/<source([^>]+?)(?<!\/)>/g, '<source$1 />');

  // Some inline styles correction
  content = content.replace(/style="([^"]*)"/g, (match, p1) => {
    // Basic conversion for style string to object
    const styles = p1.split(';').filter(s => s.trim().length > 0).map(s => {
      let [key, val] = s.split(':');
      if(!key || !val) return '';
      key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      return `${key}: '${val.trim().replace(/'/g, '"')}'`;
    }).join(', ');
    return `style={{${styles}}}`;
  });

  return content;
}

const files = fs.readdirSync(SRC_DIR);

files.forEach(file => {
  if (file.endsWith('.html')) {
    const rawHtml = fs.readFileSync(path.join(SRC_DIR, file), 'utf8');
    const jsxContent = convertHtmlToJsx(rawHtml);
    const componentName = file.replace('.html', '');
    
    const componentCode = `import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ${componentName}() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      ${jsxContent}
    </div>
  );
}
`;
    fs.writeFileSync(path.join(DEST_DIR, `${componentName}.jsx`), componentCode);
    console.log(`Generated ${componentName}.jsx`);
  }
});
