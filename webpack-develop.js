"use strict";

const path = require("path");
const webpack = require("webpack");

const Paths = {
    devBuildOutput: path.join(__dirname, "dev")
};

module.exports = {
    entry: path.join(__dirname, "src/ts/main.tsx"),

    output: {
        publicPath: "dev/", // webpack-dev-server 默认将服务目录设置为项目根目录，publicPath 指定到何处加载静态资源。

        path: Paths.devBuildOutput,
        filename: "js/[name].js",
        chunkFilename: "js/[id]-chunk.js",
    },

    resolve: {
        extensions: ["", ".js", ".ts", ".tsx", ".json", ".scss"],

        alias: {
            "srcRoot": path.join(__dirname, "src"),

            "imagesRoot": "srcRoot/images",
            "stylesRoot": "srcRoot/styles",
            "htmlRoot": "srcRoot/html",
            "tsRoot": "srcRoot/ts",

            "componentsRoot": "tsRoot/components",
            "utilitiesRoot": "tsRoot/utilities",
        }
    },

    module: {
        loaders: [
            {
                // Process sass files.
                test: /\.scss$/,
                loaders: [
                    "style-loader",
                    "css-loader?sourceMap",
                    "postcss-loader",
                    "resolve-url-loader",
                    "sass-loader?sourceMap"
                ],
            },
            {
                // Inline base64 URLs for <=8k images, use direct URLs for the rest.
                test: /\.(png|jpg|svg)$/,
                loaders: [
                    "url-loader?limit=8192"
                ],
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
        // new webpack.NoErrorsPlugin()
        //new ExtractTextPlugin("[name].css")
    ],

    postcss: function () {
        return [require("autoprefixer")];
    }
};