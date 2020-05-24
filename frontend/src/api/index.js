import axios from 'axios';
const url = "http://127.0.0.1:8000/";

const api = {
    register: url + "users/register/",
    user: url + "users/",
    login: url + "auth/",
    refresh: url + "auth/refresh/",
    boardlist: url + "board/list/",
    board: url + "board/",
    category: url + "board/category",
};

function fetchLogin(obj) {
    return axios.post(api.login, obj);
}

function fetchSignup(obj) {
    return axios.post(api.register, obj);
}

function fetchMemberinfo(token) {
    return axios.get(api.user, { headers: { Authorization: "jwt" + token } });
}

function fetchList(param) {
    return axios.get(api.boardlist + param + "/");
}

function fetchList2(param) {
    return axios.get(api.category + param.name + "/" + param.id + "/");
}

function fetchBoard(param) {
    return axios.get(api.board + param);
}

function fetchCategory() {
    return axios.get(api.category);
}

export {
    fetchLogin,
    fetchSignup,
    fetchMemberinfo,
    fetchList,
    fetchBoard,
    fetchCategory,
    fetchList2,
};