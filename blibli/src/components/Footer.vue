<script>
import { VColumns, VColumn } from '@pathscale/vue3-ui'

export default {
  name: 'Component',
  components: { VColumns, VColumn }
}
</script>

<template>
  <div class="footer">
    <div class="container">
      <v-columns class="is-size-7 has-text-centered-mobile" hcentered vcentered>
        <v-column>
          Copyright © 2011- 2020 Blibli toko online dengan sensasi belanja online store ala mall
        </v-column>
        <v-column>All Rights Reserved</v-column>
        <v-column>
          <a href="https://www.blibli.com/faq/tentang-blibli/syarat-ketentuan/">
            Syarat &amp; Ketentuan
          </a> |
          <a href="https://www.blibli.com/faq/tentang-blibli/kebijakan-privasi/">
            Kebijakan Privasi
          </a>
        </v-column>
      </v-columns>
      <div class="has-text-centered is-size-6 is-size-7">
        <p class="has-text-grey mt-3">
          <strong>Build Version: </strong> {{ process.env.VUE_APP_VERSION_NUMBER }}
        </p>
      </div>
    </div>
  </div>
</template>
