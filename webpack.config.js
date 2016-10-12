var webpack = require('webpack');
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");  //Production files that will be availble for the browser
var SRC_DIR = path.resolve(__dirname, "src");    //Development files that will only be available in production

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    }
};

module.exports = config;