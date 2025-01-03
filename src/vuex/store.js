import { createStore } from 'vuex'

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
    plugins: []
})