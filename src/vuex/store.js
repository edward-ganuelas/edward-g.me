import { createStore } from 'vuex'
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

export default createStore({
    state,
    getters,
    mutations,
    plugins: [pathify.plugin]
})