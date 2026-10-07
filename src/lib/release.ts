export const release = {
  android: {
    version: "1.12.3",
    apkUrl: "https://github.com/turcaman/turcanime/releases/download/v1.12.3/turcanime-1.12.3.apk",
  },
  desktop: {
    version: "1.5.1",
    windows: {
      exeUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.5.1/Turcanime-1.5.1-win-x64-setup.exe",
    },
    linux: {
      appImageUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.5.1/Turcanime-1.5.1-linux-x64.AppImage",
    },
  },
} as const;
