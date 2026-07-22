export const release = {
  android: {
    version: "1.10.9",
    apkUrl: "https://github.com/turcaman/turcanime/releases/download/v1.10.9/turcanime-1.10.9.apk",
  },
  desktop: {
    version: "1.1.5",
    windows: {
      exeUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.1.5/Turcanime-1.1.5-win-x64-setup.exe",
    },
    linux: {
      debUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.1.5/Turcanime-1.1.5-linux-x64.deb",
      rpmUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.1.5/Turcanime-1.1.5-linux-x64.rpm",
    },
  },
} as const;
