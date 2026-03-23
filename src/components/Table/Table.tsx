import React from 'react';

export interface TableProps {
  children: React.ReactNode;
  disabled?: boolean; // Add disabled prop
}

const Table: React.FC<TableProps> = ({ children, disabled = false }) => {
  return (
    <div
      data-testid="table-root"
      style={{
        opacity: disabled ? 0.6 : 1, // Reduce opacity when disabled
        pointerEvents: disabled ? 'none' : 'auto', // Disable interactions when disabled
        cursor: disabled ? 'not-allowed' : 'default', // Change cursor when disabled
      }}
    >
      <table>{children}</table>
    </div>
  );
};

export default Table;
