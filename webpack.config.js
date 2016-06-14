module.exports = {
  devtool: 'inline-source-map',
  entry: {
    'main': './index.js'
  },
  output: {
    filename: '[name].js',
    path: './build'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'x']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      //3/ Babel wspiera ładowanie plików JSX Reacta
      query: {
        presets: ['react', 'es2015', 'stage-0']
        // $ npm install babel-preset-stage-0 --save-dev
      }
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader']
    }, {
      test: /\.html$/,
      loaders: ['file-loader?name=[path][name].[ext]']
    }]
  }
};
