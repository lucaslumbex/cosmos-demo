<template>
  <div class="app-form">
    <p class="form-title">Add Officer</p>
    <FormulateForm @submit="submit">
      <FormulateInput
        name="firstName"
        type="text"
        label="First Name*"
        validation="required"
        validation-name="Officer First Name"
        placeholder="Enter Your First Name"
      />
      <FormulateInput
        name="lastName"
        type="text"
        label="Last Name*"
        validation="required"
        validation-name="Officer Last Name"
        placeholder="Enter Your Last Name"
      />
      <FormulateInput
        name="middleName"
        type="text"
        label="Middle Name*"
        validation="required"
        validation-name="Officer Middle Name"
        placeholder="Enter Your Middle Name"
      />
      <FormulateInput
        name="maidenName"
        type="text"
        label="Maiden Name*"
        validation="required"
        validation-name="Officer Maiden Name"
        placeholder="Enter Your Maiden Name"
      />
      <FormulateInput
        name="officerGender"
        type="select"
        label="Gender*"
        validation="required"
        validation-name="Officer Gender "
        placeholder="Select..."
        :options="{
          male: 'Male',
          female: 'Female'
        }"
      />
      <FormulateInput
        name="officerDOB"
        type="date"
        label="Date of birth*"
        validation="required"
        validation-name="Officer DOB"
      />
      <FormulateInput
        name="officerNationality"
        type="select"
        label="Nationality*"
        validation="required"
        validation-name="Officer Nationality"
        placeholder="Enter Your Nationality"
        :options="{
          nigerian: 'Nigerian',
          ghanaian: 'Ghanaian'
        }"
      />
      <FormulateInput type="submit" label="Next" />
    </FormulateForm>
  </div>
</template>

<script>
import StoreUtils from "../../../utils/baseUtils/StoreUtils";

export default {
  name: "AddAccountOfficerFirstForm",
  methods: {
    submit(data) {
      StoreUtils.commit("form/BUILD_FORM_BODY", data);
      StoreUtils.commit("form/INCREASE_FORM_STAGE_BY_ONE");
    }
  }
};
</script>

<style scoped></style>
