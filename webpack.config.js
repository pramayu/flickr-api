import path from 'path';
import webpack from 'webpack';


export default {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'src/index.js')
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'javascripts/bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.IgnorePlugin(/node-fetch/)
  ],

  module: {
    loaders: [
      {
        test: /\.js?$/,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
