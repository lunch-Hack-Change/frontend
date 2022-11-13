const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://hack.invest-open.ru',
      changeOrigin: true,
    })
  );
};
