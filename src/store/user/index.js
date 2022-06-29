import { getLogin } from '@/api/Login'
import { information } from '@/api/profile'
import router from '@/router'
import { ElMessage } from 'element-plus'
import { setItem, getItem } from '@/utils/localStorage'

export default {
    namespaced: true,
    state: {
        token: getItem('token') || ''
    },
    getters: {},
    mutations: {
        verification(state, token) {
            state.token = token
            setItem('token', token)
            console.log(state.token)
        }
    },
    actions: {
        async login({ commit }, object) {
            try {
                let { data } = await getLogin(object)
                let token = data.data.token
                commit('verification', token)
                if (data.success) {
                    ElMessage.success(data.message)
                } else {
                    ElMessage.error(data.message)
                }
            } catch (error) {
                console.log(error)
            }
        },
        async getUser() {
            await information()
        }
    },
    modules: {}
}