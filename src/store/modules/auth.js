import LoaderUtils from "../../utils/baseUtils/LoaderUtils";
import StoreUtils from "../../utils/baseUtils/StoreUtils";
import RouterUtils from "../../utils/baseUtils/RouterUtils";
import AuthServices from "../../services/AuthServices";
const authService = new AuthServices();

export const namespaced = true;

export const state = {};

export const getters = {};

export const mutations = {};

export const actions = {
  login() {
    let formBody = StoreUtils.rootGetters(
      StoreUtils.getters.form.GET_FORM_BODY
    );
    let payload = {
      username: formBody.username,
      countryCode: "234",
      password: formBody.password
    };
    let successAction = responseData => {
      //reset the form
      StoreUtils.dispatch("form/resetForm");

      //save users info in the store
      StoreUtils.commit("user/SET_USER_INFO", responseData);
      if (responseData.companies.data.length > 0) {
        StoreUtils.commit(
          "company/SET_CURRENT_COMPANY_ID",
          responseData.companies.data[0].orgID
        );
        StoreUtils.commit(
          "account/SET_CURRENT_ACCOUNT_ID",
          responseData.companies.data[0].accounts[0].accID
        );
      }

      //route the user to the dashboard
      RouterUtils.changeRouteTo(RouterUtils.routes.DASHBOARD);
    };

    authService.login(payload, successAction, LoaderUtils.types.BLOCKING);
  },
  enrollmentInitiate() {
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

    authService.enrollmentInitiate(
      payload,
      successAction,
      LoaderUtils.types.BLOCKING
    );
  },
  enrollmentComplete() {
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
    let successAction = responseData => {
      //save users info in the store

      StoreUtils.commit("user/SET_USER_INFO", responseData);

      //route the user to the dashboard
      RouterUtils.changeRouteTo(RouterUtils.routes.DASHBOARD);

      //reset the form
      StoreUtils.dispatch("form/resetForm");
    };

    authService.enrollmentComplete(
      payload,
      successAction,
      LoaderUtils.types.BLOCKING
    );
  }
};
