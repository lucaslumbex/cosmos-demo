
import LoaderUtils from "../../utils/baseUtils/LoaderUtils";
import StoreUtils from "../../utils/baseUtils/StoreUtils";
import ContactUsServices from "@/services/ContactUsServices";
// import RouterUtils from "../../utils/baseUtils/RouterUtils";

const contactUsService = new ContactUsServices();

export const namespaced = true;

export const state = {
};

export const getters = {
};

export const mutations = {

};

export const actions = {
    sendFintechMail() {
        let formBody = StoreUtils.rootGetters(
            StoreUtils.getters.form.GET_FORM_BODY
        );
        let payload = {
            firstName: formBody.firstName,
            lastName: formBody.lastName,
            phoneNumber: formBody.phoneNumber,
            companyName: formBody.companyName,
            companySector: formBody.companySector,
            comment: formBody.comment
        };

        //reset form
        let successAction = () => {
            StoreUtils.dispatch("form/resetForm")

        };

        contactUsService.sendFintechMail(
            payload,
            successAction,
            LoaderUtils.types.BLOCKING
        );
    }
};
