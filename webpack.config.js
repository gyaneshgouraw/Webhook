const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const sassExtractPlugin = new ExtractTextPlugin({
  filename: 'scssStyles.css',
  });

module.exports = {
  entry: './src/library.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs'
  },
  mode:'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react','@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: {
              loader:'css-loader',
              query:{
                modules:true,
                localIdentName:'[local]'
              }
            }
          })
      },
      {
        test: /\.scss$/,
        use: sassExtractPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            'sass-loader'
          ]
        }),
      },
    ]
  },
  plugins: [ 
    new ExtractTextPlugin({filename: 'style.css'}),
    sassExtractPlugin
  ]
};



/** 
 * Webpack-dev-server config
 * https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9
 */


 /**  
  * React setup scratch
  * https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1
  * 
  */