<template>
  <div class="app-layout">
    <div class="landing-page" :class="{'is-home-page': isHomePage}">
      <AppHeader />
      <div v-if="isHomePage" class="row">
        <div class="col-12 col-md-6 d-none d-sm-block">
          <div class="right-side">
            <img
                src="https://assets-base.s3.amazonaws.com/img/rubies/baas/landing-left-pic.png"
                class="landing-left-pic"
                alt=""/>
          </div>
        </div>
        <div class="col-12 col-md-6">


          <div class="left-side">
            <h1 class="left-intro">
              A Better Way To<br />
              Collect Payments
            </h1>
            <p class="left-text">
              Start receiving and disbursing payments in minutes
            </p>
            <form>
              <input
                  type="text"
                  class="landing-input"
                  placeholder="Enter your email address"
              />
              <button type="button" class="landing-btn">Get Started</button>
            </form>
          </div>
        </div>
      </div>
    </div>


    <slot />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "../app/AppHeader";
import AppFooter from "@/components/app/AppFooter";
export default {
  name: "AppLayout",
  props: {
    isHomePage: {
      type: Boolean,
      default: false
    }
  },
  components: {AppFooter, AppHeader }
};
</script>

<style scoped></style>
