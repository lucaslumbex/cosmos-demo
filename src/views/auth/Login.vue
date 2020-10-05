<template>
  <AuthLayout>
    <div>
      <LoginHeader />
      <LoginForm />
      <RegistrationFooter />
    </div>
  </AuthLayout>
</template>

<script>
import AuthLayout from "../../components/layout/AuthLayout";
import LoginHeader from "@/components/auth/login/LoginHeader";
import LoginForm from "@/components/auth/login/LoginForm";
import RegistrationFooter from "@/components/auth/RegistrationFooter";
export default {
  name: "Login",
  components: {
    LoginHeader,
    LoginForm,
    RegistrationFooter,
    AuthLayout
  }
};
</script>

<style scoped></style>
