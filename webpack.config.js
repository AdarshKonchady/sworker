var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
     output: {
         path: 'static',
         filename: 'app.bundle.js'
     },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'node_modules/sw-toolbox/sw-toolbox.js', to: './sw-toolbox.js' }
        ])
    ]
}