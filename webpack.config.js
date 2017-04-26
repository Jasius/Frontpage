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
        path: path.resolve(__dirname, "dist"),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
                test: /\.(jp?g|png|svg|gif)$/i,

                use: [
                    "file-loader?name=[hash:6].[ext]&outputPath=images/",
                    "image-webpack-loader?bypassOnDebug"
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '/dist'
                }),

            }
        ]
    },
    resolve: {
        extensions: ['.js', '.webpack.js', '.scss']
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
            template: './src/light.ejs'
        }),
        new HtmlWebpackPlugin({
            title: 'Frontpage modern',
            filename: './modern.html',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['modern'],
            template: './src/modern.ejs'
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].min.css',
            disable: false,
            allChunks: true
        })
    ]
}