<template>
  <div>
    <CompanyDetailsForm v-if="formStage === 0" />
    <CompanyAddressForm v-if="formStage === 1" /></div
></template>

<script>
import CompanyDetailsForm from "../../components/forms/company/CompanyDetailsForm";
import CompanyAddressForm from "../../components/forms/company/CompanyAddressForm";
import StoreUtils from "@/utils/baseUtils/StoreUtils";

export default {
  name: "AddCompany",
  components: { CompanyDetailsForm, CompanyAddressForm },
  computed: {
    formStage() {
      return StoreUtils.rootGetters("form/getFormStage");
    }
  }
};
</script>

<style scoped></style>
