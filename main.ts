import { mkdirSync, writeFileSync } from "node:fs";

// Tell a Whole Story in 32 Characters — entry: "My ex took the router and dog"
// 29 chars, one line, within the 1-32 char gate.
// Why this name wins: the punchline is the escalation — the router listed
// next to the dog. She took everything, even the internet. Six words carry
// a whole arc: relationship, breakup, empty house, no dog, no internet.
// Runner-ups it beat: "Our Wi-Fi outlived our marriage" (wry, not a laugh)
// and "She left me for the IT guy" (known IT-guy template). The dog beats
// the kids variant ("She took the kids and the router", 32 chars) because
// kids make it sad; the dog makes it funny.
const ENTRY = "My ex took the router and dog";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
