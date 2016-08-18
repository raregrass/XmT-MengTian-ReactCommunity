"use strict";

const path = require("path");
const webpack = require("webpack");

const PATHS = {
    root: __dirname,
    buildDir: path.join(__dirname, "build"),
    appEntry: path.join(__dirname, "src/main.tsx")
};

module.exports = {
    entry: [
        PATHS.appEntry
    ],

    output: {
        path: PATHS.buildDir,
        filename: "bundle.js",
        publicPath: "/dist/"
    },

    resolve: {
        extensions: ["", ".js", ".ts", ".tsx", "json", ".scss"],

        alias: {
            "appRoot": path.join(__dirname, "app"),
            "componentsRoot": "appRoot/components"
        }
    },

    plugins: [

        // new webpack.NoErrorsPlugin()
    ],

    module: {
        loaders: [
            {
                // Process scss files.
                test: /\.scss$/,
                loaders: [
                    "style-loader",
                    "css-loader?sourceMap",
                    "postcss-loader",
                    "resolve-url-loader",
                    "sass-loader?sourceMap"
                ]
            },
            {
                // Inline base64 URLs for <=8k images, use direct URLs for the rest.
                test: /\.(png|jpg|svg)$/,
                loaders: [
                    "url-loader?limit=8192"
                ]
            },
            {
                test: /\.tsx?$/,
                loaders: [
                    "react-hot-loader",
                    "ts-loader"
                ],
                exclude: /node_modules/
            }
        ],
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    postcss: function () {
        return [require("autoprefixer")];
    }
};