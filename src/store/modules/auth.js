// import AuthServices from "../../services/AuthServices";
// const authService = new AuthServices();

export const namespaced = true;

export const state = {
  userInfo: {
  }
};

export const getters = {
  getUserInfo: state => {
    return state.userInfo;
  }
};

export const mutations = {
  SET_USER_INFO(state, payload) {
    state.userInfo = payload;
  }
};

export const actions = {};
