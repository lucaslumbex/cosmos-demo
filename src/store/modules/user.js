import StoreUtils from "../../utils/baseUtils/StoreUtils";
import LoaderUtils from "../../utils/baseUtils/LoaderUtils";
import CompanyService from "../../services/CompanyService";
import RouterUtils from "../../utils/baseUtils/RouterUtils";
const companyService = new CompanyService();

export const namespaced = true;

export const state = {
  userInfo: {
    accountno: "000018640",
    countrycode: "234",
    token:
      "Bearer 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",
    companies: {
      data: [
        {
          accounts: [
            {
              accCustID: "000102822",
              accDate: "2020-10-17 12:00:41.24",
              accDateUpt: "2020-10-17 12:00:41.24",
              accID: 1926,
              accNumber: "2065445114",
              accOrgID: "1721",
              accStatus: "ACTIVE",
              isOfficer: "NO",
              hasOfficerUploaded: "NO",
              accUpgraded: "NO"
            }
          ],
          orgCity: "Epe",
          orgCountry: "nigeria",
          orgCustID: "000102822",
          orgDate: "2020-10-17 12:00:41.24",
          orgDateUpt: "2020-10-17 12:00:41.24",
          orgEmail: "mogbodada16@yahoo.com",
          orgID: "1721",
          orgIncDate: "2020-02-18",
          orgIncNumber: "34234",
          orgName: "mogbs Ltd",
          orgPhone: "2340088855567",
          orgState: "Lagos",
          orgStatus: "YES",
          orgStreet: "House 175, Close 8, Mayfair Gardens Ajah Epe Lekki Lagos",
          orgType: "LIMITED",
          orgUserID: "000018640",
          orgWebsite: "http://localhost:8080/create-company",
          roleType: "USER"
        },
        {
          accounts: [
            {
              accCustID: "000086158",
              accDate: "2020-10-16 16:48:22.857",
              accDateUpt: "2020-10-16 16:48:22.857",
              accID: 1923,
              accNumber: "6715887428",
              accOrgID: "1458",
              accStatus: "ACTIVE",
              isOfficer: "NO",
              hasOfficerUploaded: "NO",
              accUpgraded: "NO"
            },
            {
              accCustID: "000086158",
              accDate: "2020-07-10 16:47:27.06",
              accDateUpt: "2020-07-10 16:47:27.06",
              accID: 1568,
              accNumber: "1430356729",
              accOrgID: "1458",
              accStatus: "ACTIVE",
              isOfficer: "NO",
              hasOfficerUploaded: "NO",
              accUpgraded: "NO"
            }
          ],
          orgCity: "Victoria Island",
          orgCountry: "Nigeria",
          orgCustID: "000086158",
          orgDate: "2020-07-10 16:47:27.06",
          orgDateUpt: "2020-07-10 16:47:27.06",
          orgEmail: "INFO@RUBIES.NG",
          orgID: "1458",
          orgIncDate: "2017-01-26",
          orgIncNumber: "RC00000090752",
          orgName: "RUBIES AGENCY BVN PAYOUT",
          orgPhone: "2348130819906",
          orgState: "Lagos",
          orgStatus: "YES",
          orgStreet: "1004 Estate",
          orgType: "Limited Liability",
          orgUserID: "000018640",
          orgWebsite: "www.rubies.ng",
          roleType: "USER"
        },
        {
          accounts: [
            {
              accCustID: "000072777",
              accDate: "2020-05-11 05:16:37.737",
              accDateUpt: "2020-05-11 05:16:37.737",
              accID: 1356,
              accNumber: "6298915073",
              accOrgID: "1313",
              accStatus: "ACTIVE",
              isOfficer: "NO",
              hasOfficerUploaded: "NO",
              accUpgraded: "NO"
            }
          ],
          orgCity: "Victoria Island",
          orgCountry: "Nigeria",
          orgCustID: "000072777",
          orgDate: "2020-05-11 05:16:37.55",
          orgDateUpt: "2020-05-11 05:16:37.55",
          orgEmail: "anthony.morah@qucoon.com",
          orgID: "1313",
          orgIncDate: "2020-05-01",
          orgIncNumber: "999999999999",
          orgName: "Morah Motors",
          orgPhone: "2348130819906",
          orgState: "Lagos",
          orgStatus: "YES",
          orgStreet: "1004 Estate",
          orgType: "Partnership",
          orgUserID: "000018640",
          orgWebsite: "",
          roleType: "USER"
        }
      ],
      responseCode: "00",
      responseMessage: "Success"
    },
    customerid: "000018640",
    customername: "CHIDUBEM ANTHONY MORAH",
    email: "CMMORAH1@GMAIL.COM",
    role: "USER",
    firstName: "CHIDUBEM ANTHONY",
    lastName: "MORAH",
    mobilenumber: "8130819906",
    responseCode: "00",
    responseMessage: "Success",
    id: "000018640",
    username: "08130819906"
  }
};

export const getters = {
  getUserInfo: state => {
    return state.userInfo;
  },
  getUserEmail: state => {
    return state.userInfo.email;
  },
  getUserId: state => {
    return state.userInfo.id;
  },
  getIfUserHasCreatedCompany: state => {
    return state.userInfo.companies.data.length !== 0;
  },
  getCompanyById: state => id => {
    return state.userInfo.companies.data.find(company => company.orgID === id);
  }
};

export const mutations = {
  SET_USER_INFO(state, payload) {
    state.userInfo = payload;
  },
  SET_USER_COMPANIES(state, payload) {
    state.userInfo.companies.data = payload;
  }
};

export const actions = {
  fetchUserCompanies() {
    let payload = {
      userID: StoreUtils.rootGetters("user/getUserId"),
      requestType: "company"
    };

    let successAction = responseData => {
      StoreUtils.commit("user/SET_USER_COMPANIES", responseData.data);

      let currentCompanyId = StoreUtils.rootGetters(
        "company/getCurrentCompanyId"
      );
      let currentCompany = responseData.data.filter(company => {
        return company.orgID === currentCompanyId;
      })[0];

      StoreUtils.commit(
        "account/SET_CURRENT_ACCOUNT_ID",
        currentCompany.accounts[0].accID
      );

      RouterUtils.changeRouteTo(RouterUtils.routes.DASHBOARD);
    };
    companyService.fetchCompanies(
      payload,
      successAction,
      LoaderUtils.types.BLOCKING
    );
  }
};
