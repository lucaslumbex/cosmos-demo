<template>
  <div id="header" class="app-header">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" @click="switchRouteTo('home')">
            <span class="logo">
              <img
                  src="https://assets-base.s3.amazonaws.com/img/rubies/baas/rubies-logo.png"
                  alt="logo"
              />
            </span>
      </a>
      <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapseContent"
          aria-controls="navbarCollapseContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
      >
            <span class="hamburger-menu">
              <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M32.5 40H7.5C3.35754 40 0 36.6425 0 32.5V7.5C0 3.35754 3.35754 0 7.5 0H32.5C36.6425 0 40 3.35754 40 7.5V32.5C40 36.6425 36.6425 40 32.5 40Z"
                    fill="#ffffff"
                />
                <path
                    d="M26.6663 13.3338H13.3337C12.8738 13.3338 12.5 13.7076 12.5 14.1675V15.8338C12.5 16.2937 12.8738 16.6675 13.3337 16.6675H26.6675C27.1274 16.6675 27.5012 16.2937 27.5012 15.8338V14.1675C27.5 13.7076 27.1262 13.3338 26.6663 13.3338Z"
                    fill="#ca5152"
                />
                <path
                    d="M26.6663 18.3338H13.3337C12.8738 18.3338 12.5 18.7076 12.5 19.1675V20.8338C12.5 21.2937 12.8738 21.6675 13.3337 21.6675H26.6675C27.1274 21.6675 27.5012 21.2937 27.5012 20.8338V19.1675C27.5 18.7076 27.1262 18.3338 26.6663 18.3338Z"
                    fill="#ca5152"
                />
                <path
                    d="M26.6663 23.3338H13.3337C12.8738 23.3338 12.5 23.7076 12.5 24.1675V25.8338C12.5 26.2937 12.8738 26.6675 13.3337 26.6675H26.6675C27.1274 26.6675 27.5012 26.2937 27.5012 25.8338V24.1675C27.5 23.7076 27.1262 23.3338 26.6663 23.3338Z"
                    fill="#ca5152"
                />
              </svg>
            </span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapseContent">
        <ul class="navbar-nav m-auto">
          <li class="nav-item active">
            <a class="nav-link" :class="{active: currentRoute.includes('home')}" @click="switchRouteTo('home')"
            >HOME <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link"  :class="{active: currentRoute.includes('documentation')}" @click="switchRouteTo('documentation')">DOCUMENTATIONS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{active: currentRoute.includes('pricing')}" @click="switchRouteTo('pricing')">PRICING</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{active: currentRoute.includes('contact')}" @click="switchRouteTo('contact-us')">CONTACT US</a>
          </li>
        </ul>

        <form class="form-inline my-2 my-lg-0">
          <!--                    <a class="app-header-btn btn">Download Now</a>-->
          <button type="button" class="app-header-btn"><a href="https://businessaccount.rubies.ng/">
            Business Login
          </a>
          </button>
          <button type="button" class="app-header-btn alt"><a href="https://businessaccount.rubies.ng/register">
            Get Started
          </a>
          </button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import RouterUtils from "@/utils/baseUtils/RouterUtils";
import StoreUtils from "@/utils/baseUtils/StoreUtils";

export default {
  name: "AppHeader",
  computed: {
    currentRoute() {
      return StoreUtils.rootGetters("router/getActiveRoute")
    }
  },
  methods: {
    switchRouteTo(routeName) {
      RouterUtils.changeRouteTo(routeName);
    }
  }
};
</script>

<style scoped></style>
