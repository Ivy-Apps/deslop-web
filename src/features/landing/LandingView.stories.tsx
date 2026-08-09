import type { Meta, StoryObj } from '@storybook/nextjs';

import LandingView from '@/features/landing/LandingView';

const meta: Meta<typeof LandingView> = {
  component: LandingView,
};

export default meta;

type Story = StoryObj<typeof LandingView>;

export const Default: Story = {};

/**
 * The widths the mobile layout is checked against. 320px is the narrowest
 * screen still worth supporting and the one everything is sized to fit; 390px
 * is a current phone. The viewports are declared here rather than taken from
 * Storybook's built-in list so the two numbers this layout was designed around
 * are written down next to the story that shows them.
 *
 * Below 640px the header collapses to a hamburger, so this is also the only
 * place the menu can be opened without a device.
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      options: {
        narrow: {
          name: 'Narrow (320)',
          styles: { width: '320px', height: '640px' },
        },
        phone: {
          name: 'Phone (390)',
          styles: { width: '390px', height: '844px' },
        },
      },
    },
  },
  globals: { viewport: { value: 'phone' } },
};
