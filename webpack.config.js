var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var fileLoader = require("file-loader");

module.exports = {
    entry: {
        'default': './src/default.js',
        'light': './src/light.js',
        'modern': './src/modern.js'
    },
    output: {
        path: __dirname,
        filename: "dist/js/[name].js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader'],
                publicPath: 'dist'
            })
        }],
        // loaders: [{
        //     test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
        //     loader: 'file-loader'
        // }]
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Frontpage',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['default'],
            template: 'src/index.ejs'
        }),
        new HtmlWebpackPlugin({
            title: 'Frontpage light',
            filename: 'light.html',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['light'],
            template: 'src/light.ejs'
        }),
        new HtmlWebpackPlugin({
            title: 'Frontpage modern',
            filename: 'modern.html',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['modern'],
            template: 'src/modern.ejs'
        }),
        new ExtractTextPlugin({
            filename: 'dist/css/[name].css',
            disable: false,
            allChunks: true
        })
    ]
}, {
    loader: 'file-loader',
    query: {
        useRelativePath: true,
        publicPath: 'dist'
    }
}