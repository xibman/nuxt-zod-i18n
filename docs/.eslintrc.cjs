module.exports = {
  root: true,
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:jsonc/recommended-with-json', 'prettier'],
  rules: {
    // Global
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    // Vue
    'vue/multi-word-component-names': 0,
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 0
  }
}
