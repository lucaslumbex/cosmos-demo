<template>
  <div>
    <p>{{ currentOfficer }}</p>
    <AccountOfficerInfoTable />
  </div>
</template>

<script>
import AccountOfficerInfoTable from "../../components/tables/officer/AccountOfficerInfoTable";
import StoreUtils from "../../utils/baseUtils/StoreUtils";

export default {
  name: "OfficerMoreInfo",
  components: { AccountOfficerInfoTable },
  computed: {
    currentOfficer() {
      return StoreUtils.rootGetters("table/getCurrentTableObject");
    }
  }
};
</script>

<style scoped></style>
