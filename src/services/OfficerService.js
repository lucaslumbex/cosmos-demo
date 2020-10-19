import BaseService from "../services/BaseService";
import AppUtils from "../utils/baseUtils/AppUtils";

class OfficerService extends BaseService {
  addAccountOfficer(
    payload,
    successAction,
    loaderType,
    errorType,
    showSuccessMessage,
    successCondition,
    getErrorMessage
  ) {
    return this.makePostRequest(
      AppUtils.urls.officer.ADD_OFFICER,
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

export default OfficerService;
