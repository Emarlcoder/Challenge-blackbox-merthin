import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button.component'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'CustomButton'
}

export default meta

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    label: "Filter",
    variant: "primary"
  }
}