// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import eslintPluginJsonc from 'eslint-plugin-jsonc'

// Run `npx @eslint/config-inspector` to inspect the resolved config interactively
export default createConfigForNuxt({
  features: {
    // Rules for module authors
    tooling: true,
    // Rules for formatting
    stylistic: true,
    typescript: true,
  },
  dirs: {
    src: ['./playground/app', './docs/app'],
  },
}).append([
  ...eslintPluginJsonc.configs['flat/recommended-with-jsonc'],
  {
    rules: {
      'jsonc/sort-keys': [
        'error',
        'asc',
        {
          caseSensitive: true,
          natural: false,
          minKeys: 2,
          allowLineSeparatedGroups: false,
        },
      ],
    },
  },
  {
    files: ['package.json'],
    rules: {
      'jsonc/sort-keys': 'off',
      '@stylistic/eol-last': 'off',
    },
  },

])
