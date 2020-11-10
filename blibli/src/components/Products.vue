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
  <div class="container">
    <div class="blu-card recommended-product__nav box my-3" id="recommended-tab">
      <div class="recommended-product__nav__item recommended-product__nav__item--selected">
        {{ intl.$ts('products.recommended_products') }}
      </div><div class="recommended-product__nav__item">
        {{ intl.$ts('products.best_selling_products') }}
      </div><div class="recommended-product__nav__item">
        {{ intl.$ts('products.consumer_goods') }}
      </div><div class="recommended-product__nav__item">
        {{ intl.$ts('products.lifestyle') }}
      </div><div class="recommended-product__nav__item">
        {{ intl.$ts('products.activities_vacations') }}
      </div><div class="recommended-product__nav__item">
        {{ intl.$ts('products.automotive') }}
      </div><div class="recommended-product__nav__item">
        {{ intl.$ts('products.home_living') }}
      </div><div class="recommended-product__nav__item">
        {{ intl.$ts('products.gadgets_electronics') }}
      </div>
    </div>

    <v-columns mobile multiline gap="is-1">
      <v-column size="is-6-touch is-2-desktop">
        <a href="/p/bimoli-klasik-pouch-minyak-goreng-2000-ml-6-pcs/ps--BLC-60027-00005?ds=BLC-60027-00005-00001&amp;source=SEARCH&amp;sid=449935d0ca0bf4bd&amp;cnc=false&amp;pickupPointCode=PP-3039687" class="box">
          <div class="blu-product__img">
            <img src="/images/bimoli_bimoli-klasik-pouch-minyak-goreng--2000-ml-6-pcs-_full06.webp" alt="Bimoli Klasik Pouch Minyak Goreng [2000 mL/6 pcs]" class="lazyImage" data-loaded="true" />
          </div>
          <div class="blu-product__description">
            <div class="blu-product__name">
              Bimoli Klasik Pouch Minyak Goreng [2000 mL/6 pcs]
            </div>
            <div class="blu-product__price">
              <div class="blu-product__price-after">
                Rp145.000
              </div>
              <span class="blu-product__price-before">
                Rp197.400
              </span>
              <span class="blu-product__price-discount">
                26% OFF
              </span>
            </div>
          </div>
        </a>
      </v-column>
      <v-column size="is-6-touch is-2-desktop">
        <a href="/p/samsung-galaxy-a10s-smartphone-green-32-gb-2-gb-n/pc--MTA-8709323?ds=88P-60022-00507-00001&amp;source=SEARCH&amp;sid=449935d0ca0bf4bd&amp;cnc=false&amp;pickupPointCode=PP-3073618" class="box">
          <div class="blu-product__img">
            <img src="/images/samsung_samsung_galaxy_a10s_smartphone_-_green_-32_gb-_2_gb-n-_full02_j1unxzmv.webp" alt="Samsung Galaxy A10s Smartphone - Green [32 GB/ 2 GB/N]" class="lazyImage" data-loaded="true" />
          </div>
          <div class="blu-product__description">
            <div class="blu-product__name">
              Samsung Galaxy A10s Smartphone - Green [32 GB/ 2 GB/N]
            </div>
            <div class="blu-product__price">
              <div class="blu-product__price-after">
                Rp1.450.000
              </div>
              <span class="blu-product__price-before">
                Rp1.759.000
              </span>
              <span class="blu-product__price-discount">
                17% OFF
              </span>
            </div>
          </div>
        </a>
      </v-column>
      <v-column size="is-6-touch is-2-desktop">
        <a href="/p/rose-brand-tebu-gula-pasir-1-kg/ps--BUM-60037-00001?ds=BUM-60037-00001-00001&amp;source=SEARCH&amp;sid=449935d0ca0bf4bd&amp;cnc=false&amp;pickupPointCode=PP-3053014" class="box">
          <div class="blu-product__img">
            <img src="/images/rose-brand_rose-brand-tebu-gula-pasir--1-kg-_full05.webp" alt="Rose Brand Tebu Gula Pasir [1 kg]" class="lazyImage" data-loaded="true" />
          </div>
          <div class="blu-product__description">
            <div class="blu-product__name">
              Rose Brand Tebu Gula Pasir [1 kg]
            </div>
            <div class="blu-product__price">
              <div class="blu-product__price-after">
                Rp11.800
              </div>
              <span class="blu-product__price-before">
                Rp16.000
              </span>
              <span class="blu-product__price-discount">
                26% OFF
              </span>
            </div>
          </div>
        </a>
      </v-column>
      <v-column size="is-6-touch is-2-desktop">
        <a href="/p/sedaap-goreng-salero-padang-bag-mie-instan-86-g-buy-3-get-1-free/pc--MTA-9010344?ds=SMT-21613-00986-00001&amp;source=SEARCH&amp;sid=449935d0ca0bf4bd&amp;cnc=false&amp;pickupPointCode=SMT-21613-001" class="box">
          <div class="blu-product__img">
            <img src="/images/sedaap_sedaap_goreng_salero_padang_bag_mie_instan_-86_g-_buy_3_get_1_free-_full02_npc2212l.webp" alt="SEDAAP Goreng Salero Padang Bag Mie Instan [86 g/ Buy 3 Get 1 Free]" class="lazyImage" data-loaded="true" />
          </div>
          <div class="blu-product__description">
            <div class="blu-product__name">
              SEDAAP Goreng Salero Padang Bag Mie Instan [86 g/ Buy 3 Get 1 Free]
            </div>
            <div class="blu-product__price">
              <div class="blu-product__price-after">
                Rp7.200
              </div>
              <span class="blu-product__price-before">
                Rp14.000
              </span>
              <span class="blu-product__price-discount">
                48% OFF
              </span>
            </div>
          </div>
        </a>
      </v-column>
      <v-column size="is-6-touch is-2-desktop">
        <a href="/p/ngawiti-mas-beras-premium-5-kg/pc--MTA-7597347?ds=BLT-24290-00161-00001&amp;source=SEARCH&amp;sid=449935d0ca0bf4bd&amp;cnc=false&amp;pickupPointCode=PP-3000595" class="box">
          <div class="blu-product__img">
            <img src="/images/ngawiti-mas_ngawiti-mas-beras-premium--5-kg-_full01.webp" alt="Ngawiti Mas Beras Premium [5 Kg]" class="lazyImage" data-loaded="true" />
          </div>
          <div class="blu-product__description">
            <div class="blu-product__name">
              Ngawiti Mas Beras Premium [5 Kg]
            </div>
            <div class="blu-product__price">
              <div class="blu-product__price-after">
                Rp55.000
              </div>
              <span class="blu-product__price-before">
                Rp64.000
              </span>
              <span class="blu-product__price-discount">
                14% OFF
              </span>
            </div>
          </div>
        </a>
      </v-column>
      <v-column size="is-6-touch is-2-desktop">
        <a href="/p/sania-premium-minyak-goreng-2000-ml-6-pouch/pc--MTA-0507814?ds=BLC-60027-00006-00001&amp;source=SEARCH&amp;sid=449935d0ca0bf4bd&amp;cnc=false&amp;pickupPointCode=PP-3039687" class="box">
          <div class="blu-product__img">
            <img src="/images/sania_sania-premium-minyak-goreng--2000-ml-6-pouch-_full04.webp" alt="Sania Premium Minyak Goreng [2000 mL/6 Pouch]" class="lazyImage" data-loaded="true" />
          </div>
          <div class="blu-product__description">
            <div class="blu-product__name">
              Sania Premium Minyak Goreng [2000 mL/6 Pouch]
            </div>
            <div class="blu-product__price">
              <div class="blu-product__price-after">
                Rp141.500
              </div>
              <span class="blu-product__price-before">
                Rp197.400
              </span>
              <span class="blu-product__price-discount">
                28% OFF
              </span>
            </div>
          </div>
        </a>
      </v-column>
      <v-column size="is-6-touch is-2-desktop">
        <a href="/p/xiaomi-redmi-9c-smartphone-4gb-64gb/pc--MTA-8650642?ds=SIA-60028-00923-00002&amp;source=SEARCH&amp;sid=449935d0ca0bf4bd&amp;cnc=false&amp;pickupPointCode=PP-3034298" class="box">
          <div class="blu-product__img">
            <img src="/images/xiaomi_xiaomi_full03.webp" alt="Xiaomi Redmi 9C Smartphone [4GB/ 64GB]" class="lazyImage" data-loaded="true" />
          </div>
          <div class="blu-product__description">
            <div class="blu-product__name">
              Xiaomi Redmi 9C Smartphone [4GB/ 64GB]
            </div>
            <div class="blu-product__price">
              <div class="blu-product__price-after">
                Rp1.634.900
              </div>
              <span class="blu-product__price-before">
                Rp1.799.000
              </span>
              <span class="blu-product__price-discount">
                9% OFF
              </span>
            </div>
          </div>
        </a>
      </v-column>
      <v-column size="is-6-touch is-2-desktop">
        <a href="/p/xiaomi-redmi-9-ocean-green-64-gb/pr--PRI-134609-00?ds=88P-60022-00427-00003&amp;source=SEARCH&amp;sid=449935d0ca0bf4bd&amp;cnc=false&amp;pickupPointCode=PP-3073618" class="box">
          <div class="blu-product__img">
            <img src="/images/xiaomi_xiaomi-redmi-9-smartphone--4-gb--64-gb--o-_full101.webp" alt="Xiaomi Redmi 9 (Ocean Green, 64 GB)" class="lazyImage" data-loaded="true" />
          </div>
          <div class="blu-product__description">
            <div class="blu-product__name">
              Xiaomi Redmi 9 (Ocean Green, 64 GB)
            </div>
            <div class="blu-product__price">
              <div class="blu-product__price-after">
                Rp1.895.000
              </div>
              <span class="blu-product__price-before">
                Rp1.999.000
              </span>
              <span class="blu-product__price-discount">
                5% OFF
              </span>
            </div>
          </div>
        </a>
      </v-column>
      <v-column size="is-6-touch is-2-desktop">
        <a href="/p/fortune-minyak-goreng-pouch-2000-ml-6-pouch/ps--BLC-60027-00002?ds=BLC-60027-00002-00001&amp;source=SEARCH&amp;sid=449935d0ca0bf4bd&amp;cnc=false&amp;pickupPointCode=PP-3039687" class="box">
          <div class="blu-product__img">
            <img src="/images/fortune_fortune-minyak-goreng-pouch--2000-ml-6-pouch-_full02.webp" alt="Fortune Minyak Goreng Pouch [2000 mL/ 6 Pouch]" class="lazyImage" data-loaded="true" />
          </div>
          <div class="blu-product__description">
            <div class="blu-product__name">
              Fortune Minyak Goreng Pouch [2000 mL/ 6 Pouch]
            </div>
            <div class="blu-product__price">
              <div class="blu-product__price-after">
                Rp140.000
              </div>
              <span class="blu-product__price-before">
                Rp189.900
              </span>
              <span class="blu-product__price-discount">
                26% OFF
              </span>
            </div>
          </div>
        </a>
      </v-column>
      <v-column size="is-6-touch is-2-desktop">
        <a href="/p/panasonic-ni-wl41vsr-cordless-iron-setrika-uap/pc--MTA-6665812?ds=TIH-60036-00004-00001&amp;source=SEARCH&amp;sid=449935d0ca0bf4bd&amp;cnc=false&amp;pickupPointCode=PP-3121134" class="box">
          <div class="blu-product__img">
            <img src="/images/panasonic_panasonic_ni-wl41vsr_cordless_iron_setrika_uap_full04_ljos68wm.webp" alt="Panasonic NI-WL41VSR Cordless Iron Setrika Uap" class="lazyImage" data-loaded="true" />
          </div>
          <div class="blu-product__description">
            <div class="blu-product__name">
              Panasonic NI-WL41VSR Cordless Iron Setrika Uap
            </div>
            <div class="blu-product__price">
              <div class="blu-product__price-after">
                Rp1.665.000
              </div>  <span class="blu-product__price-discount">
&nbsp;
              </span>
            </div>
          </div>
        </a>
      </v-column>
      <v-column size="is-6-touch is-2-desktop">
        <a href="/p/xiaomi-redmi-note-9-polar-white-64-gb/pr--PRI-134293-00?ds=88P-60022-00374-00003&amp;source=SEARCH&amp;sid=449935d0ca0bf4bd&amp;cnc=false&amp;pickupPointCode=PP-3073618" class="box">
          <div class="blu-product__img">
            <img src="/images/xiaomi_xiaomi-redmi-note-9-smartphone--64-gb-4-gb--o-_full69.webp" alt="Xiaomi Redmi Note 9 (Polar White, 64 GB)" class="lazyImage" data-loaded="true" />
          </div>
          <div class="blu-product__description">
            <div class="blu-product__name">
              Xiaomi Redmi Note 9 (Polar White, 64 GB)
            </div>
            <div class="blu-product__price">
              <div class="blu-product__price-after">
                Rp2.232.000
              </div>
              <span class="blu-product__price-before">
                Rp2.499.000
              </span>
              <span class="blu-product__price-discount">
                10% OFF
              </span>
            </div>
          </div>
        </a>
      </v-column>
      <v-column size="is-6-touch is-2-desktop">
        <a href="/p/sania-premium-minyak-goreng-pouch-6-pcs-x-2-l/pc--MTA-8627833?ds=BLC-60027-00120-00001&amp;source=SEARCH&amp;sid=449935d0ca0bf4bd&amp;cnc=false&amp;pickupPointCode=PP-3039687" class="box">
          <div class="blu-product__img">
            <img src="/images/sania_sania_premium_minyak_goreng_pouch_-6_pcs_x_2_l-_full02_osf4ab75.webp" alt="Sania Premium Minyak Goreng Pouch [6 Pcs x 2 L]" class="lazyImage" data-loaded="true" />
          </div>
          <div class="blu-product__description">
            <div class="blu-product__name">
              Sania Premium Minyak Goreng Pouch [6 Pcs x 2 L]
            </div>
            <div class="blu-product__price">
              <div class="blu-product__price-after">
                Rp141.500
              </div>
              <span class="blu-product__price-before">
                Rp197.400
              </span>
              <span class="blu-product__price-discount">
                28% OFF
              </span>
            </div>
          </div>
        </a>
      </v-column>
      <v-column size="is-6-touch is-2-desktop">
        <a href="/p/al-qolam-smart-hafiz-4-0-new-touch-screen-tebus-al-qolam-super-hafiz/pc--MTA-8998195?ds=TIE-60026-00485-00001&amp;source=SEARCH&amp;sid=449935d0ca0bf4bd&amp;cnc=false&amp;pickupPointCode=PP-3046526" class="box">
          <div class="blu-product__img">
            <img src="/images/al_qolam_al_qolam_smart_hafiz_4-0_new_touch_screen_tebus_al_qolam_super_hafiz_full03_iqpax4aj.webp" alt="Al Qolam Smart Hafiz 4.0 New Touch Screen Tebus Al Qolam Super Hafiz" class="lazyImage" data-loaded="true" />
          </div>
          <div class="blu-product__description">
            <div class="blu-product__name">
              Al Qolam Smart Hafiz 4.0 New Touch Screen Tebus Al Qolam Super Hafiz
            </div>
            <div class="blu-product__price">
              <div class="blu-product__price-after">
                Rp3.699.000
              </div>  <span class="blu-product__price-discount">
&nbsp;
              </span>
            </div>
          </div>
        </a>
      </v-column>
      <v-column size="is-6-touch is-2-desktop">
        <a href="/p/bear-brand-susu-kaleng-189-ml/pc--MTA-2584567?ds=SEP-60050-00037-00001&amp;source=SEARCH&amp;sid=449935d0ca0bf4bd&amp;cnc=false&amp;pickupPointCode=PP-3053036" class="box">
          <div class="blu-product__img">
            <img src="/images/bear-brand_bear-brand-kaleng-189ml_full02.webp" alt="Bear Brand  Susu Kaleng [189 mL]" class="lazyImage" data-loaded="true" />
          </div>
          <div class="blu-product__description">
            <div class="blu-product__name">
              Bear Brand  Susu Kaleng [189 mL]
            </div>
            <div class="blu-product__price">
              <div class="blu-product__price-after">
                Rp8.600
              </div>
              <span class="blu-product__price-before">
                Rp10.000
              </span>
              <span class="blu-product__price-discount">
                14% OFF
              </span>
            </div>
          </div>
        </a>
      </v-column>
      <v-column size="is-6-touch is-2-desktop">
        <a href="/p/sania-beras-5-kg/pc--MTA-2176775?ds=WIT-35794-00022-00001&amp;source=SEARCH&amp;sid=449935d0ca0bf4bd&amp;cnc=false&amp;pickupPointCode=PP-3009430" class="box" data-v-008f398a="">
          <div class="blu-product__img">
            <img src="/images/sania_fs---sania-beras--5-kg-_full04.webp" alt="Sania Beras [5 kg]" class="lazyImage" data-loaded="true" />
          </div>
          <div class="blu-product__description">
            <div class="blu-product__name">
              Sania Beras [5 kg]
            </div>
            <div class="blu-product__price">
              <div class="blu-product__price-after">
                Rp53.000
              </div>
              <span class="blu-product__price-before">
                Rp64.000
              </span>
              <span class="blu-product__price-discount">
                17% OFF
              </span>
            </div>
          </div>
        </a>
      </v-column>
      <v-column size="is-6-touch is-2-desktop">
        <a href="/p/buttonscarves-lilac-series-scarf-jilbab-segiempat-wanita-cloud/pc--MTA-9086502?ds=BUS-60060-00113-00001&amp;source=SEARCH&amp;sid=3bc0d117a76b9272&amp;cnc=false&amp;pickupPointCode=PP-3082207&amp;tag=new" class="box" data-v-008f398a="">
          <div class="blu-product__img">
            <img src="/images/buttonscarves_buttonscarves-lilac-series-scarf-jilbab-segiempat-wanita---cloud_full07.webp" alt="Buttonscarves Lilac Series Scarf Jilbab Segiempat Wanita - Cloud" class="lazyImage" data-loaded="true" />
          </div>
          <div class="blu-product__description">
            <div class="blu-product__name">
              Buttonscarves Lilac Series Scarf Jilbab Segiempat Wanita - Cloud
            </div>
            <div class="blu-product__price">
              <div class="blu-product__price-after">
                Rp395.000
              </div>  <span class="blu-product__price-discount">
&nbsp;
              </span>
            </div>
          </div>
        </a>
      </v-column>
      <v-column size="is-6-touch is-2-desktop">
        <a href="/p/xiaomi-redmi-note-9-midnight-grey-128-gb/pr--PRI-134295-00?ds=88P-60022-00409-00001&amp;source=SEARCH&amp;sid=3bc0d117a76b9272&amp;cnc=false&amp;pickupPointCode=PP-3073618" class="box" data-v-008f398a="">
          <div class="blu-product__img">
            <img src="/images/xiaomi_xiaomi-redmi-note-9-smartphone--128-gb-6-gb--o-_full71.webp" />
            <div class="blu-product__description" />
            <div class="blu-product__name">
              Xiaomi Redmi Note 9 (Midnight Grey, 128 GB)
            </div>
            <div class="blu-product__price">
              <div class="blu-product__price-after">
                Rp2.628.000
              </div>
              <span class="blu-product__price-before">
                Rp2.899.000
              </span>
              <span class="blu-product__price-discount">
                9% OFF
              </span>
            </div>
          </div>
        </a>
      </v-column>
      <v-column size="is-6-touch is-2-desktop">
        <a href="/p/surabaya-sania-premium-minyak-goreng-2000-ml-6-pouch/pc--MTA-2625786?ds=GOS-60047-00032-00001&amp;source=SEARCH&amp;sid=3bc0d117a76b9272&amp;cnc=false&amp;pickupPointCode=PP-3046779" class="box" data-v-008f398a="">
          <div class="blu-product__img">
            <img src="/images/sania_surabaya---sania-premium-minyak-goreng--2000-ml-6-pouch-_full02.webp" alt="Surabaya - Sania Premium Minyak Goreng [2000 mL/6 Pouch]" class="lazyImage" data-loaded="true" />
          </div>
          <div class="blu-product__description">
            <div class="blu-product__name">
              Surabaya - Sania Premium Minyak Goreng [2000 mL/6 Pouch]
            </div>
            <div class="blu-product__price">
              <div class="blu-product__price-after">
                Rp142.000
              </div>
              <span class="blu-product__price-before">
                Rp197.400
              </span>
              <span class="blu-product__price-discount">
                28% OFF
              </span>
            </div>
          </div>
        </a>
      </v-column>
    </v-columns>
  </div>
</template>


<style scoped>
.recommended-product__nav {
    background: #fff;
    padding: 10px 16px;
    display: -webkit-box;
    border-radius: 16px;
    overflow-x: auto;
}

.recommended-product__nav__item {
    background: #f1f1f1;
    margin-right: 10px;
    color: rgba(0,0,0,.38);
    cursor: pointer;
    border-radius: 16px;
    padding: 4px 8px;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
}

.recommended-product__nav__item--selected {
    color: #fff;
    background-image: linear-gradient(106deg,#f8a33f,#f37021);
}
</style>
