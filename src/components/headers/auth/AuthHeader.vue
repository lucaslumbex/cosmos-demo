<template>
  <div class="login-header">
    <p class="login-logo">
      <img
        src="https://assets-base.s3.amazonaws.com/img/rubies/rubies-business/rb-logo.png"
        alt=""
      />
    </p>
    <h6 class="login-header-text">{{title}}</h6>
    <p class="login-header-sub-text">
      {{sub}}
    </p>
  </div>
</template>

<script>
export default {
  name: "AuthHeader",
  props: {
    title: {
      type: String,
      default: ""
    },
    sub: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.login-logo {
}
.login-logo img {
  width: 60%;
}
</style>
