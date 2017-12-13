const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const devConfig = {
    devtool: 'inline-source-map',
    entry:{
        app: [
            'babel-polyfill',
            'whatwg-fetch',
            'react-hot-loader/patch', 
            path.join(__dirname,'src/index.js')
        ]
    },
    output: {
        filename: '[name]-[hash].js'
    },
    module:{
        rules:[{
            test: /\.css$/,
            use: ['style-loader','css-loader']
        }]
    },
    devServer:{
        contentBase: path.join(__dirname,'dist'),
        // color: true,  cli only
        historyApiFallback: true,
        host: "0.0.0.0",
        // progress: true,   cli only 需要在命令行配置
        proxy:{
            '/api': {
                target: 'http://chengkun-dev.incubate.os:8081',
                secure: false
              }
        }
    }
}

module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(common, devConfig);