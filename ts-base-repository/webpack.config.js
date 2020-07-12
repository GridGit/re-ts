const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        'index': path.join(__dirname, './src/index.js'),
        'index.ts': path.join(__dirname, './src/index.ts'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: ['ts-loader']
        }]
    },
    devServer: {
        open: true,
        port: 3000,
        contentBase: 'src',
        hot: true
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        alias: {
            '@': path.join(__dirname, '/src')
        }
    },
    plugins: [        
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html'
        })
    ]
}