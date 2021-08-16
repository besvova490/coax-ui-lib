const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.tsx"],
  addons: [
    "storybook-addon-designs",
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config) => {

    config.module.rules.push({
      test: /\.module.scss$/,
      use: ["style-loader", "css-loader?modules&importLoaders", "sass-loader"],
      include: path.resolve(__dirname, "../")
    });

    config.module.rules.push({
      test: /\.scss$/,
      exclude: /\.module.(s(a|c)ss)$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    });

    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loaders: ["file-loader"],
      include: path.resolve(__dirname, '../'),
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]]
      }
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
