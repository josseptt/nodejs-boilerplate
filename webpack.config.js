'use strict';

const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


module.exports = {
    mode: 'development',
    target: 'node',
    entry: {
        app: path.resolve(__dirname, 'src', 'index.ts')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    externals: [nodeExternals()],
    resolve: {
        plugins: [
            new TsconfigPathsPlugin({
                extensions: ['.js', '.json', '.ts']
            })
        ],
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
    plugins: [
        new NodemonPlugin()
    ],
    node: {
        __dirname: true
    }
};
