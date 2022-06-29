import router from './router'
import store from './store/user/index'
const whiteLkist = ['/login']
router.beforeEach((to, from, next) => {
    const token = store.state.token
    if (token) {
        if (to.path == '/login') {
            next('/profile')
        } else {
            next()
        }
    } else {
        if (whiteLkist.includes(to.path)) {
            next()
        } else {
            next('/login')
        }
    }
})