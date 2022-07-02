const data = [{
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