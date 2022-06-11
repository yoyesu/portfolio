module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img/");
  eleventyConfig.addPassthroughCopy("src/CSS/");
  eleventyConfig.addWatchTarget("src/CSS/");
  
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: '_site',
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
}