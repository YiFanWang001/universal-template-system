import { createStore } from 'vuex'
import user from './modeules/user'
import getters from './getters'
export default createStore({
  getters,
  modules: {
    user
  }
})
 