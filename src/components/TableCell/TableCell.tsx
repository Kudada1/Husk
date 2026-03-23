import React from 'react';

export interface TableCellProps {
  children: React.ReactNode;
  disabled?: boolean; // Add disabled prop
}

const TableCell: React.FC<TableCellProps> = ({ children, disabled = false }) => {
  return (
    <td
      style={{
        opacity: disabled ? 0.6 : 1, // Reduce opacity when disabled
        pointerEvents: disabled ? 'none' : 'auto', // Disable interactions when disabled
        cursor: disabled ? 'not-allowed' : 'default', // Change cursor when disabled
      }}
    >
      {children}
    </td>
  );
};

export default TableCell;
