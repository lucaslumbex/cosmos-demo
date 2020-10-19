<template>
  <div class="app-form">
    <p class="form-title">Add Officer Contd'...</p>
    <FormulateForm @submit="submit">
      <FormulateInput
        name="officerPhone"
        type="number"
        label="Phone Number*"
        validation="required|min:11,length|max:11,length"
        validation-name="Phone Number"
        placeholder="Enter Your Phone Number..."
      />
      <FormulateInput
        name="officerEmail"
        type="email"
        label="Company Email*"
        validation="required"
        validation-name="Email"
        placeholder="Enter Your Company Email..."
      />
      <FormulateInput
        name="officerBVN"
        type="number"
        label="BVN Number*"
        validation="required"
        validation-name="Officer BVN Number"
        placeholder="Enter Your BVN Number"
      />
      <FormulateInput
        name="officerOccupation"
        type="text"
        label="Occupation*"
        validation="required"
        validation-name="Officer Occupation"
        placeholder="Enter Occupation"
      />
      <FormulateInput
        name="officerEmpAddress"
        type="text"
        label="Address*"
        validation="required"
        validation-name="Officer Address"
        placeholder="Enter Your Address"
      />
      <FormulateInput
        name="officerCountry"
        type="select"
        label="Country*"
        validation="required"
        validation-name="Country "
        placeholder="Enter Your Country..."
        :options="{
          nigeria: 'Nigeria'
        }"
      />
      <FormulateInput
        name="officerState"
        type="select"
        label="State*"
        validation="required"
        validation-name="State"
        placeholder="Enter Your State..."
        :options="nigerianStatesOptions"
      />
      <FormulateInput
        name="officerCity"
        type="text"
        label="City*"
        validation="required"
        validation-name="City "
        placeholder="Select Your City..."
      />
      <FormulateInput
        name="officerStreet"
        type="text"
        label="Street*"
        validation="required"
        validation-name="Street"
        placeholder="The Name Of Your Street..."
      />
      <FormulateInput type="submit" label="Next" />
    </FormulateForm>
  </div>
</template>

<script>
import StoreUtils from "../../../utils/baseUtils/StoreUtils";
import AppUtils from "../../../utils/baseUtils/AppUtils";

export default {
  name: "AddAccountOfficerSecondForm",
  computed: {
    nigerianStatesOptions() {
      return AppUtils.allNigerianStatesOptions();
    }
  },
  methods: {
    submit(data) {
      StoreUtils.commit("form/BUILD_FORM_BODY", data);
      StoreUtils.commit("form/INCREASE_FORM_STAGE_BY_ONE");
    }
  }
};
</script>

<style scoped></style>
