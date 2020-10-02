import CompanyService from "../../services/CompanyService";
import LoaderUtils from "../../utils/baseUtils/LoaderUtils";
import StoreUtils from "../../utils/baseUtils/StoreUtils";
import RouterUtils from "../../utils/baseUtils/RouterUtils";

const companyService = new CompanyService();

export const namespaced = true;

export const state = {
  userInfo: {
    userId: "00000488737",
  }
};

export const getters = {
  getUserInfo: state => {
    return state.userInfo;
  },
  getUserId: state => {
    return state.userInfo.userId;
  },
};

export const mutations = {
  SET_USER_INFO(state, payload) {
    state.userInfo = payload;
  }
};

export const actions = {
  toCompanyAddress() {
    // let formBody = StoreUtils.rootGetters(
    //     StoreUtils.getters.form.GET_FORM_BODY
    // );
    // console.log("Company Address =>", formBody);
    //
    // let payload = {
    //     orgName: formBody.orgName,
    //     orgIncNumber: formBody.orgIncNumber,
    //     orgIncDate: formBody.orgIncDate,
    //     orgType: formBody.orgType
    // };
    // console.log("The Create Company payload is ==>", payload);

    /*let successAction = responseData => {
          //  save user info in the store


        };*/
    //StoreUtils.commit("user/SET_USER_INFO", responseData),
    //  increase form stage
    StoreUtils.commit("form/INCREASE_FORM_STAGE_BY_ONE");
    //
    /*companyService.createCompany(
          payload,
          successAction,
          LoaderUtils.types.BLOCKING
        );*/
  },

  setNewCompany() {
    let formBody = StoreUtils.rootGetters(
      StoreUtils.getters.form.GET_FORM_BODY
    );
    let userInfo = StoreUtils.rootGetters(
      StoreUtils.getters.company.GET_USER_INFO
    )

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
      orgUserID: userInfo.userId,
    };

    console.log(payload)
    //  route to create company
    let successAction = RouterUtils.changeRouteTo(RouterUtils.routes.DASHBOARD);

    companyService.createCompany(
      payload,
      successAction,
      LoaderUtils.types.BLOCKING
    );
  }
};
