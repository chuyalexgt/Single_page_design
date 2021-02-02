const path = require ("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "main.js"
    },
    resolve:{
        extensions: [".js"],
    },
    module:{
        rules:[
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader:"url-loader",
                    options: {
                        limit:  90000
                        }
                    }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject: true,
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new CopyWebpackPlugin({patterns:[{
            from: "./src/styles/style.css",
            to: ""
        }]})
        
    ],
    devServer: {
        port: 3000 // <--- Add this line and choose your own port number
      }
}