import { addParameters } from '@storybook/react';
import theme from './theme';

addParameters({
  options: {
    theme,
  },
  backgrounds: [{ name: 'dark', value: '#33354C', default: true }],
});
