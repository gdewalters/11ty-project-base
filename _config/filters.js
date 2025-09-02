import { DateTime } from "luxon";

export default function(eleventyConfig) {
  eleventyConfig.addFilter("keys", obj => Object.keys(obj || {}));

  // readableDate(date, fmt='d LLLL yyyy', zone='utc')
  eleventyConfig.addFilter("readableDate", (dateObj, fmt = "d LLLL yyyy", zone = "utc") => {
    try {
      return DateTime.fromJSDate(dateObj, { zone }).toFormat(fmt);
    } catch {
      return String(dateObj);
    }
  });
}
 