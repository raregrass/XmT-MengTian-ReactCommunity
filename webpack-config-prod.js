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

    /**
     *  This section is for file location resolution.
     */
    resolve: {
        /*
         *   The extensions array is used when webpack attempts to locate an imported code file.
         */
        // 1.   The empty string is there(the first item in array) to help
        //      resolve imports without extensions like: require(“./myJSFile”)
        //      or import myJSFile from ‘./myJSFile’ without file extensions.
        // 2.   Add `.ts` and `.tsx` as a resolvable extension so
        //      we can require files in app without specifying extensions.
        extensions: ["", ".js", ".ts", ".tsx", "json", ".scss"],

        /*
         *   The alias are short names for paths during module search.
         *   Since nodejs has a handy __dirname variable, we can make an alias for our application root.
         *   We'll use this throughout the app when import modules instead of grappling with relative paths.
         */
        alias: {
            "appRoot": path.join(__dirname, "app"),
            "componentsRoot": "appRoot/components"
        }
    },

    /**
     * Configure plugins used by webpack chunks.
     */
    plugins: [
        // This plugin will generate hot update chunks.
        new webpack.HotModuleReplacementPlugin(),

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
                    "url-loader?limit=8049"
                ]
            },
            {
                // All files with a ".ts" or ".tsx" extension will be handled.
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

    /**
     * When importing a module whose path matches one of the following, just
     * assume a corresponding global variable exists and use that instead.
     * This is important because it allows us to avoid bundling all of our
     * dependencies, which allows browsers to cache those libraries between builds.
     */
    externals: {
        //"react": "React",
        //"react-dom": "ReactDOM"
    },

    devtool: "source-map",

    // Configure which Postcss plugin to be used in the postcss-loader.
    postcss: function () {
        return [require("autoprefixer")];
    }
};