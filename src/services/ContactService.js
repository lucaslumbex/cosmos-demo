import BaseService from "../services/BaseService";
import AppUtils from "../utils/baseUtils/AppUtils";

class ContactService extends BaseService {
  submitContactUsForm(
    payload,
    successAction,
    loaderType,
    errorType,
    showSuccessMessage,
    successCondition,
    getErrorMessage
  ) {
    return this.makePostRequest(
      AppUtils.urls.contactUs.SEND_CONTACT_US_EMAIL,
      payload,
      successAction,
      loaderType,
      errorType,
      showSuccessMessage,
      successCondition,
      getErrorMessage
    );
  }
}

export default ContactService;
