// src/utils/renderIntro.ts
import gradient from "gradient-string";

// src/constants.ts
import path from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var distPath = path.dirname(__filename);
var ROOT = path.join(distPath, "../");
var CLI_TITLE = `  __  __     __     ______   ______   ______     ______     ______     ______    
 /\\ \\/ /    /\\ \\   /\\__  _\\ /\\  ___\\ /\\  __ \\   /\\  == \\   /\\  ___\\   /\\  ___\\   
 \\ \\  _"-.  \\ \\ \\  \\/_/\\ \\/ \\ \\  __\\ \\ \\ \\/\\ \\  \\ \\  __<   \\ \\ \\__ \\  \\ \\  __\\   
  \\ \\_\\ \\_\\  \\ \\_\\    \\ \\_\\  \\ \\_\\    \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\_____\\  \\ \\_____\\ 
   \\/_/\\/_/   \\/_/     \\/_/   \\/_/     \\/_____/   \\/_/ /_/   \\/_____/   \\/_____/ 
                                                                                  `;

// src/utils/renderIntro.ts
var renderIntro = () => {
  const pkgManager = getUserPackagManager();
  if (pkgManager === "yarn" || pkgManager === "pnpm") {
    console.log("");
  }
  console.log(gradient.summer.multiline(CLI_TITLE));
};
var getUserPackagManager = () => {
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
    return "npm";
  }
};

// src/index.ts
function main() {
  renderIntro();
}
main();
