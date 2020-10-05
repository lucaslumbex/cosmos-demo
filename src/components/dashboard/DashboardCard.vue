<template>
  <div class="dashboard">
    <div class="head">
      <p class="head-section">
        <span class="side-bar-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19.448"
            height="16.5"
            viewBox="0 0 19.448 16.5"
          >
            <g
              id="Group_9962"
              data-name="Group 9962"
              transform="translate(-27.75 -43.848)"
            >
              <path
                id="Path_25097"
                data-name="Path 25097"
                d="M234,1394.1h16.948"
                transform="translate(-205 -1342)"
                fill="none"
                stroke="#dd5f5f"
                stroke-linecap="round"
                stroke-width="2.5"
              />
              <path
                id="Path_25099"
                data-name="Path 25099"
                d="M234,1394.1h16.948"
                transform="translate(-205 -1349)"
                fill="none"
                stroke="#dd5f5f"
                stroke-linecap="round"
                stroke-width="2.5"
              />
              <path
                id="Path_25098"
                data-name="Path 25098"
                d="M234,1394.1h16.948"
                transform="translate(-205 -1335)"
                fill="none"
                stroke="#dd5f5f"
                stroke-linecap="round"
                stroke-width="2.5"
              />
            </g>
          </svg>
        </span>
        <span class="head-title"> Grace Enterprise <br /> </span>
        <span class="head-sub">
          0123456789
        </span>
        <span class="arrow-back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="6"
            viewBox="0 0 8.681 4.963"
          >
            <path
              id="Icon_ionic-ios-arrow-back"
              data-name="Icon ionic-ios-arrow-back"
              d="M1.5,4.341,4.781,7.623A.62.62,0,0,1,3.9,8.5L.181,4.781a.619.619,0,0,1-.018-.855L3.9.181a.62.62,0,0,1,.879.876Z"
              transform="translate(0 4.963) rotate(-90)"
            />
          </svg>
        </span>
        <span class="open-account-logout">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.625"
            height="18.047"
            viewBox="0 0 20.625 18.047"
          >
            <path
              id="Icon_open-account-logout"
              data-name="Icon open-account-logout"
              d="M12.891,0V2.578H2.578V15.469H12.891v2.578H0V0Zm2.578,5.156,5.156,3.867-5.156,3.867V10.313H5.156V7.735H15.469Z"
              fill="#dd5f5f"
            />
          </svg>
        </span>
      </p>
    </div>
    <p class="welcome-text">
      <span>
        Welcome,
      </span>
      <span class="welcome-text alt">
        Adellet
      </span>
      <span>
        <button class="welcome-btn">Add account</button>
      </span>
    </p>
    <div class="docs">
      <p class="docs-title">
        You have not uploaded your documents(signature and passport)
      </p>
      <p class="docs-sub">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        corporis eligendi in incidunt labore.
      </p>
      <button class="docs-btn">Complete</button>
    </div>
    <div class="services">
      <p class="coloured-text">
        <span>
          100%
        </span>
        <span>
          <img src="../../assets/to-do-list.png" class="to-do-list" />
        </span>
      </p>
      <p class="normal-text">
        COMPANY DETAILS
      </p>
      <p class="normal-text2">
        Acct. Details
      </p>
    </div>
    <div class="services alt">
      <p class="coloured-text2">
        <span>
          0
        </span>
        <span>
          <img src="../../assets/cop.png" class="to-do-list" />
        </span>
      </p>
      <p class="normal-text">
        ACCOUNT OFFICERS
      </p>
      <p class="normal-text2">
        Dir/Sng
      </p>
    </div>
    <div class="services">
      <p class="coloured-text3">
        <span>
          0%
        </span>
        <span>
          <img src="../../assets/document.png" class="to-do-list" />
        </span>
      </p>
      <p class="normal-text">
        COMPANY DOCUMENTS
      </p>
      <p class="normal-text2">
        Upload
      </p>
    </div>
    <div class="services alt">
      <p class="coloured-text4">
        <span>
          0
        </span>
        <span>
          <img src="../../assets/cop2.png" class="to-do-list" />
        </span>
      </p>
      <p class="normal-text">
        CREATE USER
      </p>
      <p class="normal-text2">
        CIB
      </p>
    </div>
    <div class="set-up">
      <p class="set-up-title">
        Setup your corporate internet banking
      </p>
      <p class="set-up-sub">
        Transactions, balances and more
      </p>
      <button class="docs-btn">Setup Now</button>
    </div>
  </div>
</template>

<script>
import RouterUtils from "@/utils/baseUtils/RouterUtils";
import StoreUtils from "@/utils/baseUtils/StoreUtils";

export default {
  name: "DashboardCard",
  created() {
    if (StoreUtils.rootGetters("user/getIfUserHasCreatedCompany") === false) {
      RouterUtils.changeRouteTo(RouterUtils.routes.company.CREATE_COMPANY);
    }
  }
};
</script>

<style scoped></style>
