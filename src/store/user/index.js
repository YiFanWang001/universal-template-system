import { getLogin } from '@/api/Login'
import router from '@/router'
import { ElMessage } from 'element-plus'
export default {
    namespaced: true,
    state: () => ({
        token: ''
    }),
    getters: {},
    mutations: {},
    actions: {
        async login({ commit }, object) {
            let data = await getLogin(object)
            if (data.success) {
                router.push({ name: 'profile' })
                ElMessage.success(data.message)
            } else {
                ElMessage.error(data.message)
            }
        }
    },
    modules: {}
}