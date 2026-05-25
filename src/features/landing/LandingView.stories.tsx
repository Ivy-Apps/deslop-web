import type { Meta, StoryObj } from '@storybook/nextjs';

import LandingView from '@/features/landing/LandingView';

const meta: Meta<typeof LandingView> = {
  component: LandingView,
};

export default meta;

type Story = StoryObj<typeof LandingView>;

export const Default: Story = {};
