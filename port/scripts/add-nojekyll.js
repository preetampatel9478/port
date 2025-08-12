/* eslint-disable */
// Node script to add .nojekyll to the out directory for GitHub Pages
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

try {
  fs.mkdirSync(outDir, { recursive: true });
  const nojekyllPath = path.join(outDir, '.nojekyll');
  fs.writeFileSync(nojekyllPath, '');
  console.log('Created', nojekyllPath);
} catch (err) {
  console.error('Failed to create .nojekyll:', err);
  process.exit(1);
}
