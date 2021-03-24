const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "src/"),
        src: path.join(__dirname, "src/"),
      },
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },
};
