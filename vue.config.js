const { defineConfig } = require('@vue/cli-service')
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        hppts: false,
        open: true,
        port: 8080,
        host: 'localhost',
        proxy: {
            [process.env.VUE_APP_BASE_URL]: {
                target: 'https://imooc-admin.lgdsunday.club/prod-api',
                changOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_URL]: ''
                }
            }
        }
    },
    chainWebpack: (config) => {
        config.module.rule('svg').exclude.add(resolve('src/assets/icons')).end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
})