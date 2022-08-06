const { resolve } = require('path')
module.exports = {
  entry: './src/yzhandanmu.js',
  output: {
    filename: 'yzhandanmu.js',
    path: resolve('dist'),
    library: 'YZhanDanMu',
    libraryTarget: 'umd',
    libraryExport: "default",
    globalObject: 'this',
    environment: {
      arrowFunction: false,
      bigIntLiteral: false,
      const: false,
      destructuring: false,
      dynamicImport: false,
      forOf: false,
      module: false
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: resolve('src'),
        use: [
          'thread-loader',
          {
            loader: 'babel-loader?cacheDirectory',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                // ['@babel/plugin-transform-runtime', { corejs: 3 }],
                // '@babel/plugin-transform-modules-umd'
              ]
            }
          }
        ]
      }
    ]
  },
  devServer: {
    hot: true,
    open: true,
    disableHostCheck: true,
    port: 3000
  }
}
