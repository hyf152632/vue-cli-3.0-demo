import * as types from './mutation-types'

const mutations = {
    [types.SET_GRPUP](state, item) {
        state.groups.push(item)
    },
}

export default mutations
