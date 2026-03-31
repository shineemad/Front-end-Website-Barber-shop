const fs = require("fs");
const path = require("path");

const baseDir = path.resolve(__dirname);
const dirs = [
  "src",
  "src/components",
  "src/components/ui",
  "src/components/layout",
  "src/components/sections",
  "src/constants",
  "src/utils",
  "src/hooks",
  "public",
];

console.log(`Creating directories in: ${baseDir}\n`);

dirs.forEach((dir) => {
  const fullPath = path.join(baseDir, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✓ Created: ${dir}`);
  } else {
    console.log(`✓ Already exists: ${dir}`);
  }
});

console.log("\nDirectory structure created successfully!\n");
console.log("Verifying directory structure:");
console.log("================================\n");

function listDirs(dir, indent = "") {
  const items = fs.readdirSync(dir).sort();
  items.forEach((item) => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      console.log(`${indent}📁 ${item}/`);
      listDirs(fullPath, indent + "  ");
    }
  });
}

listDirs(baseDir);
