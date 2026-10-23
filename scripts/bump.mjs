import { writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

const ANDROID_REPO = "turcaman/turcanime";
const DESKTOP_REPO = "turcaman/turcanime-desktop";
const RELEASE_REL = "src/lib/release.ts";
const RELEASE_FILE = new URL(`../${RELEASE_REL}`, import.meta.url);
const ROOT = fileURLToPath(new URL("..", import.meta.url));

async function fetchLatest(repo) {
  const res = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
    headers: { "User-Agent": "turcanime-landing-bump" },
    signal: AbortSignal.timeout(15_000),
  });

  if (!res.ok) {
    throw new Error(`GitHub API error (${repo}): ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export function pickAsset(assets, predicate) {
  const asset = (assets ?? []).find((a) => predicate(String(a.name ?? "")));
  return asset?.browser_download_url ? String(asset.browser_download_url) : null;
}

export function buildReleaseFile({ androidVersion, apkUrl, desktopVersion, exeUrl, appImageUrl }) {
  if (!androidVersion || !apkUrl) {
    throw new Error("Release de Android incompleto: falta versión o APK.");
  }
  if (!desktopVersion || !exeUrl || !appImageUrl) {
    throw new Error("Release de desktop incompleto: falta versión, .exe o AppImage.");
  }

  return `export const release = {
  android: {
    version: ${JSON.stringify(androidVersion)},
    apkUrl: ${JSON.stringify(apkUrl)},
  },
  desktop: {
    version: ${JSON.stringify(desktopVersion)},
    windows: {
      exeUrl: ${JSON.stringify(exeUrl)},
    },
    linux: {
      appImageUrl: ${JSON.stringify(appImageUrl)},
    },
  },
} as const;
`;
}

async function main() {
  const android = await fetchLatest(ANDROID_REPO);
  const androidVersion = String(android.tag_name ?? "").replace(/^v/i, "");
  const apkUrl = pickAsset(android.assets, (n) => n.endsWith(".apk"));

  const desktop = await fetchLatest(DESKTOP_REPO);
  const desktopVersion = String(desktop.tag_name ?? "").replace(/^v/i, "");
  const exeUrl = pickAsset(desktop.assets, (n) => /win.*\.exe$/i.test(n) || n.endsWith("-setup.exe"));
  const appImageUrl = pickAsset(desktop.assets, (n) => n.toLowerCase().endsWith(".appimage"));

  const content = buildReleaseFile({ androidVersion, apkUrl, desktopVersion, exeUrl, appImageUrl });
  writeFileSync(RELEASE_FILE, content);

  const gitOpts = { cwd: ROOT, stdio: "inherit" };
  execFileSync("git", ["add", RELEASE_REL], gitOpts);

  try {
    execFileSync("git", ["diff", "--cached", "--quiet", "--", RELEASE_REL], { ...gitOpts, stdio: "ignore" });
    console.log(
      `Sin cambios — ya actualizado (Android ${androidVersion}, Desktop ${desktopVersion})`
    );
    process.exit(0);
  } catch {
    // git diff sale con código 1 cuando SÍ hay cambios: continuar al commit.
  }

  execFileSync(
    "git",
    ["commit", "-m", `chore: bump version to android ${androidVersion} / desktop ${desktopVersion}`, "--", RELEASE_REL],
    gitOpts
  );

  console.log(`Versiones actualizadas — Android ${androidVersion}, Desktop ${desktopVersion}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((err) => {
    console.error(`Bump abortado: ${err.message}`);
    process.exit(1);
  });
}
