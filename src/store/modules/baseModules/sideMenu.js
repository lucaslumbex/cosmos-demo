export const namespaced = true;

export const state = {
  isMenuOpen: false
};

export const getters = {
  getIsMenuOpen: state => {
    return state.isMenuOpen;
  }
};

export const mutations = {
  TOGGLE_SIDE_MENU(state) {
    state.isMenuOpen = !state.isMenuOpen;
  }
};

export const actions = {};
