"use strict";

const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack-config-dev.js");

let debugServer = new WebpackDevServer(webpack(webpackConfig), {
    inline: true,
    historyApiFallback: true,
    colors: true,
    publicPath: webpackConfig.output.publicPath
});

debugServer.listen(8080, "localhost", (error, result) => {
    if (error) {
        return console.log(error);
    }

    console.log("Listening at http://localhost:3000/");
});