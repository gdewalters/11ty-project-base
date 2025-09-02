export default function(eleventyConfig) {
  eleventyConfig.addShortcode("year", () => new Date().getFullYear());
  eleventyConfig.addPairedShortcode("note", (content) => `<aside class="note">${content}</aside>`);
}
