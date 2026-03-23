import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : 'white')};
  color: ${({ disabled }) => (disabled ? '#999' : 'black')};
  transition: background-color 0.3s;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ options, onChange, disabled = false }) => {
  return (
    <StyledSelect onChange={onChange} disabled={disabled}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
