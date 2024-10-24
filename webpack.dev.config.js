const path = require('path');

module.exports = {
    output: {
        // From current folder + dist folder that will contains all bundle
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.dev.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    devServer: {
        // Port of dev server
        port: 8080,
        // Asking the server to fallback to index.html in the event that a requested resource cannot be found, need to vue router
        historyApiFallback: true,
        open: true,
    },
};
