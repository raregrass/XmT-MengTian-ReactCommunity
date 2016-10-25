"use strict";
/**
 * 使用绝对路径，如Webpack打包到的资源匹配？
 */
const AbsolutePathPrefix = "/";

const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractStyle_Vendor = new ExtractTextPlugin(AbsolutePathPrefix + "static/css/vendor.css");
const extractStyle_App = new ExtractTextPlugin(AbsolutePathPrefix + "static/css/[name].css");

/**********************************************************************************************************************/
module.exports = {

    devtool: "source-map",
    devServer: {
        colors: true,
        historyApiFallback: true,
        inline: true,
    },

    entry: {
        app: path.resolve(__dirname, "src/ts/main"),
        /**
         * 在vendor数组中出现的Module，会结合commonChunksPlugin被提取出来，
         * 不管有没有引用都会被加入到vendor的打包文件中
         */
        vendor: ["react", "react-dom", "react-router", "jquery"]
    },

    output: {
        // publicPath: "/static",

        path: path.resolve(__dirname, "dev"),
        filename: AbsolutePathPrefix + "static/js/[name].js",
    },

    resolve: {
        extensions: ["", ".js", ".ts", ".tsx", ".json"],

        alias: {
            /**
             * Own package alias
             */
            "src": path.join(__dirname, "src"),

            "media": "src/media",
            "style": "src/style",
            "ts": "src/ts",
            "vendor": "src/vendor",

            "component": "ts/component",

            /**
             * Vendor package alias
             */
            "jquery": "vendor/jquery/jquery-3.1.1.js",
            "normalize.css": "vendor/normalize/normalize.css",
            "font-awesome.css": "vendor/font-awesome-4.6.3/css/font-awesome.css"
        }
    },

    module: {
        loaders: [
            // Process css files.
            {
                test: /\.css$/,
                loader: extractStyle_Vendor.extract("style", "css?sourceMap"),
            },

            // Process scss files.
            {
                test: /\.scss$/,
                loader: extractStyle_App.extract("style", "css?sourceMap!postcss!resolve-url!sass?sourceMap"),
            },

            // "file" loader makes sure those assets get served by WebpackDevServer.
            // When you `import` an asset, you get its (virtual) filename.
            // In production, they would get copied to the `build` folder.
            {
                test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
                loader: 'file',
                query: {
                    // 使用绝对路径，解决font的定位问题
                    name: AbsolutePathPrefix + "static/css/[name].[ext]"
                }
            },

            // "url" loader works just like "file" loader but it also embeds
            // assets smaller than specified size as data URLs to avoid requests.
            {
                test: /\.(mp4|webm|wav|mp3|m4a|aac|oga|ico|jpg|jpeg|png|gif|svg)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: AbsolutePathPrefix + "static/media/[name].[ext]"
                }
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

    plugins: [
        /**
         * 定义环境变量，使得react等框架库进入开发模式，有更好的提醒
         */
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),

        // This helps ensure the builds are consistent if source hasn't changed:
        new webpack.optimize.OccurrenceOrderPlugin(),

        /**
         * 使用html模板文件进行创建
         */
        new HtmlWebpackPlugin({
            template: "src/html/index.html"
        }),

        /**
         * 提取引入的样式文件
         */
        extractStyle_Vendor,
        extractStyle_App,

        /**
         * 将vendor的代码从主代码中提取出来，将强缓存效果
         */
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor",
            /* filename= */AbsolutePathPrefix + "static/js/[name].js")
    ],

    postcss: function () {
        return [require("autoprefixer")];
    },

};