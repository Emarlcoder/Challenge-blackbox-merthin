import type { Meta, StoryObj } from '@storybook/react';

import HidableFilterMenu from './HidableFilterMenu.component';

const meta: Meta<typeof HidableFilterMenu> = {
  component: HidableFilterMenu,
  title: 'HidableFilterMenu',
};

export default meta;

type Story = StoryObj<typeof meta>;

interface Filters {
  filterTitle: string;
  filterValue: string;
}

const selectedOptions = [] as Filters[];

const onSelectOption = (title: string, selectedValue: string) => {
  selectedOptions.push({
    filterTitle: title,
    filterValue: selectedValue,
  });
};

export const Base: Story = {
  args: {
    title: 'Severity',
    filterOptions: [
      {
        value: 'Low',
        label: 'Low',
      },
      {
        value: 'Medium',
        label: 'Medium',
      },
      {
        value: 'High',
        label: 'High',
      },
    ],
    selectedOptions: selectedOptions,
    inputType: 'checkbox',
    onSelect: onSelectOption,
  },
};
