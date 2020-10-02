import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/auth/Login";
import Registration from "../views/auth/Registration";
import Dashboard from "../views/Dashboard";

import CreateCompany from "../views/company/CreateCompany";
import AddCompany from "../views/company/AddCompany";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/add-company",
    name: "addCompany",
    component: AddCompany
  },
  {
    path: "/create-company",
    name: "createCompany",
    component: CreateCompany
  },
  {
    path: "/registration",
    name: "registration",
    component: Registration
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
