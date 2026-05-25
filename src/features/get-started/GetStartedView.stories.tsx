import type { Meta, StoryObj } from '@storybook/nextjs';

import GetStartedView from '@/features/get-started/GetStartedView';

const meta: Meta<typeof GetStartedView> = {
  component: GetStartedView,
};

export default meta;

type Story = StoryObj<typeof GetStartedView>;

export const Default: Story = {};
