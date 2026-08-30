import fsd from '@feature-sliced/steiger-plugin'
import { defineConfig } from 'steiger'

export default defineConfig([
  ...fsd.configs.recommended,

  {
    // SCSS-партиалы (_variables, _fluid) подключаются через @use из самих стилей,
    // модульного публичного API у сегмента быть не может.
    files: ['./src/shared/styles/**'],
    rules: {
      'fsd/public-api': 'off',
    },
  },
])
