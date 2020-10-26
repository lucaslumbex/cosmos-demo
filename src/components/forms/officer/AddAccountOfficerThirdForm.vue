<template>
  <div class="app-form">
    <p class="form-title">Add Officer Contd'...</p>
    <FormulateForm @submit="submit">
      <FormulateInput
        name="officerIDType"
        type="select"
        label="ID Type*"
        validation="required"
        validation-name="Officer ID Type"
        placeholder="Enter Your ID Type"
        :options="{
          votersCard: 'Voters card',
          nationality: 'National ID',
          internationalPassport: 'International Passport',
          driversLicense: 'Drivers License'
        }"
      />
      <FormulateInput
        name="officerIDNumber"
        type="number"
        label="ID Number*"
        validation="required"
        validation-name="Officer ID Number"
        placeholder="Enter Your ID Number"
      />
      <FormulateInput
        name="officerIDIssueDate"
        type="date"
        label="ID Issue Date*"
        validation="required"
        validation-name="Officer ID Issue Date"
      />
      <FormulateInput
        name="officerIDExpiryDate"
        type="date"
        label="ID Expiry Date*"
        validation="required"
        validation-name="Officer ID Expiry Date"
      />
      <FormulateInput
        name="officerEmpName"
        type="text"
        label="Employee Name*"
        validation="required"
        validation-name="Officer Employee Name"
        placeholder="Enter Your Employee Name"
      />
      <FormulateInput
        name="officerDesignation"
        type="select"
        label="Designation*"
        validation="required"
        validation-name="Officer Designation"
        placeholder="Enter Your Designation"
        :options="{
          director: 'Director',
          signatory: 'Signatory',
          both: 'Director & Signatory'
        }"
      />
      <FormulateInput
        name="officerIndustry"
        type="text"
        label="Industry*"
        validation="required"
        validation-name="Officer Industry"
        placeholder="Enter Industry"
      />
      <FormulateInput
        name="officerEmpPhone"
        type="number"
        label="Employee Phone Number*"
        validation="required|min:11,length|max:11,length"
        validation-name="Officer Employee Phone Number"
        placeholder="Enter Your Employee Phone Number"
      />
      <FormulateInput
        name="officerRole"
        type="text"
        label="Role*"
        validation="required"
        validation-name="Officer role"
        placeholder="Enter Role"
      />
      <FormulateInput type="submit" label="ADD OFFICER" />
    </FormulateForm>
  </div>
</template>

<script>
import StoreUtils from "../../../utils/baseUtils/StoreUtils";

export default {
  name: "AddAccountOfficerThirdForm",
  methods: {
    submit(data) {
      StoreUtils.commit("form/BUILD_FORM_BODY", data);
      StoreUtils.dispatch("officer/addAccountOfficer");
    }
  }
};
</script>

<style scoped></style>
