<template>
  <AuthLayout>
    <div>

      <RegistrationHeader />
      <RegistrationInitForm v-if="formStage === 0"/>
      <RegistrationComplete v-if="formStage === 1"/>
      <RegistrationFooter/>
    </div>
  </AuthLayout>
</template>

<script>
import AuthLayout from "../../components/layout/AuthLayout";
import RegistrationHeader from "@/components/auth/RegistrationHeader";
import RegistrationInitForm from "@/components/auth/RegistrationInitForm";
import RegistrationFooter from "@/components/auth/RegistrationFooter";
import RegistrationComplete from "@/components/auth/RegistrationComplete";
import StoreUtils from "@/utils/baseUtils/StoreUtils";
export default {
  name: "Registration",
  components: {RegistrationComplete, RegistrationFooter, RegistrationInitForm, RegistrationHeader, AuthLayout },
  computed: {
    formStage() {
      return StoreUtils.rootGetters("form/getFormStage");
    }
  }
};
</script>

<style scoped></style>
