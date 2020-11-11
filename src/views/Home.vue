<template>
  <div>
    <div class="landing-page">
      <div id="header" class="app-header">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">
            <span class="logo">
              <img
                src="https://assets-base.s3.amazonaws.com/img/rubies/baas/rubies-logo.png"
                alt="logo"
              />
            </span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapseContent"
            aria-controls="navbarCollapseContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="hamburger-menu">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.5 40H7.5C3.35754 40 0 36.6425 0 32.5V7.5C0 3.35754 3.35754 0 7.5 0H32.5C36.6425 0 40 3.35754 40 7.5V32.5C40 36.6425 36.6425 40 32.5 40Z"
                  fill="#ffffff"
                />
                <path
                  d="M26.6663 13.3338H13.3337C12.8738 13.3338 12.5 13.7076 12.5 14.1675V15.8338C12.5 16.2937 12.8738 16.6675 13.3337 16.6675H26.6675C27.1274 16.6675 27.5012 16.2937 27.5012 15.8338V14.1675C27.5 13.7076 27.1262 13.3338 26.6663 13.3338Z"
                  fill="#ca5152"
                />
                <path
                  d="M26.6663 18.3338H13.3337C12.8738 18.3338 12.5 18.7076 12.5 19.1675V20.8338C12.5 21.2937 12.8738 21.6675 13.3337 21.6675H26.6675C27.1274 21.6675 27.5012 21.2937 27.5012 20.8338V19.1675C27.5 18.7076 27.1262 18.3338 26.6663 18.3338Z"
                  fill="#ca5152"
                />
                <path
                  d="M26.6663 23.3338H13.3337C12.8738 23.3338 12.5 23.7076 12.5 24.1675V25.8338C12.5 26.2937 12.8738 26.6675 13.3337 26.6675H26.6675C27.1274 26.6675 27.5012 26.2937 27.5012 25.8338V24.1675C27.5 23.7076 27.1262 23.3338 26.6663 23.3338Z"
                  fill="#ca5152"
                />
              </svg>
            </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarCollapseContent">
            <ul class="navbar-nav m-auto">
              <li class="nav-item active">
                <a class="nav-link active" href="#"
                  >PRODUCTS <span class="sr-only">(current)</span></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">DOCUMENTATIONS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#pricing">PRICING</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">CONTACT US</a>
              </li>
            </ul>

            <form class="form-inline my-2 my-lg-0">
              <!--                    <a class="app-header-btn btn">Download Now</a>-->
              <button type="button" class="app-header-btn">
                Business Login
              </button>
              <button type="button" class="app-header-btn alt">
                Get Started
              </button>
            </form>
          </div>
        </nav>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="left-side">
            <h1 class="left-intro">
              A Better Way To<br />
              Collect Payments
            </h1>
            <p class="left-text">
              Start receiving and disbursing payments in minutes
            </p>
            <form>
              <input
                type="text"
                class="landing-input"
                placeholder="Enter your email address"
              />
              <button type="button" class="landing-btn">Get Started</button>
            </form>
          </div>
        </div>
        <div class="col-12 col-md-6 d-none d-sm-block">
          <div class="right-side">
            <img
              src="https://assets-base.s3.amazonaws.com/img/rubies/baas/landing-left-pic.png"
              class="landing-left-pic"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="review-page">
      <div class="row">
        <div class="col-12 col-md-6 ">
          <div class="review-left">
            <img
              src="https://assets-base.s3.amazonaws.com/img/rubies/baas/OBJECTS-1.png"
              class="object-pic1"
            />
          </div>
        </div>
        <div class="col-12 col-md-6 ">
          <div class="review-right">
            <p class="feature-head">
              Payments
            </p>
            <p class="feature-sub">
              Start receiving payments using our payment by transfer<br />
              (account based) service. Got a website, Ecommerce platform,<br />
              Fintech or business ? We can help process those transactions.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 ">
          <div class="review-left2">
            <p class="feature-head">
              RubyPay -<br />
              Virtual Accounts
            </p>
            <p class="feature-sub">
              Start receiving instant settlement on all transactions
              processed<br />
              on your platform today. Simply connect to our virtual account<br />
              service, allowing customers feel more safe by transferring
              directly<br />
              to you, and guess what? No more reconciliation problems
            </p>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="review-right2">
            <img
              src="https://assets-base.s3.amazonaws.com/img/rubies/baas/Revenue-bro.png"
              class="object-pic1"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="review-left3">
            <img
              src="https://assets-base.s3.amazonaws.com/img/rubies/baas/OBJECT3.png"
              class="object-pic1"
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="review-right3">
            <p class="feature-head">
              Customised Debit Cards
            </p>
            <p class="feature-sub">
              Want to offer customised debit cards to your customers ?<br />
              Need to give them the whole package ? We can help you achieve<br />
              that by allowing you customise debit cards to meet your brand
              image.
            </p>
          </div>
        </div>
      </div>
    </div>

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

      <div id="pricing" class="pricing-section">
        <p class="service-feature-head">
          Pricing
        </p>
        <p class="service-feature-sub2">
          Thousands of organizations of all sizes trust Rubies<br />
          to grow their business.
        </p>

        <div class="app-pricing">
          <div class="row">
            <div class="col-md-12">
              <div class="d-flex">
                <ul id="tabsJustified" class="nav nav-pills flex-column">
                  <li class="nav-item">
                    <a
                      href=""
                      data-target="#virtualAccounts"
                      data-toggle="tab"
                      class="nav-link small active"
                    >
                      <p class="title">Virtual Accounts</p>
                      <p class="sub">Payment by transfer</p>
                      <span class="current"></span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href=""
                      data-target="#fundsTransfer"
                      data-toggle="tab"
                      class="nav-link small"
                    >
                      <p class="title">Funds Transfer</p>
                      <p class="sub">1% Capped at N50</p>
                      <span class="current"></span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href=""
                      data-target="#validationService"
                      data-toggle="tab"
                      class="nav-link small"
                    >
                      <p class="title">Validation service</p>
                      <p class="sub">BVN Validation, Phone Number Validation</p>
                      <span class="current"></span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      href=""
                      data-target="#debitCards"
                      data-toggle="tab"
                      class="nav-link small"
                    >
                      <p class="title">Debit Cards</p>
                      <p class="sub">Quantity Based, contact us to know more</p>
                      <span class="current"></span>
                    </a>
                  </li>
                </ul>
                <div class="tab-content pricing-tab rounded p-3 w-100">
                  <div id="virtualAccounts" class="tab-pane active">
                    <p class="main">1%</p>
                    <p class="main-sub">capped at ₦50.00</p>

                    <p class="sub">
                      1% Capped at <span class="bold">₦50</span> of
                      <span class="bold">₦1,000</span> =
                      <span class="bold">₦10</span>
                    </p>
                    <p class="sub">
                      <span class="bold">1%</span>
                      Capped at <span class="bold">₦50</span> of
                      <span class="bold">₦5,000</span> =
                      <span class="bold">₦50</span>
                    </p>
                    <p class="sub">
                      Any amount above
                      <span class="bold">₦5,000</span> =
                      <span class="bold">₦50</span>
                    </p>
                  </div>
                  <div id="fundsTransfer" class="tab-pane fade">
                    <p class="main">₦15</p>
                    <br />
                    <p class="sub">
                      Get to disburse money to any bank at a flat rate of ₦15 on
                      any amount.
                    </p>
                  </div>
                  <div id="validationService" class="tab-pane fade">
                    <p class="title">Verify BVN @ ₦20.00</p>
                    <p class="sub">
                      This service returns demographic data and image of
                      customer (The image is provided in base64 format)
                    </p>
                    <br />
                    <p class="title">Verify BVN @ ₦20.00</p>
                    <p class="sub">
                      This service returns the Account Name and date of birth
                      information associated with a mobile number across all the
                      different banks in Nigeria.
                    </p>
                  </div>
                  <div id="debitCards" class="tab-pane fade">
                    <p class="sub">
                      Get customized cards, minimum quantity 1,000. Price varies
                      according to quantity.
                    </p>
                    <p class="sub">
                      Contact us for more details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <div class="app-footer">
        <div class="row">
          <div class="col-12">
            <div class="bottom">
              <p class="footer-logo-text">
                <span>
                  Powered By:
                </span>
                <span>
                  <a href="https://www.rubies.ng/">
                    <img
                      src="https://assets-base.s3.amazonaws.com/img/rubies/baas/rubies-logo.png"
                      class="rubies-logo"
                      alt="logo"
                    />
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped></style>
