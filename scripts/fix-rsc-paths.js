import fs from 'fs';
import path from 'path';

const outDir = path.resolve('out');

function processDir(currentDir) {
  if (!fs.existsSync(currentDir)) return;
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '__next.projects') {
        const slugDir = path.join(fullPath, '$d$slug');
        if (fs.existsSync(slugDir)) {
          const pageTxt = path.join(slugDir, '__PAGE__.txt');
          if (fs.existsSync(pageTxt)) {
            const target = path.join(currentDir, '__next.projects.$d$slug.__PAGE__.txt');
            fs.copyFileSync(pageTxt, target);
            console.log(`Copied RSC payload to ${target}`);
          }
        }
      } else {
        processDir(fullPath);
      }
    }
  }
}

processDir(outDir);
console.log('RSC static path mapping complete.');