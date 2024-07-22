import path from "path";
import { fileURLToPath } from "url";

// With the move to TSUP as a build tool, this keeps path routes in other files (installers, loaders, etc) in check more easily.
// Path is in relation to a single index.js file inside ./dist
export const __filename = fileURLToPath(import.meta.url);
const distPath = path.dirname(__filename);
export const ROOT = path.join(distPath, "../");

export const DEFAULT_APP_NAME = "kitforged-app";
export const KITFORGE_APP = "create-kitforged-app";

export const CLI_TITLE= `  __  __     __     ______   ______   ______     ______     ______     ______    
 /\\ \\/ /    /\\ \\   /\\__  _\\ /\\  ___\\ /\\  __ \\   /\\  == \\   /\\  ___\\   /\\  ___\\   
 \\ \\  _"-.  \\ \\ \\  \\/_/\\ \\/ \\ \\  __\\ \\ \\ \\/\\ \\  \\ \\  __<   \\ \\ \\__ \\  \\ \\  __\\   
  \\ \\_\\ \\_\\  \\ \\_\\    \\ \\_\\  \\ \\_\\    \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\_____\\  \\ \\_____\\ 
   \\/_/\\/_/   \\/_/     \\/_/   \\/_/     \\/_____/   \\/_/ /_/   \\/_____/   \\/_____/ 
                                                                                  `