<script>
// eslint-disable-next-line no-restricted-syntax -- ignore
import * as Components from './index'

const Component = {
  components: {
    ...Components
  }
}

export default Component
</script>

<template>
  <div class="has-background-white-bis">
    <navbar />
    <favourite-menu />
    <long-banner />
    <flashsale />
    <promo />
    <discover />
    <inspiration />
    <products />
    <div class="footer-section">
      <footer-top class="is-hidden-mobile" />
      <footer-partner class="is-hidden-mobile" />
      <footer-seo />
      <Footer />
    </div>
  </div>
</template>


<style scoped>
  .container {
    margin-top: 20px !important;
    padding: 15px;
  }
  .footer-section {
    border-top: 7px solid #0eb3ff;
    margin-top: 30px;
    background: #fff;
  }
</style>
