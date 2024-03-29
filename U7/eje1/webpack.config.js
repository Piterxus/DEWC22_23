// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = 'style-loader';



const config = {
    entry: {
        index: path.resolve(__dirname, 'src', 'index.js'),
        ejercicio2: path.resolve(__dirname, 'src', 'ejercicio2.js'),
        ejercicio3: path.resolve(__dirname, 'src', 'ejercicio3.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'index.html'),
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: 'ejercicio2.html',
            template:  path.resolve(__dirname, 'src', 'ejercicio2.html'),
            chunks: ['ejercicio2']
        }),
        new HtmlWebpackPlugin({
            filename: 'ejercicio3.html',
            template: path.resolve(__dirname, 'src', 'ejercicio3.html'),
            chunks: ['ejercicio3']
        })

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
