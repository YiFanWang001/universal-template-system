import { createRouter, createWebHashHistory } from 'vue-router'
/**
 * 私有路由表
 */
import user from './user/user'
import article from './article/article'
const privateRoutes = [{
        path: '/user',
        component: () =>
            import ('@/views/profile/index'),
        redirect: '/user/manage',
        meta: {
            title: 'user',
            icon: 'personnel'
        },
        children: user
    },
    {
        path: '/article',

        component: () =>
            import ('@/views/profile/index'),
        redirect: '/article/ranking',
        meta: {
            title: 'article',
            icon: 'article'
        },
        children: article
    }
]

/**
 * 公开路由表
 */
const publicRoutes = [{
        name: 'login',
        path: '/login',
        component: () =>
            import ('@/views/Login/index')
    },
    {
        name: 'profile',
        path: '/profile',
        component: () =>
            import ('@/views/profile/index'),
        meta: {
            title: 'user',
            icon: 'personnel'
        }
    },
    {
        path: '/',
        component: () =>
            import ('@/views/profile/index'),
        redirect: '/profile',
        children: [{
            path: '/:pathMatch(.*)*',
            name: '404',
            component: () =>
                import ('@/views/404')
        }]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: [...publicRoutes, ...privateRoutes]
})

export default router