<template>
  <div class="app-form">
    <FormulateForm @submit="submit">
      <FormulateInput
        name="Username"
        type="tel"
        label="Username*"
        validation="required"
        validation-name="phone number"
        placeholder="Phone number/username"
      />
      <FormulateInput
        name="password"
        type="password"
        label="Password*"
        validation="required"
        validation-name="password"
        placeholder="Enter your Password"
      />
      <p class="forgot-password-text"><a href="#">Forgot password?</a> </p>

      <FormulateInput type="submit" label="Login" />
    </FormulateForm>
  </div>
</template>

<script>
import StoreUtils from "../../../utils/baseUtils/StoreUtils";

export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    submit(data) {
      StoreUtils.commit("form/BUILD_FORM_BODY", data);
      StoreUtils.dispatch("auth/login");
    }
  }
};
</script>
