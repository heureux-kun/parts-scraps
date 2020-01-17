import { storiesOf } from '@storybook/vue'
import Counter from '../components/common/Counter.vue'

storiesOf('Counter', module).add(
  'default', () => ({
    components: { Counter },
    template: `<counter></counter>`
  })
)
