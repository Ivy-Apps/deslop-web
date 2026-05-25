import type { Meta, StoryObj } from '@storybook/nextjs';

import ContactView from '@/features/contact/ContactView';

const meta: Meta<typeof ContactView> = {
  component: ContactView,
};

export default meta;

type Story = StoryObj<typeof ContactView>;

export const Default: Story = {};
