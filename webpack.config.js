const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const { GitRevisionPlugin } = require('git-revision-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main:'./src/index.js'},
    output: {
        filename: '[name].[git-revision-hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
    new HTMLWebpackPlugin({
        template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new GitRevisionPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']

            },
            {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            loader: "file-loader",
            options: {
              outputPath: "../fonts",
            }
        }
        ]
    }   
}