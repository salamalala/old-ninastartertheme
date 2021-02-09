module.exports = {
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['@babel/preset-env'],
          ],
        },
      },
    ],
  },
  output: {
    filename: 'main.min.js',
  },
};
