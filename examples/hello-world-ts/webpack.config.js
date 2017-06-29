
var webpack = require('webpack');
// var CopyWebpackPlugin = require('copy-webpack-plugin');
var AwesomeTypescriptLoader = require('awesome-typescript-loader');
var tsc = require('typescript-compiler');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

// var tsConfig = require('./tsconfig.json');
// tsc.compile(['./src/server.ts'], [], tsConfig, function(e){ console.log(e.formattedMessage); })

module.exports = {
  entry: "./client.ts",
  context: __dirname + '/src',
  output: {
    filename: "public/js/app.js",
    path: __dirname + "/dist"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    // "react": "React",
    // "react-dom": "ReactDOM"
  },
  plugins: [
    // new CopyWebpackPlugin([{
    //   from: './**/*.+(ts|tsx)',
    //   to: './[path][name].js',
    //   transform: function(content, path) {
    //     console.log(path)
    //     // console.log(String(content))
    //     // console.log(String(content))
    //     var compiled = tsc.compileString(String(content), [], tsConfig, function(e){ console.log(e); })
    //     console.log(compiled);
    //     return compiled;
    //     // return jsxtransform.fromString(String(content), {
    //     //   factory: 'c'
    //     // });
    //   }
    // }]),
    new webpack.optimize.UglifyJsPlugin({
      minimize: false,
      compress: { warnings: false }
    })
  ]
};
