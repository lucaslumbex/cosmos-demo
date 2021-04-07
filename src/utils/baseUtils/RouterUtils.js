import StoreUtils from "./StoreUtils";
import router from "../../router/router";

class RouterUtils {
  static routes = {
    HOME: "home",
    DOCUMENTATION: "documentation",
    PRICING: "pricing",
    CONTACT_US: "contact-us",
  };

  static changeRouteTo(targetRoute) {
    StoreUtils.commit("router/SET_ACTIVE_ROUTE", targetRoute);
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
