const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CnameWebpackPlugin = require("cname-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    devtool: "source-map",
    target: ["web", "es5"],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            },
            {
                test: /\.scss/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: { url: false }
                    },
                    {
                        loader:"sass-loader",
                        options: {
                            sassOptions: {
                                outputStyle: 'compressed',
                            },
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./static/index.html",
        }),
        new CnameWebpackPlugin({
            domain:"panel.kokasai.com"
        })
    ]
};