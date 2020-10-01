import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/auth/Login";
import Registration from "../views/auth/Registration";
import Dashboard from "../views/Dashboard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard
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
