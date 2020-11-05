type json = typeof import('@/locales/en.json');
declare module '@vue-composable/core' {
  type i18n = json
}
