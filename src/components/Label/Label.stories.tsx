import { Meta, StoryObj } from '@storybook/react-webpack5';
import Label from './Label';
import { LabelProps } from './Label.types';

const meta: Meta<LabelProps> = {
  title: 'Components/Label',
  component: Label,
};

export default meta;

type Story = StoryObj<LabelProps>;

export const Default: Story = {
  args: {
    text: 'Default Label',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Label',
  },
};
