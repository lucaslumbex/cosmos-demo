import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/auth/Login";
import Enrolment from "../views/auth/Enrolment";
import Dashboard from "../views/Dashboard";

import CreateCompany from "../views/company/CreateCompany";
import AddCompany from "../views/company/AddCompany";
import AllAccountOfficers from "../views/officer/AllAccountOfficers";
import OfficerMoreInfo from "../views/officer/OfficerMoreInfo";
import AccountOfficerDetails from "../views/officer/AddAccountOfficerDetails";
import CompanyDetails from "../views/company/CompanyDetails";

Vue.use(VueRouter);

const routes = [
  {
    path: "/company-details",
    name: "company-details",
    component: CompanyDetails
  },
  {
    path: "/add-officer",
    name: "add-officer",
    component: AccountOfficerDetails
  },
  {
    path: "/all-officers",
    name: "all-officers",
    component: AllAccountOfficers
  },
  {
    path: "/officer-more-info",
    name: "officer-more-info",
    component: OfficerMoreInfo
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/add-company",
    name: "add-company",
    component: AddCompany
  },
  {
    path: "/create-company",
    name: "create-company",
    component: CreateCompany
  },
  {
    path: "/enrolment",
    name: "enrolment",
    component: Enrolment
  },
  {
    path: "/",
    name: "login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
