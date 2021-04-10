<template>
  <footer>
    <div class="app-footer">
      <p><span class="foot-logo"><img src="https://assets-base.s3.amazonaws.com/img/logoz.png" alt=""></span></p>
      <p>©️ 2021 Lumbex All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
import RouterUtils from "@/utils/baseUtils/RouterUtils";

export default {
  name: "AppFooter",
  methods: {
    switchRouteTo(routeName) {
      RouterUtils.changeRouteTo(routeName);
    }
  }
};
</script>

<style scoped>
</style>
