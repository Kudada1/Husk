import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ disabled?: boolean }>`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#007BFF')};
  color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#0056b3')};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

export default Button;
