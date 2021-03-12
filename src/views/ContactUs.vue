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
          <form>
            <div class="form-group">
              <div class="row">
                <div class="col">
                  <label for="exampleInputEmail1">First Name</label>
                  <input type="text" class="form-control" placeholder="First name">
                </div>
                <div class="col">
                  <label for="exampleInputEmail1">Last Name</label>
                  <input type="text" class="form-control" placeholder="Last name">
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Phone Number</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number">
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Company Name</label>
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Company Name">
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Company Sector</label>
              <input type="text" class="form-control" id="companySector" placeholder="Company Sector">
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">Do you have any additional comments or questions?</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div class="formbutton">
              <button class="redbutton">Submit</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  </app-layout>

</template>

<script>
import AppLayout from "@/components/layout/AppLayout";
export default {
  name: "ContactUs",
  components: {AppLayout}
};
</script>

<style scoped></style>
