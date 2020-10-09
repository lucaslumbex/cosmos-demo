export const namespaced = true;

export const state = {
  tableData: [],
  currentTableObject: {}
};

export const getters = {
  getTableData: state => {
    return state.tableData;
  },
  getCurrentTableObject: state => {
    return state.currentTableObject;
  }
};

export const mutations = {
  SET_TABLE_DATA(state, payload) {
    state.tableData = payload;
  },
  SET_CURRENT_TABLE_OBJECT(state, payload) {
    state.currentTableObject = payload;
  }
};

export const actions = {};
