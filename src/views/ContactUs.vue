<template>
  <app-layout>
    <div class="contact-us">
      <div class="main">
        <div class="info">
          <div class="getintouch">
            <p>Get in touch with the team</p>
          </div>

          <div class="interested">
            <p>
              Great to see you’re interested in finding out more about
              Rubies! Please use the form below to notify the team of
              your interest, we'll get back to you as soon as possible.
            </p>
          </div>

          <div>
            <img src="https://assets-base.s3.amazonaws.com/img/rubies/baas/team.svg" alt="team">
          </div>

        </div>
        <div class="contactform">
          <ContactUsForm></ContactUsForm>
        </div>
      </div>
    </div>
  </app-layout>

</template>

<script>
import AppLayout from "@/components/layout/AppLayout";
import ContactUsForm from "@/components/forms/ContactUsForm";
export default {
  name: "ContactUs",
  components: {ContactUsForm, AppLayout}
};
</script>

<style scoped></style>
