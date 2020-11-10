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
  <section class="container">
    <div class="mt-6">
      <div class="favourite">
        <div class="favourite">
          <div class="favourite__scroller">
            <div class="favourite__content">
              <div class="favourite__item">
                <div class="favourite__label">
                  {{ intl.$ts('favorite.new') }}
                </div>
                <div class="favourite__item-image">
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTIuNDM1IDE0LjYxMTZINi41ODQ5OUM1LjE1NDk5IDE0LjYxMTYgMy45ODQ5OSAxMy4zOTQ4IDMuOTg0OTkgMTEuOTA3NlY1Ljc1NkMzLjk4NDk5IDQuMjY4OCA1LjE1NDk5IDMuMDUyIDYuNTg0OTkgMy4wNTJIMTIuNDM1QzEzLjg2NSAzLjA1MiAxNS4wMzUgNC4yNjg4IDE1LjAzNSA1Ljc1NlYxMS45MDc2QzE1LjAzNSAxMy4zOTQ4IDEzLjkzIDE0LjYxMTYgMTIuNDM1IDE0LjYxMTZaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+CjxwYXRoIGQ9Ik0yNi4wODUgMTQuNjExNkgyMC4yMzVDMTguODA1IDE0LjYxMTYgMTcuNjM1IDEzLjM5NDggMTcuNjM1IDExLjkwNzZWNS43NTZDMTcuNjM1IDQuMjY4OCAxOC44MDUgMy4wNTIgMjAuMjM1IDMuMDUySDI2LjA4NUMyNy41MTUgMy4wNTIgMjguNjg1IDQuMjY4OCAyOC42ODUgNS43NTZWMTEuOTA3NkMyOC42ODUgMTMuMzk0OCAyNy41OCAxNC42MTE2IDI2LjA4NSAxNC42MTE2VjE0LjYxMTZaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXIpIi8+CjxwYXRoIGQ9Ik0xMi40MzUgMjguNzRINi41ODQ5OUM1LjE1NDk5IDI4Ljc0IDMuOTg0OTkgMjcuNTIzMiAzLjk4NDk5IDI2LjAzNlYxOS44ODQ0QzMuOTg0OTkgMTguMzk3MiA1LjE1NDk5IDE3LjE4MDQgNi41ODQ5OSAxNy4xODA0SDEyLjQzNUMxMy44NjUgMTcuMTgwNCAxNS4wMzUgMTguMzk3MiAxNS4wMzUgMTkuODg0NFYyNi4wMzZDMTUuMDM1IDI3LjUyMzIgMTMuOTMgMjguNzQgMTIuNDM1IDI4Ljc0VjI4Ljc0WiIgZmlsbD0idXJsKCNwYWludDJfbGluZWFyKSIvPgo8cGF0aCBkPSJNMjYuMDg1IDI4Ljc0SDIwLjIzNUMxOC44MDUgMjguNzQgMTcuNjM1IDI3LjUyMzIgMTcuNjM1IDI2LjAzNlYxOS44ODQ0QzE3LjYzNSAxOC4zOTcyIDE4LjgwNSAxNy4xODA0IDIwLjIzNSAxNy4xODA0SDI2LjA4NUMyNy41MTUgMTcuMTgwNCAyOC42ODUgMTguMzk3MiAyOC42ODUgMTkuODg0NFYyNi4wMzZDMjguNjg1IDI3LjUyMzIgMjcuNTggMjguNzQgMjYuMDg1IDI4Ljc0VjI4Ljc0WiIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyKSIvPgo8ZyBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6c29mdC1saWdodCIgb3BhY2l0eT0iMC41NiI+CjxwYXRoIGQ9Ik0xMi40MzUgMTcuMTgwNEg2LjU4NDk5QzUuMTU0OTkgMTcuMTgwNCAzLjk4NDk5IDE4LjM5NzIgMy45ODQ5OSAxOS44ODQ0VjIzLjQ2NzJDNS44MDQ5OSAyNC4yMTA4IDcuNzU0OTkgMjQuNjg0IDkuODM0OTkgMjQuNjg0QzExLjY1NSAyNC42ODQgMTMuNDEgMjQuMzQ2IDE1LjAzNSAyMy43Mzc2VjE5Ljg4NDRDMTUuMDM1IDE4LjM5NzIgMTMuOTMgMTcuMTgwNCAxMi40MzUgMTcuMTgwNFYxNy4xODA0WiIgZmlsbD0iI0E3RTNGRiIvPgo8L2c+CjxnIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpzb2Z0LWxpZ2h0IiBvcGFjaXR5PSIwLjcyIj4KPHBhdGggZD0iTTIzLjAyOTkgMTcuMTgwNEgyMC4zQzE4Ljg3IDE3LjE4MDQgMTcuNyAxOC4zOTcyIDE3LjcgMTkuODg0NFYyMi40NTMyQzE5Ljg0NSAyMS4yMzY0IDIxLjY2NDkgMTkuNDExMiAyMy4wMjk5IDE3LjE4MDRaIiBmaWxsPSIjQTdFM0ZGIi8+CjwvZz4KPGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOnNvZnQtbGlnaHQiIG9wYWNpdHk9IjAuNzIiPgo8cGF0aCBkPSJNMTcuNjM1IDUuNzU2VjExLjkwNzZDMTcuNjM1IDEzLjM5NDggMTguODA1IDE0LjYxMTYgMjAuMjM1IDE0LjYxMTZIMjQuMjY1QzI0Ljk4IDEyLjcxODggMjUuNDM1IDEwLjY5MDggMjUuNDM1IDguNDZDMjUuNDM1IDYuNTY3MiAyNS4xMSA0Ljc0MiAyNC41MjUgMy4wNTJIMjAuMjM1QzE4LjgwNSAzLjA1MiAxNy42MzUgNC4yNjg4IDE3LjYzNSA1Ljc1NlY1Ljc1NloiIGZpbGw9IiNGQ0QyQTEiLz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iMS43MjYxNCIgeTE9Ii0xLjYyMTQzIiB4Mj0iOC4zNTA5NCIgeTI9IjYuNDYzNjQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzk0N0NDMSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3MjUxQTEiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyIiB4MT0iMjMuMTkxNSIgeTE9IjMuMzg2NTMiIHgyPSIyMy4xOTE1IiB5Mj0iMTQuMzI0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4wMDAzMSIgc3RvcC1jb2xvcj0iI0ZBQzI4MCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGNzkzMUUiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyIiB4MT0iOS41NDE0OCIgeTE9IjYuNzUxMSIgeDI9IjkuNTQxNDgiIHkyPSIyNC4yMTg3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNBN0UzRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA5NURBIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQzX2xpbmVhciIgeDE9IjIzLjE5MTUiIHkxPSIxNy4zNzgxIiB4Mj0iMjMuMTkxNSIgeTI9IjI4LjcxNjIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzAwN0JCNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxMjNEODkiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K" alt="all favourite" />
                </div>
                <div class="favourite__item-label">
                  {{ intl.$ts('favorite.all') }}
                </div>
              </div>
              <div class="favourite__item">
                <div class="favourite__item-image">
                  <img src="/images/ic-blibli-mart-compressed.png" alt="BlibliMart" height="24px" />
                </div>
                <div class="favourite__item-label">
                  {{ intl.$ts('favorite.bliblimart') }}
                </div>
              </div><div class="favourite__item">
                <div class="favourite__item-image">
                  <img src="/images/ic-handphone-tablet-compressed.png" alt="Handphone &amp; Tablet" height="24px" />
                </div>
                <div class="favourite__item-label">
                  {{ intl.$ts('favorite.tablet') }}
                </div>
              </div><div class="favourite__item">
                <div class="favourite__item-image">
                  <img src="/images/ic-phone-credit-compressed.png" alt="Pulsa" height="24px" />
                </div>
                <div class="favourite__item-label">
                  {{ intl.$ts('favorite.pulse') }}
                </div>
              </div><div class="favourite__item">
                <div class="favourite__item-image">
                  <img src="/images/ic-tiket-voucher-compressed.png" alt="Tiket &amp; Voucher" height="24px" />
                </div>
                <div class="favourite__item-label">
                  {{ intl.$ts('favorite.vouchers') }}
                </div>
              </div><div class="favourite__item">
                <div class="favourite__item-image">
                  <img src="/images/ic-electronic-compressed.png" alt="Elektronik" height="24px" />
                </div>
                <div class="favourite__item-label">
                  {{ intl.$ts('favorite.electronic') }}
                </div>
              </div><div class="favourite__item">
                <div class="favourite__item-image">
                  <img src="/images/ic-home-compressed.png" alt="Home &amp; Living" height="24px" />
                </div>
                <div class="favourite__item-label">
                  Home &amp; <br /> Living
                </div>
              </div><div class="favourite__item">
                <div class="favourite__item-image">
                  <img src="/images/ic-kecantikan-compressed.png" alt="Kesehatan &amp; Kecantikan" height="24px" />
                </div>
                <div class="favourite__item-label">
                  {{ intl.$ts('favorite.health') }} <br /> {{ intl.$ts('favorite.beauty') }}
                </div>
              </div><div class="favourite__item">
                <div class="favourite__item-image">
                  <img src="/images/ic-flight1-compressed.png" alt="Pesawat" height="24px" />
                </div>
                <div class="favourite__item-label">
                  {{ intl.$ts('favorite.plane') }}
                </div>
              </div><div class="favourite__item">
                <div class="favourite__item-image">
                  <img src="https://www.static-src.com/siva/asset//08_2020/ic-event-compressed.png" alt="Event" height="24px" />
                </div>
                <div class="favourite__item-label">
                  Event
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .mt-6 {
    margin-top: 100px !important;
  }
</style>
