import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import MyButton from '../components/common/MyButton.vue'

storiesOf('MyButton', module)
  .add(
    'simple', () => ({
      components: { MyButton },
      template: '<MyButton @click.native="action"/>',
      methods: { action: action('button-clicked') }
    }),
    {
      info: {
        summary: '汎用的なボタン'
      }
    }
  )
