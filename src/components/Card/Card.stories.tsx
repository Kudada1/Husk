import { Meta, StoryObj } from '@storybook/react-webpack5';
import Card from './Card';
import { CardProps } from './Card.types';

const meta: Meta<CardProps> = {
  title: 'Components/Card',
  component: Card,
};

export default meta;

type Story = StoryObj<CardProps>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    content: 'This is the content of the card.',
    footer: 'Card Footer',
    disabled: false,
  },
};
