import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'login',
        component: () =>
            import ('../views/Login')
    },
    {
        path: '/profile',
        name: 'profile',
        component: () =>
            import ('../views/profile')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router