var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: __dirname + '/app/index.js',
    module: {
        preloaders: [
            {
                test: /\.scss/,
                loader: 'import-glob-loader'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015', 'react']
              }
            },
            {
              test: /\.scss$/,
              loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react']
                }
            },
            {
              test: /\.(eot|svg|ttf|woff|woff2)$/,
              loader: 'file-loader?name=app/assets/fonts/[name].[ext]'
            },
            {
              test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'
            }
        ]
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    plugins: [HTMLWebpackPluginConfig]
};
