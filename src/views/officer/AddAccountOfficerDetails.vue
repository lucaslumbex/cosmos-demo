<template>
  <div>
    <AddAccountOfficerFirstForm v-if="formStage === 0" />
    <AddAccountOfficerSecondForm v-if="formStage === 1" />
    <AddAccountOfficerThirdForm v-if="formStage === 2" />
  </div>
</template>

<script>
import StoreUtils from "../../utils/baseUtils/StoreUtils";
import AddAccountOfficerFirstForm from "../../components/forms/officer/AddAccountOfficerFirstForm";
import AddAccountOfficerSecondForm from "../../components/forms/officer/AddAccountOfficerSecondForm";
import AddAccountOfficerThirdForm from "../../components/forms/officer/AddAccountOfficerThirdForm";
export default {
  name: "AccountOfficer",
  components: {
    AddAccountOfficerThirdForm,
    AddAccountOfficerSecondForm,
    AddAccountOfficerFirstForm
  },
  computed: {
    formStage() {
      return StoreUtils.rootGetters("form/getFormStage");
    }
  }
};
</script>

<style scoped></style>
