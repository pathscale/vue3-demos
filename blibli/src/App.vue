<script>
import { watchEffect } from 'vue'
import { setI18n } from 'vue-composable'
import { defaultTheme, setTheme } from './theming'
import Home from './components/Main.vue'

// TODO: bundling .json + code splitting -> copying .json + fetching
import en from './locales/en.json'
import id from './locales/id.json'

const App = {
  name: 'App',
  components: { Home },
  setup() {
    setI18n({
      locale: (navigator.language || navigator.userLanguage).slice(0, 2),
      fallback: 'en',
      messages: {
        en,
        id // : ()=> import('./locales/id.json').default,
      }
    })
    watchEffect(() => setTheme(defaultTheme))
  }
}

export default App
</script>

<template>
  <div>
    <Home />
  </div>
</template>
