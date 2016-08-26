const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const autoprefizer = require('autoprefixer');
const postcssImport = require('postcss-import');


module.exports = {
    debug: true,

    devtool: 'cheap-module-eval-source-map',

    entry: [
        './app/index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            },
            {
                test: /\.global\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?sourceMap'
                ]
            },
            {
                test: /^((?!\.global).)*\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                ]
            },
            {
                test: /\.scss$/,
                loader: 'style!css?localIdentName=[path][name]--[local]!postcss-loader!sass'
            }
        ]
    },

    postcss: function (webpack) {
        return [
            autoprefizer({
                browsers: ['last 2 versions']
            }),
            postcssImport({
                addDependencyTo: webpack
            })
        ];
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.css']
    },

    plugins: [
        new ExtractTextPlugin('bundle.css'),
    ],

    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
