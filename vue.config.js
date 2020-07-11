const path = require('path')

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: {
                    '^/api': '/api'
                  },
                ws: true,
                changeOrigin: true
            }
        }   
    }
}