<template>
  <AppLayout>
    <DashboardCard></DashboardCard>
  </AppLayout>
</template>

<script>
import AppLayout from "../components/layout/AppLayout";
import DashboardCard from "../components/dashboard/DashboardCard";
export default {
  name: "Dashboard",
  components: { DashboardCard, AppLayout }
};
</script>

<style scoped></style>
