<template>
  <div class="app-layout">
    <AppHeader />
    <AppSidebar />
    <slot />
  </div>
</template>

<script>
import AppHeader from "../app/AppHeader";
import AppSidebar from "../app/AppSidebar";
export default {
  name: "AppLayout",
  components: { AppSidebar, AppHeader }
};
</script>

<style scoped></style>
