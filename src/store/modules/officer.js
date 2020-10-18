import OfficerService from "../../services/OfficerService";
import LoaderUtils from "../../utils/baseUtils/LoaderUtils";
import StoreUtils from "../../utils/baseUtils/StoreUtils";
import RouterUtils from "../../utils/baseUtils/RouterUtils";

const officerService = new OfficerService();

export const namespaced = true;

export const state = {

};

export const getters = {};

export const mutations = {

};

export const actions = {
  fetchAllOfficers() {
    let payload = {
      orgID: StoreUtils.rootGetters("company/getCurrentCompanyId"),
      accID: StoreUtils.rootGetters("account/getCurrentAccountId").toString(),
      requestType: "officer"
    };
    let successAction = responseData => {
      StoreUtils.commit("table/SET_TABLE_DATA", responseData.data);
      console.log("=>", responseData)
      //let loaderType = LoaderUtils.types.TABLE;
    };
    officerService.fetchAllOfficers(payload, successAction, LoaderUtils.types.TABLE);
  },
  singleOfficer() {
    let payload = {};
    let successAction = responseData => {
      RouterUtils.changeRouteTo(RouterUtils.routes.ALL_OFFICERS);
      StoreUtils.commit("table/SET_TABLE_DATA", responseData);
      //let loaderType = LoaderUtils.types.TABLE;
    };
    officerService.singleOfficer(
      payload,
      successAction,
      LoaderUtils.types.TABLE
    );
  }
};
