<template>
  <div class="app-layout">
    <div class="hold">
      <AppHeader />
      <slot />
      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppHeader from "../app/AppHeader";
import AppFooter from "@/components/app/AppFooter";
export default {
  name: "AppLayout",
  components: {AppFooter, AppHeader }
};
</script>

<style scoped></style>
