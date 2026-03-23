import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import Table from './Table';
import { TableProps } from './Table.types';

const meta: Meta<TableProps> = {
  title: 'Components/Table',
  component: Table,
};

export default meta;

type Story = StoryObj<TableProps>;

export const Default: Story = {
  args: {
    children: (
      <tbody>
        <tr>
          <td>Row 1, Cell 1</td>
          <td>Row 1, Cell 2</td>
        </tr>
      </tbody>
    ),

    disabled: false,
  },
};
