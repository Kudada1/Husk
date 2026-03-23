import { Meta, StoryObj } from '@storybook/react-webpack5';
import Button from './Button';
import { ButtonProps } from './Button.types';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    label: 'Default Button',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: false,
  },
};
