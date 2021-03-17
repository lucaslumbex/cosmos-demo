import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
// import Terms from "../views/Terms";
import Dashboard from "../views/Dashboard";
import ContactUs from "../views/ContactUs";
import Pricing from "@/views/Pricing";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/terms",
  //   name: "terms",
  //   component: Terms
  // },
  {
    path: "/pricing",
    name: "pricing",
    component: Pricing
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: ContactUs
  },
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
