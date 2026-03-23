import { Meta, StoryObj } from '@storybook/react-webpack5';
import RadioButton from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';

const meta: Meta<RadioButtonProps> = {
  title: 'Components/RadioButton',
  component: RadioButton,
};

export default meta;

type Story = StoryObj<RadioButtonProps>;

export const Default: Story = {
  args: {
    name: 'example',
    value: 'option1',
    checked: false,
    onChange: () => {},
    disabled: false,
  },
};
