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
          <FormulateForm name="reset" class="vue-form" @submit="submit">
            <FormulateInput
                name="firstName"
                type="text"
                label="First Name"
                validation="required"
                validation-name="First name"
                placeholder="First Name"
            />
            <FormulateInput
                name="lastName"
                type="text"
                label="Last Name"
                validation="required"
                validation-name="Last name"
                placeholder="Last Name"
            />
            <FormulateInput
                name="phoneNumber"
                type="number"
                label="Phone Number"
                validation="required"
                validation-name="Phone number"
                placeholder="Phone Number"
            />
            <FormulateInput
              name="companyName"
              type="text"
              label="Company name"
              validation="required"
              validation-name="Company Name"
              placeholder="Company Name"
            />
            <FormulateInput
              name="companySector"
              type="text"
              label="Company Sector"
              validation="required"
              validation-name="Company Sector"
              placeholder="Company Sector"
            />
            <FormulateInput
              name="comment"
              type="textarea"
              label="Do you have additional comments or questions?"
            />
            <FormulateInput type="submit" label="Submit" />
          </FormulateForm>
        </div>
      </div>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from "@/components/layout/AppLayout";
import StoreUtils from "@/utils/baseUtils/StoreUtils";
export default {
  name: "ContactUs",
  components: {AppLayout},
  methods: {
    submit(data) {
      StoreUtils.commit("form/BUILD_FORM_BODY", data);

      StoreUtils.dispatch("contactus/sendFintechMail");
      //reset form
      this.$formulate.reset('reset')
    }
  }
};

</script>

<style scoped></style>
