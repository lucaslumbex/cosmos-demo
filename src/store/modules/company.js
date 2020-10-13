import CompanyService from "../../services/CompanyService";
import LoaderUtils from "../../utils/baseUtils/LoaderUtils";
import StoreUtils from "../../utils/baseUtils/StoreUtils";
import RouterUtils from "../../utils/baseUtils/RouterUtils";

const companyService = new CompanyService();

export const namespaced = true;

export const state = {
  currentCompanyId: ""
};

export const getters = {
  getCurrentCompanyId: state => {
    return state.currentCompanyId;
  },
  getCurrentCompany: state => {
    return StoreUtils.rootGetters(
      "user/getCompanyById",
      state.currentCompanyId
    );
  }
};

export const mutations = {
  SET_CURRENT_COMPANY_ID(state, payload) {
    state.currentCompanyId = payload;
  }
};

export const actions = {
  createCompany() {
    let formBody = StoreUtils.rootGetters(
      StoreUtils.getters.form.GET_FORM_BODY
    );
    let payload = {
      orgName: formBody.orgName,
      orgIncNumber: formBody.orgIncNumber,
      orgIncDate: formBody.orgIncDate,
      orgType: formBody.orgType,
      orgStreet: formBody.orgStreet,
      orgCity: formBody.orgCity,
      orgState: formBody.orgState,
      orgCountry: formBody.orgCountry,
      orgPhone: formBody.orgPhone,
      orgEmail: formBody.orgEmail,
      orgWebsite: formBody.orgWebsite,
      orgUserID: StoreUtils.rootGetters(StoreUtils.getters.user.GET_USER_INFO)
        .id,
      requestType: "company",
      firstName: StoreUtils.rootGetters(StoreUtils.getters.user.GET_USER_INFO)
        .firstName,
      lastName: StoreUtils.rootGetters(StoreUtils.getters.user.GET_USER_INFO)
        .lastName
    };

    // console.log("payload =>", payload);

    //  route to create company
    let successAction = RouterUtils.changeRouteTo(RouterUtils.routes.DASHBOARD);

    companyService.createCompany(
      payload,
      successAction,
      LoaderUtils.types.BLOCKING
    );
  }
};
