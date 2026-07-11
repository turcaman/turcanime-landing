import { writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

const REPO = "turcaman/turcanime";
const RELEASE_FILE = new URL("../src/lib/release.ts", import.meta.url);

const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
  headers: { "User-Agent": "turcanime-landing-bump" },
});

if (!res.ok) {
  console.error(`GitHub API error: ${res.status} ${res.statusText}`);
  process.exit(1);
}

const data = await res.json();
const tag = String(data.tag_name ?? "");
const version = tag.replace(/^v/i, "");

const apkAsset = (data.assets ?? []).find((a) =>
  String(a.name ?? "").endsWith(".apk")
);

if (!version || !apkAsset?.browser_download_url) {
  console.error("No se pudo determinar la versión o el APK desde el release.");
  process.exit(1);
}

const apkUrl = String(apkAsset.browser_download_url);

const content = `export const release = {
  version: "${version}",
  apkUrl: "${apkUrl}",
} as const;
`;

writeFileSync(RELEASE_FILE, content);

execSync(`git add ${RELEASE_FILE.pathname}`, { stdio: "inherit" });
execSync(`git commit -m "chore: bump version to ${version}"`, {
  stdio: "inherit",
});

console.log(`Version actualizada a ${version}`);
