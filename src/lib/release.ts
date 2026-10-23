export const release = {
  android: {
    version: "1.12.9",
    apkUrl: "https://github.com/turcaman/turcanime/releases/download/v1.12.9/turcanime-1.12.9.apk",
  },
  desktop: {
    version: "1.5.5",
    windows: {
      exeUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.5.5/Turcanime-1.5.5-win-x64-setup.exe",
    },
    linux: {
      appImageUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.5.5/Turcanime-1.5.5-linux-x64.AppImage",
    },
  },
} as const;
