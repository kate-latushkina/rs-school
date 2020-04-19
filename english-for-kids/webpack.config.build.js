const path = require("path");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpackConfig = require("./webpack.config");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// const RemoveHeadPlugin = require('./remove-head-plugin');

module.exports = merge(webpackConfig, {
  devtool: "source-map",

  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[chunkhash].js"
  },

  plugins: [
    new CleanWebpackPlugin({}),

    new CopyWebpackPlugin(
      [
        {
          from: "./assets/images",
          to: "./assets/images",
        },
        {
          from: "./assets/audio",
          to: "./assets/audio",
        },
      ],
      {
        // debug: "info"
      }
    )

    // new RemoveHeadPlugin()
  ],

  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({}), new TerserPlugin()]
  }
});
