const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/main.ts')
    },
    devServer: {
        contentBase: path.resolve(__dirname, '/dist'),
        open: true,
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [{
            test: /\.css$/,
            exclude: [
                path.resolve(__dirname, 'src/components')
            ],
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.css$/,
            include: [
                path.resolve(__dirname, 'src/components')
            ],
            use: ['style-loader', {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: '[path][name]_[local]--[hash:base64:5]'
                    }
                }
            }]
        }, {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: ['ts-loader']
        }, {
            test: /\.(svg|eot|ttf|woff|woff2)$/,
            use: ['file-loader']
        }]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html'
        }),
        new CleanWebpackPlugin()
    ]
}