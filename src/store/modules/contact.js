import StoreUtils from "../../utils/baseUtils/StoreUtils";
import ContactService from "@/services/ContactService";
import LoaderUtils from "@/utils/baseUtils/LoaderUtils";
let contactService = new ContactService()

export const namespaced = true;

export const state = {
};

export const getters = {
};

export const mutations = {

};

export const actions = {
  submitContactUsForm() {
    let formBody = StoreUtils.rootGetters(
        StoreUtils.getters.form.GET_FORM_BODY
    );
    let payload = {
      firstName: formBody.firstName,
      lastName: formBody.lastName,
      phoneNumber:formBody.phoneNumber,
      companyName: formBody.companyName,
      companySector: formBody.companySector,
      comment: formBody.comment
    };
    let successAction = () => {}
    ;

    contactService.submitContactUsForm(
        payload,
        successAction,
        LoaderUtils.types.BLOCKING
    );
  }
};
