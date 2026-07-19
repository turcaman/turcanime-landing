export const release = {
  android: {
    version: "1.10.7",
    apkUrl: "https://github.com/turcaman/turcanime/releases/download/v1.10.7/turcanime-1.10.7.apk",
  },
  desktop: {
    version: "1.1.2",
    windows: {
      exeUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.1.2/Turcanime-1.1.2-win-x64-setup.exe",
    },
    linux: {
      debUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.1.2/Turcanime-1.1.2-linux-x64.deb",
      rpmUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.1.2/Turcanime-1.1.2-linux-x64.rpm",
    },
  },
} as const;
