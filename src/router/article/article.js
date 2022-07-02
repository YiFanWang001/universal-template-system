const data = [{
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
import { getItem } from '@/utils/storage'

const jurisdiction = getItem('jurisdiction')
    // import store from '@/store'
    // const jurisdiction = store.getters.jurisdiction
let user = []
let date = []

if (jurisdiction) {
    user = jurisdiction.menus
    console.log(user)
    user.forEach((element) => {
        data.forEach((item) => {
            if (item.meta.title == element) {
                date.push(item)
            }
        })
    })
} else {
    date = data
}

console.log(date)

export default date