import { Meta, StoryObj } from '@storybook/react-webpack5';
import TableCell from './TableCell';
import { TableCellProps } from './TableCell.types';

const meta: Meta<TableCellProps> = {
  title: 'Components/TableCell',
  component: TableCell,
};

export default meta;

type Story = StoryObj<TableCellProps>;

export const Default: Story = {
  args: {
    children: 'Cell Content',
  },
};
