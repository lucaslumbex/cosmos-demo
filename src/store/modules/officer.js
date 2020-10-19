import OfficerService from "../../services/OfficerService";
import LoaderUtils from "../../utils/baseUtils/LoaderUtils";
import StoreUtils from "../../utils/baseUtils/StoreUtils";
import RouterUtils from "../../utils/baseUtils/RouterUtils";

const officerService = new OfficerService();

export const namespaced = true;

export const state = {
  officerOrgID: ""
};

export const getters = {
  getOfficerAccountId: state => {
    return state.currentAccountId;
  },
  getCurrentOfficerCompanyName: state => {
    return state.officerOrgName;
  }
};

export const mutations = {
  SET_CURRENT_OFFICER_ID(state, payload) {
    state.currentAccountId = payload;
  }
};

export const actions = {
  addAccountOfficer() {
    let formBody = StoreUtils.rootGetters(
      StoreUtils.getters.form.GET_FORM_BODY
    );
    let payload = {
      officerFirstName: formBody.firstName,
      officerLastName: formBody.lastName,
      maidenName: formBody.maidenName,
      middleName: formBody.middleName,
      officerGender: formBody.officerGender,
      officerNationality: formBody.officerNationality,
      officerDesignation: formBody.officerDesignation,
      officerIDType: formBody.officerIDType,
      officerIDNumber: formBody.officerIDNumber,
      officerIDIssueDate: formBody.officerIDIssueDate,
      officerIDExpiryDate: formBody.officerIDExpiryDate,
      officerEmpAddress: formBody.officerEmpAddress,
      officerCountry: formBody.officerCountry,
      officerState: formBody.officerState,
      officerCity: formBody.officerCity,
      officerStreet: formBody.officerStreet,
      officerPhone: formBody.officerPhone,
      officerEmail: formBody.officerEmail,
      officerEmpName: formBody.officerEmpName,
      officerBVN: formBody.officerBVN,
      officerOccupation: formBody.officerOccupation,
      officerIndustry: formBody.officerIndustry,
      officerEmpPhone: formBody.officerEmpPhone,
      officerRole: formBody.officerRole,
      officerDOB: formBody.officerDOB,
      requestType: "create",
      officerOrgName: StoreUtils.rootGetters("company/getCurrentCompany")
        .orgName,
      officerOrgID: StoreUtils.rootGetters("company/getCurrentCompany").orgID,
      officerAccID: StoreUtils.rootGetters("account/getCurrentAccount").accID,
      officerAddedBy: StoreUtils.rootGetters(
        StoreUtils.getters.user.GET_USER_INFO
      ).id,
      officerAddedByFirstName: StoreUtils.rootGetters(
        StoreUtils.getters.user.GET_USER_INFO
      ).firstName,
      officerAddedByLastName: StoreUtils.rootGetters(
        StoreUtils.getters.user.GET_USER_INFO
      ).lastName
    };
    console.log("payload =>", payload);
    // console.log("payload =>", payload);
    let successAction = () => {
      //route the user to the dashboard
      RouterUtils.changeRouteTo(RouterUtils.routes.DASHBOARD);

      //reset the form
      StoreUtils.dispatch("form/resetForm");
    };

    officerService.addAccountOfficer(
      payload,
      successAction,
      LoaderUtils.types.BLOCKING
    );
  }
};
