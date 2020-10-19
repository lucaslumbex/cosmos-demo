<template>
  <div class="app-table">
    <div class="top">
      <div class="top-txt">
        <p class="txt-1">Account Officer</p>
        <p class="txt-2">Add Officer</p>
      </div>
      <div class="search">
        <input type="text" placeholder="Type to Search" class="search-txt" />
        <button class="search-btn">
          <img src="../../../assets/search.png" class="search-img" alt="" />
        </button>
      </div>
    </div>
    <div class="records" v-if="tableData.length > 0">
      <div
        @click="viewOfficerMoreInfo(officer)"
        class="account-record alt"
        v-for="officer in tableData"
        :key="officer.officerID"
      >
        <div class="avatar">
          {{`${officer.officerFirstName} ${officer.officerLastName}`| getInitials }}
        </div>
        <div class="info">
          <p class="title text-ellipse">
            {{ `${officer.officerFirstName} ${officer.officerLastName}` }}
          </p>
          <p class="sub">{{ officer.officerDesignation }}</p>

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
    <div v-else>
      <div class="empty-info">
        <img src="../../../assets/empty.png" class="empty-img" alt="" />
        <span class="empty-txt">There are no records to show</span>
      </div>
    </div>
  </div>
</template>

<script>
import StoreUtils from "../../../utils/baseUtils/StoreUtils";
import RouterUtils from "@/utils/baseUtils/RouterUtils";

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
    },
    viewOfficerMoreInfo(officer) {
      StoreUtils.commit("table/SET_CURRENT_TABLE_OBJECT", officer);
      RouterUtils.changeRouteTo(RouterUtils.routes.officer.OFFICER_MORE_INFO);
    }
  }
};
</script>

<style scoped></style>
