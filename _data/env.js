// Simple env surface for templates/data
export default {
  mode: process.env.ELEVENTY_ENV || "dev",
  node: process.version
};
// Usage: {{ env.mode }} or env.mode in JS templates
// Set ELEVENTY_ENV=prod for production mode
// Also available in JS templates as global `env`
