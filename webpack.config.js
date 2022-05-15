const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const { GitRevisionPlugin } = require('git-revision-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

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
    new GitRevisionPlugin(),
    new TsconfigPathsPlugin({
        configFile:'tsconfig.json',
        extensions: [".ts", ".tsx"]
    })
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
            },
            {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
      },   
}