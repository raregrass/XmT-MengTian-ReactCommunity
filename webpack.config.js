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
                test: /\.scss$/,
                loader: "style!css!postcss!resolve-url!sass?sourceMap"
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
        ],
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.js$/,
                loader: "source-map"
            }
        ]
    },
    postcss: function () {
        return [autoprefixer];
    },

    plugins: [
        // TODO: For now, I can't use typescript compiler to achieve HMR function.
        new webpack.HotModuleReplacementPlugin()
    ],

    devtool: "inline-source-map",
    devServer: {
        host: "0.0.0.0",
        port: "9988",
        contentBase: PATHS.build,
        historyApiFallback: true,
        inline: true,
        colors: true,
        stats: "errors-only",
        // TODO: See plugins.HMR
        hot: true
    }
};
