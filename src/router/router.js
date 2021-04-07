import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
// import Terms from "../views/Terms";
import ContactUs from "../views/ContactUs";
import Pricing from "@/views/Pricing";
import Documentation from "@/views/Documentation";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/terms",
  //   name: "terms",
  //   component: Terms
  // },
  {
    path: "/documentation",
    name: "documentation",
    component: Documentation
  },
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
