const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        clean: true,
        path: path.resolve(__dirname, './dist'),
        filename: '[name][contenthash].js',
    },
    module: {
        rules: [
            {
                test: /.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css/i,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                // test: /\.(png|jpe?g|gif)$/i,
                // // use: [
                // //     {
                // //         loader: 'file-loader',
                // //     },
                // // ],
                // loader: 'file-loader',
                // options: {
                //     // name: '[path][name].[ext]',
                //     name: '[name].[ext]',
                //     outputPath: 'assets/img'
                // },
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Mi first webpack app',
            // filename: 'index.html' // Default is index.html,
            template: './src/index.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            // filename: 'bundle.css',
            filename: '[name][fullhash].css',
            // filename: 'bundle.css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/assets/img", to: "assets/img" },
            ],
        }),
    ]
}