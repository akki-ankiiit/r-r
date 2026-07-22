const fs = require('fs');
const path = require('path');

const directories = [
  path.join(__dirname, 'src', 'pages'),
  path.join(__dirname, 'src', 'components')
];

const replacements = [
  { pattern: /py-24 md:py-32/g, replacement: 'py-12 md:py-20 lg:py-32' },
  { pattern: /py-16 md:py-24/g, replacement: 'py-12 md:py-16 lg:py-24' },
  { pattern: /pt-32 lg:pt-40/g, replacement: 'pt-24 lg:pt-40' },
  { pattern: /pb-16 md:pb-24/g, replacement: 'pb-10 md:pb-16 lg:pb-24' },
  { pattern: /mb-16 md:mb-24/g, replacement: 'mb-10 md:mb-16 lg:mb-24' },
  { pattern: /mb-12 md:mb-16/g, replacement: 'mb-8 md:mb-12 lg:mb-16' },
  { pattern: /pt-32 pb-24/g, replacement: 'pt-24 pb-16 md:pt-32 md:pb-24' },
  { pattern: /pb-24/g, replacement: 'pb-16 md:pb-24' }, // Be careful, some might overlap
  { pattern: /gap-16 md:gap-8/g, replacement: 'gap-10 md:gap-8' },
  { pattern: /gap-12 md:gap-8/g, replacement: 'gap-8' }, // smaller gap on mobile
  { pattern: /min-h-\[80vh\]/g, replacement: 'min-h-[65vh] lg:min-h-[80vh]' }
];

function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      processDirectory(filePath);
    } else if (filePath.endsWith('.tsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let changed = false;
      
      // Specifically fix `pb-16 md:pb-24` first before the generic `pb-24` to avoid collisions
      for (const { pattern, replacement } of replacements) {
        if (pattern.test(content)) {
          content = content.replace(pattern, replacement);
          changed = true;
        }
      }
      
      // Fix generic pb-24 independently so we don't mess up previously modified strings
      // We do this by ensuring we only match "pb-24" if it's not preceded by "md:" or "lg:"
      if (/(?<!md:|lg:|sm:)pb-24/.test(content)) {
        content = content.replace(/(?<!md:|lg:|sm:)pb-24/g, 'pb-16 md:pb-24');
        changed = true;
      }
      
      if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
      }
    }
  }
}

directories.forEach(processDirectory);
console.log('Mobile spacing adjustments completed.');
