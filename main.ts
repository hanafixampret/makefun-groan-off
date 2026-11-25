import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I told my plants a joke yesterday. Now they're all rooting for me.";

if (entry.length < 1 || entry.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars to /output/entry.txt`);
