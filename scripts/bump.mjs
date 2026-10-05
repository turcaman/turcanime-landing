import { writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

const ANDROID_REPO = "turcaman/turcanime";
const DESKTOP_REPO = "turcaman/turcanime-desktop";
const RELEASE_FILE = new URL("../src/lib/release.ts", import.meta.url);

async function fetchLatest(repo) {
  const res = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
    headers: { "User-Agent": "turcanime-landing-bump" },
  });

  if (!res.ok) {
    throw new Error(`GitHub API error (${repo}): ${res.status} ${res.statusText}`);
  }

  return res.json();
}

function pickAsset(assets, predicate) {
  const asset = (assets ?? []).find((a) => predicate(String(a.name ?? "")));
  return asset?.browser_download_url ? String(asset.browser_download_url) : null;
}

const android = await fetchLatest(ANDROID_REPO);
const androidTag = String(android.tag_name ?? "");
const androidVersion = androidTag.replace(/^v/i, "");
const apkUrl = pickAsset(android.assets, (n) => n.endsWith(".apk"));

if (!androidVersion || !apkUrl) {
  console.error("No se pudo determinar la versión o el APK desde el release de Android.");
  process.exit(1);
}

let desktop = {
  version: "",
  windows: { exeUrl: "" },
  linux: { appImageUrl: "" },
};

try {
  const d = await fetchLatest(DESKTOP_REPO);
  const desktopTag = String(d.tag_name ?? "");
  const desktopVersion = desktopTag.replace(/^v/i, "");

  const exeUrl = pickAsset(d.assets, (n) => /win.*\.exe$/i.test(n) || n.endsWith("-setup.exe"));
  const appImageUrl = pickAsset(d.assets, (n) => n.toLowerCase().endsWith(".appimage"));

  if (desktopVersion && (exeUrl || appImageUrl)) {
    desktop = {
      version: desktopVersion,
      windows: { exeUrl: exeUrl ?? "" },
      linux: { appImageUrl: appImageUrl ?? "" },
    };
  }
} catch (err) {
  console.warn(`No se pudo obtener el release de desktop: ${err.message}. Se omite.`);
}

const content = `export const release = {
  android: {
    version: "${androidVersion}",
    apkUrl: "${apkUrl}",
  },
  desktop: {
    version: "${desktop.version}",
    windows: {
      exeUrl: "${desktop.windows.exeUrl}",
    },
    linux: {
      appImageUrl: "${desktop.linux.appImageUrl}",
    },
  },
} as const;
`;

writeFileSync(RELEASE_FILE, content);

execSync(`git add "${RELEASE_FILE.pathname}"`, { stdio: "inherit" });

try {
  execSync("git diff --cached --quiet", { stdio: "ignore" });
  console.log(
    `Sin cambios — ya actualizado (Android ${androidVersion}${desktop.version ? `, Desktop ${desktop.version}` : ""})`
  );
  process.exit(0);
} catch {
  // git diff sale con código 1 cuando SÍ hay cambios: continuar al commit.
}

execSync(`git commit -m "chore: bump version to android ${androidVersion}${desktop.version ? ` / desktop ${desktop.version}` : ""}"`, {
  stdio: "inherit",
});

console.log(`Versiones actualizadas — Android ${androidVersion}${desktop.version ? `, Desktop ${desktop.version}` : ""}`);
