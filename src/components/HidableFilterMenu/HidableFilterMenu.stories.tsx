import type { Meta, StoryObj } from '@storybook/react';

import HidableFilterMenu from './HidableFilterMenu.component';

const meta: Meta<typeof HidableFilterMenu> = {
  component: HidableFilterMenu,
  title: 'HidableFilterMenu'
}

export default meta

type Story = StoryObj<typeof meta>;

const selectedOptions = [] as string[]

const onSelectOption = (selectedValue: string) => {
  selectedOptions.push(selectedValue)
}

export const Base: Story = {
  args: {
    title: "Severity",
    filterOptions: [
        {
          "value": "Low",
          "label": "Low"
        },
        {
          "value": "Medium",
          "label": "Medium"
        },
        {
          "value": "High",
          "label": "High"
        }
      ],
    selectedOptions: selectedOptions,
    inputType: "checkbox",
    onSelect: onSelectOption
  }
}