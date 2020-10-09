<template>
  <AuthLayout>
    <div>
      <AuthHeader
        title="Create Business Account"
        sub="It's free to sign up and only takes minute"
      />
      <RegistrationInitForm v-if="formStage === 0" />
      <RegistrationCompleteForm v-if="formStage === 1" />

      <div class="reg-footer">
        <div class="parent">
          <div class="create-account0"><hr /></div>
          <div class="create-account1"><p>OR</p></div>
          <div class="create-account2"><hr /></div>
        </div>

        <p class="footer-text">
          <span class="footer-sub-text-one">Already have an account? </span>
          <span @click="goToSignIn" class="footer-sub-text-two">Sign in</span>
        </p>
      </div>
    </div>
  </AuthLayout>
</template>

<script>
import AuthLayout from "../../components/layout/AuthLayout";
import RegistrationInitForm from "../../components/forms/auth/enrolment/EnrolmentInitForm";
import RegistrationCompleteForm from "../../components/forms/auth/enrolment/EnrolmentCompleteForm";
import StoreUtils from "../../utils/baseUtils/StoreUtils";
import AuthHeader from "../../components/headers/auth/AuthHeader";
import RouterUtils from "../../utils/baseUtils/RouterUtils";
export default {
  name: "Registration",
  components: {
    AuthHeader,
    RegistrationCompleteForm,
    RegistrationInitForm,
    AuthLayout
  },
  computed: {
    formStage() {
      return StoreUtils.rootGetters("form/getFormStage");
    }
  },
  methods: {
    goToSignIn() {
      RouterUtils.changeRouteTo(RouterUtils.routes.auth.LOGIN);
    }
  }
};
</script>

<style scoped></style>
