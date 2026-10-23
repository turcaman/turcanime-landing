import test from "node:test";
import assert from "node:assert/strict";
import { buildReleaseFile, pickAsset } from "./bump.mjs";

const complete = {
  androidVersion: "1.2.3",
  apkUrl: "https://example.com/turcanime.apk",
  desktopVersion: "4.5.6",
  exeUrl: "https://example.com/setup.exe",
  appImageUrl: "https://example.com/app.AppImage",
};

test("buildReleaseFile escribe las tres plataformas", () => {
  const content = buildReleaseFile(complete);
  assert.match(content, /version: "1\.2\.3"/);
  assert.match(content, /apkUrl: "https:\/\/example\.com\/turcanime\.apk"/);
  assert.match(content, /exeUrl: "https:\/\/example\.com\/setup\.exe"/);
  assert.match(content, /appImageUrl: "https:\/\/example\.com\/app\.AppImage"/);
});

test("buildReleaseFile no escribe si falta un asset de desktop", () => {
  assert.throws(
    () => buildReleaseFile({ ...complete, appImageUrl: null }),
    /Release de desktop incompleto/
  );
});

test("pickAsset devuelve null si no hay match", () => {
  assert.equal(pickAsset([{ name: "a.apk", browser_download_url: "https://x/a.apk" }], (n) => n.endsWith(".exe")), null);
});
