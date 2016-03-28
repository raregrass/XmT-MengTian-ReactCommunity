"use strict";

let path = require("path");
let webpack = require("webpack");
let autoprefixer = require("autoprefixer");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, "app/main.tsx"),
    build: path.join(__dirname, "build")
};

module.exports = {
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: "[name]-[hash].js"
    },

    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx"]
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules!postcss-loader"),
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                // All files with a ".ts" or ".tsx" extension will be handled.
                loader: "ts-loader"
            },
            {
                test: /\.(png|jpg)$/,
                loader: "url-loader?limit=8192"
            }
        ]
    },
    postcss: function () {
        return [autoprefixer];
    },

    plugins: [
        new webpack.BannerPlugin("Copyright by XiaoManTou Inc."),
        new HtmlWebpackPlugin({
            template: __dirname + "/index.tmpl.html"
        }),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("[name]-[hash].css")
    ]
};
