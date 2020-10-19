<template>
  <AppLayout>
    <div class="dashboard">
      <p class="welcome-text">
        <span>
          Welcome,
        </span>
        <span class="welcome-text alt">
          {{userLastName}}
        </span>
        <span>
          <button class="welcome-btn">Add account</button>
        </span>
      </p>

      <OfficerDocumentUploadInfoTray
        v-if="accountOfficerHasNotUploadedDocuments"
      />
      <DashboardCard></DashboardCard>

      <div class="set-up">
        <p class="set-up-title">
          Setup your corporate internet banking
        </p>
        <p class="set-up-sub">
          Transactions, balances and more
        </p>
        <button class="docs-btn">Setup Now</button>

        <br />
        <br />
      </div>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "../components/layout/AppLayout";
import DashboardCard from "../components/cards/DashboardCard";
import OfficerDocumentUploadInfoTray from "../components/infoTrays/officer/OfficerDocumentUploadInfoTray";
import StoreUtils from "../utils/baseUtils/StoreUtils";

export default {
  name: "Dashboard",
  components: { OfficerDocumentUploadInfoTray, DashboardCard, AppLayout },
  computed: {
    userLastName() {
      return StoreUtils.rootGetters("user/getUserInfo").lastName
    },
    accountOfficerHasNotUploadedDocuments() {
      let currentAccount = StoreUtils.rootGetters("account/getCurrentAccount");

      return (
        currentAccount.isOfficer === "YES" &&
        currentAccount.hasOfficerUploaded === "NO"
      );
    }
  }

};
</script>

<style scoped>
.logo {
  align-self: center;
  color: #fff;
  font-weight: bold;
}

.main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
}

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}
</style>
