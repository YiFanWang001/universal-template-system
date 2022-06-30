import md5 from 'md5'
import axios from 'axios'
import loading from '@/utils/loading'
import store from '../store'
import { isCheckTimeout } from '@/api/auth'

const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(
    (config) => {
        loading.open()
        const { icode, time } = getTestICode()
        config.headers.icode = icode
        config.headers.codeType = time
            // 在发送请求之前做些什么
            // const isLogin = window.sessionStorage.getItem('token')
        const token = store.getters.token
        config.headers.Authorization = 'Bearer ' + token
        return config
    },
    (error) => {
        // 对请求错误做些什么
        //关闭loding加载
        loading.close()
        return Promise.reject(error)
    }
)

// 添加响应拦截器
instance.interceptors.response.use(
    (response) => {
        // 对响应数据做点什么

        loading.close()

        return response
    },
    (error) => {
        // 对响应错误做点什么
        loading.close()
        console.log(error)
        return Promise.reject(error)
    }
)

//统一了传参处理

//实现code
function getTestICode() {
    const now = parseInt(Date.now() / 1000)
    const code = now + 'LGD_Sunday-1991'
    return {
        icode: md5(code),
        time: now
    }
}
export default instance