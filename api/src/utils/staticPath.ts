import path from "path";
import { fileURLToPath } from "url";

export function getFilename(metaUrl: string): string {
  const __filename = fileURLToPath(metaUrl);
  return __filename;
}

export function getDirname(metaUrl: string): string {
  const __dirname = path.dirname(getFilename(metaUrl));
  return __dirname;
}
