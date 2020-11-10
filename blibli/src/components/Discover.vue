<script>
import { VButton, VColumns, VColumn } from '@pathscale/vue3-ui'
import { useI18n } from 'vue-composable'

export default {
  name: 'Component',
  components: { VButton, VColumns, VColumn },
  setup() {
    const intl = useI18n()
    return { intl }
  }
}
</script>

<template>
  <section class="container">
    <div class="blu-card px-6">
      <div>
        <h4 class="title is-size-5">
          {{ intl.$ts('get_to_know_more') }}
        </h4>
        <div class="box">
          <div class="is-justified-between">
            <div class="is-inline-flex is-aligned-center">
              <span class="px-2">
                <img src="/images/ic-official-store.04dbf03.webp" />
              </span>
              <h4 class="title is-size-6">
                Official Store
              </h4>
            </div>
            <div>
              <v-button type="is-info">
                {{ intl.$ts('see_all') }}
              </v-button>
            </div>
          </div>

          <v-columns mobile multiline gap="is-1">
            <v-column size="is-6-touch">
              <a href="https://www.blibli.com/promosi/kam-preorder-lumix?appsWebview=true">
                <div class="box px-0">
                  <div>
                    <img src="/images/Lumix-S5-Home-OS-280x280-br.webp" alt="2310/desktop/KAM/lumix" draggable="false" data-loaded="true" />
                  </div>
                </div>
              </a>
            </v-column>
            <v-column size="is-6-touch">
              <a href="https://www.blibli.com/promosi/blm-unilever-big-brand-day?appsWebview=true">
                <div class="box px-0">
                  <div>
                    <img src="/images/uli-bbd-okt20-blm-os-280x280.webp" alt="2110/desktop/blm-unileverbbd" draggable="false" data-loaded="true" />
                  </div>
                </div>
              </a>
            </v-column>
            <v-column size="is-6-touch">
              <a href="https://www.blibli.com/merchant/volcom-official-store/VOM-60025?page=1&amp;start=0&amp;pickupPointCode=&amp;cnc=&amp;multiCategory=true&amp;excludeProductList=true">
                <div class="box px-0">
                  <div>
                    <img src="/images/OS-Homepage-256x256-Volcom-a.webp" alt="2310/desktop/fpr/volcom" draggable="false" data-loaded="true" />
                  </div>
                </div>
              </a>
            </v-column>
            <v-column size="is-6-touch">
              <a href="https://www.blibli.com/promosi/tivo-yellowfit?appsWebview=true">
                <div class="box px-0">
                  <div>
                    <img src="/images/201001-Yellowfit-280x280-OS_Homepage_Desktop.webp" alt="2310/desktop/digioto/yellowfit" draggable="false" data-loaded="true" />
                  </div>
                </div>
              </a>
            </v-column>
          </v-columns>
        </div>
        <div>
          <v-columns mobile class="has-overflow-x-auto" gap="is-0">
            <v-column>
              <a href="https://www.blibli.com/promosi/bangga-buatan-indonesia?appsWebview=true">
                <img class="image" src="/images/KarenaLokalNo1-message.webp" alt="Bangga Buatan Indonesia" draggable="false" data-loaded="true" />
              </a>
            </v-column>
            <v-column>
              <a href="https://www.pintaria.com/kartuprakerja/blibli?utm_source=blibli&amp;utm_medium=banner&amp;utm_campaign=kartuprakerja&amp;appsWebview=true">
                <img class="image" src="/images/harukaEDUnewcolor-message-tanpa-radius.webp" alt="Kartu Prakerja Haruka EDU" draggable="false" data-loaded="true" />
              </a>
            </v-column>
            <v-column>
              <a href="https://www.blibli.com/promosi/mix-langganan?appsWebview=true">
                <img class="image" src="/images/langnanan-tanpa-radius.webp" alt="Langganan" draggable="false" data-loaded="true" />
              </a>
            </v-column>
            <v-column>
              <a href="https://www.blibli.com/clickandcollect?appsWebview=true">
                <img class="image" src="/images/click-collect-message-tanpa-radius.webp" alt="Click and Collect" draggable="false" data-loaded="true" />
              </a>
            </v-column>
            <v-column>
              <a href="https://www.blibli.com/promosi/blibli-tukar-tambah?appsWebview=true">
                <img class="image" src="/images/Tukar-Tambah-message-tanpa-radius.webp" alt="Tukar Tambah" draggable="false" data-loaded="true" />
              </a>
            </v-column>
          </v-columns>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .blu-card {
    padding: 24px 16px;
    border-radius: 32px;
    background: url(https://www.static-src.com/frontend/static/img/bg-discover.b308dc3.png) no-repeat 100% 0,linear-gradient(122deg,#74d3ff 13%,#0095da 61%);
  }
  .image {
    border-radius: 16px;
    min-width: 240px;
    padding: 0 4px;
    max-height: 80px;
  }

  @media screen and (max-width: 768px) {
  .px-6 {
    padding: 0.75rem !important;
  }
}
</style>
