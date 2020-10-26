const path = require('path');

module.exports = {
  mode: 'none',
  entry: {
    app: path.join(__dirname, 'src', 'index.ts')
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/typescript', '@babel/preset-env'],
          },
        },
        exclude: '/node_modules/',

      },
      {
        test: /.tsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/typescript', '@babel/preset-react', '@babel/preset-env'],
          },
        },
        exclude: '/node_modules/',
      },
      {
        test: /\.tsx$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
}
