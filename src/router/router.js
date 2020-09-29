import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard";
import Login from "../views/auth/Login";
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
    path: "/addcompany",
    name: "addCompany",
    component: AddCompany
  },
  {
    path: "/createcompany",
    name: "createCompany",
    component: CreateCompany
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
