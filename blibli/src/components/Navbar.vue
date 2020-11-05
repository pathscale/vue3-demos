<script>
import { VNavbar, VNavbarItem, VField, VInput, VButton } from '@pathscale/vue3-ui'
import { useI18n } from 'vue-composable'

import { ref } from 'vue'
import logo from '../assets/logos/logo-blibli-white.svg'


export default {
  name: 'Component',
  components: { VNavbar, VNavbarItem, VField, VInput, VButton },
  setup() {
    const languages = {
      id: 'id-ID',
      en: 'en-EN'
    }
    const showLanguageMenu = ref(false)
    function changeLanguage(language) {
      showLanguageMenu.value = false
      intl.locale.value = language
    }

    function toggleLanguageMenu() {
      showLanguageMenu.value = !showLanguageMenu.value
    }
    const intl = useI18n()
    return { logo, languages, intl, changeLanguage, showLanguageMenu, toggleLanguageMenu }
  }
}
</script>

<template>
  <div>
    <div class="hidden-language-menu"
         :style="`height: ${showLanguageMenu ? 40 : 0}px`">
      <div class="is-flex pt-2">
        <v-navbar-item
          v-for="l in intl.locales.value" :key="l"
          :value="l"
          class="mx-3 is-size-6 has-text-centered has-text-white"
          @click="changeLanguage(l)">
          {{
            languages[l]
          }}
        </v-navbar-item>
      </div>
    </div>
    <v-navbar type="is-info" :fixed-top="!showLanguageMenu" class="main" :mobile-burger="false">
      <template #brand>
        <v-navbar-item>
          <img width="100" height="100" :src="logo" />
        </v-navbar-item>
        <v-navbar-item class="is-hidden-desktop is-hidden-widescreen is-hidden-fullhd">
          <v-field style="width: 100%">
            <v-input color="is-info" placeholder="legion 5 ryzen 7" class="is-medium" />
          </v-field>
        </v-navbar-item>
      </template>

      <template #start>
        <v-navbar-item>
          <div>
            <div>
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMCAwaDUuNzh2NS41M0gweiIvPjxwYXRoIGlkPSJjIiBkPSJNMCAwaDUuNzh2NS41M0gweiIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik00LjYyIDUuNTNIMS4xNUMuNTIgNS41MyAwIDUuMDMgMCA0LjQzVjEuMUMwIC41LjUyIDAgMS4xNSAwaDMuNDdjLjY0IDAgMS4xNi41IDEuMTYgMS4xdjMuMzJjMCAuNjEtLjUyIDEuMS0xLjE2IDEuMSIgbWFzaz0idXJsKCNiKSIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMi43MSA1LjUzSDkuMjRjLS42NCAwLTEuMTUtLjUtMS4xNS0xLjFWMS4xQzguMDkuNSA4LjYgMCA5LjI0IDBoMy40N2MuNjQgMCAxLjE1LjUgMS4xNSAxLjF2My4zMmMwIC42MS0uNTEgMS4xLTEuMTUgMS4xIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA3Ljc0KSI+PG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2MiLz48L21hc2s+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTQuNjIgNS41M0gxLjE1Qy41MiA1LjUzIDAgNS4wMyAwIDQuNDNWMS4xQzAgLjUuNTIgMCAxLjE1IDBoMy40N2MuNjQgMCAxLjE2LjUgMS4xNiAxLjF2My4zMmMwIC42MS0uNTIgMS4xLTEuMTYgMS4xIiBtYXNrPSJ1cmwoI2QpIi8+PC9nPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMi43MSAxMy4yNkg5LjI0Yy0uNjQgMC0xLjE1LS41LTEuMTUtMS4xVjguODRjMC0uNjEuNTEtMS4xIDEuMTUtMS4xaDMuNDdjLjY0IDAgMS4xNS40OSAxLjE1IDEuMXYzLjMyYzAgLjYtLjUxIDEuMS0xLjE1IDEuMSIvPjwvZz48L3N2Zz4=" alt="Kategori" /> <span>{{ intl.$ts('navbar.category') }}</span>
            </div>
          </div>
        </v-navbar-item>
        <v-navbar-item tag="div">
          <v-field style="width: 30vw">
            <v-input color="is-info" placeholder="legion 5 ryzen 7" class="is-medium" />
            <div class="image is-inline-flex is-size-7">
              <div>
                <a nohref="nohref" class="has-text-white" :title="intl.$ts('navbar.festival')">
                  {{ intl.$ts('navbar.festival') }}
                </a>
              </div>
              <span class="mx-2">|</span>

              <div>
                <a nohref="nohref" class="has-text-white" :title="intl.$ts('navbar.master')">
                  {{ intl.$ts('navbar.master') }}
                </a>
              </div>
              <span class="mx-2">|</span>
              <div>
                <a nohref="nohref" class="has-text-white" :title="intl.$ts('navbar.gadget')">
                  {{ intl.$ts('navbar.gadget') }}
                </a>
              </div>
            </div>
          </v-field>
        </v-navbar-item>
      </template>


      <template #end>
        <v-navbar-item>
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE0IDE1Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTEyLjA4NC43MzdMMS4wMzIgMS45MTZjLS42NjQuMDczLTEuMTA2LjY2My0uOTU4IDEuMzI2Ljg4NCA0LjA1My4zNjggOC4xOCAwIDEwLjI0Mi0uMTQ4LjY2My4zNjggMS4yNTMgMS4wMzEgMS4yNTNoMTEuMDUzYy42NjMgMCAxLjE3OS0uNTkgMS4xMDUtMS4yNTMtLjczNy00LjItLjI5NS05LjEzNy4wNzQtMTEuNDk1QTEuMTI4IDEuMTI4IDAgMCAwIDEyLjA4NC43Mzd6Ii8+CiAgICAgICAgPGNpcmNsZSBjeD0iMy42ODQiIGN5PSI0LjQyMSIgcj0iMSIgZmlsbD0iIzAwOTVEQSIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDk1REEiIGQ9Ik02LjYzMiAxMC40NjNjLTIuOCAwLTMuNTM3LTIuMjg0LTMuNTM3LTMuNTM3IDAtLjI5NC4yMi0uNTkuNTktLjU5LjI5NCAwIC41MTUuMjIyLjU4OS41MTcgMCAuMjIuMDczIDIuNDMxIDIuMzU4IDIuNDMxIDIuMjg0IDAgMi4zNTctMi4xMzcgMi4zNTctMi40MzEgMC0uMjk1LjIyMi0uNTE2LjU5LS41MTYuMjk1IDAgLjUxNi4yMi41MTYuNTE2LjA3MyAxLjMyNi0uNjYzIDMuNjEtMy40NjMgMy42MXoiLz4KICAgICAgICA8Y2lyY2xlIGN4PSI5LjU3OSIgY3k9IjQuNDIxIiByPSIxIiBmaWxsPSIjMDA5NURBIi8+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="Bag" />
        </v-navbar-item>
        <v-navbar-item tag="div">
          <div class="buttons">
            <v-button type="is-white" outlined>
              {{ intl.$ts('navbar.sign_in') }}
            </v-button>
            <v-button type="is-light">
              {{ intl.$ts('navbar.sign_up') }}
            </v-button>
          </div>
        </v-navbar-item>
        <v-navbar-item
          class="mx-3 my-5 is-size-5 has-text-centered"
          @click="toggleLanguageMenu">
          {{ intl.$ts(`language`) }}: {{ languages[intl.locale.value] }}
        </v-navbar-item>
      </template>
    </v-navbar>
  </div>
</template>

<style>
   .main > .navbar-menu > .navbar-start {
    flex-grow: 1;
    justify-content: space-around !important;
  }

  @media screen and (min-width: 1216px) {
    .main {
      padding-right: 250px;
      padding-left: 250px;
    }
  }

  @media screen and (max-width: 768px) {
    .navbar-brand {
      display: unset !important;
    }
  }
</style>
