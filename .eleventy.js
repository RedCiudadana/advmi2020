module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./css");
    eleventyConfig.addPassthroughCopy("./fonts");
    eleventyConfig.addPassthroughCopy("./img");
    eleventyConfig.addPassthroughCopy("./js");

    eleventyConfig.addFilter('toLocaleString', function (value) {
        return parseFloat(value).toLocaleString();
    });
};
