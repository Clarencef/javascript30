var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        main: './es6/main.js',
        day1Js: './es6/day1.js',
        day2Js: './es6/day2.js',
        day3Js: './es6/day3.js',
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
            loaders: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
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