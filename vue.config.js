module.exports = {
  mode: 'production',
  css: {
    modules: false
  },
  publicPath: process.env.NODE_ENV === 'production'
      ? '/Portfolio/'
      : '/'
}
