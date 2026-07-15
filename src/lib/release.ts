export const release = {
  android: {
    version: "1.10.6",
    apkUrl: "https://github.com/turcaman/turcanime/releases/download/v1.10.6/turcanime-1.10.6.apk",
  },
  desktop: {
    version: "1.0.2",
    windows: {
      exeUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.0.2/Turcanime-1.0.2-win-x64-setup.exe",
    },
    linux: {
      debUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.0.2/Turcanime-1.0.2-linux-x64.deb",
      rpmUrl: "https://github.com/turcaman/turcanime-desktop/releases/download/v1.0.2/Turcanime-1.0.2-linux-x64.rpm",
    },
    macos: {
      available: false,
    },
  },
} as const;
