import { login } from '@/api/user'
import { getprofile } from '@/api/menu'
import router from '@/router'
import { ElMessage } from 'element-plus'
// import { response } from 'express'
import { setItem, getItem } from '../../utils/storage'

export default {
    namespaced: true,
    state: () => ({
        token: getItem('token') || '',
        userInfo: getItem('userInfo') || '',
        menus: []
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
            setItem('userInfo', userInfo)
        }
    },
    actions: {
        async login({ commit }, object) {
            let { data } = await login(object)
                // window.sessionStorage.setItem('token',data.data.token)
            commit('setToken', data.data.token)
                // return data
                // console.log(isLogin);
            console.log(data)
            if (data.success) {
                router.push({ name: 'list' })
                ElMessage.success(data.message)
            } else {
                ElMessage.error(data.message)
            }
        },

        async userlist({ commit }) {
            // let menus= await getprofile()
            // window.sessionStorage.setItem('menus',data.data.token)
            // console.log(isLogin);
            // console.log(menus);
            try {
                const data = await getprofile()
                commit('setUserInfo', data)
                console.log(data)
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
        }
    }
}