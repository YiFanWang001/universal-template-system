import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [{
    path: '/',
    name: 'login',
    component: () =>
        import ('../views/Login')
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router