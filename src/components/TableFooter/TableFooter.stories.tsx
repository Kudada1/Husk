import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import TableFooter from './TableFooter';
import { TableFooterProps } from './TableFooter.types';

const meta: Meta<TableFooterProps> = {
  title: 'Components/TableFooter',
  component: TableFooter,
};

export default meta;

type Story = StoryObj<TableFooterProps>;

export const Default: Story = {
  args: {
    children: (
      <tr>
        <td>Footer Cell 1</td>
        <td>Footer Cell 2</td>
      </tr>
    ),
  },
};
