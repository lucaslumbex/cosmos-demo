<template>
  <div class="app-layout">
    <AppInnerHeader :pageTitle="pageTitle" />
    <slot />
  </div>
</template>

<script>
import AppInnerHeader from "../app/AppInnerHeader";
export default {
  name: "InnerLayout",
  props: {
    pageTitle: {
      type: String,
      required: true
    }
  },
  components: { AppInnerHeader }
};
</script>

<style scoped></style>
