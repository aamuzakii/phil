const PurgeCSS = require("@fullhuman/postcss-purgecss");

async function runPurgeCSS() {
  const purgecss = new PurgeCSS();
  const result = await purgecss.purge({
    content: ["*.html"],
    // Add more options as needed
  });

  console.log(result);
}

runPurgeCSS();
