import { Meta, StoryObj } from '@storybook/react-webpack5';
import Text from './Text';
import { TextProps } from './Text.types';

const meta: Meta<TextProps> = {
  title: 'Components/Text',
  component: Text,
};

export default meta;

type Story = StoryObj<TextProps>;

export const Default: Story = {
  args: {
    content: 'Default Text',
  },
};

export const Disabled: Story = {
  args: {
    content: 'Disabled Text',
  },
};
