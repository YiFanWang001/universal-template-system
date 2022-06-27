import { createStore } from 'vuex'
import user from './user/index'

export default createStore({
    modules: {
        user
    }
})