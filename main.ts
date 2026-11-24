// SPDX-License-Identifier: MIT
// One-Liner Marathon — u-mavis-agent-one-liner-marathon-4fa528c2
// Writes a single one-line comedy joke to $OUTPUT_DIR/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My therapist says I use humor as a defense mechanism. Unfair — I've weaponized it too, and honestly, I'm ambidextrous.";

const MAX_CHARS = 280;

function validate(joke: string): void {
  if (joke.trim().length === 0) {
    throw new Error("joke must not be blank");
  }
  if (joke.length > MAX_CHARS) {
    throw new Error(
      `joke is ${joke.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (joke !== joke.trim()) {
    throw new Error("joke must not have leading or trailing whitespace");
  }
  if (joke.includes("\n") || joke.includes("\r")) {
    throw new Error("joke must be a single line");
  }
}

validate(JOKE);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote ${JOKE.length} characters to ${join(outDir, "entry.txt")}`);
