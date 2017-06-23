const path = require('path');

var config = {
   entry: './main.js',
	
   output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'index.js',
   },
   // to see jsx file in source tab
   devtool: 'source-map',

   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;