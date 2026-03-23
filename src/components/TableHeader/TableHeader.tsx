import React from 'react';

export interface TableHeaderProps {
  children: React.ReactNode;
  disabled?: boolean; // Add disabled prop
}

const TableHeader: React.FC<TableHeaderProps> = ({ children, disabled = false }) => {
  return (
    <thead
      data-testid="table-header-root"
      style={{
        opacity: disabled ? 0.6 : 1, // Reduce opacity when disabled
        pointerEvents: disabled ? 'none' : 'auto', // Disable interactions when disabled
        cursor: disabled ? 'not-allowed' : 'default', // Change cursor when disabled
      }}
    >
      {children}
    </thead>
  );
};

export default TableHeader;
