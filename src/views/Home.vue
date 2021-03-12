<template>
  <div>
    <app-layout :is-home-page="true">
      <review></review>

      <financial></financial>
      <join-us></join-us>
    </app-layout>
  </div>
</template>

<script>
import AppLayout from "@/components/layout/AppLayout";
import Review from "@/components/sections/Review";
import Financial from "@/components/sections/Financial";
import JoinUs from "@/components/sections/JoinUs";
export default {
  name: "Home",
  components: {JoinUs, Financial, Review, AppLayout}
};
</script>

<style scoped></style>
