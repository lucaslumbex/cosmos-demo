<template>
  <InnerLayout page-title="Add Company">
    <div>
      <CompanyDetailsForm v-if="formStage === 0" />
      <CompanyAddressForm v-if="formStage === 1" />
    </div>
  </InnerLayout>
</template>

<script>
import CompanyDetailsForm from "../../components/forms/company/CompanyDetailsForm";
import CompanyAddressForm from "../../components/forms/company/CompanyAddressForm";
import StoreUtils from "@/utils/baseUtils/StoreUtils";
import InnerLayout from "../../components/layout/InnerLayout";

export default {
  name: "AddCompany",
  components: { InnerLayout, CompanyDetailsForm, CompanyAddressForm },
  computed: {
    formStage() {
      return StoreUtils.rootGetters("form/getFormStage");
    }
  }
};
</script>

<style scoped></style>
