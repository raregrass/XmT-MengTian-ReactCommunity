"use strict";

const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

/**********************************************************************************************************************/
module.exports = {

    devtool: "source-map",

    devServer: {
        colors: true,
        historyApiFallback: true,
        inline: true
    },

    entry: {
        app: path.resolve(__dirname, "src/ts/main"),
        /**
         * 在vendor数组中出现的Module，会结合commonChunksPlugin被提取出来，
         * 不管有没有引用都会被加入到vendor的打包文件中
         */
        vendor: ["react", "react-dom", "react-router"]
    },

    output: {
        path: path.resolve(__dirname, "dev"),
        filename: "static/js/[name].js",
    },

    resolve: {
        extensions: ["", ".js", ".ts", ".tsx", ".json"],

        alias: {
            "src": path.join(__dirname, "src"),

            "media": "src/media",
            "style": "src/style",
            "ts": "src/ts",

            "component": "ts/component",
        }
    },

    module: {
        loaders: [
            {
                // Process css files.
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css?sourceMap", "postcss"),
            },

            // "file" loader makes sure those assets get served by WebpackDevServer.
            // When you `import` an asset, you get its (virtual) filename.
            // In production, they would get copied to the `build` folder.
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file',
                query: {
                    name: 'static/media/[name].[ext]'
                }
            },

            // "url" loader works just like "file" loader but it also embeds
            // assets smaller than specified size as data URLs to avoid requests.
            {
                test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'static/media/[name].[ext]'
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
         * 提取引入的css文件
         */
        new ExtractTextPlugin("static/css/[name].css"),

        /**
         * 将vendor的代码从主代码中提取出来，将强缓存效果
         */
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor",
            /* filename= */"static/js/[name].js")
    ],

    postcss: function () {
        return [require("autoprefixer")];
    },

};