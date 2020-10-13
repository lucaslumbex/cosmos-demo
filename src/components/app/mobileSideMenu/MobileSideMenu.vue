<template>
  <div class="mobile-side-menu">
    <div class="backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="menu-panel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import StoreUtils from "../../../utils/baseUtils/StoreUtils";

export default {
  name: "MobileSideMenu",
  computed: {
    isPanelOpen() {
      return StoreUtils.rootGetters("sideMenu/getIsMenuOpen");
    }
  },
  methods: {
    closeSidebarPanel() {
      StoreUtils.commit("sideMenu/TOGGLE_SIDE_MENU");
    }
  }
};
</script>
<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}
</style>
