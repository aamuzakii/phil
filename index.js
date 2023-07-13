const PurgeCSS = require("@fullhuman/postcss-purgecss");

async function runPurgeCSS() {
  const purgecss = new PurgeCSS();
  const result = await purgecss.purge("./purgecss.config.js");

  console.log(result);
}

runPurgeCSS();
