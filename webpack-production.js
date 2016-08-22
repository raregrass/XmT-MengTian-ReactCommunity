"use strict";

const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src/ts/main.tsx"),

    output: {
        //publicPath: "dist/",

        path: path.join(__dirname, "dist"),
        filename: "js/[name]-[hash:5].js",
        chunkFilename: "js/[id]-chunk-[hash:5].js",
    },

    resolve: {
        extensions: ["", ".js", ".ts", ".tsx", ".json", ".scss"],

        alias: {
            "srcRoot": path.join(__dirname, "src"),

            "imagesRoot": "srcRoot/images",
            "stylesRoot": "srcRoot/styles",
            "templateRoot": "srcRoot/html",
            "tsRoot": "srcRoot/ts",

            "componentsRoot": "tsRoot/components",
            "utilitiesRoot": "tsRoot/utilities",
        }
    },

    module: {
        loaders: [
            {
                // Process scss files.
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    "style", "css?sourceMap", "postcss", "resolve-url", "sass?sourceMap"
                )
            },
            {
                // Inline base64 URLs for <=8k images, use direct URLs for the rest.
                test: /\.(png|jpg|svg)$/,
                loaders: [
                    "url-loader?limit=8196&name=img/[name]-[hash:5].[ext]"
                ]
            },
            {
                test: /\.tsx?$/,
                loaders: [
                    "ts-loader"
                ],
                exclude: /node_modules/
            }
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    plugins: [
        new webpack.BannerPlugin("Copyright by XiaoManTou Inc."),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: true,
            mangle: true,
            comments: false
        }),
        new ExtractTextPlugin("css/[name]-[hash:5].css"),
        new HtmlWebpackPlugin({
            template: "./src/html/index.html",
            // favicon: "./src/images/favicon.ico",
            filename: "./index.html",
            inject: "body",
            // hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        })
    ],

    postcss: function () {
        return [require("autoprefixer")];
    }
};