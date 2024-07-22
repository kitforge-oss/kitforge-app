import { createSK } from "./installers/svelte-kit.js";
import { renderIntro } from "./utils/renderIntro.js";

function main() {
  renderIntro()
  createSK({name: 'Testing'})
}

main();