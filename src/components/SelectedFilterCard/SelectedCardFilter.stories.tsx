import type { Meta, StoryObj } from '@storybook/react';

import SelectedFilterCard from './SelectedFilterCard.component';

const meta: Meta<typeof SelectedFilterCard> = {
  component: SelectedFilterCard,
  title: "SelectedFilterCard"
}

export default meta

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    filterTitle: "Severity",
    filterSelection: "Medium"
  }
}