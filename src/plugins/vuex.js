import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import actions from '../store/actions'
import state from '../store/state'
import mutations from '../store/mutations'


let store = new Vuex.Store({
    actions, state, mutations

})

export default store