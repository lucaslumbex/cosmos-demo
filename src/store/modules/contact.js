import StoreUtils from "../../utils/baseUtils/StoreUtils";
import ContactService from "@/services/ContactService";
import LoaderUtils from "@/utils/baseUtils/LoaderUtils";
import NotificationUtils from "@/utils/baseUtils/NotificationUtils";
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
    let successAction = () => {
     let tankYouModalBody = {
        type: "success", //error, success, warning
        mode: "default", // default, yes-no
        title: "Successful",
        message: "Thank you for filling our contact form. \n" +
            "Someone will reach out to you shortly 😁",
        noAction: () => {},
        noActionTitle: "",
        yesAction: () => {NotificationUtils.closeNotificationModal()},
        yesActionTitle: "Got it.",
       modalWidth: "400",
       modalHeight: "200"
      };
     NotificationUtils.showNotificationModal(tankYouModalBody)

        }
    ;

    contactService.submitContactUsForm(
        payload,
        successAction,
        LoaderUtils.types.BLOCKING
    );
  }
};
