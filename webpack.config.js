const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    // Define the entry points of our application (can be multiple for different sections of a website)
    entry: {
        main: "./src/index.js",
    },

    // Define the destination directory and filenames of compiled resources
    output: {
        filename: "[name].js",
        path: path.resolve(process.cwd(), "./public"),
    },

    // Define development options
    devtool: "source-map",

    // Define loaders
    module: {
        rules: [
            // Use babel for JS files
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env"
                        ]
                    }
                }
            },
            // CSS, PostCSS, and Sass
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            sourceMap: true,
                            url: false,
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    "autoprefixer",
                                ]
                            }
                        }
                    },
                    "sass-loader"
                ],
            },
            // File loader for images
            {
                test: /\.(jpg|jpeg|png|git|svg)$/i,
                type: "asset/resource",
            }
        ],
    },

    // Define used plugins
    plugins: [

        // Extracts CSS into separate files
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        }),

        // Copy images to the public folder
        new CopyPlugin({
            patterns: [
                {
                    from: "src/assets/images",
                    to: "images",
                }
            ]
        }),

        // Inject styles and scripts into the HTML
        new HtmlWebpackPlugin({
            template: path.resolve(process.cwd(), "./src/index.html")
        })
    ],

    // Configure the "webpack-dev-server" plugin
    devServer: {
        static: {
            directory: path.resolve(process.cwd(), "public")
        },
        watchFiles: [
            path.resolve(process.cwd(), "./src/index.html")
        ],
        compress: true,
        port: process.env.PORT || 9090,
        hot: true,
    },

    // Performance configuration
    performance: {
        hints: false
    }
};
