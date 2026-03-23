import React from 'react';

export interface TableRowProps {
  children: React.ReactNode;
  disabled?: boolean; // Add disabled prop
}

const TableRow: React.FC<TableRowProps> = ({ children, disabled = false }) => {
  return (
    <tr
      data-testid="table-row-root"
      style={{
        opacity: disabled ? 0.6 : 1, // Reduce opacity when disabled
        pointerEvents: disabled ? 'none' : 'auto', // Disable interactions when disabled
        cursor: disabled ? 'not-allowed' : 'default', // Change cursor when disabled
      }}
    >
      {children}
    </tr>
  );
};

export default TableRow;
