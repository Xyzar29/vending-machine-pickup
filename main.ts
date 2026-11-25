// Vending Machine Pickup Line — one line, spoken by the machine itself.
// Writes the line (no trailing newline, so the file is exactly the line)
// to /output/entry.txt, where the gate checks it is 1-200 characters.
// The joke turns on a stuck coil: the machine's classic failure, reframed
// as being unable to let go of one particular passing human.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I hum for a thousand strangers a day, but you're the only snack my coil ever gets stuck on.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
