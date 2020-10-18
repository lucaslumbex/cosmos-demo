<template>
  <div>
    <p>All account table</p>
    <AllAccountOfficersTable />
  </div>
</template>

<script>
import AllAccountOfficersTable from "../../components/tables/officer/AllAccountOfficersTable";

export default {
  name: "AllAccountOfficers",
  components: { AllAccountOfficersTable }
};
</script>

<style scoped></style>
