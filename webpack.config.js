const path = require('path');

module.exports = {
  // ... other webpack configuration options

  module: {
    rules: [
      // ... other rules
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/pdf/', // Output directory for PDF files
            },
          },
        ],
      },
    ],
  },
};
