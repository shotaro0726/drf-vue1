import {
    fetchLogin,
    fetchSignup,
    fetchMemberinfo,
    fetchList,
    fetchList2,
    fetchBoard,
    fetchCategory,
} from "../api/index";
import router from "../routes/index"

export default {
    async fetchLogin({ commit }, obj) {
        try {
            const response = await fetchLogin(obj);
            console.log(response.data);
            commit("SET_LOGIN", response.data);
            alert("Login");
            this.dispatch("gwtMemberInfo");
            router.push({
                name: "board"
            });
        } catch (error) {
            console.log(error);
        }
    },

    async fetchSignup({ commit }, obj) {
        try {
            const response = await fetchSignup(obj);
            console.log(response.data);
            alert("Signup");
            router.push({
                name: "login"
            });
        } catch (error) {
            console.log(error);
        }
    },

    async FETCH_LOGOUT({ commit }) {
        try {
            sessionStorage.removeItem("access_token");
            commit("SET_LOGOUT");
            alert("Logout");
            router.push({
                name: "board"
            });
        } catch (error) {
            console.log(error);
        }
    },

    async getMemberInfo({ commit }) {
        try {
            let token = sessionStorage.getItem("access_token");
            const response = await fetchMemberinfo(token);
            console.log(response);
            commit("SET_REFRESH", response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    async FETCH_LIST({ commit }, params) {
        try {
            const response = await fetchList(params);
            console.log(response.data);
            commit("SET_LIST", response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    async FETCH_LIST2({ commit }, params) {
        try {
            const response = await fetchList2(params);
            console.log(response.data);
            commit("SET_LIST", response.data);
            return response
        } catch (error) {
            console.log(error);
        }
    },

    async FETCH_BOARD({ commit }, params) {
        try {
            const response = await fetchBoard(params);
            console.log(response.data);
            commit("SET_BOARD", response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    async FETCH_CATEGORY({ commit }) {
        try {
            const response = await fetchCategory();
            console.log(response.data);
            commit("SET_CATEGORY", response.data);
            return response
        } catch (error) {
            console.log(error);
        }
    },
};