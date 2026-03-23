import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import TableRow from './TableRow';
import { TableRowProps } from './TableRow.types';

const meta: Meta<TableRowProps> = {
  title: 'Components/TableRow',
  component: TableRow,
};

export default meta;

type Story = StoryObj<TableRowProps>;

export const Default: Story = {
  args: {
    children: (
      <>
        <td>Row Cell 1</td>
        <td>Row Cell 2</td>
      </>
    ),
  },
};
