<template>
  <app-layout>
    <div class="contact-us">
      <p class="price-title">Simple, Transparent Pricing</p>
      <p class="price-sub">We do what we do, just to make your business and clients happier</p>

      <div class="card-parent">
        <div class="card-1">
          <div class="card-1-content">
            <p class="title">What You Stand to Gain</p>
            <div class="sub-content">
              <div class="sub-content-text">Transaction Monitoring</div>
              <div class="sub-content-image">
                <img src="https://assets-base.s3.amazonaws.com/img/rubies/baas/validate_icon.svg" alt="icon image">
              </div>
            </div>
            <div class="sub-content">
              <div class="sub-content-text">Instant Settlement</div>
              <div class="sub-content-image">
                <img src="https://assets-base.s3.amazonaws.com/img/rubies/baas/validate_icon.svg" alt="icon image">
              </div>
            </div>
            <div class="sub-content">
              <div class="sub-content-text">No Transaction Limit</div>
              <div class="sub-content-image">
                <img src="https://assets-base.s3.amazonaws.com/img/rubies/baas/validate_icon.svg" alt="icon image">
              </div>
            </div>
            <div class="sub-content">
              <div class="sub-content-text">Automated Dispute Resolution</div>
              <div class="sub-content-image">
                <img src="https://assets-base.s3.amazonaws.com/img/rubies/baas/validate_icon.svg" alt="icon image">
              </div>
            </div>
            <div class="sub-content">
              <div class="sub-content-text">24/7 Support</div>
              <div class="sub-content-image">
                <img src="https://assets-base.s3.amazonaws.com/img/rubies/baas/validate_icon.svg" alt="icon image">
              </div>
            </div>
          </div>
        </div>
        <div class="card-2">
          <div class="card-2-content">
            <div class="card-img">
              <div class="card-img-container">
                <span><img src="https://assets-base.s3.amazonaws.com/img/rubies/baas/virtual-account.svg" alt="virtual account icon"></span>
              </div>

            </div>
            <div class="card-text">
              <div class="title">Virtual Accounts</div>
              <div class="sub-title"><p>(Payment by Transfer)</p></div>
            </div>
            <div class="card-value">
              <p>1% / capped @ ₦50.00</p>
            </div>
          </div>
          <div class="card-2-content">
            <div class="card-img">
              <div class="card-img-container">
                <span><img src="https://assets-base.s3.amazonaws.com/img/rubies/baas/fund-transfer.svg" alt="fund transfer icon"></span>
              </div>

            </div>
            <div class="card-text">
              <div class="title">Funds Transfer</div>
              <div class="sub-title"><p>(NIP Transfer)</p></div>
            </div>
            <div class="card-value">
              <p>₦15.00</p>
            </div>
          </div>
          <div class="card-2-content">
            <div class="card-img">
              <div class="card-img-container">
                <span><img src="https://assets-base.s3.amazonaws.com/img/rubies/baas/validation-service.svg" alt="validation service icon"></span>
              </div>

            </div>
            <div class="card-text">
              <div class="title">Validation Service</div>
              <div class="sub-title"><p>(BVN Validation)</p></div>
            </div>
            <div class="card-value">
              <p>₦20.00</p>
            </div>
          </div>
          <div class="card-2-content">
            <div class="card-img">
              <div class="card-img-container">
                <span><img src="https://assets-base.s3.amazonaws.com/img/rubies/baas/debit-card.svg" alt="debit card icon"></span>
              </div>
            </div>
            <div class="card-text">
              <div class="title">Debit Cards</div>
              <div class="sub-title"><p>(Quantity Based)</p></div>
            </div>
            <div class="card-value">
              <p>MOQ 1000</p>
            </div>
          </div>
        </div>

      </div>
      <div class="section3">
        <div class="title">Our Clients</div>
        <div class="sub-title">Some of the companies we work with</div>
      </div>
      <div class="section4">

        <div class="company-1">
          <span><img src="https://assets-base.s3.amazonaws.com/img/rubies/baas/wallet-africa.svg" alt="wallet africa logo"></span>
        </div>
        <div class="company-2">
          <span><img src="https://assets-base.s3.amazonaws.com/img/rubies/baas/esusu-logo.svg" alt="wallet africa logo"></span>
        </div>
        <div class="company-3">
          <span><img src="https://assets-base.s3.amazonaws.com/img/rubies/baas/bankly.svg" alt="wallet africa logo"></span>
        </div>
        <div class="company-4">
          <span><img src="https://assets-base.s3.amazonaws.com/img/rubies/baas/paystack.svg" alt="wallet africa logo"></span>
        </div>
        <div class="company-5">
          <span><img src="https://assets-base.s3.amazonaws.com/img/rubies/baas/baxi.svg" alt="wallet africa logo"></span>
        </div>
        <div class="company-6">
          <span><img src="https://assets-base.s3.amazonaws.com/img/rubies/baas/bytelabs.svg" alt="wallet africa logo"></span>
        </div>
      </div>
      <div class="section5">
        <div class="section-text">
          <div class="section-text-1">Need more clarity ?</div>
          <div class="section-text-2">We are here to assist you with any clarifications you may need. Just reach out to us
            and we will get back to you as soon as possible.?</div>
        </div>
        <div class="button">
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  </app-layout>

</template>

<script>
import AppLayout from "@/components/layout/AppLayout";
export default {
  name: "Pricing",
  components: {AppLayout}
};
</script>

<style scoped></style>
