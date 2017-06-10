const path = require("path");

const DIST_DIR = path.resolve(__dirname, "dist"),
      SRC_DIR = path.resolve(__dirname, "src");

const config = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel',
        include: SRC_DIR,
        query: {
          presets: ['react', 'es2015', 'stage-0']
        } }
    ]
  },
  /*plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]*/
};

module.exports = config;