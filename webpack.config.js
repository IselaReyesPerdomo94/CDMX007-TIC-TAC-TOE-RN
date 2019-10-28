const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = path.resolve(__dirname, 'src')

const config = {
    entry: {
        main: `${root}/index.jsx`
    },
    output: {
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, 'public'),
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            views: `${root}/views`,
            components: `${root}/components`
        }
    },
    module: {
        rules: [{
                test: /\.js(x)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './index.ejs',
            title: 'Tic tac toe',
            filename: './index.html'
        })
    ]
}

module.exports = config;