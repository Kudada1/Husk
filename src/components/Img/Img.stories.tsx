import { Meta, StoryObj } from '@storybook/react-webpack5';
import Img from './Img';
import { ImgProps } from './Img.types';

const meta: Meta<ImgProps> = {
  title: 'Components/Img',
  component: Img,
};

export default meta;

type Story = StoryObj<ImgProps>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'Placeholder Image',
    width: 150,
    height: 150,
    disabled: false,
  },
};
