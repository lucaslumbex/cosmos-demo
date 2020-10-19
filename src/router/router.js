import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/auth/Login";
import Enrolment from "../views/auth/Enrolment";
import Dashboard from "../views/Dashboard";

import CreateCompany from "../views/company/CreateCompany";
import AddCompany from "../views/company/AddCompany";
import AccountOfficerDetails from "../views/officer/AddAccountOfficerDetails";

Vue.use(VueRouter);

const routes = [
  {
    path: "/add-officer",
    name: "add-officer",
    component: AccountOfficerDetails
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
