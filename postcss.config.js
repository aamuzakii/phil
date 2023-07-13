module.exports = {
  plugins: [
    require("postcss-uncss")({
      html: ["foo.html"],
    }),
  ],
};
