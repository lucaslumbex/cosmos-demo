<template>
  <div class="details-body">
    <p class="details">
      <span class="details-left">
        Company Name
      </span>
      <span class="details-right">
        {{currentCompanyDetails.orgName}}
      </span>
    </p>
    <p class="details">
      <span class="details-left">
        Company Country
      </span>
      <span class="details-right">
        {{currentCompanyDetails.orgCountry}}
      </span>
    </p>
    <p class="details">
      <span class="details-left">
        Company City
      </span>
      <span class="details-right">
        {{currentCompanyDetails.orgCity}}
      </span>
    </p>
    <p class="details">
      <span class="details-left">
        Company Street
      </span>
      <span class="details-right">
        {{currentCompanyDetails.orgStreet}}
      </span>
    </p>
    <p class="details">
      <span class="details-left">
        Company Website
      </span>
      <span class="details-right">
        {{currentCompanyDetails.orgWebsite}}
      </span>
    </p>
    <p class="details">
      <span class="details-left">
        Company ID
      </span>
      <span class="details-right">
        {{currentCompanyDetails.orgID}}
      </span>
    </p>
    <p class="details">
      <span class="details-left">
        Company User ID
      </span>
      <span class="details-right">
        {{currentCompanyDetails.orgUserID}}
      </span>
    </p>
    <p class="details">
      <span class="details-left">
        Company Phone
      </span>
      <span class="details-right">
        {{currentCompanyDetails.orgPhone}}
      </span>
    </p>
    <p class="details">
      <span class="details-left">
        Company Incorporation Date
      </span>
      <span class="details-right">
        {{currentCompanyDetails.orgIncDate}}
      </span>
    </p>
    <p class="details">
      <span class="details-left">
        Company Type
      </span>
      <span class="details-right">
        {{currentCompanyDetails.orgType}}
      </span>
    </p>
    <p class="details">
      <span class="details-left">
        Company Email
      </span>
      <span class="details-right">
        {{currentCompanyDetails.orgEmail}}
      </span>
    </p>
    <p class="details">
      <span class="details-left">
        Company Incorporation Number
      </span>
      <span class="details-right">
        {{currentCompanyDetails.orgIncNumber}}
      </span>
    </p>
    <p class="details">
      <span class="details-left">
        Company Date
      </span>
      <span class="details-right">
        {{currentCompanyDetails.orgDate}}
      </span>
    </p>
    <p class="details">
      <span class="details-left">
        Company Custom ID
      </span>
      <span class="details-right">
        {{currentCompanyDetails.orgCustID}}
      </span>
    </p>
    <p class="details">
      <span class="details-left">
        Company State
      </span>
      <span class="details-right">
        {{currentCompanyDetails.orgState}}
      </span>
    </p>
  </div>
</template>

<script>
import StoreUtils from "../../../utils/baseUtils/StoreUtils";

export default {
  name: "ViewCompanyDetailsTable",
  created() {
    StoreUtils.dispatch("company/fetchCompanyDetails");
  },
  computed: {
    currentCompanyDetails() {
      return StoreUtils.rootGetters("company/getCurrentCompanyDetails");
    }
  }
};
</script>

<style scoped></style>
