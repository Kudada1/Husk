import { Meta, StoryObj } from '@storybook/react-webpack5';
import Dropdown from './Dropdown';
import { DropdownProps } from './Dropdown.types';

const meta: Meta<DropdownProps> = {
  title: 'Components/Dropdown',
  component: Dropdown,
};

export default meta;

type Story = StoryObj<DropdownProps>;

export const Default: Story = {
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
    disabled: true,
  },
};
