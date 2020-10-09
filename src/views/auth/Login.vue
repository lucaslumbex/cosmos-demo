<template>
  <AuthLayout>
    <div>
      <AuthHeader
        title="Sign In"
        sub="Welcome back! please sign in to continue"
      />
      <LoginForm />

      <div class="reg-footer">
        <div class="parent">
          <div class="create-account0"><hr /></div>
          <div class="create-account1"><p>OR</p></div>
          <div class="create-account2"><hr /></div>
        </div>

        <p class="footer-text">
          <span class="footer-sub-text-one">Don't have an account? </span>
          <span @click="goToSignUp" class="footer-sub-text-two">Create an account</span>
        </p>
      </div>
    </div>
  </AuthLayout>
</template>

<script>
import AuthLayout from "../../components/layout/AuthLayout";
import AuthHeader from "../../components/headers/auth/AuthHeader";
import LoginForm from "../../components/forms/auth/LoginForm";
import RouterUtils from "../../utils/baseUtils/RouterUtils";
export default {
  name: "Login",
  components: {
    AuthHeader,
    LoginForm,
    AuthLayout
  },
  methods: {
    goToSignUp() {
      RouterUtils.changeRouteTo(RouterUtils.routes.auth.ENROLLMENT);
    }
  }
};
</script>

<style scoped></style>
