import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import TableHeader from './TableHeader';
import { TableHeaderProps } from './TableHeader.types';

const meta: Meta<TableHeaderProps> = {
  title: 'Components/TableHeader',
  component: TableHeader,
};

export default meta;

type Story = StoryObj<TableHeaderProps>;

export const Default: Story = {
  args: {
    children: (
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
    ),

    disabled: true,
  },
};
