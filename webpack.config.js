

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");




module.exports = {
    mode: 'development',

    output: {
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    // Disables attributes processing
                    sources: false,
                },          
            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /styles.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ]
    },

    optimization: {

    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new MiniCssExtractPlugin({
            ignoreOrder: false,
        }),
        new CopyPlugin({
            patterns: [
              { from: 'src/assets/', to: 'assets' },
            ],
        }),
    ],
}