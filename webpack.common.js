const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const pkg = require('./package.json')

module.exports = {
    entry:{
        app: [
            'babel-polyfill',
            'whatwg-fetch',
            path.join(__dirname,'src/index.js')
        ],
        vender: Object.keys(pkg.dependencies)
    },
    output: {
        path: path.join(__dirname,'dist'),
        filename: '[name]-[hash].js',
        chunkFilename: '[name]-[hash].js',
        publicPath: '/'
    },
    module:{
        rules:[{
            test: /\.js$/,
            use: ['babel-loader'],
            include: path.join(__dirname,'src')
        },{
            test: /\.(png|jpg|gif)/,
            use:[{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    plugins:[
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname,'src/index.tmpl.html')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['app','vender'],
            filename: '[name]-[hash].js'
        })
    ],
    resolve:{
        alias: {
            "@": path.join(__dirname,'src/pages'),
            "@redux": path.join(__dirname,'src/redux'),
            "@utils": path.join(__dirname,'src/utils')
        }
    }
}