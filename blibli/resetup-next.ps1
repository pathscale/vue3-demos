ncu -u --dep prod,dev --concurrency 16 -x `
vue-composable

ncu -u --dep prod,dev --concurrency 16 -n -f `
@pathscale/vue3-ui,`
@pathscale/bulma-css-var-only,`
@pathscale/bulma-pull-2981-css-var-only,`
@vue/composition-api,`
@vue/compiler-sfc,`
@vue/runtime-dom,`
vue,`
vue-router,`
vuex,`
rollup-plugin-vue,`
vue-composable

sort-package-json
wsl rm -rf node_modules package-lock.json yarn.lock pnpm-lock.yaml
npm i
