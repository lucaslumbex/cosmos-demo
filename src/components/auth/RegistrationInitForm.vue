<template>
  <div class="app-form">
    <FormulateForm @submit="submit">
      <FormulateInput
        name="firstName"
        type="text"
        label="First Name*"
        validation="required"
        validation-name="firstName"
        placeholder="First Name"
      />
      <FormulateInput
        name="lastName"
        type="text"
        label="Last Name*"
        validation="required"
        validation-name="lastName"
        placeholder="Last Name"
      />
      <FormulateInput
        name="email"
        type="email"
        label="Email*"
        validation="required"
        validation-name="email"
        placeholder="Email"
      />
      <FormulateInput
        name="phone"
        type="tel"
        label="Phone Number*"
        validation="required|number"
        validation-name="phone number"
        placeholder="Phone Number"
      />
      <FormulateInput type="submit" label="Next" />
    </FormulateForm>
  </div>
</template>

<script>
import StoreUtils from "../../utils/baseUtils/StoreUtils";

export default {
  name: "RegistrationInitForm",
  data() {
    return {};
  },
  methods: {
    submit(data) {
      StoreUtils.commit("form/BUILD_FORM_BODY", data);
      StoreUtils.dispatch("auth/registrationInit");
    }
  }
};
</script>

<style scoped></style>
