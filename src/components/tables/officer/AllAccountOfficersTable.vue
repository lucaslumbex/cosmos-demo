<template>
  <p>
    tableData =>
    {{ tableData }}
  </p>
</template>

<script>
import StoreUtils from "../../../utils/baseUtils/StoreUtils";

export default {
  name: "AllAccountOfficersTable",
  computed: {
    tableData() {
      return StoreUtils.rootGetters("form/getTableData");
    }
  },
  created() {
    this.fetchTableData();
  },
  methods: {
    fetchTableData() {
      StoreUtils.dispatch("officer/fetchAllOfficers");
    }
  }
};
</script>

<style scoped></style>
