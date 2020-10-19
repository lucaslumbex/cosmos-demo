<template>
  <InnerLayout page-title="Account Officers">
    <div>
      <p>{{ currentOfficer }}</p>
      <AccountOfficerInfoTable />
    </div>
  </InnerLayout>
</template>

<script>
import AccountOfficerInfoTable from "../../components/tables/officer/AccountOfficerInfoTable";
import StoreUtils from "../../utils/baseUtils/StoreUtils";
import InnerLayout from "../../components/layout/InnerLayout";

export default {
  name: "OfficerMoreInfo",
  components: { InnerLayout, AccountOfficerInfoTable },
  computed: {
    currentOfficer() {
      return StoreUtils.rootGetters("table/getCurrentTableObject");
    }
  }
};
</script>

<style scoped></style>
