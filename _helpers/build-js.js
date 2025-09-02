// _helpers/build-js.js
// Simple ESBuild script to bundle JS for Eleventy projects
// Run with `node _helpers/build-js.js [--watch]`
// If you use --watch, run this in a separate terminal while Eleventy is running
// Requires esbuild: npm install --save-dev esbuild     

import esbuild from "esbuild";

const isWatch = process.argv.includes("--watch");

const options = {
  entryPoints: ["scripts/main.js"],
  outfile: "public/assets/js/bundle.js", // let Eleventy passthrough copy this
  bundle: true,
  platform: "browser",
  target: ["es2019"],
  sourcemap: true,
  minify: process.env.ELEVENTY_ENV === "prod"
};

async function run() {
  if (isWatch) {
    const ctx = await esbuild.context(options);
    await ctx.watch();
    console.log("Watching JS…");
  } else {
    await esbuild.build(options);
    console.log("Bundled JS.");
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
