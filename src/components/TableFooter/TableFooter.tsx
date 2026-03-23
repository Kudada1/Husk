import React from 'react';

export interface TableFooterProps {
  children: React.ReactNode;
  disabled?: boolean; // Add disabled prop
}

const TableFooter: React.FC<TableFooterProps> = ({ children, disabled = false }) => {
  return (
    <tfoot
      data-testid="table-footer-root"
      style={{
        opacity: disabled ? 0.6 : 1, // Reduce opacity when disabled
        pointerEvents: disabled ? 'none' : 'auto', // Disable interactions when disabled
        cursor: disabled ? 'not-allowed' : 'default', // Change cursor when disabled
      }}
    >
      {children}
    </tfoot>
  );
};

export default TableFooter;
