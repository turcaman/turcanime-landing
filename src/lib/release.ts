export const release = {
  android: {
    version: "1.12.6",
    apkUrl: "https://github.com/turcaman/turcanime/releases/download/v1.12.6/turcanime-1.12.6.apk",
  },
  desktop: {
    version: "1.5.4",
    windows: {
      exeUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.5.4/Turcanime-1.5.4-win-x64-setup.exe",
    },
    linux: {
      appImageUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.5.4/Turcanime-1.5.4-linux-x64.AppImage",
    },
  },
} as const;
