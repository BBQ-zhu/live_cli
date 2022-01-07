var URL = 'http://localhost:3033'
// var URL = 'http://zlc.zhulif.com:3033'

module.exports = {
    devServer: {
        // open: true,
        // port: 8002,
        // https: false,
        // hotOnly: false,
        // http 代理配置
        proxy: {
            '/api': {
                target: URL,
                changeOrigin: true,
                // pathRewrite: {          
                //   '^/api': '/api'
                // }
            },
            '/upload/ueditor': {
                target: URL,
                changeOrigin: true
            },
            '/uploads': {
                target: URL,
                changeOrigin: true
            }
        },
        before: (app) => {}
    }
    // publicPath: '/' //  ./ 或 /
}
