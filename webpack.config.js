var path = require("path");
var webpack = require("webpack");

var config = {
    BUILD_PATH: 'public/build/',
    SOURCE_PATH: 'public/src/',
};

module.exports = {
    cache: true,
    context: path.resolve(__dirname, config.SOURCE_PATH),
    entry: {
        app: ["./js/app.js"]
    },
    resolve: {
        root: [
            path.resolve(__dirname, config.SOURCE_PATH)
        ]
    },
    output: {
        path: path.resolve(__dirname, config.BUILD_PATH),
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: []
};
