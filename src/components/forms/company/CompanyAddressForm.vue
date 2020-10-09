<template>
  <div class="app-form">
    <p class="form-title">Create Company Contd'...</p>
    <FormulateForm @submit="submit">
      <FormulateInput
        name="orgStreet"
        type="text"
        label="Street*"
        validation="required"
        validation-name="Street"
        placeholder="The Name Of The Street..."
      />
      <FormulateInput
        name="orgCity"
        type="select"
        label="City* "
        validation="required"
        validation-name="City "
        placeholder="Select your City..."
        :options="{
          Lekki: 'Lekki'
        }"
      />
      <FormulateInput
        name="orgState"
        type="text"
        label="State*"
        validation="required"
        validation-name="State"
        placeholder="Enter Your State..."
      />
      <FormulateInput
        name="orgCountry"
        type="text"
        label="Country*"
        validation="required"
        validation-name="Country "
        placeholder="Enter The Country..."
      />
      <FormulateInput
        name="orgPhone"
        type="text"
        label="Phone Number*"
        validation="required"
        validation-name="Phone Number"
        placeholder="Enter The Phone Number..."
      />
      <FormulateInput
        name="orgEmail"
        type="email"
        label="Company Email*"
        validation="required"
        validation-name="Email "
        placeholder="Enter The Company Email..."
      />
      <FormulateInput
        name="orgWebsite"
        type="url"
        label="Website*"
        validation="required"
        validation-name="Website "
        placeholder="Enter The Website..."
      />
      <FormulateInput type="submit" label="CREATE COMPANY" />
    </FormulateForm>
  </div>
</template>

<script>
import StoreUtils from "../../../utils/baseUtils/StoreUtils";

export default {
  name: "CompanyAddressForm",
  methods: {
    submit(data) {
      StoreUtils.commit("form/BUILD_FORM_BODY", data);

      StoreUtils.dispatch("company/createCompany");
    }
  }
};
</script>

<style scoped></style>
