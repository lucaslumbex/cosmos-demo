<template>
  <div class="more-info-record">
    <div class="more-info-record-top">
      <p class="more-info-record">
        <img :src="`${tableDataObject.image}`" class="more-info-record-img" alt="">
      </p>
    </div>

    <div class="more-info-record-next">
      <p class="more-info-record-details">
        <span class="more-info-record-head">
          Account Officer
        </span>
        <span class="more-info-record-text">
          {{
            `${tableDataObject.officerFirstName} ${tableDataObject.officerLastName}`
          }}
        </span>
      </p>
      <p class="more-info-record-details">
        <span class="more-info-record-head">
          Role
        </span>
        <span class="more-info-record-text">
          {{tableDataObject.officerDesignation}}
        </span>
      </p>
      <p class="more-info-record-details">
        <span class="more-info-record-head">
          Industry
        </span>
        <span class="more-info-record-text">
          {{tableDataObject.officerIndustry}}
        </span>
      </p>
      <p class="more-info-record-details">
        <span class="more-info-record-head">
          Phone Number
        </span>
        <span class="more-info-record-text">
          {{tableDataObject.officerPhone}}
        </span>
      </p>
      <p class="more-info-record-details">
        <span class="more-info-record-head">
          Email
        </span>
        <span class="more-info-record-text">
          {{tableDataObject.officerEmail}}
        </span>
      </p>
    </div>

    <div class="more-info-record-last">
      <p class="more-info-record-details-last">
        <span class="more-info-record-head">
          Bank
        </span>
        <span class="more-info-record-text">
          RUBIES MFB
        </span>
      </p>
      <p class="more-info-record-details-last">
        <span class="more-info-record-head">
          Signed
        </span>
        <span class="more-info-record-text">
          Director
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import StoreUtils from "../../../utils/baseUtils/StoreUtils";

export default {
  name: "AccountOfficerInfoTable",

  computed: {
    tableDataObject() {
      return StoreUtils.rootGetters("table/getCurrentTableObject");
    }
  }
};
</script>

<style scoped></style>
