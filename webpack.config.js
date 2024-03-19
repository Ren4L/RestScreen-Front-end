const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
    mode,
    target,
    devtool,
    entry: ["@babel/polyfill", './src/index.tsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[hash].js",
        publicPath: "/",
    },
    devServer: {
        historyApiFallback: true,
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./static/index.html",
            favicon: "./static/logo.png",
        }),
        new MiniCssExtractPlugin({filename:'[name].[hash].css'}),
        new CleanWebpackPlugin(),
        new Dotenv({
            path: './.env',
            safe: true,
        })
    ],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/components/index.tsx'),
            '@hooks': path.resolve(__dirname, './src/hooks/index.tsx'),
            '@pages': path.resolve(__dirname, './src/pages/index.tsx'),
            '@utils': path.resolve(__dirname, './src/utils/index.tsx'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    optimization: {
        minimizer: [new TerserWebpackPlugin({extractComments:false})]
    },
    module: {
        rules: [
            {
                test:/\.html$/i,
                loader: "html-loader"
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use:[
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions:{
                                plugins: [require('postcss-preset-env')]
                            }
                        }
                    },
                    'sass-loader'
                ],
            },
            {
                test: /\.tsx?$/i,
                exclude: /node_modules/,
                loader: "ts-loader"
            },
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env',"@babel/preset-react"]
                    }
                }
            },
            {
                test:/\.(jpe?g|png|webp|gif|svg)$/i,
                use: [
                    {
                        loader:"file-loader",
                        options: {
                            outputPath:'static/images',
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            },
            {
                test:/\.json$/i,
                type: "javascript/auto",
                loader: "json-loader",
            },
            {
                test:/\.(woff2?|ttf|eot)$/i,
                loader: "file-loader",
                options: {
                    outputPath:'static/fonts',
                }
            }
        ]
    }
}