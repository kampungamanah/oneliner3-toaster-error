import { mkdirSync, writeFileSync } from "node:fs";

// A jammed slice, reported the way a small appliance would if it had
// already decided the situation was beyond repair manuals.
const fragments: string[] = [
  "ERROR: Bread stuck.",
  "I have called a priest.",
  "Do not open the slot.",
];

const entry: string = fragments.join(" ");

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry, "utf8");
}

main();
