export const release = {
  android: {
    version: "1.10.15",
    apkUrl: "https://github.com/turcaman/turcanime/releases/download/v1.10.15/turcanime-1.10.15.apk",
  },
  desktop: {
    version: "1.2.0",
    windows: {
      exeUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.2.0/Turcanime-1.2.0-win-x64-setup.exe",
    },
    linux: {
      debUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.2.0/Turcanime-1.2.0-linux-x64.deb",
      rpmUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.2.0/Turcanime-1.2.0-linux-x64.rpm",
    },
  },
} as const;
