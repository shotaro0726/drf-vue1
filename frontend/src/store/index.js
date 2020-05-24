import Vue from 'vue';
import Vuex from 'vuex'
import getters from './getters';
import mutations from './mutations';
import actions from './action';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userInfo: [],
        isLogin: false,
        list: [],
        board: [],
        category: [],
    },
    getters,
    mutations,
    actions,
});