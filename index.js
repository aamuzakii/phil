const PurgeCSS = require("purgecss");

async function runPurgeCSS() {
  const purgeCSSResults = await new PurgeCSS().purge({
    content: ["**/*.html"],
    css: ["**/*.css"],
  });

  console.log(purgeCSSResults);
}

runPurgeCSS();
