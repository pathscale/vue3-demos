<script>
import { useI18n } from 'vue-composable'

export default {
  name: 'Component',
  setup() {
    const intl = useI18n()
    return { intl }
  }
}
</script>

<template>
  <section class="container-fluid">
    <div style="background: url(&quot;data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIAcMAAwMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAACAAEDBf/aAAgBAQAAAAD1KqqqswkmPOJJhhJMMGEwJOG5nMGG/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAII/9oACAECEAAAANCATKZlKUzMpSl//8QAFwEBAQEBAAAAAAAAAAAAAAAAAgADCP/aAAgBAxAAAADk2qkpJJJSWkkrRK//xAAYEAEBAQEBAAAAAAAAAAAAAAAREAAgMP/aAAgBAQABPwD1c5rWOc1jyxjmOc5jwxzf/8QAFBEBAAAAAAAAAAAAAAAAAAAAQP/aAAgBAgEBPwBv/8QAFBEBAAAAAAAAAAAAAAAAAAAAQP/aAAgBAwEBPwBv/9k=&quot;) repeat-x;">
      <div class="container py-4" style="background: url(&quot;https://www.static-src.com/frontend/static/img/bg-flashsale.cca8451.jpg&quot;) 8% top no-repeat;">
        <div class="is-justified-between">
          <div class="is-aligned-center">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9Ii4wNzklIiB4Mj0iOTkuNzcxJSIgeTE9IjQ5Ljg1NCUiIHkyPSI0OS44NTQlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzk0N0NDMSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM3MjUxQTEiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9Ii4zMjElIiB4Mj0iOTkuODA2JSIgeTE9IjUwLjAxNCUiIHkyPSI1MC4wMTQlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0Y5QjI2MCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNFQjgyMDgiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iI0ZGRiIvPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjYSkiIGQ9Ik0xMS44NDYgMTEuNTM4aDYuODQ2YzEuMTU0IDAgMS43NyAxLjMwOCAxLjA3NyAyLjIzMUw3LjkyMyAyOC42OTJjLTEuMDc3IDEuMzA4LTMuMjMuMjMxLTIuNjkyLTEuMzg0bDMuMjMtMTAuMzg1IDMuMzg1LTUuMzg1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAgNi4yNSkiLz4KICAgICAgICA8cGF0aCBmaWxsPSJ1cmwoI2IpIiBkPSJNOC40NjIgMTYuOTIzSDIuMDc3Yy0uOTIzIDAtMS41MzktLjkyMy0xLjMwOC0xLjc3TDUuMjMxLjkyNEM1LjUzOC4zODUgNiAwIDYuNjE1IDBoNy45MjNjLjkyNCAwIDEuNjE2IDEgMS4yMzEgMS44NDZsLTMuOTIzIDkuNjkyLTMuMzg0IDUuMzg1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAgNi4yNSkiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkNEMkExIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0yOC42OTIgMTcuNzg4aC02Ljg0NmwzLjkyMy05LjYxNWMuMzA4LS45MjMtLjMwNy0xLjkyMy0xLjIzLTEuOTIzaC01LjE1NHMtLjUzOS45MjMgMS42MTUgMi4yM2M0LjUzOCAyLjg0Ny0zIDEwLjc3LTEuNjE1IDEyLjg0NyAxLjM4NCAyLjE1NCA1LjIzLTMuMDc3IDYuNDYxLS41MzkgMS4yMyAyLjUzOS0xLjUzOCA1LjYxNi01Ljg0NiA4Ljg0Ny0yLjM4NSAxLjc2OS0xLjc3IDQuMTUzLTIuMDc3IDUuMTUzbDExLjc3LTE0LjkyM2MuNzY5LS43NjkuMDc2LTIuMDc3LTEtMi4wNzd6IiBvcGFjaXR5PSIuNzIiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpzb2Z0LWxpZ2h0Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="Flash Sale" class="mx-4" />
            <div>
              <div class="has-text-white is-size-5">
                Flash Sale
              </div>
              <div class="is-inline-flex is-size-5 has-text-white">
                <div class="tag">
                  07
                </div>
                :
                <div class="tag mx-4">
                  54
                </div>
                :
                <div class="tag">
                  41
                </div>
              </div>
            </div>
          </div>
          <a href="/flashsale?appsWebview=true" class="has-text-white">
            {{ intl.$ts('see_all') }} &gt;
          </a>
        </div>
        <div class="is-inline-flex">
          <div class="mx-3" style="width: 16.6667%;">
            <div class="flashsale__product-item">
              <a href="https://www.blibli.com/p/xiaomi-redmi-note-9-pro-smartphone-blue-128-gb-8-gb-o/ps--XIO-60022-00589" class="blu-product__link">
                <div class="blu-product__img">
                  <img src="/images/xiaomi_xiaomi-redmi-note-9-pro-smartphone---blue--128-gb--8-gb--o-_full06.jpg" alt="Xiaomi Redmi Note 9 Pro Smartphone - Blue [128/GB/ 8 GB/ O]" class="lazyImage" data-loaded="true" />
                </div>
                <div class="blu-product__description">
                  <div class="blu-product__name">
                    Xiaomi Redmi Note 9 Pro Smartphone - Blue [128/GB/ 8 GB/ O]
                  </div>
                  <div class="blu-product__price">
                    <div class="blu-product__price-after">
                      Rp3.698.000
                    </div>
                    <span class="blu-product__price-before">
                      Rp3.899.000
                    </span>
                    <span class="blu-product__price-discount">
                      5% OFF
                    </span>
                  </div>
                  <div class="blu-product__stock">
                    <div class="blu-product__stock-bar">
                      <div class="blu-product__stock-status" style="width: 20%; background-color: rgb(237, 28, 36);" />
                    </div>
                    <span class="blu-product__stock-info">
                      Hampir habis
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="mx-3" style="width: 16.6667%;">
            <div class="flashsale__product-item">
              <a href="https://www.blibli.com/p/xiaomi-redmi-note-9-pro-smartphone-128-gb-8-gb-o/ps--XIO-60022-00588" class="blu-product__link">
                <div class="blu-product__img">
                  <img src="/images/xiaomi_xiaomi-redmi-note-9-pro-smartphone--128-gb--8-gb--o-_full28.jpg" alt="Xiaomi Redmi Note 9 Pro Smartphone [128 GB/ 8 GB/ O]" class="lazyImage" data-loaded="true" />
                </div>
                <div class="blu-product__description">
                  <div class="blu-product__name">
                    Xiaomi Redmi Note 9 Pro Smartphone [128 GB/ 8 GB/ O]
                  </div>
                  <div class="blu-product__price">
                    <div class="blu-product__price-after">
                      Rp3.698.000
                    </div>
                    <span class="blu-product__price-before">
                      Rp3.899.000
                    </span>
                    <span class="blu-product__price-discount">
                      5% OFF
                    </span>
                  </div>
                  <div class="blu-product__stock">
                    <div class="blu-product__stock-bar">
                      <div class="blu-product__stock-status" style="width: 20%; background-color: rgb(237, 28, 36);" />
                    </div>
                    <span class="blu-product__stock-info">
                      Hampir habis
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="mx-3" style="width: 16.6667%;">
            <div class="flashsale__product-item">
              <a href="https://www.blibli.com/p/xiaomi-redmi-note-9-pro-smartphone-64-gb-6-gb-o/ps--XIO-60022-00540" class="blu-product__link">
                <div class="blu-product__img">
                  <img src="/images/xiaomi_xiaomi-redmi-note-9-pro-smartphone--64-gb--6-gb--o-_full73.jpg" alt="Xiaomi Redmi Note 9 Pro Smartphone [64/GB/ 6 GB/ O]" class="lazyImage" data-loaded="true" />
                </div>
                <div class="blu-product__description">
                  <div class="blu-product__name">
                    Xiaomi Redmi Note 9 Pro Smartphone [64/GB/ 6 GB/ O]
                  </div>
                  <div class="blu-product__price">
                    <div class="blu-product__price-after">
                      Rp3.298.000
                    </div>
                    <span class="blu-product__price-before">
                      Rp3.499.000
                    </span>
                    <span class="blu-product__price-discount">
                      5% OFF
                    </span>
                  </div>
                  <div class="blu-product__stock">
                    <div class="blu-product__stock-bar">
                      <div class="blu-product__stock-status" style="width: 87%; background-color: rgb(0, 178, 90);" />
                    </div>
                    <span class="blu-product__stock-info">
                      Stok tersedia
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="mx-3" style="width: 16.6667%;">
            <div class="flashsale__product-item">
              <a href="https://www.blibli.com/p/bpm-beras-putih-tani-tunggal-5kg-kualitas-terjamin/ps--BEP-60117-00001" class="blu-product__link">
                <div class="blu-product__img">
                  <img src="/images/pt-_berkah_pangan_mandiri_bpm_beras_tani_tunggal_-5kg-_full01_nkkrm1tj.jpg" alt="BPM Beras Putih Tani Tunggal 5kg [Kualitas Terjamin]" class="lazyImage" data-loaded="true" />
                </div>
                <div class="blu-product__description">
                  <div class="blu-product__name">
                    BPM Beras Putih Tani Tunggal 5kg [Kualitas Terjamin]
                  </div>
                  <div class="blu-product__price">
                    <div class="blu-product__price-after">
                      Rp50.000
                    </div>
                    <span class="blu-product__price-before">
                      Rp54.000
                    </span>
                    <span class="blu-product__price-discount">
                      7% OFF
                    </span>
                  </div>
                  <div class="blu-product__stock">
                    <div class="blu-product__stock-bar">
                      <div class="blu-product__stock-status" style="width: 81%; background-color: rgb(0, 178, 90);" />
                    </div>
                    <span class="blu-product__stock-info">
                      Stok tersedia
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="mx-3" style="width: 16.6667%;">
            <div class="flashsale__product-item">
              <a href="https://www.blibli.com/p/champion-big-logo-c-fleece-pullover-mens-sweater-pria-white/ps--CHN-60022-00052" class="blu-product__link">
                <div class="blu-product__img">
                  <img src="/images/champion_champion_mens_fleece_pullover_-_big_logo_c_white_full02_itnvkgwj.jpg" alt="Champion Big Logo C Fleece Pullover Mens Sweater Pria - White" class="lazyImage" data-loaded="true" />
                </div>
                <div class="blu-product__description">
                  <div class="blu-product__name">
                    Champion Big Logo C Fleece Pullover Mens Sweater Pria - White
                  </div>
                  <div class="blu-product__price">
                    <div class="blu-product__price-after">
                      Rp1.044.450
                    </div>
                    <span class="blu-product__price-before">
                      Rp1.899.000
                    </span>
                    <span class="blu-product__price-discount">
                      44% OFF
                    </span>
                  </div>
                  <div class="blu-product__stock">
                    <div class="blu-product__stock-bar">
                      <div class="blu-product__stock-status" style="width: 100%; background-color: rgb(0, 178, 90);" />
                    </div>
                    <span class="blu-product__stock-info">
                      Stok tersedia
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="mx-3" style="width: 16.6667%;">
            <div class="flashsale__product-item">
              <a href="https://www.blibli.com/p/clarette-signature-daelyn-sandals-heels-wanita/ps--SHT-38393-09800" class="blu-product__link">
                <div class="blu-product__img">
                  <img src="/images/clarette_clarette-signature-daelyn-sandals-heels-wanita_full13.jpg" alt="Clarette Signature Daelyn Sandals Heels Wanita" class="lazyImage" data-loaded="true" />
                </div>
                <div class="blu-product__description">
                  <div class="blu-product__name">
                    Clarette Signature Daelyn Sandals Heels Wanita
                  </div>
                  <div class="blu-product__price">
                    <div class="blu-product__price-after">
                      Rp229.000 - Rp239.000
                    </div>  <span class="blu-product__price-discount">
&nbsp;
                    </span>
                  </div>
                  <div class="blu-product__stock">
                    <div class="blu-product__stock-bar">
                      <div class="blu-product__stock-status" style="width: 100%; background-color: rgb(0, 178, 90);" />
                    </div>
                    <span class="blu-product__stock-info">
                      Stok tersedia
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
