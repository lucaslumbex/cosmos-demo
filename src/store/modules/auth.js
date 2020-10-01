import LoaderUtils from "../../utils/baseUtils/LoaderUtils";
import StoreUtils from "../../utils/baseUtils/StoreUtils";
import RouterUtils from "../../utils/baseUtils/RouterUtils";
import AuthServices from "../../services/AuthServices";
const authService = new AuthServices();

export const namespaced = true;

export const state = {
  userOptions: {
    requestId: "",
    categoryId: "",
    insuranceCompanyId: "",
    username: ""
  },
  bankName: ""
};

export const getters = {
  getUserOptions: state => {
    return state.userOptions;
  },
  getRequestId: state => {
    return state.userOptions.requestId;
  },
  getCategoryId: state => {
    return state.userOptions.categoryId;
  },
  getInsuranceCompanyId: state => {
    return state.userOptions.insuranceCompanyId;
  },
  getUsername: state => {
    return state.userOptions.username;
  }
};

export const mutations = {
  SET_USER_OPTIONS(state, payload) {
    state.userOptions = payload;
  }
};

export const actions = {
  login() {
    let formBody = StoreUtils.rootGetters(
      StoreUtils.getters.form.GET_FORM_BODY
    );
    let payload = {
      userID: formBody.userID,
      password: formBody.password
    };
    let successAction = responseData => {
      //save users info in the store
      StoreUtils.commit("user/SET_USER_INFO", responseData);

      //reset the form
      StoreUtils.dispatch("form/resetForm");

      //route the user to the dashboard
      RouterUtils.changeRouteTo(RouterUtils.routes.DASHBOARD);
    };

    authService.login(payload, successAction, LoaderUtils.types.COMPONENT);
  },
  registrationInit() {
    let formBody = StoreUtils.rootGetters(
      StoreUtils.getters.form.GET_FORM_BODY
    );

    let payload = {
      countryCode: "234",
      email: formBody.email,
      firstName: formBody.firstName,
      lastName: formBody.lastName,
      phone: formBody.phone
    };

    let successAction = responseData => {
      //save users info in the store
      StoreUtils.commit("form/INCREASE_FORM_STAGE_BY_ONE");

      //save unique id to form store
      let uniqueRefPayload = {
        uniqueRef: responseData.uniqueref,
        username: responseData.username
      };
      StoreUtils.commit("form/BUILD_FORM_BODY", uniqueRefPayload);
    };

    authService.registrationInit(
      payload,
      successAction,
      LoaderUtils.types.BLOCKING
    );
  },
  registrationComplete() {
    let formBody = StoreUtils.rootGetters(
      StoreUtils.getters.form.GET_FORM_BODY
    );

    // console.log("formbody =>", formBody);
    let payload = {
      token: formBody.token,
      password: formBody.password,
      username: formBody.username,
      passwordConfirmation: formBody.password,
      uniqueRef: formBody.uniqueRef,
      createAccount: "YES",
      source: "WEB"
    };
    console.log("payload =>", payload);
    let successAction = () => {
      //save users info in the store

     // StoreUtils.commit("user/SET_USER_INFO", responseData);
     //  console.log(responseData)



      //route the user to the dashboard
      RouterUtils.changeRouteTo(RouterUtils.routes.DASHBOARD);

      //reset the form
      StoreUtils.dispatch("form/resetForm");
    };

    authService.registrationComplete(
      payload,
      successAction,
      LoaderUtils.types.BLOCKING
    );
  }
};
