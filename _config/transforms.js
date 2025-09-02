// _config/transforms.js
// Minify HTML output in production builds using html-minifier-terser package
// https://www.npmjs.com/package/html-minifier-terser   
// Also includes a simple XML/RSS/Atom "preserve" transform to normalise newlines
// and strip trailing spaces safely.    

import htmlmin from "html-minifier-terser";

const isProd = process.env.ELEVENTY_ENV === "prod";
const isExt = (p = "", exts = []) => exts.some(ext => p.toLowerCase().endsWith(ext));
const HTML_EXTS = [".html", ".htm"];
const XML_EXTS  = [".xml", ".rss", ".atom", ".xsl"]; // add/remove as needed

export default function(eleventyConfig) {
  // 1) HTML minifier (production only)
  eleventyConfig.addTransform("html-minify", async function (content) {
    const outPath = this.page?.outputPath || "";

    if (!isProd) return content;
    if (!isExt(outPath, HTML_EXTS)) return content;

    return await htmlmin.minify(content, {
      collapseWhitespace: true,
      conservativeCollapse: true,
      decodeEntities: true,
      keepClosingSlash: true,
      removeComments: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      minifyCSS: true,
      minifyJS: true,
      sortAttributes: true,
      sortClassName: true
      // If you ever inline templating that’s whitespace-sensitive,
      // consider ignoreCustomFragments here.
    });
  });

  // 2) XML/RSS/Atom “preserve” transform
  //    - No minification; just normalize newlines & strip trailing space safely.
  eleventyConfig.addTransform("xml-preserve", function (content) {
    const outPath = this.page?.outputPath || "";
    if (!isExt(outPath, XML_EXTS)) return content;

    // Safe tidy: normalize CRLF -> LF, drop trailing spaces before newlines,
    // and ensure single newline at EOF (useful for diffs & tools).
    const normalized = content
      .replace(/\r\n?/g, "\n")
      .replace(/[ \t]+(\n)/g, "$1")
      .replace(/\s+$/g, "");

    return normalized + "\n";
  });
}
