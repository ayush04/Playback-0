// Webpack uses this to work with directories
const path = require('path');

// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

    // Path to your entry point. From this file Webpack will begin his work
    entry: './src/client/app.ts',
  
    // Path and filename of your result bundle.
    // Webpack will bundle all JavaScript into this file
    output: {
      path: path.resolve(__dirname, 'dist', 'client'),
      filename: 'bundle.js'
    },
  
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    // Default mode for Webpack is production.
    // Depending on mode Webpack will apply different things
    // on final bundle. For now we don't need production's JavaScript 
    // minifying and other thing so let's set mode to development
    mode: 'development',
    devtool: 'inline-source-map'
  };