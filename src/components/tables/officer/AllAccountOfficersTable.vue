<template>
  <div class="app-table">
    <div class="top"></div>
    <div class="records">
      <p>=> {{tableData}}</p>
      <div class="account-record alt">
        <div class="avatar">LL</div>
        <div class="info">
          <p class="title text-ellipse">Lucas Lumbex</p>
          <p class="sub">manager</p>

          <span class="ico">
            <svg
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.70554 8.17383L1.2333 13.5087C1.0398 13.6983 0.929532 13.957 0.926759 14.2279C0.923986 14.4988 1.02894 14.7596 1.21852 14.9531C1.4081 15.1467 1.66679 15.2569 1.93767 15.2597C2.20855 15.2625 2.46944 15.1575 2.66294 14.9679L8.86278 8.9187C9.05026 8.73522 9.15976 8.4865 9.16849 8.22432C9.17721 7.96214 9.0845 7.7067 8.90963 7.51116L2.83085 1.27296C2.64194 1.0788 2.38363 0.967641 2.11276 0.96393C1.84189 0.960219 1.58064 1.06426 1.38648 1.25318C1.19232 1.44209 1.08116 1.70039 1.07745 1.97126C1.07374 2.24213 1.17778 2.50338 1.36669 2.69754L6.70554 8.17383Z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StoreUtils from "../../../utils/baseUtils/StoreUtils";

export default {
  name: "AllAccountOfficersTable",
  computed: {
    tableData() {
      return StoreUtils.rootGetters("table/getTableData");
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
