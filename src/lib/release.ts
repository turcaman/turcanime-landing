export const release = {
  android: {
    version: "1.10.11",
    apkUrl: "https://github.com/turcaman/turcanime/releases/download/v1.10.11/turcanime-1.10.11.apk",
  },
  desktop: {
    version: "1.1.6",
    windows: {
      exeUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.1.6/Turcanime-1.1.6-win-x64-setup.exe",
    },
    linux: {
      debUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.1.6/Turcanime-1.1.6-linux-x64.deb",
      rpmUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.1.6/Turcanime-1.1.6-linux-x64.rpm",
    },
  },
} as const;
