<template>
  <div class="app-form">
    <FormulateForm @submit="submit">
      <FormulateInput
        name="token"
        type="number"
        label="Otp*"
        validation="required"
        validation-name="Otp"
        placeholder="Otp"
      />
      <FormulateInput
        name="password"
        type="password"
        label="Password*"
        validation="required"
        validation-name="password"
        placeholder="Password"
      />
      <FormulateInput
        name="password_confirm"
        type="password"
        label="Confirm Password*"
        validation="required|confirm"
        validation-name="confirm password"
        placeholder="Confirm Password"
      />
      <FormulateInput type="submit" label="Submit" />
    </FormulateForm>
  </div>
</template>

<script>
import StoreUtils from "../../../../utils/baseUtils/StoreUtils";

export default {
  name: "EnrolmentComplete",
  data() {
    return {};
  },
  methods: {
    submit(data) {
      StoreUtils.commit("form/BUILD_FORM_BODY", data);
      StoreUtils.dispatch("auth/enrollmentComplete");
    }
  }
};
</script>
