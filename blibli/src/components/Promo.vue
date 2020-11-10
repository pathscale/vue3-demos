<script>
import { ref } from 'vue'
import { VTabs, VTab } from '@pathscale/vue3-ui'
import { useI18n } from 'vue-composable'


export default {
  name: 'Component',
  components: { VTabs, VTab },
  setup() {
    const activeTab = ref(0)
    const intl = useI18n()
    return { activeTab, intl }
  }
}
</script>

<template>
  <section class="container">
    <h4 class="title is-size-6">
      {{ intl.$ts('promo.other') }}
    </h4>
    <v-tabs v-model="activeTab">
      <v-tab :label="intl.$ts('promo.cheapest')">
        <div class="is-inline-flex has-overflow-x-auto">
          <a href="https://www.blibli.com/promosi/mix-langganan?appsWebview=true">
            <img src="/images/fp-langganan-app-w4ok.webp" alt="Featured 1 Dekstop - mix-langganan 23 - 29 okt" />
          </a>
          <a href="https://www.blibli.com/promosi/blm-featured-sembako?appsWebview=true">
            <img src="/images/FEATURED-21102020-royco-web.webp" alt="Featured 3 Dekstop - blm-featured-sembako 23 - 29 okt" />
          </a>
          <a href="https://www.blibli.com/promosi/blm-featured-snack-minuman?appsWebview=true">
            <img src="/images/FEATURED-21102020-mamee-web.webp" alt="Featured 4 Dekstop - blm-featured-snack-minuman 23 - 29 okt" />
          </a>
          <a href="https://www.blibli.com/promosi/blm-featured-perawatan-kulit?appsWebview=true">
            <img src="/images/FEATURED-21102020-lifebuoy-web.webp" alt="Featured 5 Dekstop - blm-featured-perawatan-kulit 23 - 29 okt" />
          </a>
          <a href="https://www.blibli.com/promosi/blm-featured-menu-restoran?appsWebview=true">
            <img src="/images/FEATURED-21102020-colette-web.webp" alt="Featured 6 Dekstop - blm-featured-menu-restoran 23 - 29 okt" />
          </a>
          <a href="https://www.blibli.com/promosi/blm-featured-perawatan-rumah?appsWebview=true">
            <img src="/images/FEATURED-21102020-bayer-web.webp" alt="Featured 7 Dekstop - blm-featured-perawatan-rumah 23 - 29 okt" />
          </a>
          <a href="https://www.blibli.com/promosi/featured-ibu-anak?appsWebview=true">
            <img src="/images/FEATURED-21102020-zwitsal-web.webp" alt="Featured 8 Dekstop - featured-ibu-anak 23 - 29 okt" />
          </a>
        </div>
      </v-tab>
      <v-tab :label="intl.$ts('promo.bank')">
        <div class="is-inline-flex has-overflow-x-auto">
          <a href="https://www.blibli.com/promosi/bca-gallery?appsWebview=true">
            <img src="/images/fp-app-bca-gallery-1-okt.webp" alt="FP Mobile 1 - BCA Gallery" />
          </a>
          <a href="https://www.blibli.com/promosi/bni-happy-deals?appsWebview=true">
            <img src="/images/fp-app-bni-happy-deals-1okt.webp" alt="FP Mobile 2  - BNI Happy Deals" />
          </a>
          <a href="https://www.blibli.com/promosi/citi-debit-online?appsWebview=true">
            <img src="/images/fp-app-citibelanjaonline-1okt.webp" alt="FP Mobile 3 - Citi Debit Online" />
          </a>
          <a href="https://www.blibli.com/promosi/mandiri-daily-deals?appsWebview=true">
            <img src="/images/fp-app-mandiri-daily-deals-1-okt.webp" alt="FP Mobile 4 - Mandiri Daily Deals" />
          </a>
          <a href="https://www.blibli.com/promosi/hsbc-premier-everyday?appsWebview=true">
            <img src="/images/fp-app-hsbchp-1-okt.webp" alt="FP Mobile 5 -  HSBC Premier Everyday Deal" />
          </a>
          <a href="https://www.blibli.com/promosi/dbs-deals?appsWebview=true">
            <img src="/images/fp-app-dbs-deals-7-sep.webp" alt="FP Mobile 6 - DBS Deals" />
          </a>
          <a href="https://www.blibli.com/promosi/gopay-deals?appsWebview=true">
            <img src="/images/fp-app-gopay-deals-15okt.webp" alt="FP Mobile 7 - GoPay Deals" />
          </a>
        </div>
      </v-tab>
    </v-tabs>
  </section>
</template>

<style  scoped>
 img {
    border-radius: 8px;
    padding: 0 8px;
    min-width: 185px;
    max-width: 185px;
    height: 126px;
 }
</style>
