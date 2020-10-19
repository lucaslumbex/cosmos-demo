<template>
  <div class="app-form">
    <p class="form-title">Create Company</p>
    <FormulateForm @submit="submit">
      <FormulateInput
        name="orgName"
        type="text"
        label="Company Name*"
        validation="required"
        validation-name="Company Name"
        placeholder="Enter Your Company Name"
      />
      <FormulateInput
        name="orgIncNumber"
        type="text"
        label="Incorporation Number"
        validation="required"
        validation-name="Incorporation Number"
        placeholder="Enter Your Company Incorporation Number"
      />
      <FormulateInput
        name="orgIncDate"
        type="date"
        label="Incorporation Date"
        validation="required"
        validation-name="Incorporation Date"
      />
      <FormulateInput
        name="orgType"
        type="text"
        label="Organisation Type*"
        validation="required"
        validation-name="Organisation Type"
        placeholder="Enter Your Organisation Type"
      />
      <FormulateInput type="submit" label="Next" />
    </FormulateForm>
  </div>
</template>

<script>
import StoreUtils from "../../../utils/baseUtils/StoreUtils";

export default {
  name: "CompanyDetailsForm",

  methods: {
    submit(data) {
      StoreUtils.commit("form/BUILD_FORM_BODY", data);
      StoreUtils.commit("form/INCREASE_FORM_STAGE_BY_ONE");
    }
  }
};
</script>

<style scoped></style>
