<template>
  <div class="app-header">
    <div class="menu">
      <Burger />
    </div>
    <div class="nav">
      <div class="info">
        <p class="title">{{ currentCompanyName }}</p>
        <p class="sub">
          {{ currentAccountNumber }}
          <span class="dropdown">
            <svg
              viewBox="0 0 9 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.34249 3.46205L7.62449 0.181048C7.74132 0.0647507 7.89956 -0.000373462 8.0644 1.61119e-06C8.22925 0.000376684 8.38719 0.0662206 8.50349 0.183048C8.61978 0.299876 8.68491 0.458118 8.68453 0.622963C8.68416 0.787807 8.61831 0.945751 8.50149 1.06205L4.78249 4.78105C4.66966 4.89347 4.51784 4.95808 4.3586 4.96143C4.19935 4.96479 4.04495 4.90663 3.92749 4.79905L0.182487 1.06205C0.0659245 0.945884 0.000282212 0.788172 9.07845e-07 0.623609C-0.000280397 0.459046 0.0648223 0.301111 0.180987 0.184548C0.297152 0.0679854 0.454863 0.00234333 0.619426 0.00206202C0.78399 0.00178072 0.941925 0.0668836 1.05849 0.183048L4.34249 3.46205Z"
              />
            </svg>
          </span>
        </p>
      </div>
      <div class="action">
        <a @click="logout()">
          <svg
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.891 0V2.578H2.578V15.469H12.891V18.047H0V0H12.891ZM15.469 5.156L20.625 9.023L15.469 12.89V10.313H5.156V7.735H15.469V5.156Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Burger from "./mobileSideMenu/Burger";
import StoreUtils from "../../utils/baseUtils/StoreUtils";
export default {
  name: "AppHeader",
  components: { Burger },
  computed: {
    currentCompanyName() {
      return StoreUtils.rootGetters("company/getCurrentCompany").orgName;
    },
    currentAccountNumber() {
      return StoreUtils.rootGetters("account/getCurrentAccount").accNumber;
    }
  },
  methods: {
    logout() {}
  }
};
</script>

<style scoped></style>
