import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import ButtonWide from '../components/common/ButtonWide.vue'

storiesOf('ButtonWide', module)
  .add(
    'default', () => ({
      components: { ButtonWide },
      template: `<button-wide @click.native="action"></button-wide>`,
      methods: { action: action('button-clicked') }
    }),
    {
      info: {
        summary: '汎用的なボタン'
      }
    }
  )
