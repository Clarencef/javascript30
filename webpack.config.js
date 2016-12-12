var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        day1: './es6/day1.js',
        day2: './es6/day2.js',
        day3: './es6/day3.js',
        day4: './es6/day4.js',
    },
    output: {
        path: __dirname + "/bundle",
        filename: '[name].js',
        publicPath: __dirname + "/bundle/"
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            test: path.join(__dirname, 'es6'),
            query: {
                presets: 'es2015',
            },
        }, {
            test: /\.scss$/,
            loader: 'style!css!autoprefixer!sass'
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        }]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};