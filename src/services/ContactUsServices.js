import BaseService from "./BaseService";
import AppUtils from "../utils/baseUtils/AppUtils";

class ContactUsServices extends BaseService {
    sendFintechMail(
        payload,
        successAction,
        loaderType,
        errorType,
        showSuccessMessage,
        successCondition,
        getErrorMessage
    ) {
        return this.makePostRequest(
            AppUtils.urls.contactus.SEND_FINTECH_MAIL,
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

export default ContactUsServices;
