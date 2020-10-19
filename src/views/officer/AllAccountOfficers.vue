<template>
  <InnerLayout page-title="Account Officers">
    <div>
      <div class="account-record">
        <div class="avatar">{{ usersName | getInitials }}</div>
        <div class="info">
          <p class="title text-ellipse">{{ usersName }}</p>
          <p class="sub">{{ usersPhoneNumber }}</p>
        </div>
      </div>
      <AllAccountOfficersTable />
    </div>
  </InnerLayout>
</template>

<script>
import AllAccountOfficersTable from "../../components/tables/officer/AllAccountOfficersTable";
import InnerLayout from "../../components/layout/InnerLayout";
import StoreUtils from "../../utils/baseUtils/StoreUtils";

export default {
  name: "AllAccountOfficers",
  components: { InnerLayout, AllAccountOfficersTable },
  computed: {
    usersName() {
      return `${StoreUtils.rootGetters("user/getUserInfo").firstName} ${
        StoreUtils.rootGetters("user/getUserInfo").lastName
      }`;
    },
    usersPhoneNumber() {
      return `${StoreUtils.rootGetters("user/getUserInfo").mobilenumber}`;
    }
  }
};
</script>

<style scoped></style>
