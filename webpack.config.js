var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'out.js'
    },
    devtool: "source-map",
    // plugins: [new HtmlWebpackPlugin()],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }, {
            // test: /\.(js|jsx)$/,
            // exclude: /node_modules/,
            // use: [
            //     'babel-loader',
            // ],
        },]
    }
};