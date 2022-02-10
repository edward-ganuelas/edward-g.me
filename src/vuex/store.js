import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import pathify from './pathify'
import { make } from 'vuex-pathify'


const state = {
    BlogPosts: '',
    BlogTags: '',
    Tags: '',
    Filter: '',
    DarkTheme: false

}

const getters = {
    ...make.getters(state)
}

const mutations = {
    ...make.mutations(state)
}

const store = createStore({
    state() {
        return {
            ...state
        }
    },
    getters: {
        ...getters
    },
    mutations: {
        ...mutations
    },
    plugins: [createPersistedState(), pathify.plugin]
});

export default store;

// export default new Vuex.Store({
//     state,
//     getters,
//     mutations,
//     plugins: [createdPersistedState, pathify.plugin]
// })