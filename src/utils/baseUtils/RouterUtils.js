import StoreUtils from "./StoreUtils";
import router from "../../router/router";

class RouterUtils {
  static routes = {
    auth: {
      LOGIN: "login",
      ENROLLMENT: "enrolment"
    },
    company: {
      CREATE_COMPANY: "create-company",
      ADD_COMPANY: "add-company",
      COMPANY_DETAILS: "company-details"
    },
    officer: {
      ALL_OFFICERS: "all-officers",
      OFFICER_MORE_INFO: "officer-more-info",
      ADD_OFFICER: "add-officer"
    },
    document: {
      ALL_DOCUMENTS: "all-documents"
    },
    DASHBOARD: "dashboard"
  };

  static changeRouteTo(targetRoute) {
    router.push({
      name: targetRoute
    });
  }
  static changeBaseRouteTo(targetRoute) {
    StoreUtils.dispatch(StoreUtils.actions.router.setActiveRoute, targetRoute);
    router.push({
      name: targetRoute
    });
  }
  static changeActivePageTo(targetRoute) {
    StoreUtils.dispatch(StoreUtils.actions.router.setActiveRoute, targetRoute);
  }
  static changeRouteUrlTo(targetUrl) {
    router.push(targetUrl);
  }
}
export default RouterUtils;
