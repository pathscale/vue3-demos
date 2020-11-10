<script>
import { VColumns, VColumn } from '@pathscale/vue3-ui'
import { useI18n } from 'vue-composable'

export default {
  name: 'Component',
  components: { VColumns, VColumn },
  setup() {
    const intl = useI18n()
    return { intl }
  }
}
</script>

<template>
  <section class="container">
    <div>
      <h4 class="title is-size-5">
        {{ intl.$ts('shopping_inspiration') }}
      </h4>
      <v-columns mobile class="has-overflow-x-auto" gap="is-1">
        <v-column>
          <a href="https://www.blibli.com/promosi/hom-pet-promo?appsWebview=true" draggable="false" class="shopping-inspiration__banner-item">
            <img class="image" src="/images/Inspirasi-HOM-2-391x292.webp" alt="Pet &amp; Plant Promo - 1" draggable="false" data-loaded="true" />
          </a>
        </v-column>
        <v-column>
          <a href="https://www.blibli.com/promosi/homedailyinspiration-mainpage?appsWebview=true" draggable="false" class="shopping-inspiration__banner-item">
            <img class="image" src="/images/Inspirasi-HOM-3391x292.webp" alt="Home Daily Inspirations - 2" draggable="false" data-loaded="true" />
          </a>
        </v-column>
        <v-column>
          <a href="https://www.blibli.com/promosi/hom-masterpanpromo?appsWebview=true" draggable="false" class="shopping-inspiration__banner-item">
            <img class="image" src="/images/Inspirasi-HOM-1-536x400.webp" alt="Masterpan - 3" draggable="false" data-loaded="true" />
          </a>
        </v-column>
      </v-columns>
    </div>
  </section>
</template>

<style scoped>
  .image {
    border-radius: 16px;
     min-width: 200px;
  }
</style>
