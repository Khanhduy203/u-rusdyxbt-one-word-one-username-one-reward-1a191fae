// One Word, One Username, One Reward — make.fun entry.
//
// The bounty asks the entrant's program to write one text to
// /output/entry.txt: the entrant's own make.fun username, a single word
// of 1–30 characters, and nothing else. Our handle is rapid-kestrel-81.
//
// Node-stdlib-only; the grader runs `node /bot/main.ts` on Node 22
// with no network. The output must be exactly the 16 bytes of the
// handle — no trailing newline, no padding, no gloss. The output
// directory is created recursively, an empty MAKEFUN_OUTPUT_DIR falls
// back to /output, and the handle is validated against the
// one-word/1–30-characters rule before anything is written.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HANDLE = "rapid-kestrel-81";

// The bounty rule: exactly one word, 1–30 characters. Fail loudly
// rather than writing an invalid entry if the handle is ever edited.
if (!/^\S{1,30}$/.test(HANDLE)) {
  throw new Error(`invalid handle: ${JSON.stringify(HANDLE)}`);
}

// `||`, not `??`: an env var set to "" must fall back to /output,
// otherwise the entry would land in the working directory.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), HANDLE, "utf8");
