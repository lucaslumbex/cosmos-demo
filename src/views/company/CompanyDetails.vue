<template>
  <InnerLayout page-title="Company Details">
    <div>
      <ViewCompanyDetails></ViewCompanyDetails>
    </div>
  </InnerLayout>
</template>

<script>
import ViewCompanyDetails from "../../components/tables/company/ViewCompanyDetailsTable";
import InnerLayout from "../../components/layout/InnerLayout";
export default {
  name: "CompanyDetails",
  components: { InnerLayout, ViewCompanyDetails }
};
</script>

<style scoped></style>
