const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const path = require('path');

module.exports = {
  entry: {
    public: path.resolve(__dirname, 'src/app/index.ts'),
    admin: path.resolve(__dirname, 'src/admin/index.ts'),
    test: path.resolve(__dirname, 'src/test/index.ts'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      '@/src': path.resolve(__dirname, 'src'),
      '@/assets': path.resolve(__dirname, 'assets'),
    },
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              "babel-plugin-transform-typescript-metadata",
              ["@babel/plugin-proposal-decorators", {"legacy": true}],
              ["@babel/plugin-proposal-class-properties"],
              "@babel/plugin-transform-runtime",
            ]
          }
        },
      }, {
        test: /\.(jpe?g|png)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      }, {
        test: /\.(svg)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      }, {
        test: /\.(css)$/,
        use: ['css-loader'],
      }, {
        test: /\.(scss)$/,
        use: [
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
        exclude: /node_module/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['public'],
      filename: 'index.html',
      template: './src/index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['admin'],
      filename: 'admin.html',
      template: './src/index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['test'],
      filename: 'test.html',
      template: './src/index.html',
    }),
    // new CircularDependencyPlugin({
    //   exclude: /node_module/,
    //   allowAsyncCycles: false,
    //   cwd: process.cwd(),
    // }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 8080,
    historyApiFallback: true,
    proxy: {
      '/api/**': {
        target: 'http://localhost:11000',
        changeOrigin: true,
      },
    },
  },
};
