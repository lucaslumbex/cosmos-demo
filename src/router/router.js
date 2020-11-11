import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
// import Terms from "../views/Terms";
import Dashboard from "../views/Dashboard";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/terms",
  //   name: "terms",
  //   component: Terms
  // },
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
