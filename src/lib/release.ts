export const release = {
  android: {
    version: "1.12.5",
    apkUrl: "https://github.com/turcaman/turcanime/releases/download/v1.12.5/turcanime-1.12.5.apk",
  },
  desktop: {
    version: "1.5.2",
    windows: {
      exeUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.5.2/Turcanime-1.5.2-win-x64-setup.exe",
    },
    linux: {
      appImageUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.5.2/Turcanime-1.5.2-linux-x64.AppImage",
    },
  },
} as const;
