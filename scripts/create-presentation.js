import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const name = process.argv[2];

if (!name) {
  console.error('Usage: npm run new <presentation-name>');
  console.error('Example: npm run new my-new-presentation');
  process.exit(1);
}

// Validate name (only lowercase, numbers, and hyphens)
if (!/^[a-z0-9-]+$/.test(name)) {
  console.error('Error: Presentation name should only contain lowercase letters, numbers, and hyphens');
  process.exit(1);
}

const rootDir = path.resolve(__dirname, '..');
const src = path.join(rootDir, 'presentations', 'template');
const dest = path.join(rootDir, 'presentations', name);

// Check if destination already exists
if (fs.existsSync(dest)) {
  console.error(`Error: Presentation "${name}" already exists`);
  process.exit(1);
}

// Copy template to new presentation
fs.cpSync(src, dest, { recursive: true });

// Update the title in slides.md
const slidesPath = path.join(dest, 'slides.md');
let slidesContent = fs.readFileSync(slidesPath, 'utf8');
slidesContent = slidesContent.replace('title: 프레젠테이션 제목', `title: ${name}`);
slidesContent = slidesContent.replace('# 프레젠테이션 제목', `# ${name}`);
fs.writeFileSync(slidesPath, slidesContent);

console.log(`✅ Created new presentation: presentations/${name}/`);
console.log('');
console.log('Next steps:');
console.log(`  1. Edit presentations/${name}/slides.md`);
console.log(`  2. Add "${name}" to .github/workflows/deploy.yml matrix`);
console.log(`  3. Run: npm run dev -- presentations/${name}/slides.md`);
