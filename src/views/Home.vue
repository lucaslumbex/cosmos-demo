<template>
  <div>
    <app-layout>
      <div class="home">
        <p class="title">Your Channel Engagements for 2020</p>
        <p class="sub">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ad architecto cumque facilis labore ullam? Aliquid aut blanditiis impedit sed?
          At autem dignissimos doloremque ea eligendi ex nemo officiis rerum tenetur!
        </p>

        <div class="app-card">
          <p class="title">Engagements</p>

          <sample-bar-chat />

          <p class="text-right">
            <button @click="demoModal()" class="btn app-btn m-auto">Check out this modal</button>
          </p>
        </div>
      </div>
    </app-layout>
  </div>
</template>

<script>
import AppLayout from "@/components/layouts/AppLayout";
import SampleBarChat from "@/components/charts/SampleBarChat";
import NotificationUtils from "@/utils/baseUtils/NotificationUtils";
export default {
  name: "Home",
  components: {SampleBarChat, AppLayout },
  methods: {
    demoModal() {
      let tankYouModalBody = {
        type: "success", //error, success, warning
        mode: "default", // default, yes-no
        title: "Welcome",
        message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
            "          At autem dignissimos doloremque ea eligendi ex nemo officiis rerum tenetur!",
        noAction: () => {},
        noActionTitle: "",
        yesAction: () => {NotificationUtils.closeNotificationModal()},
        yesActionTitle: "Got it.",
        modalWidth: "400",
        modalHeight: "230"
      };
      NotificationUtils.showNotificationModal(tankYouModalBody)

    }
  }
};
</script>

<style scoped>

</style>
