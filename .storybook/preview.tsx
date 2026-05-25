import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/nextjs';

import '@/app/globals.css';

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        dark: 'dark',
        light: 'light',
      },
      defaultTheme: 'dark',
    }),
  ],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#09090b' },
        { name: 'light', value: '#ffffff' },
      ],
    },
    layout: 'fullscreen',
  },
};

export default preview;
