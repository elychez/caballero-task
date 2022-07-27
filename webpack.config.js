const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: 9000,
        open: true,
        hot: true
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new CopyPlugin({
            patterns: [
                {from: 'assets/', to: 'assets'},
            ]
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin()
        ]
    }
}
