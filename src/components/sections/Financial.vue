<template>
  <div class="financial-page">
    <p class="service-feature-head">
      Our Services
    </p>
    <p class="service-feature-sub">
      Thousands of organizations of all sizes trust Rubies<br />
      to grow their business.
    </p>
    <div class="row">
      <div class="col-12 col-sm-4">
        <div class="service-box">
          <p class="service-icon">
              <span>
                <img
                    src="https://assets-base.s3.amazonaws.com/img/rubies/baas/service-pic.png"
                    class="service-pic"
                />
              </span>
          </p>
          <p class="service-title">
            Wallets
          </p>
          <p class="service-sub">
            (Collections)
          </p>
          <p class="service-text">
            Virtual accounts for collection purposes, connect to our Virtual
            Account API
          </p>
        </div>
      </div>
      <div class="col-12 col-sm-4">
        <div class="service-box">
          <p class="service-icon">
              <span>
                <img
                    src="https://assets-base.s3.amazonaws.com/img/rubies/baas/service-pic2.png"
                    class="service-pic"
                />
              </span>
          </p>
          <p class="service-title">
            Funds Transfer
          </p>
          <p class="service-sub">
            (Disbursements)
          </p>
          <p class="service-text">
            Start making disbursements with our Funds Transfer API
          </p>
        </div>
      </div>
      <div class="col-12 col-sm-4">
        <div class="service-box">
          <p class="service-icon">
              <span>
                <img
                    src="https://assets-base.s3.amazonaws.com/img/rubies/baas/service-pic3.png"
                    class="service-pic"
                />
              </span>
          </p>
          <p class="service-title">
            Verification Services
          </p>
          <p class="service-sub">
            (BVN, Number)
          </p>
          <p class="service-text">
            Affordable and transparent pricing for all businesses.
          </p>
        </div>
      </div>
    </div>

<!--    <div id="pricing" class="pricing-section">-->
<!--      <p class="service-feature-head">-->
<!--        Pricing-->
<!--      </p>-->
<!--      <p class="service-feature-sub2">-->
<!--        Thousands of organizations of all sizes trust Rubies<br />-->
<!--        to grow their business.-->
<!--      </p>-->

<!--      <div class="app-pricing">-->
<!--        <div class="row">-->
<!--          <div class="col-md-12">-->
<!--            <div class="d-flex">-->
<!--              <ul id="tabsJustified" class="nav nav-pills flex-column">-->
<!--                <li class="nav-item">-->
<!--                  <a-->
<!--                      href=""-->
<!--                      data-target="#virtualAccounts"-->
<!--                      data-toggle="tab"-->
<!--                      class="nav-link small active"-->
<!--                  >-->
<!--                    <p class="title">Virtual Accounts</p>-->
<!--                    <p class="sub">Payment by transfer</p>-->
<!--                    <span class="current"></span>-->
<!--                  </a>-->
<!--                </li>-->
<!--                <li class="nav-item">-->
<!--                  <a-->
<!--                      href=""-->
<!--                      data-target="#fundsTransfer"-->
<!--                      data-toggle="tab"-->
<!--                      class="nav-link small"-->
<!--                  >-->
<!--                    <p class="title">Funds Transfer</p>-->
<!--                    <p class="sub">1% Capped at N50</p>-->
<!--                    <span class="current"></span>-->
<!--                  </a>-->
<!--                </li>-->
<!--                <li class="nav-item">-->
<!--                  <a-->
<!--                      href=""-->
<!--                      data-target="#validationService"-->
<!--                      data-toggle="tab"-->
<!--                      class="nav-link small"-->
<!--                  >-->
<!--                    <p class="title">Validation service</p>-->
<!--                    <p class="sub">BVN Validation, Phone Number Validation</p>-->
<!--                    <span class="current"></span>-->
<!--                  </a>-->
<!--                </li>-->
<!--                <li class="nav-item">-->
<!--                  <a-->
<!--                      href=""-->
<!--                      data-target="#debitCards"-->
<!--                      data-toggle="tab"-->
<!--                      class="nav-link small"-->
<!--                  >-->
<!--                    <p class="title">Debit Cards</p>-->
<!--                    <p class="sub">Quantity Based, contact us to know more</p>-->
<!--                    <span class="current"></span>-->
<!--                  </a>-->
<!--                </li>-->
<!--              </ul>-->
<!--              <div class="tab-content pricing-tab rounded p-3 w-100">-->
<!--                <div id="virtualAccounts" class="tab-pane active">-->
<!--                  <p class="main">1%</p>-->
<!--                  <p class="main-sub">capped at ₦50.00</p>-->

<!--                  <p class="sub">-->
<!--                    1% Capped at <span class="bold">₦50</span> of-->
<!--                    <span class="bold">₦1,000</span> =-->
<!--                    <span class="bold">₦10</span>-->
<!--                  </p>-->
<!--                  <p class="sub">-->
<!--                    <span class="bold">1%</span>-->
<!--                    Capped at <span class="bold">₦50</span> of-->
<!--                    <span class="bold">₦5,000</span> =-->
<!--                    <span class="bold">₦50</span>-->
<!--                  </p>-->
<!--                  <p class="sub">-->
<!--                    Any amount above-->
<!--                    <span class="bold">₦5,000</span> =-->
<!--                    <span class="bold">₦50</span>-->
<!--                  </p>-->
<!--                </div>-->
<!--                <div id="fundsTransfer" class="tab-pane fade">-->
<!--                  <p class="main">₦15</p>-->
<!--                  <br />-->
<!--                  <p class="sub">-->
<!--                    Get to disburse money to any bank at a flat rate of ₦15 on-->
<!--                    any amount.-->
<!--                  </p>-->
<!--                </div>-->
<!--                <div id="validationService" class="tab-pane fade">-->
<!--                  <p class="title">Verify BVN @ ₦20.00</p>-->
<!--                  <p class="sub">-->
<!--                    This service returns demographic data and image of-->
<!--                    customer (The image is provided in base64 format)-->
<!--                  </p>-->
<!--                  <br />-->
<!--                  <p class="title">Verify BVN @ ₦20.00</p>-->
<!--                  <p class="sub">-->
<!--                    This service returns the Account Name and date of birth-->
<!--                    information associated with a mobile number across all the-->
<!--                    different banks in Nigeria.-->
<!--                  </p>-->
<!--                </div>-->
<!--                <div id="debitCards" class="tab-pane fade">-->
<!--                  <p class="sub">-->
<!--                    Get customized cards, minimum quantity 1,000. Price varies-->
<!--                    according to quantity.-->
<!--                  </p>-->
<!--                  <p class="sub">-->
<!--                    Contact us for more details.-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "Financial"
}
</script>

<style scoped>

</style>