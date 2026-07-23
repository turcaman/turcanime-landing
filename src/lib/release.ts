export const release = {
  android: {
    version: "1.10.12",
    apkUrl: "https://github.com/turcaman/turcanime/releases/download/v1.10.12/turcanime-1.10.12.apk",
  },
  desktop: {
    version: "1.1.8",
    windows: {
      exeUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.1.8/Turcanime-1.1.8-win-x64-setup.exe",
    },
    linux: {
      debUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.1.8/Turcanime-1.1.8-linux-x64.deb",
      rpmUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.1.8/Turcanime-1.1.8-linux-x64.rpm",
    },
  },
} as const;
