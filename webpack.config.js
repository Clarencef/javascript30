var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './es6/main.js',
    output: {
        path: __dirname + "/bundle",
        filename: 'bundle.js'
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
            loaders: ["style-loader", "css-loader", "sass-loader"]
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