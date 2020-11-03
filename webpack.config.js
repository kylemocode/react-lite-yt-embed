const path = require('path');

module.exports = {
  mode: 'none',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      // {
      //   test: /.ts$/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/typescript', '@babel/preset-env'],
      //     },
      //   },
      // },
      // {
      //   test: /.tsx$/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/typescript', '@babel/preset-react', '@babel/preset-env'],
      //     },
      //   },
      // },
      {
        test: /\.(ts|tsx)$/,
        use: 'awesome-typescript-loader',
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
