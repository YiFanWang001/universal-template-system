import router from './router'
import store from './store/user/index'

// 白名单
const whiteList = ['/']
    /**
     * 路由前置守卫
     */
router.beforeEach(async(to, from, next) => {
    // 存在 token ，进入主页
    // if (store.state.user.token) {
    // 快捷访问
    console.log(to.path)
    if (store.state.token) {
        if (to.path == '/') {
            next('profile')
        } else {
            next()
        }
    } else {
        // 没有token的情况下， 可以进入白名单
        if (whiteList.indexOf(to.path) > -1) {
            next()
        } else {
            next('/')
        }
    }
})