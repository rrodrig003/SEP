const path = require('path')

// module.exports = {
//   entry: './client/index.js',
//   mode: 'development',
//   output: {
//     path: path.join(__dirname, 'public'),
//     filename: 'bundle.js',
//   },
//   devtool: 'source-map',
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         include: [ path.resolve(__dirname, 'client')],
//         loader: 'babel-loader'
//       },
//     ]
//   }
// }

module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  mode: 'development',  
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, 'client')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
