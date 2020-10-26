<template>
  <div>
    <div class="services" @click="goToCustomerDetails">
      <p class="coloured-text">
        <span>
          100%
        </span>
        <span>
          <img src="../../assets/to-do-list.png" class="to-do-list" alt="" />
        </span>
      </p>
      <p class="normal-text">
        COMPANY DETAILS
      </p>
      <p class="normal-text2">
        Acct. Details
      </p>
    </div>
    <div @click="goToAllOfficers" class="services alt">
      <p class="coloured-text2">
        <span>
          0
        </span>
        <span>
          <img src="../../assets/cop.png" class="to-do-list" alt="" />
        </span>
      </p>
      <p class="normal-text">
        ACCOUNT OFFICERS
      </p>
      <p class="normal-text2">
        Dir/Sng
      </p>
    </div>
    <div class="services">
      <p class="coloured-text3">
        <span>
          0%
        </span>
        <span>
          <img src="../../assets/document.png" class="to-do-list" alt="" />
        </span>
      </p>
      <p class="normal-text">
        COMPANY DOCUMENTS
      </p>
      <p class="normal-text2">
        Upload
      </p>
    </div>
    <div class="services alt">
      <p class="coloured-text4">
        <span>
          0
        </span>
        <span>
          <img src="../../assets/cop2.png" class="to-do-list" alt="" />
        </span>
      </p>
      <p class="normal-text">
        CREATE USER
      </p>
      <p class="normal-text2">
        CIB
      </p>
    </div>
  </div>
</template>

<script>
import RouterUtils from "../../utils/baseUtils/RouterUtils";

export default {
  name: "DashboardCard",
  methods: {
    goToCustomerDetails() {
      RouterUtils.changeRouteTo(RouterUtils.routes.company.COMPANY_DETAILS);
    },
    goToAllOfficers() {
      RouterUtils.changeRouteTo(RouterUtils.routes.officer.ALL_OFFICERS);
    }
  }
};
</script>

<style scoped></style>
