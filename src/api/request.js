import axios from 'axios'
import loading from '../utils/loding'
import md5 from 'md5'
const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(
    (config) => {
        loading.open()

        config.headers.Authorization = '1ace0351-1da5-4a4c-8194-7184426853c6'
            // 在发送请求之前做些什么
        const { icode, time } = getTestICode()
        config.headers.icode = icode
        config.headers.codeType = time
        return config
    },
    (error) => {
        // 对请求错误做些什么
        loading.close()
        return Promise.reject(error)
    }
)

// 添加响应拦截器
instance.interceptors.response.use(
        (response) => {
            // 对响应数据做点什么
            loading.close()
            console.log(response.data)
            return response.data
        },
        (error) => {
            // 对响应错误做点什么
            return Promise.reject(error)
        }
    )
    //实现code
function getTestICode() {
    const now = parseInt(Date.now() / 1000)
    const code = now + 'LGD_Sunday-1991'
    return {
        icode: md5(code),
        time: now
    }
}
// 统一了传参处理
// const request = (options) => {
//     if (options.method.toLowerCase() === 'get') {
//         options.params = options.data || {}
//     }
//     service(options)
// }
export default instance