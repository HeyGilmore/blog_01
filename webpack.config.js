// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/script.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // clean /dist on each build
  },
  devtool: "eval-source-map", // good for fast rebuilds + proper mapping
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // serve files from dist
    },
    hot: true, // enable HMR (injects only changed modules)
    open: true, // auto-opens browser on start
    watchFiles: [
      "./src/index.html", // still watch your HTML template
      "./src/css/**/*.css", // and any CSS changes
    ],
    port: 8080, // optional: change port if needed
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // your HTML template
      filename: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // handle CSS imports
      },
      {
        test: /\.html$/i,
        loader: "html-loader", // import HTML files
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource", // asset handling
      },
    ],
  },
};
