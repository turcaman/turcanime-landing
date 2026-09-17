export const release = {
  android: {
    version: "1.11.0",
    apkUrl: "https://github.com/turcaman/turcanime/releases/download/v1.11.0/turcanime-1.11.0.apk",
  },
  desktop: {
    version: "1.4.0",
    windows: {
      exeUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.4.0/Turcanime-1.4.0-win-x64-setup.exe",
    },
    linux: {
      debUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.4.0/Turcanime-1.4.0-linux-x64.deb",
      rpmUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.4.0/Turcanime-1.4.0-linux-x64.rpm",
    },
  },
} as const;
