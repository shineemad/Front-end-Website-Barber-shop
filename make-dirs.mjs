import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

const base = fileURLToPath(new URL(".", import.meta.url));
const mkdir = (d) => mkdirSync(join(base, d), { recursive: true });

[
  "src",
  "src/components/ui",
  "src/components/layout",
  "src/components/sections",
  "src/constants",
  "src/utils",
  "src/hooks",
  "public",
].forEach(mkdir);

console.log("✓ Directories created");
