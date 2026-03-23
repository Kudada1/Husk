import { Meta, StoryObj } from '@storybook/react-webpack5';
import HeroImage from './HeroImage';
import { HeroImageProps } from './HeroImage.types';

const meta: Meta<HeroImageProps> = {
  title: 'Components/HeroImage',
  component: HeroImage,
};

export default meta;

type Story = StoryObj<HeroImageProps>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/800x400',
    alt: 'Hero Image',
    title: 'Hero Title',
    description: 'This is a description for the hero image.',
    disabled: false,
  },
};
