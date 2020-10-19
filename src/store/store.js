import Vue from "vue";
import Vuex from "vuex";

import * as router from "./modules/baseModules/router.js";
import * as loader from "./modules/baseModules/loader.js";
import * as notification from "./modules/baseModules/notification.js";
import * as table from "./modules/baseModules/table.js";
import * as form from "./modules/baseModules/form.js";
import * as sideMenu from "./modules/baseModules/sideMenu.js";
import * as auth from "./modules/auth.js";
import * as user from "./modules/user.js";

import * as company from "./modules/company.js";
import * as account from "./modules/account.js";
import * as officer from "./modules/officer.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    officer,
    account,
    company,
    user,
    auth,
    router,
    loader,
    notification,
    table,
    form,
    sideMenu
  },
  state: {},
  mutations: {},
  actions: {}
});
