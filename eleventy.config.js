// ESM config for Eleventy v3
import filters from "./_config/filters.js";
import shortcodes from "./_config/shortcodes.js";
import transforms from "./_config/transforms.js";

export default function(eleventyConfig) {
  // Register filters/shortcodes/transforms from your modules
  filters(eleventyConfig);
  shortcodes(eleventyConfig);
  transforms(eleventyConfig);

  // Passthrough: everything in /public goes to site root
  eleventyConfig.addPassthroughCopy({ "public": "/" });

  // Passthrough: compiled CSS (Tailwind CLI writes here) -> /assets
  eleventyConfig.addPassthroughCopy({ "content/styles": "assets" });

+ // Don’t passthrough `styles/` (it’s source-only, not output)

  // Watch extra dirs
  eleventyConfig.addWatchTarget("./content/styles");
  eleventyConfig.addWatchTarget("./styles");
  eleventyConfig.addWatchTarget("./scripts");

  // Nunjucks as primary template engine
  eleventyConfig.setTemplateFormats(["njk", "md", "html"]);
  eleventyConfig.setLibrary("njk");

  return {
    dir: {
      input: "content",
      includes: "../_includes",  // step out of /content to shared includes
      data: "../_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
}
