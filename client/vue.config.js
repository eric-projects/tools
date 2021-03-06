module.exports = {
  outputDir: '../public',

  runtimeCompiler: true,

  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://localhost:4100',
        changeOrigin: true
      },
      '/auth': {
        target: 'http://localhost:4100',
        changeOrigin: true
      },
      '/version': {
        target: 'http://localhost:4100',
        changeOrigin: true
      },
      '/static-form': {
        target: 'http://localhost:4100',
        changeOrigin: true
      },
      '/socket.io': {
        target: 'http://localhost:4100',
        changeOrigin: true,
        ws: true
      }
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'zh',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
};
