import StoreUtils from "../../utils/baseUtils/StoreUtils";

export const namespaced = true;

export const state = {
  currentAccountId: ""
};

export const getters = {
  getCurrentAccountId: state => {
    return state.currentAccountId;
  },
  getCurrentAccount: state => {
    return StoreUtils.rootGetters(
      "user/getCompanyById",
      StoreUtils.rootGetters("company/getCurrentCompanyId")
    ).accounts.find(account => account.accID === state.currentAccountId);
  }
};

export const mutations = {
  SET_CURRENT_ACCOUNT_ID(state, payload) {
    state.currentAccountId = payload;
  }
};

export const actions = {};
