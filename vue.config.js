let path = require('path');

module.exports = {
  outputDir: 'target/dist',
  assetsDir: 'static',
  configureWebpack: {
    resolve: {
      extensions: ['vue', '.js'],
      alias: {
        '@': path.resolve('src')
      }
    }
  }
}