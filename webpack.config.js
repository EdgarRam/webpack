const path = require( 'path' );
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const config ={
    entry: './src/index.js',
    output: {
        path: path.resolve( __dirname, 'build' ),
        filename: 'bundle.js',
        publicPath: 'build/',
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader',
                }),
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options:{
                            limit: 40000,
                            fallback: 'file-loader',
                        },
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin('style.css'),
    ]
};


module.exports = config;