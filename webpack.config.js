"use strict";

let path = require("path");
let webpack = require("webpack");
let autoprefixer = require("autoprefixer");

const PATHS = {
    app: path.join(__dirname, "app/test.tsx"),
    build: path.join(__dirname, "build")
};

module.exports = {
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: "bundle.js"
    },

    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx"]
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: "style!css!postcss!less"
            },
            {
                test: /\.(png|jpg)$/,
                loader: "url?limit=8192"
            },
            {
                // All files with a ".ts" or ".tsx" extension will be handled.
                test: /\.tsx?$/,
                loader: "ts",
                exclude: /node_modules/
            }
        ]
    },
    postcss: function () {
        return [autoprefixer];
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        host: "0.0.0.0",
        port: "9988",
        contentBase: PATHS.build,
        historyApiFallback: true,
        inline: true,
        colors: true,
        stats: "errors-only",
        hot: true
    }
};
