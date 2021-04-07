<template>
  <div class="app-form">
    <FormulateForm name="contactUs" @submit="submit">
      <div class="form-group">
        <div class="row">
          <div class="col">
            <FormulateInput
                name="firstName"
                type="text"
                label="First Name*"
                validation="required"
                validation-name="First Name"
                placeholder=""
            />
          </div>
          <div class="col">
            <FormulateInput
                name="lastName"
                type="text"
                label="Last Name*"
                validation="required"
                validation-name="Last Name"
                placeholder=""
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <FormulateInput
            name="phoneNumber"
            type="tel"
            label="Phone Number*"
            validation="required"
            validation-name="Phone Number"
            placeholder=""
        />
      </div>

      <div class="form-group">
        <FormulateInput
            name="companyName"
            type="text"
            label="Company Name*"
            validation="required"
            validation-name="Company Name"
            placeholder=""
        />
      </div>

      <div class="form-group">
        <FormulateInput
            name="companySector"
            type="select"
            label="Company Sector*"
            validation="required"
            validation-name="Company Sector"
            placeholder=""
            :options="{
              'FinTech': 'FinTech',
              'Banking':`Banking`,
              'IT': `IT`,
              'Insurance':`Insurance`,
              'Corporate Finance':`Corporate Finance`,
              'E-Commerce':`E-Commerce`,
              'Others':`Others`
            }"
        />
      </div>

      <div class="form-group">
        <FormulateInput
            name="comment"
            type="textarea"
            label="Do you have any additional comments or questions?"
            placeholder=""
            rows="3"
        />
      </div>

      <div class="formbutton">
        <!--        <button >Submit</button>-->
        <FormulateInput type="submit" class="redbutton" label="Submit" />
      </div>
    </FormulateForm>
  </div>
</template>

<script>
import StoreUtils from "@/utils/baseUtils/StoreUtils";

export default {
name: "ContactUsForm",
  methods: {
    async submit(data) {
      StoreUtils.commit("form/BUILD_FORM_BODY", data);
      await  StoreUtils.dispatch("contact/submitContactUsForm").then(()=> {
        this.$formulate.reset('contactUs')
      });
    }
  }
}
</script>

<style scoped>

</style>