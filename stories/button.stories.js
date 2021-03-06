import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import ButtonDefault from '../components/common/ButtonDefault.vue'

storiesOf('Button', module)
  .add(
    'default', () => ({
      components: { ButtonDefault },
      template: `<button-default @click.native="action" />`,
      methods: {
        action: action('button-clicked')
      }
    }),
    {
      info: {
        summary: '汎用的なボタン'
      }
    }
  )
