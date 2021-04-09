<template>
  <div class="notification-modal" :class="notificationModalTypeClass">
    <vodal
      :show="notification.showNotificationModal"
      :width="notificationModalBody.modalWidth ? notificationModalBody.modalWidth : 400"
      :height="notificationModalBody.modalHeight ? notificationModalBody.modalHeight : 400"
      animation="zoom"
      @hide="closeNotificationModal"
    >
      <div class="notification-modal-inner">
        <p class="notification-modal-title text-center">
          {{ notification.notificationModalBody.title }}
        </p>
        <p class="notification-modal-message text-center">
          {{ notification.notificationModalBody.message }}
        </p>

        <div class="notification-modal-actions">
          <p
            v-if="notification.notificationModalBody.mode === 'default'"
            class="notification-modal-action text-center"
          >
            <button
              @click="closeNotificationModal"
              class="btn btn-success btn-tragedy only"
            >
              close
            </button>
          </p>

          <p
            v-if="notification.notificationModalBody.mode === 'yes'"
            class="notification-modal-action text-center"
          >
            <button
              @click="notification.notificationModalBody.yesAction"
              class="btn btn-success btn-tragedy only"
            >
              {{ notification.notificationModalBody.yesActionTitle }}
            </button>
          </p>

          <div
            v-if="notification.notificationModalBody.mode === 'yes-no'"
            class="row"
          >
            <div class="col-6">
              <p class="notification-modal-action text-center">
                <button
                  @click="notification.notificationModalBody.noAction"
                  class="btn btn-success btn-tragedy-alt twin"
                >
                  {{ notification.notificationModalBody.noActionTitle }}
                </button>
              </p>
            </div>
            <div class="col-6">
              <p class="notification-modal-action text-center">
                <button
                  @click="notification.notificationModalBody.yesAction"
                  class="btn btn-success btn-tragedy twin"
                >
                  {{ notification.notificationModalBody.yesActionTitle }}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </vodal>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NotificationUtils from "../../../utils/baseUtils/NotificationUtils";
import StoreUtils from "@/utils/baseUtils/StoreUtils";
export default {
  name: "NotificationModal",
  computed: {
    ...mapState(["notification"]),
    notificationModalTypeClass() {
      return `-notification-${this.notification.notificationModalBody.type}`;
    },
    notificationModalBody() {
      return StoreUtils.rootGetters("notification/getNotificationModalBody")
    }
  },
  methods: {
    closeNotificationModal() {
      NotificationUtils.closeNotificationModal();
    }
  }
};
</script>

<style scoped>
</style>
