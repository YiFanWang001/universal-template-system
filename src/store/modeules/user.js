import { login } from '@/api/user'
import { getprofile } from '@/api/menu'
import router from '@/router'
import { ElMessage } from 'element-plus'
// import { response } from 'express'
import { setItem, getItem, removeItem } from '../../utils/storage'

export default {
    namespaced: true,
    state: () => ({
        token: getItem('token') || '',
        userInfo: '',
        jurisdiction: getItem('jurisdiction') || ''
    }),
    getters: {},
    mutations: {
        // cuntoken(state){
        //     return state.user.token;
        // }
        // console.log();
        setToken(state, token) {
            state.token = token
            setItem('token', token)
        },
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo
                // setItem('userInfo', userInfo)
            if (userInfo) {
                state.jurisdiction = userInfo.data.permission
                setItem('jurisdiction', userInfo.data.permission)
            }
        }
    },
    actions: {
        async login({ commit }, object) {
            try {
                let { data } = await login(object)
                commit('setToken', data.data.token)
                if (data.success) {
                    ElMessage.success(data.message)
                    return data
                } else {
                    ElMessage.error(data.message)
                }
            } catch (error) {
                console.log(error)
            }
        },

        async userlist({ commit }) {
            try {
                const { data } = await getprofile()
                commit('setUserInfo', data)
                return data
            } catch (error) {
                console.log(error)
            }
            // state.menus=token;
        },
        logout({ commit }) {
            commit('setToken', '')
            commit('setUserInfo', '')
            removeItem('token')
            removeItem('userInfo')
            removeItem('jurisdiction')
        }
    }
}