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
        type="text"
        label="City*"
        validation="required"
        validation-name="City "
        placeholder="Select your City..."
      />
      <FormulateInput
        name="orgState"
        type="select"
        label="State*"
        validation="required"
        validation-name="State"
        placeholder="Enter Your State..."
        :options="nigerianStatesOptions"
      />
      <FormulateInput
        name="orgCountry"
        type="select"
        label="Country*"
        validation="required"
        validation-name="Country "
        placeholder="Enter The Country..."
        :options="{
          nigeria: 'Nigeria'
        }"
      />
      <FormulateInput
        name="orgPhone"
        type="tel"
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
        validation-name="Email"
        placeholder="Enter The Company Email..."
      />
      <FormulateInput
        name="orgWebsite"
        type="url"
        label="Website"
        validation-name="Website"
        placeholder="Enter The Website..."
      />
      <FormulateInput type="submit" label="CREATE COMPANY" />
    </FormulateForm>
  </div>
</template>

<script>
import StoreUtils from "../../../utils/baseUtils/StoreUtils";
import AppUtils from "../../../utils/baseUtils/AppUtils";

export default {
  name: "CompanyAddressForm",
  computed: {
    nigerianStatesOptions() {
      return AppUtils.allNigerianStatesOptions();
    }
  },
  methods: {
    submit(data) {
      StoreUtils.commit("form/BUILD_FORM_BODY", data);

      StoreUtils.dispatch("company/createCompany");
    }
  }
};
</script>

<style scoped></style>
