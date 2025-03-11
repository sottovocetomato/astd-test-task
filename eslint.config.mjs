// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here

).override('nuxt/vue/single-root', {
  rules: {
    'vue/no-multiple-template-root': 'off',
  } })
