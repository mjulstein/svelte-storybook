module.exports = {
  stories: ["../src/**/*.stories.[tj]s"],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
