<template>
  <div class="app-header">
    <div class="menu">
      <a @click="goBack()" class="back-button">
        <svg viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.46361 7.14242L7.87161 1.74242C8.06283 1.55053 8.16999 1.29055 8.16952 1.01965C8.16906 0.748753 8.06099 0.489139 7.86911 0.297917C7.67722 0.106696 7.41724 -0.000467309 7.14634 1.53193e-06C6.87544 0.000470373 6.61583 0.108533 6.42461 0.300417L0.297608 6.42342C0.112336 6.60913 0.00581952 6.85914 0.000231478 7.1214C-0.00535656 7.38367 0.0904133 7.63798 0.267607 7.83142L6.42061 13.9964C6.61183 14.1883 6.87144 14.2964 7.14234 14.2968C7.41324 14.2973 7.67322 14.1901 7.86511 13.9989C8.05699 13.8077 8.16506 13.5481 8.16552 13.2772C8.16599 13.0063 8.05883 12.7463 7.86761 12.5544L2.46361 7.14242Z"
          />
        </svg>
      </a>
    </div>
    <div class="nav">
      <div class="page-title">{{ pageTitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppInnerHeader",
  props: {
    pageTitle: {
      type: String,
      required: true
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped></style>
