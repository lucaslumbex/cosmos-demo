import BaseService from "./BaseService";
import AppUtils from "../utils/baseUtils/AppUtils";

class CompanyService extends BaseService {
  createCompany(
    payload,
    successAction,
    loaderType,
    errorType,
    showSuccessMessage,
    successCondition,
    getErrorMessage
  ) {
    return this.makePostRequest(
      AppUtils.urls.company.CREATE_COMPANY,
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

export default CompanyService;
