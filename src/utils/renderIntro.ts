import gradient from "gradient-string";

import { CLI_TITLE } from "../constants.js";

export const renderIntro = () => {
  // resolves weird behavior where the ascii is offset
  const pkgManager = getUserPackagManager();
  if (pkgManager === "yarn" || pkgManager === "pnpm") {
    console.log("");
  }
  console.log(gradient.summer.multiline(CLI_TITLE));
};

export type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

export const getUserPackagManager: () => PackageManager = () => {
  // This environment variable is set by npm and yarn but pnpm seems less consistent
  const userAgent = process.env.npm_config_user_agent;

  if (userAgent) {
    if (userAgent.startsWith("yarn")) {
      return "yarn";
    } else if (userAgent.startsWith("pnpm")) {
      return "pnpm";
    } else if (userAgent.startsWith("bun")) {
      return "bun";
    } else {
      return "npm";
    }
  } else {
    // If no user agent is set, assume npm
    return "npm";
  }
};