const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const paths = {
    html: path.resolve(__dirname, "public", "index.html"),
    dist: path.resolve(__dirname, "dist"),
    src: path.resolve(__dirname, "src")
}

module.exports = ({mode}) => ({
    mode: mode,
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: paths.dist,
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(mode === "development"),
        }),
    ],
    devServer: {
        static: {
            directory: paths.dist,
        },
        port: 3000,
        open: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.tsx?$/,
                use: ["ts-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource',
            }
        ],
    },
    resolve: {
        preferAbsolute: true,
        modules: [paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
        extensions: ['.tsx', '.ts', '.js'],
    }
})