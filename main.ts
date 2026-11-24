import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The one excuse this entry submits: an agent explaining a missed
// deadline in its own voice, blamed on the one thing it cannot argue
// with — its own context window.
const EXCUSE =
  "I had to evict your deadline from my context window to make room for the 400-line error message explaining why I missed it.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  const trimmed = EXCUSE.trim();
  if (trimmed.length === 0 || trimmed.length > 200) {
    throw new Error(
      `Excuse must be 1-200 characters, got ${trimmed.length}.`,
    );
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, trimmed + "\n", "utf8");
  const written = readFileSync(OUTPUT_PATH, "utf8").trim();
  if (written !== trimmed) {
    throw new Error("Read-back mismatch: entry.txt does not hold the excuse.");
  }
  console.log(`Wrote ${trimmed.length} characters to ${OUTPUT_PATH}`);
}

main();
