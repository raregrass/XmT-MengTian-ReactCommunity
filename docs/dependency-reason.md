开发专用：  

1. webpack: 打包工具
1. webpack-dev-server: 小型开发服务器
1. file-loader: 
    ```javascript
    const url = require("file!./file.png");
    // => emits file.png as file in the output directory and returns the public url
    // => returns i. e. "/public-path/0dcbbaa701328a3c262cfd45869e351f.png"
    //By default the filename of the resulting file is the MD5 hash of the file's contents with the original extension of the required resource.
    //By default a file is emitted, however this can be disabled if required (e.g. for server side packages).
    
    const url = require("file?emitFile=false!./file.png");
    // => returns the public url but does NOT emit a file
    // => returns i. e. "/public-path/0dcbbaa701328a3c262cfd45869e351f.png"
    ```
1. url-loader: 需要file-loader作为peer-dependency
    ```javascript
    //The url loader works like the file loader, but can return a Data Url if the file is smaller than a limit.
    //The limit can be specified with a query parameter. (Defaults to no limit)
    //If the file is greater than the limit the file-loader is used and all query parameters are passed to it.

    require("url?limit=10000!./file.png");
    // => DataUrl if "file.png" is smaller that 10kb
    
    require("url?mimetype=image/png!./file.png");
    // => Specify mimetype for the file (Otherwise it's inferred from extension.)
    
    require("url?prefix=img/!./file.png");
    // => Parameters for the file-loader are valid too
    //    They are passed to the file-loader if used.
    ```
1. node-sass, sass-loader and resolve-url-loader: 处理解析less文件
1. postcss-loader and autoprefixer: 与postcss插件结合进行postcss处理
1. css-loader: 解析CSS文件
1. style-loader: Adds CSS to the DOM by injecting a <style> tag
1. typescript and ts-loader: 处理解析typescript文件
1. html-webpack-plugin: This is a webpack plugin that simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. 
1. extract-text-webpack-plugin: It moves every require("style.css") in entry chunks into a separate css output file. So your styles are no longer inlined into the javascript, but separate in a css bundle file (styles.css). 

发布专用：

1. fadf