export const release = {
  android: {
    version: "1.10.13",
    apkUrl: "https://github.com/turcaman/turcanime/releases/download/v1.10.13/turcanime-1.10.13.apk",
  },
  desktop: {
    version: "1.1.11",
    windows: {
      exeUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.1.11/Turcanime-1.1.11-win-x64-setup.exe",
    },
    linux: {
      debUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.1.11/Turcanime-1.1.11-linux-x64.deb",
      rpmUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.1.11/Turcanime-1.1.11-linux-x64.rpm",
    },
  },
} as const;
