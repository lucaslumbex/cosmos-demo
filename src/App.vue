<template>
  <div id="app">
    <NotificationContainer />
    <Loading v-if="loader.blockingLoader" />
    <transition name="slide-fade" mode="out-in">
      <router-view :key="$route.fullPath" />
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NotificationContainer from "./components/utility/Notification/NotificationContainer";
import Loading from "./components/utility/Loading";
import StoreUtils from "./utils/baseUtils/StoreUtils";

export default {
  name: "app",
  components: {
    NotificationContainer,
    Loading
  },
  mounted() {
    window.addEventListener("load", () => {
      // run after everything is in-place
      StoreUtils.commit("loader/SET_BLOCKING_LOADER", false);
    });
  },
  computed: {
    ...mapState(["loader"])
  }
};
</script>

<style>
a {
  cursor: pointer;
}
.slide-fade-enter {
  opacity: 0;
  transform: translateX(10px);
}
.slide-fade-enter-to {
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave {
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
</style>
