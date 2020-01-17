import { configure } from '@storybook/vue';
import { addDecorator } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);

addDecorator(withInfo)