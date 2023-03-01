const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'eval-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    writeToDisk: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.(jsx|tsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules|\.d\.ts$/, 
        use: {
          loader: 'ts-loader',
          options: {
          compilerOptions: {
          noEmit: false, 
         },
        },
       }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:6].[ext]',
              outputPath: 'img',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets', noErrorOnMissing: true },
        { from: 'src/favicon.ico', to: '', noErrorOnMissing: true },
        { from: 'src/index.html', to: '' },
      ],
    }),
  ],
};