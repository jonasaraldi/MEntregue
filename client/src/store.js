import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dados: {}
    },
    mutations: {
        SET_DADOS (state, payload) {
            Object.assign(state.dados, payload)
        }
    },
    actions: {
        setDados({ commit }, dados) {
            commit('SET_DADOS', dados)
        },
        salvar({ state }) {
            axios.post('http://localhost:3000/dados/', state.dados)
        }
    }
})