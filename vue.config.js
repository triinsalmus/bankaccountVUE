module.exports = {
    devServer: {
        proxy: {
            '^/banksql2': {
                target: 'http://localhost:8080',
                changeOrigin: true
            },
        }
    }
}
