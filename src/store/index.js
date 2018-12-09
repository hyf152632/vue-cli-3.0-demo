import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/moduleA'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    getters,
    modules: {
        moduleA, // 引入 A 模块
    },
    actions, // 根级别的 action
    mutations, // 根级别的 mutations
    // 根级别的 getters
})
