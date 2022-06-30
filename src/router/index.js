import { createRouter, createWebHashHistory } from 'vue-router'
/**
 * 私有路由表
 */
const privateRoutes = [{
        path: '/user',
        component: () =>
            import ('@/views/profile/index'),
        redirect: '/user/manage',
        meta: {
            title: 'user',
            icon: 'personnel'
        },
        children: [{
                path: '/user/manage',
                component: () =>
                    import ('@/views/user-manage/index'),
                meta: {
                    title: 'userManage',
                    icon: 'personnel-manage'
                }
            },
            {
                path: '/user/role',
                component: () =>
                    import ('@/views/user-role/index'),
                meta: {
                    title: 'roleList',
                    icon: 'role'
                }
            },
            {
                path: '/user/permission',
                component: () =>
                    import ('@/views/user-permission/index'),
                meta: {
                    title: 'permissionList',
                    icon: 'permission'
                }
            },
            {
                path: '/user/import',
                component: () =>
                    import ('@/views/user-import/index'),
                meta: {
                    title: 'excelImport'
                }
            }
        ]
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
        children: [{
                path: '/article/ranking',
                component: () =>
                    import ('@/views/article-ranking/index'),
                meta: {
                    title: 'articleRanking',
                    icon: 'article-ranking'
                }
            },
            // {
            //     path: '/article/:id',
            //     component: () =>
            //         import ('@/views/article-detail/index'),
            //     meta: {
            //         title: 'articleDetail'
            //     }
            // },
            {
                path: '/article/create',
                component: () =>
                    import ('@/views/article-create/index'),
                meta: {
                    title: 'articleCreate',
                    icon: 'article-create'
                }
            },
            {
                path: '/article/editor/:id',
                component: () =>
                    import ('@/views/article-create/index'),
                meta: {
                    title: 'articleEditor'
                }
            }
        ]
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